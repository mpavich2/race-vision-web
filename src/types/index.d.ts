/* eslint-disable @typescript-eslint/no-explicit-any */
export { }

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}