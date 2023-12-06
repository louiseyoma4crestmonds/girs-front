export type AuthenticationModalProps = {
  topHeading: string;
  children: React.ReactNode;
  closeModal: () => void;
  buttonAction?: () => void;
};
