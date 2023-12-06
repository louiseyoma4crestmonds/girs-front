import { useState } from "react";
import Button from "@/atoms/Button";
import Heading from "@/atoms/Heading";
import { TermsProps } from "@/molecules/FreeUserTermsAndConditions/FreeUserTermsAndConditions.types";
import styles from "./FreeUserTermsAndConditions.module.css";
import CheckBox from "../CheckBox";

function FreeUserTermsAndConditions(props: TermsProps): JSX.Element {
  const [notAccepted, setNotAccepted] = useState<boolean>(true);

  const { setTermsAndConditionsStatus } = props;
  return (
    <div className="py-6 px-6">
      <div className={styles.frame}>
        <div className={styles.innerFrame}>
          <div className="w-full mb-12">
            <div className="text-center">
              <Heading Tag="h3" variant="md">
                Terms and Conditions
              </Heading>{" "}
            </div>
          </div>
          <div className={styles.bodyText}>
            <div>These Terms govern</div>
            <ul className={styles.listDisc}>
              <li>the use of this Application, and,</li>
              <li>
                any other related Agreement or legal relationship with the Owner
                in a legally binding way. Capitalized words are defined in the
                relevant dedicated section of this document.
              </li>
            </ul>

            <div className={styles.divider} />

            <div className={styles.topMargin} />
            <div className={styles.heading}>Account registration</div>
            <div>
              To use the Service, Users must register or create a User account,
              providing all required data or information in a complete and
              truthful manner.
            </div>
            <div>
              Failure to do so will cause unavailability of the Service.
            </div>
            <div className={styles.topMargin} />
            <div>
              Users are responsible for keeping their login credentials
              confidential and safe. For this reason, Users are also required to
              choose passwords that meet the highest standards of strength
              permitted by this Application. By registering, Users agree to be
              fully responsible for all activities that occur under their
              username and password. Users are required to immediately and
              unambiguously inform the Owner via the contact details indicated
              in this document, if they think their personal information,
              including but not limited to User accounts, access credentials or
              personal data, have been violated, unduly disclosed or stolen.
            </div>
            <div className={styles.topMargin} />

            <div className={styles.topMargin} />
            <div className={styles.topMargin} />
            <div className="flex gap-2">
              <div
                id="acceptTermsCheckBox"
                className="self-center"
                tabIndex={0}
                role="button"
                onKeyPress={() => {}}
                onClick={() => {
                  setNotAccepted(!notAccepted);
                }}
              >
                <CheckBox
                  checkBoxes={[
                    "I have read and fully accept the terms and conditions.",
                  ]}
                  variant="normal"
                  orientation="spread"
                  getSelectedBox={() => {}}
                />
              </div>
            </div>
            <div className="flex justify-between mt-12 phone:flex-col gap-y-4">
              <div
                tabIndex={0}
                role="button"
                onKeyPress={() => {}}
                onClick={() => {
                  setTermsAndConditionsStatus("abort");
                }}
                className="phone:w-full tablet:w-2/12 laptop:w-2/12 desktop:w-2/12"
              >
                <Button width="full" variant="secondary">
                  <div className="w-full text-center">Back</div>
                </Button>
              </div>
              <div
                tabIndex={0}
                role="button"
                onKeyPress={() => {}}
                onClick={() => {
                  setTermsAndConditionsStatus(notAccepted.toString());
                }}
                className="phone:w-full tablet:w-4/12 laptop:w-4/12 desktop:w-4/12"
              >
                <Button disabled={notAccepted} width="full" variant="orange">
                  <div id="acceptTerms" className="w-full text-center">
                    Accept Terms & Proceed
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FreeUserTermsAndConditions;
