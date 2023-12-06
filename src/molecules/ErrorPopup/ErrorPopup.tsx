import Image from "next/image";

import PopBackdrop from "@/atoms/PopBackdrop";
import Button from "../../atoms/Button";
import CloseButton from "../../atoms/CloseButton";
import { ErrorProps } from "./ErrorPopup.types";
import styles from "./ErrorPopup.module.css";

function ErrorPopup(props: ErrorProps): JSX.Element {
  const { closePopup, children } = props;

  return (
    <PopBackdrop>
      <div className={styles.frame}>
        <div className={styles.closeButton}>
          <CloseButton onclick={closePopup} />
        </div>
        <div className={styles.centerImage}>
          <Image src="/images/errorSign.svg" width={70} height={70} />
        </div>
        <div className={styles.heading}>Oops</div>
        <div className={styles.message}>{children}</div>
        <div className={styles.buttonArea}>
          <Button
            variant="primary"
            width="full"
            color="deepOrange"
            onClick={closePopup}
          >
            Try again
          </Button>
        </div>
      </div>
    </PopBackdrop>
  );
}
export default ErrorPopup;
