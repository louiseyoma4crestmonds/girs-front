import axios from "axios";
import { appURL } from "../../../services/connection";

export async function getUser(email: string, token: string) {
  const response = await axios
    .get(`${appURL}/user/${email}`, {
      headers: { Authorization: `Token ${token}` },
    })
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}

export async function verifyAccount(email: string) {
  const response = await axios
    .get(`${appURL}/account/verify/${email}`)
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}

export async function revokeToken(email: any) {
  const response = await axios
    .get(`${appURL}/logout/${email}`)
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}

export async function validatePasswordResetToken(token: any) {
  const response = await axios
    .get(`${appURL}/validate_password_reset_token/${token}`)
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}

export async function createNewPassword(
  passwordResetToken: any,
  password: string
) {
  const data = {
    password1: password,
    password2: password,
    token: passwordResetToken,
  };
  const response = await axios
    .post(`${appURL}/set_new_password`, data)
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}

export async function getTouristSites(token: string) {
  const response = await axios
    .get(`${appURL}/tourist/sites`, {})
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}
