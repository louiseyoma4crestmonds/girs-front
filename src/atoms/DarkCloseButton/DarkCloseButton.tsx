import { CloseButtonProps } from "./DarkCloseButton.types";

function DarkCloseButton(props: CloseButtonProps): JSX.Element {
  const { onclick } = props;

  const handleOnClick = () => {
    onclick();
  };

  return (
    <div
      id="closeButton"
      tabIndex={0}
      role="button"
      onClick={() => {
        handleOnClick();
      }}
      onKeyDown={handleOnClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1.99988C6.49 1.99988 2 6.48988 2 11.9999C2 17.5099 6.49 21.9999 12 21.9999C17.51 21.9999 22 17.5099 22 11.9999C22 6.48988 17.51 1.99988 12 1.99988ZM15.36 14.2999C15.65 14.5899 15.65 15.0699 15.36 15.3599C15.21 15.5099 15.02 15.5799 14.83 15.5799C14.64 15.5799 14.45 15.5099 14.3 15.3599L12 13.0599L9.7 15.3599C9.55 15.5099 9.36 15.5799 9.17 15.5799C8.98 15.5799 8.79 15.5099 8.64 15.3599C8.35 15.0699 8.35 14.5899 8.64 14.2999L10.94 11.9999L8.64 9.69988C8.35 9.40988 8.35 8.92988 8.64 8.63988C8.93 8.34988 9.41 8.34988 9.7 8.63988L12 10.9399L14.3 8.63988C14.59 8.34988 15.07 8.34988 15.36 8.63988C15.65 8.92988 15.65 9.40988 15.36 9.69988L13.06 11.9999L15.36 14.2999Z"
          fill="#292D32"
        />
      </svg>
    </div>
  );
}
export default DarkCloseButton;
