import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import GL from "../../../public/icons/waterPark.png";
import tick from "../../../public/icons/tick.png";
import Button from "../Button";
import styles from "./LandingpageFirstSection.module.css";

function LandingpageFirstSection() {
  return (
    <div className={styles.landingpageFirstsectionContainer}>
      <div className={styles.landingpageFirstsectionLeft}>
        <div className={styles.landingpageFirstsectionTitle}>
          Destination Cross River
        </div>
        <p className={styles.landingpageFirstsectionText}>
          The easiest way to locate all the tourist sites in Calabar Metropolis
        </p>

        <div>
          <div className="flex gap-2 phone:flex-col ">
            <Button
              id="signIn"
              onClick={() => {
                Router.replace("/sign-in");
              }}
              variant="primary"
              color="purpleSecondary"
            >
              <span className="w-full text-center">Get directions</span>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.landingpageFirstsectionRight}>
        <Image src={GL} />
      </div>
    </div>
  );
}

export default LandingpageFirstSection;
