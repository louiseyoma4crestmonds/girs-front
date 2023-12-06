export type CrestAgileInputVariant =
  | "text"
  | "password"
  | "email"
  | "phone"
  | "select"
  | "submit";

export type CrestAgileInputWidth = "normal" | "full" | "middle";
export type CrestAgileInputHeight = "small" | "medium" | "large";

export type CrestAgileInputProps = {
  variant?: CrestAgileInputVariant;
  width?: CrestAgileInputWidth;
  height?: CrestAgileInputHeight;
  disabled?: boolean;
  selectOptions?: any[];
  required?: boolean;
  label?: string;
  value?: string;
  id?: string;
  countryCode?: number;
  placeholder?: string;
  getInputedValue: (inputedValue: any) => void;
};
