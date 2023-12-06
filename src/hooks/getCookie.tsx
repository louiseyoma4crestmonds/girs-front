import Cookie from "js-cookie";

const GetCookie = (cookieName: any) => {
  Cookie.get(cookieName);
};

export default GetCookie;
