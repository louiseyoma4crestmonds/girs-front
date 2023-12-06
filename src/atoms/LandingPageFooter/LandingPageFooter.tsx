import Image from "next/image";
import { useRouter } from "next/router";

import whiteCrestlearn from "../../../public/icons/whiteCrestlearn.svg";
import facebook from "../../../public/icons/facebook.png";
import instagam from "../../../public/icons/instagam.png";
import twitter from "../../../public/icons/twitter.png";
import linkedin from "../../../public/icons/linkedin.png";
import styles from "./LandingPageFooter.module.css";
import Button from "../Button";

function LandingPageFooter() {
  const router = useRouter();
  return (
    <div className={styles.landingpageFooterContainer}>
      <div className={styles.landingpageInsideFooter}>
        <div>
          <div
            tabIndex={0}
            role="button"
            onKeyPress={() => {}}
            onClick={() => {
              router.push({ pathname: "/" });
            }}
            className="cursor-pointer text-white100 font-bold text-xl"
          >
            Cross River State
          </div>

          <p className={styles.landingpageFooterText}>The Peoples Paradise</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPageFooter;
