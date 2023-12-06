import Image from "next/image";
import { NotificationModalProps } from "./NotificationModal.types";

function NotificationModal(props: NotificationModalProps) {
  const {
    showModal,

    positive,
    feedbackImage = "/specify a feedback image url",
    feedback = "feedback text",
    feedbackDetails = "Specify your feedback details here",
    children,
  } = props;

  return (
    <div
      className={
        showModal === "false"
          ? "hidden"
          : "flex place-content-center w-full shadow-md"
      }
    >
      <div className="w-full p-16   h-auto bg-white  self-center  ">
        <div className="w-full flex place-content-center text-center ">
          <div className=" text-xl self-center">
            <div>
              <div className="w-full flex flex-col place-content-center text-center space-y-4  py-8">
                <div className="self-center">
                  <Image
                    src={feedbackImage}
                    width={100}
                    height={100}
                    alt={feedbackImage}
                  />
                </div>

                <div className="mt-12">
                  <div className="text-4xl ">
                    <span
                      className={positive === "true" ? "text-crest-green" : ""}
                    >
                      {feedback}
                    </span>
                  </div>
                </div>

                <div className=" text-crest-black400">{feedbackDetails}</div>

                <div className="py-12">
                  <div className="border-t border-dashed" />
                </div>

                <div className="mt-16">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;
