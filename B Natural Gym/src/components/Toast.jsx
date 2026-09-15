import { useState, useEffect } from 'react';

let _setFn = null;

export function showToast(msg) {
  if (_setFn) _setFn({ msg, show: true });
}

export function useToast() {
  const [toast, setToast] = useState(null);
  _setFn = setToast;

  useEffect(() => {
    if (toast?.show) {
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  return toast;
}

export default function Toast({ toast }) {
  return (
    <div className={`toast${toast?.show ? ' is-shown' : ''}`} role="status" aria-live="polite">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <div>
        <b>Success</b>
        <span>{toast?.msg || ''}</span>
      </div>
    </div>
  );
}
