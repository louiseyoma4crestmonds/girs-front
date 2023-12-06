import DarkCloseButton from "@/atoms/DarkCloseButton";
import { GenericModalProps } from "./GenericModal.types";
import styles from "./GenericModal.module.css";
import Backdrop from "../Backdrop";

function GenericModal(props: GenericModalProps): JSX.Element {
  const { setShowConfirmBox } = props;
  return (
    <Backdrop>
      <div className={styles.frame}>
        <div className="w-full flex flex-row-reverse pt-4">
          <DarkCloseButton
            onclick={() => {
              setShowConfirmBox(false);
            }}
          />
        </div>
        <div className="px-1 tablet:px-14 laptop:px-14 desktop:px-14 plasma:px-14">
          {props.children}
        </div>
      </div>
    </Backdrop>
  );
}

export default GenericModal;
