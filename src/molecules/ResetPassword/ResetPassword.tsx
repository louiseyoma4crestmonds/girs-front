import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Button from "@/atoms/Button";
import Heading from "@/atoms/Heading";
import AuthenticationModal from "../AuthenticationModal";
import styles from "./ResetPassword.module.css";
import { appURL } from "../../services/connection";

function ResetPassword(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState("");
  const [popupHeading, setPopupHeading] = useState("");
  const router = useRouter();

  const closeModal = () => {
    setLoginError(false);
  };

  const goToSignIn = () => {
    router.push({ pathname: "/sign-in" });
  };

  const sendEmail = () => {
    setShowLoading(true);
    if (email === "") {
      setShowLoading(false);
      setPopupHeading("Empty Email");
      setLoginError(true);
    } else {
      axios
        .post(`${appURL}/password_reset`, {
          email,
        })
        .then(async (res) => {
          if (res.status === 200) {
            setShowLoading(false);
            setPopupHeading("Check your mailBox");
            setLoginError(true);
          }
        })
        .catch((err) => {
          setShowLoading(false);
          setErrorMessage(err);
        });
    }
  };

  const getAuthenticationModalMessage = (title: string) => {
    if (title === "Check your mailBox") {
      return (
        <div>
          A password reset email has been sent to{" "}
          <span className={styles.setContactColor}>{email}</span>
        </div>
      );
    }
    if (title === "Empty Email") {
      return <div>Please enter your Email</div>;
    }
    return <div>Other issues</div>;
  };

  return (
    <div className={styles.mainFrame}>
      {loginError && (
        <AuthenticationModal
          topHeading={popupHeading}
          closeModal={closeModal}
          buttonAction={goToSignIn}
        >
          {getAuthenticationModalMessage(popupHeading)}
        </AuthenticationModal>
      )}
      <div className={styles.leftPane}>
        <div className={styles.leftPaneInner}>
          <div className={styles.logoArea}>
            <div className="text-xl font-bold">Cross River State</div>
            <div className="text-primaryTwo500">
              Geographic Information Retrieval System
            </div>
          </div>

          <Heading Tag="h1" variant="xxl" className="mt-10">
            Reset password
          </Heading>
          <div className={styles.subHeading2}>
            Enter your email address to recieve password reset email
          </div>

          <div className={styles.subHeading3}>Email address</div>
          <div>
            <input
              type="email"
              className={styles.inputStyle}
              placeholder="sam@example.co.uk"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.errorArea}>
            {showLoading === true ? (
              <div className="flex justify-center items-center">
                <div>
                  <Image
                    src="/icons/spinner.gif"
                    width={35}
                    height={35}
                    alt=""
                  />
                </div>
              </div>
            ) : null}
            {errorMessage.length > 0 ? (
              <p className="w-75 py-2 alert-danger rounded text-center text-danger mt-3">
                {errorMessage}
              </p>
            ) : null}
          </div>
          <div>
            <Button
              id="passwordResetButton"
              variant="primary"
              color="purple"
              type="button"
              onClick={() => {
                sendEmail();
              }}
            >
              <span className="w-full text-center">Continue</span>
            </Button>
          </div>
          <div className={styles.backButtonArea}>
            <div className={styles.backButtonAreaInner}>
              <Link href="/sign-in">
                <a>
                  <Image
                    src="/icons/backArrow.svg"
                    alt="back button"
                    width={12}
                    height={12}
                  />
                </a>
              </Link>
              <Link href="/sign-in">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword;
