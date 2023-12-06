import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Router, { useRouter } from "next/router";
import PageTitle from "@/atoms/PageTitle";
import Button from "@/atoms/Button";
import { SigninPageTypes } from "./SigninPage.types";
import styles from "./SigninPage.module.css";
import AuthenticationModal from "../AuthenticationModal";

function SigninPage(props: SigninPageTypes): JSX.Element {
  const router = useRouter();

  const { userEmail, userPassword, userInfo, setUserInfo } = props;

  const [errorMessage, setErrorMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [popupHeading, setPopupHeading] = useState("");

  const closeModal = () => {
    setLoginError(false);
    setShowLoading(false);
    setErrorMessage("");
  };

  const signinUser = async () => {
    if (userEmail.trim() === "") {
      setPopupHeading("Empty Email");
      setLoginError(true);
    } else if (userPassword.trim() === "") {
      setPopupHeading("Empty Password");
      setLoginError(true);
    } else {
      setShowLoading(true);
      setErrorMessage("");
      setLoginError(false);
      await signIn("credentials", {
        email: userEmail,
        password: userPassword,
        redirect: false,
      })
        .then((res) => {
          if (res?.status === 200) {
            setShowLoading(false);
            setErrorMessage("");
            setLoginError(false);
            Router.push(
              {
                pathname: "/dashboard",
                query: {},
              },
              "/dashboard"
            );
          } else if (res?.status === 401) {
            setPopupHeading("Wrong Login credentials");
            setLoginError(true);
          } else {
            setPopupHeading("Network error");
            setLoginError(true);
          }
        })
        .catch((err) => {
          console.log("catch error", err);
          setShowLoading(false);
          if (
            err.response.data.non_field_errors[0] === "Wrong Login credentials."
          ) {
            setPopupHeading("Wrong Login credentials");
            setLoginError(true);
          } else {
            setPopupHeading("Network error");
            setLoginError(true);
          }
        });
    }
  };

  const getAuthenticationModalMessage = (title: string) => {
    if (title === "Incorrect Email!") {
      return (
        <div>
          Please check if you entered in the correct CrestAgile email address
        </div>
      );
    }
    if (title === "Incorrect password!") {
      return (
        <div>Please check if you entered in the correct generated password</div>
      );
    }
    if (title === "Empty Email") {
      return <div>Please enter your Email</div>;
    }
    if (title === "Empty Password") {
      return <div>Please enter your Password</div>;
    }
    if (title === "Wrong Login credentials") {
      return (
        <div>
          <div>Please check if you entered in the correct </div>
          <div>email or password</div>
        </div>
      );
    }
    if (title === "Warning") {
      return (
        <div>
          <div>Your account will be locked after two more failed attempts,</div>
          <div>
            please contact{" "}
            <span className={styles.setContactColor}>
              support@crestagile.com
            </span>
            ,
          </div>
          <div>if you can’t to sign in.</div>
        </div>
      );
    }
    if (title === "Account locked") {
      return (
        <div>
          <span>Your account has been blocked, please contact </span>
          <span className={styles.setContactColor}>support@crestagile.com</span>
        </div>
      );
    }
    return <div>Please try again</div>;
  };

  return (
    <div className={styles.mainFrame}>
      <PageTitle title="Sign In Page" />
      {loginError && (
        <AuthenticationModal topHeading={popupHeading} closeModal={closeModal}>
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
          <div className={styles.logoArea}>Cross River State</div>
          <div className="text-primaryTwo500">
            Geographic Information Retrieval System
          </div>

          <div className={styles.subHeading2}>Sign in to continue</div>

          <div
            onKeyDown={(e) => {
              if (e.code === "Enter" || e.charCode === 13) {
                signinUser();
              } else {
                console.log("");
              }
            }}
            tabIndex={0}
            role="button"
            onKeyPress={() => {}}
          >
            <div className={styles.subHeading3}>Email address</div>
            <div>
              <input
                type="email"
                className={styles.inputStyle}
                placeholder="example@crestagile.co.uk"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                required
                value={userEmail}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
              />
            </div>

            <div className={styles.subHeading3}>Password</div>
            <div>
              <input
                type="password"
                className={styles.inputStyle}
                placeholder="*****************"
                name="password"
                id="password"
                value={userPassword}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
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

            <div className={styles.resetArea}>
              <div
                onClick={() => {
                  router.push({ pathname: "/reset-password" });
                }}
                tabIndex={0}
                role="button"
                onKeyPress={() => {}}
              >
                <div className={styles.resetpassword + " cursor-pointer"}>
                  Having a problem sigin in? Reset your password
                </div>
              </div>
            </div>

            <div>
              <Button
                id="signInButton"
                variant="primary"
                color="purple"
                width="full"
                onClick={() => {
                  signinUser();
                }}
              >
                <span className="w-full text-center">Sign in</span>
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
      </div>
    </div>
  );
}

export default SigninPage;
