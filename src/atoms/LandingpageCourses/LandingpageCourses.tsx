import Image from "next/image";
import { LandingpageCoursesProps } from "./LandingpageCourses.types";

import styles from "./LandingpageCourses.module.css";

function LandingpageCourses(props: LandingpageCoursesProps) {
  const { image, title, desc } = props;
  return (
    <div className={styles.landingpageCoursesContainer}>
      <Image src={image} />
      <div className={styles.landingpageCoursesTitle}> {title} </div>
      <div className={styles.landingpageCoursesDesc}> {desc} </div>
    </div>
  );
}

export default LandingpageCourses;
