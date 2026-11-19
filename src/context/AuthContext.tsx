import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { UserProfile } from '../types';

export interface RegisterPayload {
  fullName: string;
  nik: string;
  email: string;
  password: string;
  phone: string;
  district: string;
  village?: string;
  address?: string;
}

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  register: (payload: RegisterPayload) => Promise<void>;
  login: (emailOrNik: string, password: string) => Promise<void>;
  loginWithSimulatedIKD: (name: string, nik: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_PROFILE_KEY = 'sukoharjo_user_profile';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  // Sync profile to localStorage for instant UI responsiveness and session recovery
  useEffect(() => {
    if (userProfile) {
      localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, JSON.stringify(userProfile));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_PROFILE_KEY);
    }
  }, [userProfile]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setCurrentUser(firebaseUser);
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const data = docSnap.data() as UserProfile;
            setUserProfile(data);
          } else {
            // If profile document hasn't been fetched yet, maintain or synthesize baseline
            setUserProfile((prev) => prev || {
              id: firebaseUser.uid,
              email: firebaseUser.email || '',
              fullName: firebaseUser.displayName || 'Warga Sukoharjo',
              nik: '3311' + Math.floor(100000000000 + Math.random() * 900000000000),
              phone: '081234567890',
              district: 'Kec. Sukoharjo',
              role: 'citizen',
              createdAt: new Date().toISOString(),
            });
          }
        } catch (err) {
          console.warn('Could not fetch Firestore profile, utilizing stored state:', err);
        }
      } else {
        // Clear if not in simulated offline session
        const stored = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (parsed.id?.startsWith('sim-')) {
              setUserProfile(parsed);
              setLoading(false);
              return;
            }
          } catch {
            // Ignore parse errors
          }
        }
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (payload: RegisterPayload) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      const user = userCredential.user;

      const newProfile: UserProfile = {
        id: user.uid,
        email: payload.email.trim().toLowerCase(),
        fullName: payload.fullName.trim(),
        nik: payload.nik.trim(),
        phone: payload.phone.trim(),
        district: payload.district,
        village: payload.village || '',
        address: payload.address || '',
        role: 'citizen',
        createdAt: new Date().toISOString(),
      };

      try {
        await setDoc(doc(db, 'users', user.uid), {
          ...newProfile,
          serverCreated: serverTimestamp(),
        });
      } catch (dbErr) {
        console.warn('Firestore setDoc failed, saving locally:', dbErr);
      }

      setUserProfile(newProfile);
    } catch (err: any) {
      console.error('Registration failed:', err);
      throw err;
    }
  };

  const login = async (emailOrNik: string, password: string) => {
    const input = emailOrNik.trim();
    let targetEmail = input;

    // Check if input is a 16-digit NIK
    if (/^\d{16}$/.test(input)) {
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('nik', '==', input));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const matchedUser = querySnapshot.docs[0].data() as UserProfile;
          targetEmail = matchedUser.email;
        } else {
          // Check local simulated account with this NIK
          const stored = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
          if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.nik === input) {
              targetEmail = parsed.email;
            }
          }
        }
      } catch (err) {
        console.warn('Could not query users by NIK, attempting as email:', err);
      }
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, targetEmail, password);
      const user = userCredential.user;

      try {
        const userDocRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data() as UserProfile);
        }
      } catch (dbErr) {
        console.warn('Firestore getDoc failed after login:', dbErr);
      }
    } catch (err: any) {
      console.error('Login failed:', err);
      throw err;
    }
  };

  const loginWithSimulatedIKD = async (name: string, nik: string) => {
    const simulatedProfile: UserProfile = {
      id: 'sim-' + Date.now(),
      email: `${nik}@warga.sukoharjokab.go.id`,
      fullName: name,
      nik: nik,
      phone: '081234567890',
      district: 'Kec. Grogol',
      village: 'Solo Baru',
      address: 'Jl. Ir. Soekarno No. 45',
      role: 'citizen',
      createdAt: new Date().toISOString(),
    };

    setUserProfile(simulatedProfile);
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.warn('Firebase signOut error:', err);
    }
    setUserProfile(null);
    setCurrentUser(null);
    localStorage.removeItem(LOCAL_STORAGE_PROFILE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        register,
        login,
        loginWithSimulatedIKD,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
