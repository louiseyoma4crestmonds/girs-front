import Heading from "@/atoms/Heading";
import Panel from "@/atoms/Panel";
import axios from "axios";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "@/atoms/Button";
import styles from "./ProfileTab.module.css";
import ProfileTabLeftSide from "../ProfileTabLeftSide";
import { appURL } from "../../services/connection";

function ProfileTab() {
  const { data: session } = useSession();

  const token = session?.user.user.token.token.userToken;
  const email = session?.user.user.token.token.email;
  const url1 = appURL;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [personalMail, setPersonalMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [updateMsg, setUpdateMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newMiddleName, setNewMiddleName] = useState("");
  const [newPersonalMail, setNewPersonalMail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  /* Variable Definitions for space detection in input fields */
  const [multipleFirstName, setMultipleFirstName] = useState<boolean>(false);
  const [multipleMiddleName, setMultipleMiddleName] = useState<boolean>(false);
  const [multipleLastName, setMultipleLastName] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>();

  const detectSpaceInInput = (inputValue: string) => {
    let response = false;
    if (/\s/.test(inputValue)) {
      response = true;
    }
    return response;
  };

  const formValidity = () => {
    if (multipleFirstName || multipleLastName || multipleMiddleName) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  };
  useEffect(() => {
    formValidity();
  });

  const getProfileData = async () => {
    await axios
      .get(`${url1}/user_profile/${email}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setFirstName(res.data.data.first_name);
          setMiddleName(res.data.data.middle_name);
          setLastName(res.data.data.last_name);
          setPersonalMail(res.data.data.personal_email);
          setPhoneNumber(res.data.data.mobile_number);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfileData();
  }, [
    newFirstName,
    newLastName,
    newMiddleName,
    newPersonalMail,
    newPhoneNumber,
  ]);

  const updateProfile = (evt: any) => {
    setLoading(true);
    evt.preventDefault();
    if (newFirstName === "") {
      setNewFirstName(firstName);
    }
    if (newLastName === "") {
      setNewLastName(lastName);
    }
    if (newMiddleName === "") {
      setNewMiddleName(middleName);
    }
    if (newPersonalMail === "") {
      setNewPersonalMail(personalMail);
    }
    if (newPhoneNumber === "") {
      setNewPhoneNumber(phoneNumber);
    }
    const data = {
      first_name: newFirstName,
      middle_name: newMiddleName,
      last_name: newLastName,
      personal_email: newPersonalMail,
      mobile_number: newPhoneNumber,
    };

    axios
      .post(`${url1}/user_profile/${email}`, data, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          getProfileData();
          setLoading(false);
          setUpdateMsg("Profile updated successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Panel>
      <div className={styles.profileTabWrapper}>
        <div className={styles.profileTableft}>
          <ProfileTabLeftSide />
        </div>
        <div className={styles.profileTabRight}>
          <Heading variant="lg" Tag="h3" mode="light">
            {firstName + " " + lastName}
          </Heading>
          <div className={styles.profileTabRightDiv}>
            <div>
              <span className={styles.profileTabSpanEmail}>Email: </span>
              <span className={styles.profileTabSpan}>
                {session?.user.user.token.token.email}
              </span>
            </div>
            <div>
              <span className={styles.profileTabSpanEmail}>Course: </span>
              <span className={styles.profileTabSpan}>
                {session?.user.user.token.token.userRole}
              </span>
            </div>
          </div>
          <div className="border-b-2 mt-3 phone:hidden tablet:hidden" />
          <form>
            <div className={styles.profiletabForm}>
              <div className={styles.profiletabFormFirstDiv}>
                <label
                  htmlFor="firstName"
                  className={styles.profiletabLabelText}
                >
                  First name <br />
                  <input
                    type="text"
                    placeholder=""
                    className={styles.profiletabInput}
                    id="firstName"
                    defaultValue={firstName}
                    onChange={(e) => {
                      if (detectSpaceInInput(e.target.value)) {
                        setMultipleFirstName(true);
                      } else {
                        setMultipleFirstName(false);
                      }
                    }}
                  />
                  <span
                    className={multipleFirstName ? "text-crest-red " : "hidden"}
                  >
                    {" "}
                    Please enter only your first name here
                  </span>
                </label>
              </div>
              <div className={styles.profiletabFormFirstDiv}>
                <label
                  htmlFor="middleName"
                  className={styles.profiletabLabelText}
                >
                  Middle name <br />
                  <input
                    type="text"
                    placeholder=""
                    className={styles.profiletabInput}
                    id="middleName"
                    defaultValue={middleName}
                    onChange={(e) => {
                      if (detectSpaceInInput(e.target.value)) {
                        setMultipleMiddleName(true);
                      } else {
                        setMultipleMiddleName(false);
                      }
                    }}
                  />
                  <span
                    className={
                      multipleMiddleName ? "text-crest-red " : "hidden"
                    }
                  >
                    {" "}
                    Please enter only your middle name here
                  </span>
                </label>
              </div>
              <div className={styles.profiletabFormFirstDiv}>
                <label
                  htmlFor="lastName"
                  className={styles.profiletabLabelText}
                >
                  Last name <br />
                  <input
                    type="text"
                    placeholder=""
                    className={styles.profiletabInput}
                    id="lastName"
                    defaultValue={lastName}
                    onChange={(e) => {
                      if (detectSpaceInInput(e.target.value)) {
                        setMultipleLastName(true);
                      } else {
                        setMultipleLastName(false);
                      }
                    }}
                  />
                  <span
                    className={multipleLastName ? "text-crest-red " : "hidden"}
                  >
                    {" "}
                    Please enter only your lastname here
                  </span>
                </label>
              </div>
            </div>
            <div className={styles.profiletabForm2}>
              <div className={styles.profiletabFormFirstDiv}>
                <label htmlFor="email" className={styles.profiletabLabelText}>
                  Personal Email Address <br />
                  <input
                    type="email"
                    placeholder=""
                    className={styles.profiletabInput}
                    id="email"
                    defaultValue={personalMail}
                    onChange={(e) => setNewPersonalMail(e.target.value)}
                  />
                </label>
              </div>
              <div className={styles.profiletabFormFirstDiv}>
                <label htmlFor="phone" className={styles.profiletabLabelText}>
                  Phone number
                  <br />
                  <input
                    type="text"
                    placeholder=""
                    className={styles.profiletabInput}
                    id="phone"
                    defaultValue={phoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                  />
                </label>
              </div>
            </div>

            {loading === true ? (
              <div className="flex justify-center items-center mt-6">
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
            {updateMsg.length > 0 ? (
              <p className={styles.successMsg}> {updateMsg} </p>
            ) : null}
            <div className={styles.profiletabBtnDiv}>
              <div className="w-full">
                <Button
                  id="saveProfileUpdate"
                  variant="primary"
                  color="deepOrangeDisabled"
                  width="large"
                >
                  <button
                    type="button"
                    className={
                      formIsValid
                        ? styles.profiletabBtn
                        : styles.profiletabBtn + " pointer-events-none"
                    }
                    onClick={updateProfile}
                  >
                    <span className="w-full text-center">Save</span>
                  </button>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Panel>
  );
}

export default ProfileTab;
