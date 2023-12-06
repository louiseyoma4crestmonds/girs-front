import axios from "axios";
import { appURL, subscriptionURL, timerURL } from "../connection";

export async function userLogin(email: string, password: string) {
  const data2 = {
    email,
    password,
  };
  const { data } = await axios.post(`${appURL}/login`, data2);
  return data;
}

export async function userCrestPackage(userToken: string) {
  const { data } = await axios.get(`${subscriptionURL}/crest-time/packages`, {
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });
  return data;
}

export async function getUserTimeLeft(email: string, userToken: string) {
  const { data } = await axios.get(`${timerURL}/${email}`, {
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });
  const subscriptionExpiration = new Date(
    Date.parse(data.data[0].subscription_expiration_date)
  ).getTime();
  return subscriptionExpiration;
}

export async function getTotalScore(userEmail: string, userToken: string) {
  const { data } = await axios.get(`${appURL}/${userEmail}/total_score`, {
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });

  const data2 = await data.data.total_score;
  return data2;
}

export async function getLearningObjectives(
  email: string,
  token: string,
  learningJourney: string,
  objective_class = "Regular"
) {
  const response = await axios.get(
    `${appURL}/learning_objectives/${email}/${learningJourney}/${objective_class}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  // console.log("response", response);
  return response;
}

export async function getChildObjectives(
  token: string,
  email: string,
  objectiveId: any
) {
  // console.log("today", email, objectiveId);
  const response = await axios.get(
    `${appURL}/get-users-modules/${email}/${objectiveId}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  // console.log("response for child obj", response.data);
  return response;
}

export async function getUserCurrentObjective(
  token: string,
  userEmail: string
) {
  const response = await axios.get(`${appURL}/learning_progress/${userEmail}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  // console.log("current obj response", response);
  return response;
}

export async function getUserQuizInfor(
  token: string,
  objectiveType: string,
  ObjectiveId: number
) {
  const response = await axios.get(
    `${appURL}/quiz/${objectiveType}/${ObjectiveId}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  //  console.log("current obj response infor", response);
  return response;
}

export async function getTrackingId() {
  const { data } = await axios.get(`${appURL}/analytic-tag/GOOGLE`);
  // console.log("analytic", data)
  return data.data.tag;
}
// test.crestlearn.crestagile.com/api/v1/analytic-tag
