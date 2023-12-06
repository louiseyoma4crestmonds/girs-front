import { signOut, useSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import Button from "@/atoms/Buttons";
import Backdrop from "../Backdrop";
import { ConfrimLogoutModalProps } from "./ConfirmLogoutModal.types";
import styles from "./ConfirmLogoutModal.module.css";

function ConfirmLogoutModal(props: ConfrimLogoutModalProps): JSX.Element {
  const { setShowConfirmBox } = props;
  const { data: session } = useSession();

  const signUserOut = () => {
    signOut({ redirect: false, callbackUrl: "/logout" });
    destroyCookie(null, "csrftoken");
    destroyCookie(null, "__Secure-next-auth.callback-url");
    destroyCookie(null, "consentPolicy");
    destroyCookie(null, "__Host-next-auth.csrf-token");
    destroyCookie(null, "next-auth.session-token");
  };

  return (
    <Backdrop>
      <div className={styles.frame}>
        <div className={styles.headingText}>Log out</div>
        <div className={styles.messageBody}>
          Are you sure you would like to log out? or can as well click on
          &quot;No&quot; to return to the previous screen.
        </div>
        <div className="w-full flex flex-row mb-6 ">
          <div className="w-1/2 flex justify-center">
            <Button
              variant="flexibleButtonSecondary"
              onClick={() => {
                setShowConfirmBox(false);
              }}
            >
              <p className="px-4  laptop:px-10 desktop:px-10 plasma:px-10">
                No
              </p>
            </Button>
          </div>
          <div className="w-1/2 flex justify-center">
            <Button
              variant="flexible1"
              onClick={() => {
                if (session) {
                  signOut({ redirect: false, callbackUrl: "/logout" });
                  signUserOut();
                }
              }}
            >
              <p className="px-4 laptop:px-10 desktop:px-10 plasma:px-10">
                Yes
              </p>
            </Button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default ConfirmLogoutModal;
