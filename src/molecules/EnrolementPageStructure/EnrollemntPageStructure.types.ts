export type EnrollmentFormVariant = "primary" | "secondary";

export type EnrollmentFormWidth = "normal" | "full";

export type EnrollmentFormProps = {
  variant?: EnrollmentFormVariant;
  width?: EnrollmentFormWidth;
  pageTitle: string;
  summary: string;
  // submitEnrollment: (status: string) => void;
  // getEnrollmentFormData: (data: {}) => void;
  children?: React.ReactNode;
};
