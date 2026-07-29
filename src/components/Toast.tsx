import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, AlertCircle, Info, XCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => {
          const getIcon = () => {
            switch (toast.type) {
              case 'success':
                return <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />;
              case 'error':
                return <XCircle className="w-5 h-5 text-rose-500 shrink-0" />;
              case 'warning':
                return <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />;
              default:
                return <Info className="w-5 h-5 text-sky-500 shrink-0" />;
            }
          };

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl glass-panel shadow-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)]"
            >
              {toast.image ? (
                <img src={toast.image} alt="toast thumb" className="w-12 h-12 rounded-lg object-cover border border-[var(--border-color)]" />
              ) : (
                <div className="p-1">{getIcon()}</div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm leading-tight text-[var(--text-primary)]">{toast.title}</h4>
                {toast.description && (
                  <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">{toast.description}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                aria-label="Close Toast"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
