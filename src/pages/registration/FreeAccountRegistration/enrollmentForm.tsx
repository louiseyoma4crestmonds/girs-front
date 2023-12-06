import { useRouter } from "next/router";
import LandingPageFooter from "@/atoms/LandingPageFooter";
import LandingpageNav from "@/molecules/LandingpageNav";
import FreeUserEnrollmentForm from "@/molecules/FreeUserEnrollmentForm";

function EnrollmentForm() {
  const router = useRouter();

  return (
    <div className="bg-crest-background">
      <div>
        <div>
          <div className="bg-white px-4 py-5 tablet:py-5 px-8 laptop:px-14  desktop:px-40">
            <LandingpageNav />
          </div>

          <div className="mt-0">
            <FreeUserEnrollmentForm
              getEnrollmentFormData={() => {}}
              submitEnrollment={() => {}}
              emailHolder={
                router.query.email !== undefined ? router.query.email : ""
              }
            />
          </div>
        </div>
      </div>

      <div className="">
        <LandingPageFooter />
      </div>
    </div>
  );
}

export default EnrollmentForm;
