import Cookie from "js-cookie";

const SetCookie = (cookieName: any, usrin: any) => {
  Cookie.set(cookieName, usrin, {
    expires: 1, // 1day
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export default SetCookie;
