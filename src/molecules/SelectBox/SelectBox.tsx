import React, { useState } from "react";
import DropdownIcon from "../../atoms/Icons/DropdownIcon";
import { SelectBoxProps } from "./SelectBox.types";
import styles from "./SelectBox.module.css";

function AMMInput(props: SelectBoxProps) {
  /* Variable definitions. */
  const { id, getInputedValue, selectOptions, activeSelectOption } = props;

  const [showSelectDropDown, setShowSelectDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  useState(() => {
    console.log("active select option: ", activeSelectOption);
    if (activeSelectOption !== undefined && selectedOption === undefined) {
      setSelectedOption(activeSelectOption.toString());
    } else if (
      selectedOption !== undefined &&
      selectedOption !== activeSelectOption
    ) {
      setSelectedOption(selectedOption);
    }
  });

  /* Function definitions */
  const toggleShowSelectDropDown = () => {
    setShowSelectDropDown(!showSelectDropDown);
  };

  return (
    <div className="w-44 phone:w-full border border-crest-ash114 rounded py-3">
      <div className="h-8 space-y-4">
        <div
          className={styles.selectInput}
          tabIndex={0}
          id={id}
          role="button"
          onKeyDown={() => {}}
          onClick={toggleShowSelectDropDown}
        >
          <div className={styles.selectValue}>
            {selectedOption || selectOptions[0]}
          </div>
          <div className={styles.dropSouth}>
            <DropdownIcon dropped={showSelectDropDown} />
          </div>
        </div>
        <div
          id="dropdown_div"
          className={!showSelectDropDown ? "hidden" : styles.selectOptionsBlock}
        >
          {selectOptions !== undefined ? (
            selectOptions.map((selectOption) => (
              <div
                id={`${id}dropDown`}
                className={styles.selectOptions}
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                onClick={() => {
                  setSelectedOption(selectOption);
                  getInputedValue(selectOption);
                  toggleShowSelectDropDown();
                }}
              >
                <span
                  className={
                    selectedOption === selectOption ? "text-crest-black500" : ""
                  }
                >
                  {selectOption}
                </span>
              </div>
            ))
          ) : (
            <div>No selection</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AMMInput;
