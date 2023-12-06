import styles from "./PopBackdrop.module.css";

type BackdropProp = {
  children: React.ReactNode;
};

function PopBackdrop(props: BackdropProp): JSX.Element {
  const { children } = props;

  return <div className={styles.backdrop}>{children}</div>;
}

export default PopBackdrop;
