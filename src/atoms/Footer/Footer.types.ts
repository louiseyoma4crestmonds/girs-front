export type FooterVariant = "primary" | "secondary";

export type FooterWidth = "normal" | "full";

export type FooterProps = {
  variant?: FooterVariant;
  width?: FooterWidth;
  onclick: () => void;
  children: React.ReactNode;
};
