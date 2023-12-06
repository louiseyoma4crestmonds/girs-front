import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageTitle from "@/atoms/PageTitle";
import EnrollmentPageStructure from "@/molecules/EnrolementPageStructure";
import AuthenticationModal from "@/molecules/AuthenticationModal";
import CrestAgileInput from "@/molecules/CrestAgileInput";
import Button from "@/atoms/Button";
import { passwordValidation } from "src/services/utilities/passwordValidation";
import {
  createNewPassword,
  validatePasswordResetToken,
} from "src/pages/api/user";

function AccountRecovery(): JSX.Element {
  const router = useRouter();
  const resetToken = router.query.resetToken;
  const [tokenIsValid, setTokenIsValid] = useState<boolean>();
  const [newPassword, setNewPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [modalMessageBody, setModalMessageBody] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>();

  // Verify validity of token
  useEffect(() => {
    if (resetToken !== undefined && tokenIsValid === undefined) {
      validatePasswordResetToken(resetToken).then((res) => {
        if (res.status === 200) {
          if (res.data.token_validity === "valid") {
            setTokenIsValid(true);
          } else {
            setTokenIsValid(false);
          }
        } else {
          setTokenIsValid(false);
        }
      });
    }
  });

  useEffect(() => {
    setPasswordIsValid(
      newPassword !== undefined
        ? passwordValidation(newPassword)
        : passwordValidation("")
    );
  }, [newPassword]);

  // Submit new password
  const submitNewPassword = () => {
    // Confirm password requirements

    if (passwordIsValid) {
      // Check that password1 and password2 match
      if (newPassword === confirmPassword) {
        // Submit new password to backend
        if (newPassword !== undefined) {
          createNewPassword(resetToken, newPassword).then((response: any) => {
            if (response.status === 201) {
              setShowModal(true);
              setModalMessageBody(
                "Your account has been successfully recovered. Click continue to sign in"
              );
              setModalMessage("Password changed");
            } else {
              setShowModal(true);
              setModalMessage("Warning");
              setModalMessageBody(
                "The server rejected your request please restart the pasword reset process"
              );
            }
          });
        }
      } else {
        setShowModal(true);
        setModalMessage("Password Mismatch");
        setModalMessageBody(
          "Please kindly ensure that both passwords are the same."
        );
      }
    } else {
      setShowModal(true);
      setModalMessage("Warning");
      setModalMessageBody(
        "Password must be greater than 8 characters and contain a mix of uppercase, lowercase, number and a special character"
      );
    }
  };

  return (
    <div>
      {tokenIsValid ? (
        <div>
          <PageTitle title="Account Recovery" />
          <EnrollmentPageStructure
            pageTitle="Account Recovery"
            summary="Setup a new password for your account"
          >
            <div className={!showModal ? "hidden" : ""}>
              <AuthenticationModal
                topHeading={modalMessage}
                closeModal={() => {
                  if (modalMessage === "Password changed") {
                    Router.push({ pathname: "/sign-in" });
                  } else {
                    setShowModal(false);
                  }
                }}
                buttonAction={() => {
                  Router.push({ pathname: "/sign-in" });
                }}
              >
                <div>{modalMessageBody}</div>
              </AuthenticationModal>
            </div>

            <div className="space-y-16">
              <div className="space-y-8">
                <div>
                  <CrestAgileInput
                    width="full"
                    placeholder="********"
                    label="New password"
                    variant="password"
                    getInputedValue={setNewPassword}
                  />
                </div>
                <div>
                  <CrestAgileInput
                    width="full"
                    placeholder="********"
                    label="Confirm password"
                    variant="password"
                    getInputedValue={setConfirmPassword}
                  />
                </div>
              </div>
              <div
                onClick={submitNewPassword}
                tabIndex={0}
                role="button"
                onKeyPress={submitNewPassword}
              >
                <Button variant="black" width="full">
                  <div className="w-full text-center">Reset Password</div>
                </Button>
              </div>
            </div>
          </EnrollmentPageStructure>
        </div>
      ) : tokenIsValid === false ? (
        <div className="">
          <PageTitle title="Account Recovery" />
          <EnrollmentPageStructure
            pageTitle="Account Recovery"
            summary="Invalid Password Reset Token Detected"
          >
            <div>
              <AuthenticationModal
                topHeading="Warning"
                closeModal={() => {
                  setShowModal(false);
                  Router.push({ pathname: "/reset-password" });
                }}
                buttonAction={() => {}}
              >
                <div>
                  Sorry!! We could not validate your password reset token.
                  Please close this modal and try again
                </div>
              </AuthenticationModal>
            </div>
          </EnrollmentPageStructure>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default AccountRecovery;
