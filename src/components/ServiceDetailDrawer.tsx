import React from 'react';
import { PublicService } from '../types';
import { X, CheckCircle, Clock, ShieldCheck, ArrowRight, Building, FileCheck2 } from 'lucide-react';

interface ServiceDetailDrawerProps {
  service: PublicService | null;
  onClose: () => void;
  onApply: (service: PublicService) => void;
}

export const ServiceDetailDrawer: React.FC<ServiceDetailDrawerProps> = ({
  service,
  onClose,
  onApply,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 transition-colors"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-service-title"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-rose-800 dark:text-rose-400 font-semibold tracking-wide uppercase">
            <span>Standar Layanan Publik IDDS</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="font-mono text-slate-500 dark:text-slate-400">{service.code}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Tutup jendela rincian layanan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div>
            <h2 id="modal-service-title" className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              {service.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mt-2">
              <Building className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
              <span>{service.department}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-350 mt-3 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Specs Card (Clean unboxed grid) */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Waktu Penyelesaian (SLA):</span>
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400" />
                {service.sla}
              </span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Tarif Resmi Retribusi:</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {service.cost}
              </span>
            </div>
          </div>

          {/* Requirements List */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <FileCheck2 className="w-4 h-4 text-rose-700 dark:text-rose-400" />
              <span>Persyaratan Berkas Dokumen</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {service.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50/80 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-750">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedure Steps */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
              Alur &amp; Tahapan Pemrosesan
            </h3>
            <ol className="relative border-l border-slate-200 dark:border-slate-700 ml-3 space-y-4 text-xs">
              {service.steps.map((st, idx) => (
                <li key={idx} className="ml-5 relative">
                  <div className="absolute -left-7 top-0 w-4 h-4 rounded-full bg-rose-700 text-white flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{st}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(service);
            }}
            className="px-5 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>Mulai Ajukan Permohonan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
