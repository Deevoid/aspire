export type ModalProps = {
  isOpen: boolean;
  closeHandler: () => void;
  children: React.ReactNode;
  title?: string;
};
