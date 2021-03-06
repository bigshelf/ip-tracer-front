import { ToastOption } from "../types/ToastOption";

const toastOptions: ToastOption[] = [];
const runners: ((...args: any[]) => any)[] = [];

export const useUnsafeWaitingToasts = () => {
  const notify = () => {
    runners.map((runner) => runner());
  };

  const subscribe = (callback: (...args: any[]) => void) => {
    runners.push(callback);
  };

  const clear = () => {
    runners.splice(0, runners.length);
  };

  const insert = (toastOption: ToastOption) => {
    toastOptions.push(toastOption);
    notify();
  };

  const removeAllToast = () => {
    toastOptions.splice(0, toastOptions.length);
  };

  return {
    insert,
    subscribe,
    toastOptions,
    removeAllToast,
    clear,
  };
};
