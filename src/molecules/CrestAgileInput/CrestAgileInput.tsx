import { useState } from "react";
import classNames from "classnames";
import SelectInputDropdownArrow from "@/atoms/Icons/SelectInputDropdownArrow";
import { CrestAgileInputProps } from "./CrestAgileInput.types";
import styles from "./CrestAgileInput.module.css";

function CrestAgileInput(props: CrestAgileInputProps) {
  /* Variable definitions */
  const {
    variant = "primary",
    width = "normal",
    height = "medium",
    label,
    id,
    disabled,
    required = true,
    countryCode,
    placeholder,
    value,
    getInputedValue,
    selectOptions,
  } = props;
  const crestAgileInputClassName = classNames({
    [styles.crestAgileInput]: true,
    [styles.fullWidth]: width === "full",
    [styles.normalWidth]: width === "normal",
    [styles.middleWidth]: width === "middle",
    [styles.smallHeight]: height === "small",
    [styles.mediumHeight]: height === "medium",
    [styles.largeHeight]: height === "large",
    [styles.disabled]: disabled === true,
  });

  const [showSelectDropDown, setShowSelectDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  /* Function definitions */
  const toggleShowSelectDropDown = () => {
    setShowSelectDropDown(!showSelectDropDown);
  };

  return (
    <div>
      <div className="flex gap-1 text-xl text-crest-black">
        <div>{label}</div>
        <div className={required ? "text-crest-red" : "hidden"}>*</div>
      </div>
      <div>
        {variant === "text" ? (
          <input
            required={required}
            className={crestAgileInputClassName}
            placeholder={placeholder}
            type="text"
            value={value}
            id={id}
            onChange={(event) => {
              getInputedValue(event.target.value);
            }}
          />
        ) : variant === "password" ? (
          <input
            className={crestAgileInputClassName}
            placeholder={placeholder}
            id={id}
            type="password"
            required={required}
            onChange={(event) => {
              getInputedValue(event.target.value);
            }}
          />
        ) : variant === "email" ? (
          <input
            id={id}
            className={crestAgileInputClassName}
            placeholder={placeholder}
            type="email"
            value={placeholder !== " " ? placeholder : value}
            required={required}
            disabled={disabled}
            onChange={(event) => {
              getInputedValue(event.target.value);
            }}
          />
        ) : variant === "select" ? (
          <div>
            <div
              tabIndex={0}
              id={id}
              role="button"
              onKeyPress={() => {}}
              onClick={toggleShowSelectDropDown}
              className={
                crestAgileInputClassName +
                " flex justify-between cursor-pointer"
              }
            >
              <input
                className={styles.selectVariant}
                id={id}
                placeholder={placeholder}
                value={selectedOption}
                // required={required}
              />
              <div className="self-center cursor-pointer">
                <SelectInputDropdownArrow />
              </div>
            </div>
            <div
              id="dropdown_div"
              className={
                !showSelectDropDown
                  ? "hidden"
                  : "h-64 text-base text-crest-gray100 bg-crest-ash110 overflow-y-scroll"
              }
            >
              {selectOptions !== undefined ? (
                selectOptions.map((selectOption) => (
                  <div
                    className="border p-1 cursor-pointer"
                    tabIndex={0}
                    role="button"
                    onKeyPress={() => {}}
                    onClick={() => {
                      setSelectedOption(selectOption);
                      getInputedValue(selectOption);
                      toggleShowSelectDropDown();
                    }}
                  >
                    {selectOption}
                  </div>
                ))
              ) : (
                <div>No select values provided</div>
              )}
            </div>
          </div>
        ) : variant === "phone" ? (
          <div className={crestAgileInputClassName + " flex"}>
            <div className="self-center w-16 text-crest-black300">
              {countryCode} |
            </div>
            <input
              className="self-center w-full outline-none bg-crest-ash110"
              placeholder={placeholder}
              id={id}
              required={required}
              type="tel"
              onChange={(event) => {
                getInputedValue(event.target.value);
              }}
            />
          </div>
        ) : variant === "submit" ? (
          <input
            className={
              crestAgileInputClassName + " cursor-pointer bg-crest-black"
            }
            type="submit"
            id={id}
            required={required}
            value="submit"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CrestAgileInput;
