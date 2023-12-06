import React, { useEffect, useState } from "react";
import { signOut, signIn, useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Button from "@/atoms/Button";
import Heading from "../../atoms/Heading";
import AuthenticationModal from "../AuthenticationModal";
import styles from "./ChangePassword.module.css";
import { appURL } from "../../services/connection";

type ResetType = {
  userToken: string;
  setInProgress: (arg: boolean) => void;
};

function ChangePassword(props: ResetType): JSX.Element {
  const { status, data: session } = useSession();
  const { userToken, setInProgress } = props;
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [onProcess, setOnProcess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [popupHeading, setPopupHeading] = useState("");
  const [processingPasswordChange, setProcessingPassword] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated" && onProcess === false) {
      Router.replace("/sign-in");
    }
    if (status === "authenticated") {
      setUserEmail(session.user?.user.token.token.email);
      setProcessingPassword(false);
    }
  }, [status]);

  const closeModal = () => {
    setLoginError(false);
  };

  const buttonAction = async () => {
    setInProgress(true);
    setProcessingPassword(true);
    setShowLoading(true);
    setErrorMessage("");
    setLoginError(false);
    setOnProcess(true);
    signOut({ redirect: false }).then(async () => {
      setProcessingPassword(true);
      setOnProcess(true);
      await signIn("credentials", {
        email: userEmail,
        password: password1,
        redirect: false,
      })
        .then((res) => {
          if (res?.status === 200) {
            setProcessingPassword(true);
            setOnProcess(true);
            setShowLoading(false);
            setErrorMessage("");
            setLoginError(false);
            router.push(
              {
                pathname: "/dashboard",
                query: {},
              },
              "/dashboard"
            );
          } else if (res?.status === 401) {
            // setProcessingPassword(false);
            setOnProcess(false);
            setPopupHeading("Wrong Login credentials");
            setLoginError(true);
          } else {
            setPopupHeading("Network error");
            setLoginError(true);
            // setProcessingPassword(false);
            setOnProcess(false);
          }
        })
        .catch((err) => {
          setShowLoading(false);
          console.log("erro message", err);
          // setProcessingPassword(false);
          setOnProcess(false);
        });
    });
  };

  const changeUserPassword = () => {
    setShowLoading(true);
    if (password1.trim() === "") {
      setPopupHeading("New Password Empty");
      setShowLoading(false);
      setLoginError(true);
    } else if (password2.trim() === "") {
      setPopupHeading("Confirm Password Empty");
      setShowLoading(false);
      setLoginError(true);
    } else if (password1.trim() !== password2.trim()) {
      setPopupHeading("Password Mismatch");
      setShowLoading(false);
      setLoginError(true);
    } else {
      const data = {
        email: userEmail,
        password: password1,
      };
      axios
        .post(`${appURL}/change_password`, data, {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setPopupHeading("Password changed");
            setShowLoading(false);
            setLoginError(true);
          }
        })
        .catch((err) => {
          setPopupHeading(err);
          setShowLoading(false);
          setLoginError(true);
        });
    }
  };

  const getAuthenticationModalMessage = (title: string) => {
    if (title === "New Password Empty") {
      return <div>Please enter your new password</div>;
    }
    if (title === "Confirm Password Empty") {
      return <div>Please confirm your new password</div>;
    }
    if (title === "Password Mismatch") {
      return <div>Your confirmed password must match your new password</div>;
    }
    if (title === "Password changed") {
      return (
        <div>
          Your password has successfully been changed, continue to sign in
        </div>
      );
    }
    return <div>Please try again</div>;
  };

  if (status === "authenticated" && processingPasswordChange === false) {
    return (
      <div className={styles.mainFrame}>
        {loginError && (
          <AuthenticationModal
            topHeading={popupHeading}
            closeModal={closeModal}
            buttonAction={buttonAction}
          >
            {getAuthenticationModalMessage(popupHeading)}
          </AuthenticationModal>
        )}

        <div className={styles.leftPane}>
          <div className={styles.leftPaneInner}>
            <div className={styles.backButtonArea}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/backArrow.svg"
                    alt="back button"
                    width={12}
                    height={12}
                  />
                </a>
              </Link>
              <Link href="/">Go Back</Link>
            </div>

            <Heading Tag="h2" variant="xl" className="mt-10">
              Change your Password
            </Heading>
            <div className={styles.subHeading2}>
              Setup a new password for your account
            </div>

            <div className={styles.subHeading3}>New password</div>
            <input
              type="password"
              className={styles.inputStyle}
              placeholder="*****************"
              name="password"
              id="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <div className={styles.subHeading3}>Confirm new password</div>
            <input
              type="password"
              className={styles.inputStyle}
              placeholder="*****************"
              name="password2"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
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
                onClick={() => {
                  changeUserPassword();
                }}
                variant="primary"
                color="deepOrange"
              >
                <span className="w-full text-center">Change password</span>
              </Button>
            </div>

            <div className={styles.backButtonArea2}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/backArrow.svg"
                    alt="back button"
                    width={12}
                    height={12}
                  />
                </a>
              </Link>
              <Link href="/">Go Back</Link>
            </div>
          </div>
        </div>
        <div className={styles.rightPane}>
          <Image
            src="/icons/ChangePasswordBackground.png"
            alt="Sign in rocket"
            layout="fill"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full h-screen justify-center items-center">
      Loading...
    </div>
  );
}
export default ChangePassword;
