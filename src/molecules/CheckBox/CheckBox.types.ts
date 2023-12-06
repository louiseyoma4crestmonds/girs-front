export type CheckBoxVariant = "normal" | "inverted" | "invertedSmall";
export type CheckBoxOrientation = "fall" | "spread";

export type CheckBoxWidth = "normal" | "full";

export type CheckBoxProps = {
  checkBoxes: string[];
  variant?: CheckBoxVariant;
  orientation?: CheckBoxOrientation;
  width?: CheckBoxWidth;
  id?: string;
  getSelectedBox: (boxLabel: any) => void;
};
