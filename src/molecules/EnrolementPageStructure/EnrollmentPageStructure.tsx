import Image from "next/image";
import { useRouter } from "next/router";
import Heading from "@/atoms/Heading";
import CrestLogo from "@/atoms/CrestLogo";
import { EnrollmentFormProps } from "./EnrollemntPageStructure.types";

function EnrollmentPageStructure(props: EnrollmentFormProps) {
  const {
    pageTitle = "Page title goes here",
    summary = "write page summary here",
    children,
  } = props;

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="px-40 bg-white tablet:px-8 phone:px-4 pb-16 mt-12">
      <div className="flex gap-x-12 place-content-center">
        <div className="w-1/2  space-y-8 phone:w-full">
          <div
            tabIndex={0}
            role="button"
            onKeyPress={() => {
              router.push({ pathname: "/" });
            }}
            onClick={() => {
              router.push({ pathname: "/" });
            }}
            className="cursor-pointer"
          >
            <span>{"<"}</span>
            <span className="text-crest-red">&nbsp;Go back</span>
          </div>
          <div>
            <div className="text-xl font-bold">Cross River State</div>
            <div className="text-primaryTwo500">
              Geographic Information Retrieval System
            </div>
          </div>
          <div>
            <Heading Tag="h1" variant="xl">
              {pageTitle}
            </Heading>
            <div className="text-md text-crest-gray100">{summary}</div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>{children}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentPageStructure;
