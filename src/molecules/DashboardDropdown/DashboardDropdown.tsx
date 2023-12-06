import { useEffect, useState } from "react";
import classnames from "classnames";
import {
  FirstObjectiveDataType,
  SecondObjectiveDataType,
} from "src/services/dataTypeDefinition.type";
import LearningObjGraph from "../LearningObjGraph";
import LearningQuizGraph from "../LearningQuizGraph";
import LearningVideosGraph from "../LearningVideosGraph";

import styles from "./DashboardDropdown.module.css";

type DashboardDropdownProps = {
  selectedRadioBtn: string;
  secondLearningObjectives: SecondObjectiveDataType[];
  firstLearningObjectives: FirstObjectiveDataType[];
  //  userData: any;
  // objectiveIds: number;
};

function DashboardDropdown(props: DashboardDropdownProps) {
  const {
    selectedRadioBtn,
    firstLearningObjectives,
    //  userData,
    secondLearningObjectives,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    value: "Quiz",
    label: "Quiz",
  });

  const [objectiveGraph, setObjectiveGraph] = useState(false);
  const [quizGraph, setQuizGraph] = useState(false);
  const [videosGraph, setVideosGraph] = useState(false);

  const options = [
    { value: "quiz", label: "Quiz" },
    { value: "objective", label: "Objectives" },
    // { value: "videos", label: "Videos" },
  ];

  const handleDropdown = (e: any) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleSelect = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
  };

  // function that set the option that is being clicked to state
  const handleSelectedValue = (option: any) => {
    setSelectedValue(option);
  };
  // function to highlight which item is selected in the dropdown
  const isSelected = (option: any) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  useEffect(() => {
    const handler = () => setShowDropdown(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  /* eslint-disable */
  useEffect(() => {
    selectedValue?.label === "Objectives"
      ? setObjectiveGraph(true)
      : setObjectiveGraph(false);
    selectedValue?.label === "Quiz" ? setQuizGraph(true) : setQuizGraph(false);
    selectedValue?.label === "Videos"
      ? setVideosGraph(true)
      : setVideosGraph(false);
  });
  /* eslint-disable */

  return (
    <div>
      <div className="flex justify-end ">
        <div
          className="bg-[#FFFFFF] outline-none border-[#7B7B7B] border text-[#262626] text-xl phone:text-sm rounded-lg font-medium flex justify-between px-3.5 items-center w-[160px] py-1.5  "
          onClick={handleDropdown}
          id="dropdown"
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {handleSelect()}
          <svg
            className={classnames({
              [styles.dashboardDropdownToggle]: true,
              [styles.dashboardDropdownToggle]: showDropdown,
            })}
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.188 1.33188L8.89669 6.62321C8.27179 7.2481 7.24923 7.2481 6.62434 6.62321L1.33301 1.33188"
              stroke="#9D9D9D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {showDropdown && (
        <div className="flex justify-end ">
          <div
            className="bg-[#434343] w-[160px] absolute rounded z-10  "
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            {options.map((option) => (
              <div
                key={option.value}
                id={option.value}
                onClick={() => handleSelectedValue(option)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
                className={`" border-b-[#F5F5F5] border-b text-[#F5F5F5] text-sm font-normal text-center py-2 rounded cursor-pointer " ${
                  isSelected(option) && "bg-[#7B7B7B] "
                }`}
              >
                {" "}
                {option.label}{" "}
              </div>
            ))}
          </div>
        </div>
      )}

      {objectiveGraph && (
        <LearningObjGraph
          selectedRadioBtn={selectedRadioBtn}
          firstLearningObjectives={firstLearningObjectives}
          secondLearningObjectives={secondLearningObjectives}
        />
      )}
      {quizGraph && (
        <LearningQuizGraph
          selectedRadioBtn={selectedRadioBtn}
          firstLearningObjectives={firstLearningObjectives}
          secondLearningObjectives={secondLearningObjectives}
        />
      )}
      {videosGraph && (
        <LearningVideosGraph selectedRadioBtn={selectedRadioBtn} />
      )}
    </div>
  );
}

export default DashboardDropdown;
