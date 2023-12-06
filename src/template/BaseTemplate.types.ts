export type BaseTemplateVariant =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "black"
  | "none"
  | "pink";

export type BaseTemplateWidth = "normal" | "full";

export type BaseTemplateProps = {
  variant?: BaseTemplateVariant;
  width?: BaseTemplateWidth;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};
