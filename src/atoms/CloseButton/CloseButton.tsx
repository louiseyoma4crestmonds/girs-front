import Image from "next/image";
import styles from "./Closebutton.module.css";
import { CloseButtonProps } from "./CloseButton.types";

function CloseButton(props: CloseButtonProps): JSX.Element {
  const { onclick } = props;

  const handleOnClick = () => {
    onclick();
  };

  return (
    <div
      id="closeButton"
      aria-hidden="true"
      className={styles.buttonObject}
      onClick={() => {
        handleOnClick();
      }}
      onKeyDown={handleOnClick}
    >
      <Image
        src="/icons/closeButton.svg"
        width={18}
        height={18}
        onClick={() => {
          handleOnClick();
        }}
      />
    </div>
  );
}
export default CloseButton;
