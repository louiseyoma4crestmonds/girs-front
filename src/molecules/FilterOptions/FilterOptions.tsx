import React, { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
import classnames from "classnames";
import styles from "./FilterOptions.module.css";

import timelineFilterIcon from "../../../public/icons/timelineFilterIcon.svg";

function FilterOptions() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [isFirstListOpen, setIsFirstListOpen] = useState<boolean>(false);
  const [isSecondListOpen, setIsSecondListOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Issue Created",
    "Issue Assigned",
    "Issue Resolved",
    "Issue Field Updated",
    "Complete Sprint",
  ];

  const handleOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleFirstOption = () => {
    setIsFirstListOpen(!isFirstListOpen);
  };
  const handleSecondOption = () => {
    setIsSecondListOpen(!isSecondListOpen);
  };

  useOnClickOutside(dropdownRef, () => setShowOptions(false));

  return (
    <div>
      <div
        className={styles.filterContainer}
        id="multiLevelDropdownButton"
        data-dropdown-toggle="dropdown"
        onClick={handleOptions}
        onKeyDown={handleOptions}
        role="button"
        tabIndex={0}
      >
        <Image src={timelineFilterIcon} width={18} height={18} />
        <span className={styles.filterContainerSpan}>Filter</span>
      </div>
      {showOptions && (
        <div
          ref={dropdownRef}
          className={styles.filterOptionsContainer}
          aria-labelledby="dropdown"
        >
          <ul aria-labelledby="multiLevelDropdownButton">
            <div
              className={styles.firstDropDownMenu}
              onClick={handleFirstOption}
              onKeyDown={handleFirstOption}
              role="button"
              tabIndex={0}
            >
              <button
                id="doubleDropdownButton"
                type="button"
                data-dropdown-toggle="doubleDropdown"
                className={styles.firstDropDownMenuButton}
              >
                By Activities
              </button>
              <svg
                className={classnames({
                  [styles.filterFirstMenuToggleButtonIcon]: true,
                  [styles.filterFirstMenuToggleButtonIconOpen]: isFirstListOpen,
                })}
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isFirstListOpen && (
              <div id="doubleDropdown">
                {options.map((option) => (
                  <ul
                    className={styles.firstMenu}
                    aria-labelledby="doubleDropdownButton"
                  >
                    <div className={styles.filterFirstList}>
                      <li>
                        <label htmlFor="checkbox-item-1">{option}</label>
                      </li>
                      <input
                        id="checkbox-item-1"
                        type="checkbox"
                        value=""
                        className={styles.filterCheckboxContainer}
                      />
                    </div>
                  </ul>
                ))}
              </div>
            )}
            <div
              className={styles.secondDropDownMenu}
              onClick={handleSecondOption}
              onKeyDown={handleSecondOption}
              role="button"
              tabIndex={0}
            >
              <button
                id="doubleDropdownButton2"
                type="button"
                data-dropdown-toggle="doubleDropdown2"
                className={styles.firstDropDownMenuButton}
              >
                Date Range
              </button>
              <svg
                className={classnames({
                  [styles.filterFirstMenuToggleButtonIcon]: true,
                  [styles.filterFirstMenuToggleButtonIconOpen]:
                    isSecondListOpen,
                })}
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isSecondListOpen && (
              <div id="doubleDropdown2" className={styles.secondListContainer}>
                <div>
                  <span className={styles.secondDropDownSpan}>
                    Please select a random range between 7 days or less
                  </span>
                  <div>
                    <span className={styles.filterSpan}>From</span>
                    <input
                      type="text"
                      name="text"
                      className={styles.filterInput}
                      placeholder="DD/MM/YY"
                    />
                  </div>
                  <div>
                    <span className={styles.filterSpan}>To</span>
                    <input
                      type="text"
                      name="text"
                      className={styles.filterInput}
                      placeholder="DD/MM/YY"
                    />
                  </div>
                  <div className={styles.filterButtonContainer}>
                    <button type="button" className={styles.filterButton}>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilterOptions;
