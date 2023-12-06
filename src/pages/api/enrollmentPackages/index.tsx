import axios from "axios";
import { appURL } from "../../../services/connection";

export async function submitEnrollment(formData: any) {
  const data = formData;
  const response = await axios
    .post(`${appURL}/enrollment-app/submit/enrollment-form`, data)
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}

export async function registerFreeUser(formData: any) {
  const data = formData;
  const response = await axios
    .post(`${appURL}/enrollment-app/register/free-user`, data)
    .then((res) => res)
    .catch((err) => err.message);
  return response;
}
