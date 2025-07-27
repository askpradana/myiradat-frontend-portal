// lib/modalController.ts

let showErrorCallback: ((msg: string) => void) | null = null;
let closeModalCallback: (() => void) | null = null;

export const modalController = {
  register(showError: (msg: string) => void, closeModal: () => void) {
    showErrorCallback = showError;
    closeModalCallback = closeModal;
  },
  showError(message: string) {
    showErrorCallback?.(message);
  },
  closeModal() {
    closeModalCallback?.();
  },
};
