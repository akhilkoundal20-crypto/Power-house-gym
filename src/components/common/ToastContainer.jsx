import React from 'react';
import { useCraft } from '../../context/CraftContext';
import { CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useCraft();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 p-3.5 bg-[#FAF7F2] border-2 border-[#D49B35] text-[#23201D] rounded-lg shadow-craft-lg transform transition-all duration-300 animate-slide-up"
          style={{
            boxShadow: '0 10px 25px -5px rgba(44, 74, 62, 0.18)'
          }}
        >
          <div className="flex items-center gap-2.5">
            {toast.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-[#852233] shrink-0" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-[#EAF1ED] flex items-center justify-center text-[#2C4A3E] shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#2C4A3E]" />
              </div>
            )}
            <p className="text-xs sm:text-sm font-medium leading-snug">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#766D64] hover:text-[#23201D] p-1 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
