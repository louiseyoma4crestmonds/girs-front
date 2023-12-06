import { ViewCertificateModalProps } from "./ViewCertificateModal.types";

function ViewCertificateModal(props: ViewCertificateModalProps) {
  const { image, imgClicked, setImgClicked } = props;

  const handleOutside = () => {
    setImgClicked(false);
  };

  return (
    <div>
      {imgClicked === true ? (
        <div
          className="absolute bg-crest-black bg-opacity-50 z-20 top-0 bottom-0 right-0 left-0 flex justify-center items-center "
          onClick={() => {
            handleOutside();
          }}
          onKeyDown={() => {}}
          tabIndex={0}
          role="button"
        >
          <div className="w-3/5 ">
            <img src={image} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ViewCertificateModal;
