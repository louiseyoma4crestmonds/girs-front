import Router from "next/router";
import Button from "../Button";
import styles from "./LandingpageThirdSection.module.css";

function LandingpageThirdSection() {
  return (
    <div className={styles.landingpageThirdSectionContainer}>
      <span className={styles.landingpageThirdSectionText}>Are you ready?</span>
      <p className={styles.landingpageThirdSectionSpan}>
        Start your learning journey now!
      </p>
      <div className="flex gap-4 place-content-center">
        <Button
          onClick={() => {
            Router.push({ pathname: "/registration/freeUser" });
          }}
          variant="primary"
          color="deepOrange"
          width="large"
        >
          <span className="w-full text-center">Enjoy the Free Trial</span>
        </Button>
        <Button
          onClick={() => {
            Router.replace("/sign-in");
          }}
          variant="primary"
          color="deepOrangeSecondary"
          width="large"
        >
          <span className="w-full text-center">Sign-in to dashboard</span>
        </Button>
      </div>
    </div>
  );
}

export default LandingpageThirdSection;
