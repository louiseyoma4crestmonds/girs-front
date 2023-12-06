import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LandingPageFooter from "../../../atoms/LandingPageFooter";
import LandingpageNav from "../../../molecules/LandingpageNav";
import FreeUserTermsAndConditions from "../../../molecules/FreeUserTermsAndConditions";
import { registerFreeUser } from "../../api/enrollmentPackages";

function Terms() {
  const router = useRouter();

  const [notAcceptedTerms, setNotAcceptedTerms] = useState<string>("true");
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [surname, setSurname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
    const enrollmentEmail =
      localStorage.getItem("EnrollmentEmail") || null || "";
    setEmail(JSON.parse(enrollmentEmail));

    const enrollmentFirstName =
      localStorage.getItem("EnrollmentFirstName") || null || "";
    setFirstName(JSON.parse(enrollmentFirstName));

    const enrollmentMiddleName =
      localStorage.getItem("EnrollmentMiddleName") || null || "";
    setMiddleName(JSON.parse(enrollmentMiddleName));

    const enrollmentSurname =
      localStorage.getItem("EnrollmentSurname") || null || "";
    setSurname(JSON.parse(enrollmentSurname));

    const enrollmentPhoneNumber =
      localStorage.getItem("EnrollmentPhoneNumber") || null || "";
    setPhoneNumber(JSON.parse(enrollmentPhoneNumber));
  }, []);

  useEffect(() => {
    if (notAcceptedTerms === "false") {
      registerFreeUser({
        email: email,
        firstName: firstName,
        middleName: middleName,
        surname: surname,
        phoneNumber: phoneNumber,
        countryCode: "+44",
      }).then((response: any) => {
        if (response.status === 200) {
          if (response.data.code === 201) {
            router.push({
              pathname: "/registration/FreeAccountRegistration/Feedback",
            });
          } else if (response.data.code === 200) {
            router.push({
              pathname: "/registration/FreeAccountRegistration/Feedback",
              query: { accountExist: true },
            });
          } else {
            router.reload();
          }
        }
      });
    }
    if (notAcceptedTerms === "abort") {
      router.back();
    }
  }, [notAcceptedTerms]);

  return (
    <div className="bg-crest-background">
      <div className="absolute z-50">
        <div className="bg-white px-4 py-5 tablet:py-5 px-8 laptop:px-14  desktop:px-40">
          <LandingpageNav />
        </div>
        <FreeUserTermsAndConditions
          setTermsAndConditionsStatus={setNotAcceptedTerms}
        />
      </div>

      <div className="">
        <LandingPageFooter />
      </div>
    </div>
  );
}

export default Terms;
