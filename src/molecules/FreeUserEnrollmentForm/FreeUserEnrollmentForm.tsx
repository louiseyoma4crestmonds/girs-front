import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import Heading from "@/atoms/Heading";
import Button from "@/atoms/Button";
import CrestAgileInput from "@/molecules/CrestAgileInput";
import { EnrollmentFormProps } from "./FreeUserEnrollmentForm.types";
import CheckBox from "../CheckBox";

function FreeUserEnrollmentForm(props: EnrollmentFormProps) {
  const { submitEnrollment, getEnrollmentFormData, emailHolder = " " } = props;
  const router = useRouter();
  const premiumPack = router.query.package;
  // Form data state definitions
  const [email, setEmail] = useState<string>(emailHolder);
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string>("");
  const [surname, setSurname] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // validate answers

    // Pass enrolment form response to parent component
    getEnrollmentFormData({
      email: email,
      firstName: firstName,
      middleName: middleName,
      surname: surname,
      countryCode: "+44",
      phoneNumber: phoneNumber,
    });
    submitEnrollment("ready");
    localStorage.setItem("EnrollmentEmail", JSON.stringify(email));
    localStorage.setItem("EnrollmentFirstName", JSON.stringify(firstName));
    localStorage.setItem("EnrollmentMiddleName", JSON.stringify(middleName));
    localStorage.setItem("EnrollmentSurname", JSON.stringify(surname));
    localStorage.setItem("EnrollmentPhoneNumber", JSON.stringify(phoneNumber));

    if (router.query.package === "FREE") {
      Router.push({
        pathname: "/registration/FreeAccountRegistration/terms",
        query: { package: "FREE" },
      });
    } else {
      Router.push({
        pathname: "/registration/PremiumAccountRegistration/terms",
        query: { package: premiumPack },
      });
    }
  };

  return (
    <div className="px-40 bg-white tablet:px-8 phone:px-4 pb-16">
      <div className="flex gap-x-16 place-content-center">
        <div className="w-3/6  space-y-6 phone:w-full">
          <div id="enrollmentForm" className="mt-12">
            <Heading Tag="h1" variant="xl">
              Please fill form below
            </Heading>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="w-full space-y-6">
                <CrestAgileInput
                  label="Email"
                  id="freeUserEmail"
                  width="full"
                  height="small"
                  variant="email"
                  placeholder={emailHolder === " " ? " " : emailHolder}
                  getInputedValue={
                    emailHolder !== " "
                      ? () => {
                          setEmail(emailHolder);
                        }
                      : setEmail
                  }
                />
                <CrestAgileInput
                  id="freeUserFirstName"
                  label="First Name"
                  width="full"
                  height="small"
                  variant="text"
                  getInputedValue={setFirstName}
                />
                <CrestAgileInput
                  id="freeUserMiddleName"
                  label="Middle Name"
                  width="full"
                  height="small"
                  variant="text"
                  required={false}
                  getInputedValue={setMiddleName}
                />

                <CrestAgileInput
                  id="freeUserSurname"
                  label="Surname"
                  width="full"
                  height="small"
                  variant="text"
                  getInputedValue={setSurname}
                />
                <CrestAgileInput
                  id="freeUserPhoneNumber"
                  label="Phone Number"
                  width="full"
                  height="small"
                  variant="text"
                  getInputedValue={setPhoneNumber}
                />

                <div id="submit" className="mt-8 w-full">
                  <Button variant="primary" color="purple" type="submit">
                    <span className="w-full text-center">Proceed</span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeUserEnrollmentForm;
