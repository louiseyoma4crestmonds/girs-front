import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

import SigninPage from "../molecules/SigninPage";

function SignIn(): JSX.Element {
  const { status } = useSession();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  useEffect(() => {
    if (status === "authenticated") {
      Router.replace("/dashboard");
    }
  }, [status]);

  if (status === "unauthenticated") {
    return (
      <SigninPage
        userEmail={userInfo.email}
        userPassword={userInfo.password}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
    );
  }
  return (
    <div className="flex w-full h-screen justify-center items-center">
      Loading...
    </div>
  );
}

export default SignIn;
