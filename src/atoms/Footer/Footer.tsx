import classNames from "classnames";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.types";

function Footer(props: FooterProps): JSX.Element {
  const { variant = "primary", onclick, children } = props;

  const handleOnClick = () => {
    onclick();
  };

  const footerClass = classNames({
    [styles.FooterArea]: true,
    [styles.FooterPrimary]: variant === "primary",
    [styles.FooterSecondary]: variant === "secondary",
  });

  return (
    <div className={footerClass}>
      <div
        className={styles.FooterTextStyle}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        onClick={() => {
          handleOnClick();
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Footer;
