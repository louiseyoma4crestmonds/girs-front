import classNames from "classnames";
import { BaseTemplateProps } from "./BaseTemplate.types";

import styles from "./BaseTemplate.module.css";

function BaseTemplate(props: BaseTemplateProps) {
  const {
    variant = "primary",
    width = "normal",
    disabled = false,
    onClick,
    children,
  } = props;

  const btnClassName = classNames({
    [styles.btn]: true,
    [styles.btnFull]: width === "full",
    [styles.btnPrimary]: variant === "primary",
    [styles.btnSecondary]: variant === "secondary",
    [styles.btnMuted]: variant === "muted",
    [styles.btnAccent]: variant === "accent",
    [styles.btnBlack]: variant === "black",
  });

  const handleOnClick = () => onClick;

  return (
    <button
      type="button"
      className={btnClassName}
      onClick={handleOnClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BaseTemplate;
