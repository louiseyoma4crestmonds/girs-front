import { useState, useEffect } from "react";
import Button from "@/atoms/Button";
import { getCountries } from "src/pages/api/enrollmentPackages";
import { EnrollmentFormProps } from "./EnrollmentForm.types";

import CrestAgileInput from "../CrestAgileInput";
import CheckBox from "../CheckBox";

function EnrollmentForm(props: EnrollmentFormProps) {
  const { submitEnrollment, getEnrollmentFormData } = props;

  // Form data state definitions
  const [email, setEmail] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string>("");
  const [surname, setSurname] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [q1, setQ1] = useState<string>();
  const [q2, setQ2] = useState<string>();
  const [q3, setQ3] = useState<string>();
  const [q4, setQ4] = useState<string>();
  const [q5, setQ5] = useState<string>();
  const [q6, setQ6] = useState<string>();
  const [q7, setQ7] = useState<string>();
  const [q8, setQ8] = useState<string>();
  const [q9, setQ9] = useState<string>();
  const [q10, setQ10] = useState<string>();
  const [q11, setQ11] = useState<string>();
  const [q12, setQ12] = useState<string>();
  const [q13, setQ13] = useState<string>();

  const [country, setCountry] = useState<string>();
  const [countryCode, setCountryCode] = useState<any>();
  const [crestCountries, setCrestCountries] = useState<any[]>([]);
  const countries: any[] = [];

  useEffect(() => {
    if (crestCountries.length < 1) {
      getCountries().then((res) => {
        setCrestCountries(res.data);
      });
    }
  });

  useEffect(() => {
    if (countries.length < 1) {
      for (let i = 0; i < crestCountries.length; i += 1) {
        countries.push(crestCountries[i].country);
      }
    }
  });

  useEffect(() => {
    for (let i = 0; i < crestCountries.length; i += 1) {
      if (crestCountries[i].country === country) {
        setCountryCode(crestCountries[i].phone_code);
      }
    }
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // validate answers
    if (
      q1 === undefined ||
      q2 === undefined ||
      q3 === undefined ||
      q4 === undefined ||
      q5 === undefined ||
      q6 === undefined ||
      q7 === undefined ||
      q8 === undefined ||
      q9 === undefined ||
      q10 === undefined ||
      q11 === undefined ||
      q12 === undefined ||
      q13 === undefined
    ) {
      console.log("Invalid Form");
    } else {
      // Pass enrolment form response to parent component
      getEnrollmentFormData({
        email: email,
        firstName: firstName,
        middleName: middleName,
        surname: surname,
        phoneNumber: phoneNumber,
        countryCode: countryCode,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        q9: q9,
        q10: q10,
        q11: q11,
        q12: q12,
        q13: q13,
      });
      submitEnrollment("ready");
    }
  };

  return (
    <div className="py-6 px-6 h-auto w-full ">
      <div className="bg-crest-white pb-6">
        <div className="p-4 text-center font-bold text-2xl">
          Please fill form below
        </div>
        <div className="px-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <CrestAgileInput
                  id="enrollment_email"
                  label="Email"
                  variant="email"
                  width="full"
                  getInputedValue={setEmail}
                />
              </div>
              <div className="phone:space-y-4 tablet:flex gap-x-8 laptop:flex justify-between desktop:justify-between">
                <div className="phone:w-full w-3/6">
                  <CrestAgileInput
                    id="enrollment_firstname"
                    label="First Name"
                    variant="text"
                    width="full"
                    getInputedValue={setFirstName}
                  />
                </div>

                <div className="phone:w-full w-3/6">
                  <CrestAgileInput
                    id="enrollment_lastname"
                    label="Middle Name"
                    required={false}
                    variant="text"
                    width="full"
                    getInputedValue={setMiddleName}
                  />
                </div>
                <div className="phone:w-full w-3/6">
                  <CrestAgileInput
                    id="enrollment_surname"
                    label="Surname"
                    variant="text"
                    width="full"
                    getInputedValue={setSurname}
                  />
                </div>
              </div>

              <div>
                <CrestAgileInput
                  id="enrollment_country"
                  label="Country"
                  placeholder={country}
                  width="full"
                  variant="select"
                  selectOptions={countries}
                  getInputedValue={setCountry}
                />
              </div>
              <div>
                <CrestAgileInput
                  id="enrollment_phonenumber"
                  label="Phone Number"
                  width="full"
                  variant="phone"
                  countryCode={countryCode !== undefined ? countryCode : "44"}
                  getInputedValue={setPhoneNumber}
                />
              </div>

              <hr />
              <div>
                <div>
                  Can you learn new things and skills by watching videos and
                  following the steps in the video?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q1 === undefined ? "" : q1}
                  />
                </div>

                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={["Yes", "No"]}
                  getSelectedBox={setQ1}
                />
                <hr />
              </div>

              <div>
                <div>
                  Are you able to self-develop, without fully depending on
                  others, by owning your learning and utilizing the resources
                  around you to upskill and grow your knowledge and experience?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q2 === undefined ? "" : q2}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={["Yes", "No"]}
                  getSelectedBox={setQ2}
                />
                <hr />
              </div>
              <div>
                <div>
                  Which course are you interested in?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q3 === undefined ? "" : q3}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={["Scrum Master", "Agile Business Analyst"]}
                  getSelectedBox={setQ3}
                />
                <hr />
              </div>
              <div>
                <div>
                  What is the highest qualification you hold?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q4 === undefined ? "" : q4}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={[
                    "GCSE",
                    "Higher Diploma Education",
                    "Higher National Diploma (HND)",
                    "Bachelors Degree",
                    "Masters(MA, MSc, MBA)",
                  ]}
                  getSelectedBox={setQ4}
                />
                <hr />
              </div>
              <div>
                <div>
                  What point in your career journey are you?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q5 === undefined ? "" : q5}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={[
                    "I have no previous knowledge/experience in the Project Management industry",
                    "I have Project management industry experience but not Agile or Scrum",
                    "I have Project Management experience with knowledge in Agile and Scrum but no Experience.",
                    "I have Project Management experience with knowledge and some experience in Agile and Scrum",
                  ]}
                  getSelectedBox={setQ5}
                />
                <hr />
              </div>
              <div>
                <div>
                  What is your current employment status?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q6 === undefined ? "" : q6}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={[
                    "I am Employed Fulltime",
                    "I am Employed Part - Time",
                    "I am not working right now, and I need to fix that!",
                  ]}
                  getSelectedBox={setQ6}
                />
                <hr />
              </div>
              <div>
                <div>
                  How will you rate your technical knowledge?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q7 === undefined ? "" : q7}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={[
                    "I struggle to use the basic applications on a computer",
                    "I am proficient in using basic applications on a computer",
                    "I understand computer Hardware and Software relationships",
                    "I am comfortable with frontend and backend software technical conversations",
                  ]}
                  getSelectedBox={setQ7}
                />
                <hr />
              </div>
              <div>
                <div>
                  How much time are you able to commit towards your learning
                  journey?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q8 === undefined ? "" : q8}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={[
                    "5 - 10 hours a week - that's all I can offer",
                    "20 - 40 hours a week",
                    "40 hours a week",
                    "10 hours a month",
                  ]}
                  getSelectedBox={setQ8}
                />
                <hr />
              </div>
              <div className="phone:hidden">
                <div>
                  On a scale of 1 - 10, how well do you take charge and
                  ownership of your learning?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q9 === undefined ? "" : q9}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  orientation={"spread"}
                  checkBoxes={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                  ]}
                  getSelectedBox={setQ9}
                />
                <hr />
              </div>
              <div className="tablet:hidden laptop:hidden desktop:hidden">
                <div>
                  On a scale of 1 - 10, how well do you take charge and
                  ownership of your learning?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q9 === undefined ? "" : q9}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  orientation="fall"
                  checkBoxes={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                  ]}
                  getSelectedBox={setQ9}
                />
                <hr />
              </div>
              <div>
                <div>
                  Select from the options which is best associate with you.
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q10 === undefined ? "" : q10}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={[
                    "I enjoy technical focused activities",
                    "I like to amaze customers and clients",
                    "I enjoy teaching and training others",
                    "I am a problem solver",
                    "I enjoy motivational and inspirational activities",
                    "I posses natural creative skills and abilities",
                  ]}
                  getSelectedBox={setQ10}
                />
                <hr />
              </div>
              <div>
                <div>
                  What are you aiming to achieve from this learning journey?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q11 === undefined ? "" : q11}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={[
                    "To gain new knowledge and skills e.g. MS PowerPoint, MS Excel, Communication skills etc",
                    "I want to change my career",
                    "I want a new job",
                    "I am not sure - I will decide once I know more about the roles and skills.",
                  ]}
                  getSelectedBox={setQ11}
                />
                <hr />
              </div>
              <div>
                <div>
                  Are you ready to to secure your slot in the CrestAgile January
                  2023 set?
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q12 === undefined ? "" : q12}
                  />
                </div>
                <CheckBox
                  variant="normal"
                  width="full"
                  checkBoxes={["Yes", "No"]}
                  getSelectedBox={setQ12}
                />
                <hr />
              </div>
              <div>
                <div>
                  <input
                    className="outline-none text-crest-white pointer-events-none"
                    required
                    type="text"
                    value={q13 === undefined ? "" : q13}
                  />
                </div>
                <CrestAgileInput
                  id="enrollment_que"
                  label="What interests you about the Agile/Scrum roles?"
                  variant="text"
                  width="full"
                  getInputedValue={setQ13}
                />
                <hr />
              </div>
            </div>

            <button
              type="submit"
              className="mt-16 w-full tablet:flex place-content-end laptop:flex  desktop:flex "
            >
              <div className="tablet:w-3/12 laptop:w-3/12 desktop:w-3/12">
                <Button width="full" variant="orange">
                  <div className="w-full text-center">Next</div>
                </Button>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentForm;
