import Image from "next/image";
import Link from "next/link";
import Button from "@/atoms/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import crestLogo from "../../../public/icons/crestLogo.svg";
import menuIcon from "../../../public/icons/menuIcon.svg";
import styles from "./LandingpageNav.module.css";

function LandingpageNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.landingpageNavContainer}>
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => {}}
        onClick={() => {
          router.push({ pathname: "/" });
        }}
        className="cursor-pointer"
      >
        <div className="text-xl font-bold">Cross River State</div>
        <div className="text-primaryTwo500">
          Tourist Geographic Information Retrieval System
        </div>
      </div>

      <div
        className={styles.landingpageNavMenu}
        onClick={handleOpen}
        onKeyDown={handleOpen}
        role="button"
        tabIndex={0}
      >
        <Image src={menuIcon} width={30} height={30} />
      </div>

      <div
        className={`flex gap-12 items-baseline phone:block phone:absolute phone:bg-crest-white phone:w-[92%] phone:py-5 phone:pl-5 tablet:mt-5 laptop:mt-0 ${
          open ? "mt-0 absolute" : "-mt-[300px]  "
        }  `}
      >
        <div className={styles.landingpageNavBtnContainer}>
          <Link href="/sign-in">
            <Button variant="primary" color="purple">
              Get directions now !!
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default LandingpageNav;
