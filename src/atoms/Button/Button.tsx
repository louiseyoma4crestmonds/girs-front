import classNames from "classnames";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

function Button(props: ButtonProps): JSX.Element {
  const {
    variant = "primary",
    color,
    width = "normal",
    disabled = false,
    type = "button",
    id = "general",
    onClick,
    children,
  } = props;

  const btnClassName = classNames({
    [styles.btn]: true,
    [styles.btnFull]: width === "full",
    [styles.btnPrimary2]: variant === "primary2",
    [styles.btnPrimary3]: variant === "primary3",
    [styles.btnPrimary4]: variant === "primary4",
    [styles.btnCancel]: variant === "cancel",
    [styles.btnNotesModal]: variant === "notesModal",
    [styles.btnPrimaryNotes]: variant === "primaryNotes",
    [styles.btnSecondaryNotes]: variant === "secondaryNotes",
    [styles.btnSecondaryNotes2]: variant === "secondaryNotes2",
    [styles.btnLandingPage]: variant === "landingPage",
    [styles.btnSecondary]: variant === "secondary",
    [styles.btnMuted]: variant === "muted",
    [styles.btnAccent]: variant === "accent",
    [styles.btnBlack]: variant === "black",
    [styles.btnForest]: variant === "forest",
    [styles.btnOrange]: variant === "orange",
    [styles.btnPurple]: variant === "purple",
    [styles.btnCheckoutBack]: variant === "checkoutBack",
    [styles.btnFreeTrial]: variant === "freeTrial",
    [styles.btnFreeTrialRLG]: variant === "freeTrialRLG",
    [styles.btnPrimary]: variant === "primary", // begining of new things
    [styles.btnColorDeepOrange]: color === "deepOrange",
    [styles.btnColorDeepOrangeDisabled]: color === "deepOrangeDisabled",
    [styles.btnColorDeepOrangeSecondary]: color === "deepOrangeSecondary",
    [styles.btnColorDeepOrangeSecondaryDisabled]:
      color === "deepOrangeSecondaryDisabled",
    [styles.btnColorPurple]: color === "purple",
    [styles.btnColorPurpleDisabled]: color === "purpleDisabled",
    [styles.btnColorPurpleSecondary]: color === "purpleSecondary", // End of colors
    [styles.btnLarge]: width === "large",
    [styles.btnMedium]: width === "medium",
    [styles.btnAuto]: width === "auto",
  });

  const handleOnClick = () => onClick;

  return (
    <button
      id={id}
      type={type}
      className={btnClassName}
      onClick={handleOnClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
