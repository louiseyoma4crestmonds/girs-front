export type ButtonVariant =
  | "primary"
  | "primary2"
  | "primary3"
  | "primary4"
  | "cancel"
  | "notesModal"
  | "primaryNotes"
  | "secondaryNotes"
  | "secondaryNotes2"
  | "landingPage"
  | "checkoutBack"
  | "secondary"
  | "muted"
  | "accent"
  | "forest"
  | "black"
  | "none"
  | "pink"
  | "orange"
  | "freeTrial"
  | "freeTrialRLG"
  | "purple";

export type ButtonWidth = "normal" | "full" | "large" | "medium" | "auto";
export type ButtonType = "submit" | "button";
export type ButtonColor =
  | "deepOrange"
  | "deepOrangeSecondary"
  | "deepOrangeDisabled"
  | "deepOrangeSecondaryDisabled"
  | "purple"
  | "purpleSecondary"
  | "purpleDisabled";

export type ButtonProps = {
  variant?: ButtonVariant;
  id?: string;
  width?: ButtonWidth;
  color?: ButtonColor;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};
