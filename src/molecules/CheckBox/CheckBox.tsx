import { useState } from "react";
import classNames from "classnames";
import { CheckBoxProps } from "./CheckBox.types";
import styles from "./CheckBox.module.css";

function CheckBox(props: CheckBoxProps) {
  const {
    checkBoxes = [],
    width,
    variant,
    orientation = "fall",
    getSelectedBox,
  } = props;

  const checkBoxClassName = classNames({
    [styles.checkBoxFullWidth]: width === "full",
    [styles.checkBoxNormalWidth]: width === "normal",
    [styles.normalCheckBox]: variant === "normal",
    [styles.invertedCheckBox]: variant === "inverted",
    [styles.invertedSmallCheckBox]: variant === "invertedSmall",
  });

  const [activeBox, setActiveBox] = useState(1000);

  const selectCheckBox = (indexOfSelectedBox: number, box: any) => {
    if (activeBox !== indexOfSelectedBox) {
      setActiveBox(indexOfSelectedBox);
      getSelectedBox(box);
    } else {
      setActiveBox(100000);
      getSelectedBox(undefined);
    }
  };

  return (
    <div className={orientation === "spread" ? "flex flex-row" : ""}>
      {checkBoxes.map((box) => (
        <div
          key={box}
          className={checkBoxClassName}
          tabIndex={0}
          role="button"
          onKeyPress={() => {}}
          onClick={() => {
            selectCheckBox(checkBoxes.indexOf(box), box);
          }}
        >
          <div className="w-4 h-4 self-center">
            <div
              className={
                activeBox === checkBoxes.indexOf(box)
                  ? styles.activeCheckBox
                  : styles.checkBox
              }
            />
          </div>

          <div id={box} className={styles.label}>
            {box}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
