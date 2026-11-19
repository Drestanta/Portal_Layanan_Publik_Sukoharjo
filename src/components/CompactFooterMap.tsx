import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, ExternalLink, RotateCcw, Building2, HeartPulse, Landmark, Sparkles } from 'lucide-react';
import { SUKOHARJO_LOCATIONS_DATA } from '../data/mockData';
import { ServiceLocation } from '../types';

const SUKOHARJO_CENTER: [number, number] = [-7.6780, 110.8410];
const DEFAULT_ZOOM = 11;

export const CompactFooterMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerMapRef = useRef<Map<string, L.Marker>>(new Map());
  const [selectedOffice, setSelectedOffice] = useState<ServiceLocation>(SUKOHARJO_LOCATIONS_DATA[0]);

  // Create compact mini pins
  const createMiniIcon = (loc: ServiceLocation, isSelected: boolean) => {
    let pinBg = '#0284c7'; // Blue
    if (loc.category === 'kesehatan') pinBg = '#10b981'; // Green
    if (loc.category === 'ekonomi_khusus') pinBg = '#f59e0b'; // Amber
    if (loc.category === 'kecamatan') pinBg = '#64748b'; // Slate

    const size = isSelected ? 26 : 20;

    return L.divIcon({
      className: 'compact-footer-marker',
      html: `
        <div style="
          width: ${size}px; 
          height: ${size}px; 
          background-color: ${pinBg}; 
          border-radius: 50% 50% 50% 2px; 
          transform: rotate(-45deg) translate(-50%, -50%); 
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          transition: all 0.2s;
        ">
        </div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: SUKOHARJO_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: true,
      scrollWheelZoom: false, // Don't hijack page scroll in footer
      dragging: true,
      attributionControl: false,
    });

    // Clean OpenStreetMap tiles (free, reliable, no API watermark)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    // Add scale indicator
    L.control.scale({ imperial: false, position: 'bottomright' }).addTo(map);

    const layer = L.layerGroup().addTo(map);

    SUKOHARJO_LOCATIONS_DATA.forEach((loc) => {
      const isSelected = loc.id === selectedOffice.id;
      const marker = L.marker(loc.coordinates, {
        icon: createMiniIcon(loc, isSelected),
        title: loc.name,
      });

      const popupHtml = `
        <div style="font-family: inherit; font-size: 11px; max-width: 200px; line-height: 1.35; color: #0f172a;">
          <strong style="display: block; font-size: 12px; margin-bottom: 3px; color: #0f172a;">${loc.name}</strong>
          <span style="color: #64748b; font-size: 10px; display: block; margin-bottom: 6px;">Kec. ${loc.district}</span>
          <p style="margin: 0 0 6px 0; color: #475569; font-size: 10.5px;">${loc.address}</p>
          <a href="${loc.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; color: #be123c; font-weight: 700; text-decoration: none; font-size: 10.5px;">
            Buka Petunjuk Arah &rarr;
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml);
      marker.on('click', () => {
        setSelectedOffice(loc);
      });

      marker.addTo(layer);
      markerMapRef.current.set(loc.id, marker);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handleFocusLocation = (loc: ServiceLocation) => {
    setSelectedOffice(loc);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo(loc.coordinates, 14, { duration: 0.8 });
      const marker = markerMapRef.current.get(loc.id);
      if (marker) {
        marker.openPopup();
      }
    }
  };

  const handleResetMap = () => {
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo(SUKOHARJO_CENTER, DEFAULT_ZOOM, { duration: 0.8 });
    }
  };

  return (
    <div className="bg-slate-950/60 rounded-xl border border-slate-800 p-4 text-xs h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-rose-500" />
          <span className="font-semibold text-white text-[12px]">Peta Lokasi Kantor Sukoharjo</span>
        </div>
        <button
          onClick={handleResetMap}
          className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          title="Reset tampilan peta"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Mini Leaflet Canvas Container */}
      <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-inner">
        <div ref={mapContainerRef} className="w-full h-[180px] z-10" />
      </div>

      {/* Quick Location Shortcuts */}
      <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10.5px]">
        <button
          onClick={() => handleFocusLocation(SUKOHARJO_LOCATIONS_DATA[0])}
          className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
            selectedOffice.id === 'loc-mpp'
              ? 'bg-rose-900 text-rose-200 font-semibold'
              : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <Building2 className="w-2.5 h-2.5" />
          <span>MPP Terpadu</span>
        </button>

        <button
          onClick={() => handleFocusLocation(SUKOHARJO_LOCATIONS_DATA[1])}
          className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
            selectedOffice.id === 'loc-rsud-soekarno'
              ? 'bg-emerald-900 text-emerald-200 font-semibold'
              : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <HeartPulse className="w-2.5 h-2.5" />
          <span>RSUD Soekarno</span>
        </button>

        <button
          onClick={() => handleFocusLocation(SUKOHARJO_LOCATIONS_DATA[2])}
          className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
            selectedOffice.id === 'loc-menara-wijaya'
              ? 'bg-sky-900 text-sky-200 font-semibold'
              : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <Landmark className="w-2.5 h-2.5" />
          <span>Menara Wijaya</span>
        </button>

        <button
          onClick={() => handleFocusLocation(SUKOHARJO_LOCATIONS_DATA[3])}
          className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
            selectedOffice.id === 'loc-sentra-jamu'
              ? 'bg-amber-900 text-amber-200 font-semibold'
              : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <Sparkles className="w-2.5 h-2.5" />
          <span>Sentra Jamu</span>
        </button>
      </div>

      {/* Selected Office Summary & Direct Route Link */}
      <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <span className="truncate max-w-[200px] text-slate-300 font-medium">
          {selectedOffice.name}
        </span>
        <a
          href={selectedOffice.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 hover:text-rose-300 font-semibold shrink-0 flex items-center gap-1 transition-colors"
        >
          <Navigation className="w-2.5 h-2.5" />
          <span>Petunjuk Arah</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
};
