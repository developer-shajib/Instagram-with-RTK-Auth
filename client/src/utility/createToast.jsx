import { toast } from 'react-toastify';

// Create Toast
export const createToast = (msg = '', type = 'error') => {
  toast(msg, {
    type,
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
