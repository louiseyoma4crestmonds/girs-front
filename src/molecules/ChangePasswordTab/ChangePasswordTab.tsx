import Panel from "@/atoms/Panel";
import { useState, useEffect } from "react";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Button from "@/atoms/Button";
import styles from "./ChangePasswordTab.module.css";
import { appURL } from "../../services/connection";

type ChangePasswordType = {
  setInProgress: (arg: boolean) => void;
  routerParameter: string;
};

function ChangePasswordTab(props: ChangePasswordType) {
  const { data: session } = useSession();
  const { setInProgress, routerParameter } = props;
  const router = useRouter();

  const token = session?.user.user.token.token.userToken;
  const email = session?.user.user.token.token.email;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [Msg, setMsg] = useState("");
  const [parameterReady, setParameterReady] = useState(false);

  useEffect(() => {
    if (routerParameter !== "undefined" && parameterReady === false) {
      setErrMsg(routerParameter);
      setParameterReady(true);
    }
  });

  const changePassword = () => {
    setLoading(true);

    const cred = {
      old_password: oldPassword,
      new_password: newPassword,
      email,
    };
    if (newPassword === confirmNewPassword) {
      axios
        .post(`${appURL}/update_password`, cred, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(async (res) => {
          setLoading(false);
          if (res.status === 200) {
            if (res.data.status === "Failed") {
              setErrMsg("The current password is incorrect");
            }
            if (res.data.status === "success") {
              setInProgress(true);
              localStorage.clear();
              sessionStorage.clear();
              signOut({ redirect: false }).then(async () => {
                await signIn("credentials", {
                  email,
                  password: newPassword,
                  redirect: false,
                })
                  .then((res11) => {
                    if (res11?.status === 200) {
                      setMsg("Password was changed successfully");
                      router.push(
                        {
                          pathname: "/profile",
                          query: {
                            passwordMsg: "Password was changed successfully",
                          },
                        },
                        "/profile"
                      );
                      setInProgress(false);
                      setMsg("Password was changed successfully");
                    } else {
                      setMsg("Network error");
                    }
                  })
                  .catch(() => {
                    setMsg("Network error");
                  });
              });
            }
          }
        })
        .catch(() => {
          setLoading(false);
          setErrMsg("An error occured");
        });
    } else {
      setLoading(false);
      setErrMsg("New Password and Confirm Password do not match");
    }
  };

  return (
    <Panel>
      <div className={styles.changePasswordWrapper}>
        <div className={styles.changePasswordText}>Change password</div>
        <div className="border-b-2 mt-6 phone:hidden tablet:hidden" />
        <div className={styles.changePasswordForm}>
          <div className={styles.profiletabFormFirstDiv}>
            <label className={styles.profiletabLabelText} htmlFor="current">
              Current password
              <input
                type="password"
                placeholder="************"
                className={styles.profiletabInput}
                id="current"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.profiletabFormFirstDiv}>
            <label className={styles.profiletabLabelText} htmlFor="new">
              New password
              <input
                type="password"
                placeholder="************"
                className={styles.profiletabInput}
                id="new"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.profiletabFormFirstDiv}>
            <label className={styles.profiletabLabelText} htmlFor="confirm">
              Confirm New password
              <input
                type="password"
                placeholder="************"
                className={styles.profiletabInput}
                id="confirm"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        {loading === true ? (
          <div className="flex justify-center items-center mt-6">
            <div>
              <Image src="/icons/spinner.gif" width={35} height={35} alt="" />
            </div>
          </div>
        ) : null}
        {errMsg.length > 0 ? <p className={styles.errMsg}> {errMsg} </p> : null}
        {Msg.length > 0 ? <p className={styles.successMsg}> {Msg} </p> : null}
        <div className={styles.changePasswordTabBtnDiv}>
          <Button
            id="changePasswordButton"
            variant="primary"
            color="deepOrange"
            width="large"
            onClick={changePassword}
          >
            <span className="w-full text-center">Change Password</span>
          </Button>
        </div>
      </div>
    </Panel>
  );
}

export default ChangePasswordTab;
