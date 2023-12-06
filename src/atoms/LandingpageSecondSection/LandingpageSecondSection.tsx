import Image from "next/image";

import firstgif from "../../../public/icons/firstgif.gif";
import secondgif from "../../../public/icons/secondgif.gif";
import thirdgif from "../../../public/icons/thirdgif.gif";
import line from "../../../public/icons/line.png";
import line2 from "../../../public/icons/line2.png";
import styles from "./LandingpageSecondSection.module.css";

function LandingpageSecondSection() {
  return (
    <div className="mt-32 ">
      <div className={styles.landingpageSecondSectionContainer}>
        <div className={styles.landingpageSecondSectionLeft}>
          <p className={styles.landingpageSecondSectionTitle}>
            Learn in building blocks
          </p>
          <p className={styles.landingpageSecondSectionText}>
            we have a beautifully customized learning journey that tracks your
            progress and helps you feel a sense of acomplishment with every step
          </p>
        </div>
        <div className={styles.landingpageSecondSectionRight}>
          <Image src={firstgif} />
        </div>
      </div>

      <div className={styles.landingpageSecondSectionLine}>
        <Image src={line} />
      </div>

      <div className={styles.landingpageSecondSectionContainer2}>
        <div className={styles.landingpageSecondSectionRight2}>
          <Image src={secondgif} />
        </div>
        <div className={styles.landingpageSecondSectionLeft2}>
          <p className={styles.landingpageSecondSectionTitle2}>
            Learn from the Best Agile and Scrum Professionals
          </p>
          <p className={styles.landingpageSecondSectionText2}>
            You get to learn core principles from top agile experts, all at your
            own pace!!
          </p>
        </div>
      </div>

      <div className={styles.landingpageSecondSectionLine}>
        <Image src={line2} />
      </div>

      <div className={styles.landingpageSecondSectionContainer}>
        <div className={styles.landingpageSecondSectionLeft}>
          <p className={styles.landingpageSecondSectionTitle}>
            Keep track of how ‘Agile’ you are
          </p>
          <p className={styles.landingpageSecondSectionText}>
            Our efficient system of tests, tasks and quizzes make sure you put
            your knowledge to the test and get rewarded too.
          </p>
        </div>
        <div className={styles.landingpageSecondSectionRight}>
          <Image src={thirdgif} />
        </div>
      </div>
    </div>
  );
}

export default LandingpageSecondSection;
