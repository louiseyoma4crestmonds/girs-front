import { useRouter } from "next/router";
import Button from "../../../atoms/Button";
import LandingPageFooter from "../../../atoms/LandingPageFooter";
import NotificationModal from "../../../molecules/NotificationModal";
import LandingpageNav from "../../../molecules/LandingpageNav";
import successTick from "../../../../public/images/succesfulSign.svg";

function Feedback() {
  const router = useRouter();

  return (
    <div className="bg-crest-background">
      <div className="bg-crest-white py-3.5 px-2 tablet:px-16 laptop:px-16 desktop:px-16 plasma:px-16">
        <LandingpageNav />
      </div>
      <div className="px-4 tablet:px-8 laptop:px-48 py-32 shadow-2xl">
        <NotificationModal
          showModal="true"
          positive="true"
          feedbackImage={successTick}
          subscription="New Account"
          feedback="Congratulations"
          feedbackDetails="Your account has been successfully created. Your password has been sent to your email"
        >
          <div className="mt-16">
            <Button
              id="signInButton"
              variant="primary"
              color="purple"
              onClick={() => {
                router.push({ pathname: "/sign-in" });
              }}
            >
              <span className="w-full text-center text-white">Sign In</span>
            </Button>
          </div>
        </NotificationModal>
      </div>
      <div className="">
        <LandingPageFooter />
      </div>
    </div>
  );
}

export default Feedback;
