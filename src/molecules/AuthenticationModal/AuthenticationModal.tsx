import React from "react";
import Image from "next/image";
import Button from "../../atoms/Button";
import Backdrop from "../Backdrop";
import { AuthenticationModalProps } from "./AuthenticationModal.types";
import styles from "./AuthenticationModal.module.css";

function AuthenticationModal(props: AuthenticationModalProps): JSX.Element {
  const { topHeading, children, closeModal, buttonAction } = props;

  const handleOnClick = () => {
    if (buttonAction) {
      buttonAction();
    }
  };

  let imageURL2 = "";
  const buttonValue = "Continue";

  if (
    topHeading === "Incorrect Email!" ||
    topHeading === "Wrong Login credentials" ||
    topHeading === "Empty Email"
  ) {
    imageURL2 = "/icons/EmailSymbolFrame.svg";
  } else if (
    topHeading === "Incorrect password!" ||
    topHeading === "Empty Password" ||
    topHeading === "New Password Empty" ||
    topHeading === "Confirm Password Empty"
  ) {
    imageURL2 = "/icons/incorrectPasswordImage.svg";
  } else if (topHeading === "Warning") {
    imageURL2 = "/icons/warningImage.svg";
  } else if (
    topHeading === "Account locked" ||
    topHeading === "Password Mismatch"
  ) {
    imageURL2 = "/icons/accountLockedImage.svg";
  } else if (topHeading === "Check your mailBox") {
    imageURL2 = "/icons/passwordChangedImage.svg";
  } else if (topHeading === "Sorry, email does not exist") {
    imageURL2 = "/icons/EmailNotExistImage.svg";
  } else if (topHeading === "Password changed") {
    imageURL2 = "/icons/passwordChangedImage.svg";
  } else if (topHeading === "Ready to Submit?") {
    imageURL2 = "/icons/QuestionIcon.svg";
  } else {
    imageURL2 = "/icons/warningImage.svg";
  }

  return (
    <Backdrop closeModal={closeModal}>
      <div className={styles.frame}>
        <div className={styles.closeButtonArea}>
          <Image
            src="/icons/xSign2.png"
            alt="close button"
            className={styles.buttonFrame}
            width={16}
            height={16}
            onClick={() => {
              closeModal();
            }}
          />
        </div>

        <div className={styles.modelImageFrame}>
          <Image
            src={imageURL2}
            alt="close button"
            className={styles.buttonFrame}
            width={84}
            height={84}
            onClick={() => {
              closeModal();
            }}
          />
        </div>
        <div className={styles.heading}>{topHeading}</div>
        <div className={styles.message}>{children}</div>
        {topHeading === "Password changed" ||
        topHeading === "Check your mailBox" ? (
          <div className={styles.buttonArea}>
            <Button
              variant="primary"
              color="deepOrange"
              onClick={() => {
                handleOnClick();
              }}
            >
              <span className="w-full text-center">{buttonValue}</span>
            </Button>
          </div>
        ) : null}
      </div>
    </Backdrop>
  );
}
export default AuthenticationModal;
