import PageTitle from "@/atoms/PageTitle";
import ResetPassword from "../molecules/ResetPassword";

function ResetPasswordMain(): JSX.Element {
  return (
    <div>
      <PageTitle title="Reset Password" />
      <ResetPassword />
    </div>
  );
}

export default ResetPasswordMain;
