export type NotificationModalVariant = "primary" | "secondary";

export type NotificationModalWidth = "normal" | "full";

export type ModalVisibility = "true" | "false";
export type ModalPositivity = "true" | "false";

export type NotificationModalProps = {
  variant?: NotificationModalVariant;
  width?: NotificationModalWidth;
  children?: React.ReactNode;
  showModal?: ModalVisibility;
  positive?: ModalPositivity;
  feedbackImage?: string;
  feedback?: string;
  subscription?: string;
  feedbackDetails?: string;
  buttonLabel?: string;
  buttonAction?: () => void;
};
