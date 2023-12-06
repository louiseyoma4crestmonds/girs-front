import PopBackdrop from "@/atoms/PopBackdrop";
import Button from "../../atoms/Buttons";
import styles from "./ConfirmProcessPopup.module.css";
import { ConfrimProcessProps } from "./ConfirmProcessPopup.types";

function ConfirmProcessPopup(props: ConfrimProcessProps): JSX.Element {
  const { children, backClick, confirmClick } = props;

  return (
    <PopBackdrop>
      <div className={styles.frame}>
        <div className={styles.heading}>Are you sure you want to continue?</div>
        <div className={styles.message}>{children}</div>
        <div className={styles.buttonArea}>
          <Button variant="secondary" width="normal" onClick={backClick}>
            <p className="px-4">Back</p>
          </Button>
          <Button variant="primary" width="normal" onClick={confirmClick}>
            <p className="w-full" id="confirmProcessButton">
              Continue
            </p>
          </Button>
        </div>
      </div>
    </PopBackdrop>
  );
}
export default ConfirmProcessPopup;
