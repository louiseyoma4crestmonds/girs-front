import { useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Button from "@/atoms/Button";
import LandingPageFooter from "@/atoms/LandingPageFooter";
import Backdrop from "@/atoms/Backdrop";
import GenericModal from "@/molecules/GenericModal";
import CrestAgileInput from "@/molecules/CrestAgileInput";
import EnrollmentPageStructure from "@/molecules/EnrolementPageStructure";
import { verifyAccount } from "../../api/user";
import emailSymbol from "../../../../public/icons/EmailSymbolFrame.svg";

function PremiumAccountRegistration() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [notificationModal, setNotificationModal] = useState(false);

  const verifyEmail = () => {
    if (email !== undefined) {
      verifyAccount(email)
        .then((response: any) => {
          if (response.data.data === true) {
            setNotificationModal(true);
          } else if (response.data.data === false) {
            // Goto form page
            Router.push({
              pathname: "/registration/FreeAccountRegistration/enrollmentForm",
              query: {
                email: email,
                package: "FREE",
              },
            });
          }
        })
        .catch((error: any) => console.log(error));
    }
  };

  return (
    <div className="bg-crest-background">
      {notificationModal ? <Backdrop /> : null}

      <div>
        <div className="bg-crest-ash90">
          <EnrollmentPageStructure
            pageTitle="Registration"
            summary="Please enter email"
          >
            <div className="mt-12">
              <div>
                <CrestAgileInput
                  id="emailToVerify"
                  label="Email"
                  variant="email"
                  width="full"
                  getInputedValue={setEmail}
                />
              </div>
              <div
                onKeyDown={verifyEmail}
                role="button"
                tabIndex={0}
                onClick={verifyEmail}
                className="w-full mt-12"
              >
                <Button id="proceed" variant="primary" color="purple">
                  <span
                    id="emailVerificationButton"
                    className="w-full text-center"
                  >
                    <span className="w-full text-center">Proceed</span>
                  </span>
                </Button>
              </div>
            </div>
            <div
              className={
                !notificationModal
                  ? "hidden"
                  : "w-3/6 absolute left-1/4 top-32 bottom-0 z-50"
              }
            >
              <div className="w-full">
                <GenericModal setShowConfirmBox={setNotificationModal}>
                  <div className="phone:w-full  pb-8 pt-6 bg-white  self-center">
                    <div className="w-full flex place-content-center text-center ">
                      <div className=" text-xl self-center">
                        <div>
                          <div className="w-full flex flex-col place-content-center text-center space-y-4  py-8">
                            <div className="self-center">
                              <Image
                                src={emailSymbol}
                                width={100}
                                height={100}
                                alt={"feedbackImage"}
                              />
                            </div>

                            <div className="mt-12">
                              <div className="text-4xl ">
                                <span>{"Existing Email"}</span>
                              </div>
                            </div>

                            <div className="w-full text-crest-black400">
                              {
                                "Email provided has already been registered, please sign-in to subscribe."
                              }
                            </div>
                            <Button
                              id="continueToSignIn"
                              variant="primary"
                              color="deepOrange"
                              onClick={() => {
                                router.push({ pathname: "/sign-in" });
                              }}
                            >
                              <span className="w-full text-center">
                                Continue to Sign-in page
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GenericModal>
              </div>
            </div>
          </EnrollmentPageStructure>
        </div>
      </div>

      <div className="">
        <LandingPageFooter />
      </div>
    </div>
  );
}

export default PremiumAccountRegistration;
