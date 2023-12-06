export type PanelVariant = "deepBlue" | "accent" | "notRounded";

export type PanelProps = {
  hasShadow?: boolean;
  variant?: PanelVariant;
  children?: React.ReactNode;
};
