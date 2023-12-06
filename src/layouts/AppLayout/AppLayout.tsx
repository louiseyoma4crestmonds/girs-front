import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/future/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Router from "next/router";

import CrestlearnNavArea from "@/molecules/CrestlearnNavArea";
import PageTitle from "@/atoms/PageTitle";
import NavigationNotification from "@/atoms/NavigationNotification";

import { getCrestCoins, getScore, getBadge, getUser } from "src/pages/api/user";

import CountdownTimer from "../../molecules/CountdownTimer";
import { AppLayoutProps } from "./AppLayout.types";
import styles from "./AppLayout.module.css";
import menuIcon from "../../../public/icons/menuIcon.svg";

const Navigation = dynamic(() => import("@/molecules/Navigation"));

function AppLayout(props: AppLayoutProps): JSX.Element {
  const { status } = useSession();

  const {
    noNavigation = false,
    children,
    userData,
    packageOptionData,
    setTimerLoaded,
    timerLoaded,
    pageTitle,
    displayAchievementNotification,
  } = props;

  const [open, setOpen] = useState(false);
  const [score, setScore] = useState<any>();
  const [badge, setBadge] = useState<any>();
  const [coins, setCoins] = useState<number>(0);
  const [usersName, setUsersName] = useState<any>();
  const [role, setRole] = useState<any>();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const mainClassName = classNames({
    [styles.appMainWrapperWithNavigation]: !noNavigation,
  });

  const sessionEmail: string = userData?.data[0].user.email;
  const sessionToken: string = userData?.data[0].token;

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/sign-in");
    }
  }, [status]);

  useEffect(() => {
    if (localStorage.getItem("downloadConfirmed") === "confirmed") {
      localStorage.removeItem("pendingDownload");
      localStorage.removeItem("downloadConfirmed");
    }
  }, []);

  useEffect(() => {
    getCrestCoins(sessionEmail, sessionToken).then((res) => {
      setCoins(res.data.data.total_coins);
    });
    getScore(sessionEmail, sessionToken).then((res) => {
      setScore(res.data.data.total_score);
    });
    getBadge(sessionEmail, sessionToken).then((res) => {
      setBadge(res.data.data.badge);
    });
    getUser(sessionEmail, sessionToken).then((res) => {
      setUsersName(
        res.data.data[0].first_name + " " + res.data.data[0].last_name
      );
      setRole(res.data.data[0].role);
    });
  }, [sessionEmail, sessionToken]);

  if (status === "authenticated") {
    return (
      <div className={styles.appWrapper}>
        <PageTitle title={"CrestLearn-" + pageTitle} />
        <div
          className={`${
            open === true ? `${styles.isOpen} ` : `${styles.isOpenFalse}`
          }`}
        >
          {!noNavigation ? (
            <Navigation
              setOpen={setOpen}
              timerLoaded={timerLoaded}
              userData={userData.data}
              displayAchievementNotification={displayAchievementNotification}
            />
          ) : null}
        </div>

        <div className={styles.navTop}>
          <Link href="/">
            <a className={styles.sidebarBrand}>
              <Image
                src="/logo-light.svg"
                alt="Crest Learn"
                width={166}
                height={37}
              />
            </a>
          </Link>
          <div
            id="menuIcon"
            className="laptop:hidden relative"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            role="button"
            tabIndex={0}
          >
            <Image src={menuIcon} width={30} height={30} alt="menu" />
            {displayAchievementNotification === true && open === false ? (
              <span className="absolute top-0 right-0">
                <NavigationNotification />
              </span>
            ) : null}
          </div>
        </div>
        <main className={mainClassName}>
          <div className={styles.counterOutter1}>
            <div className={styles.counterOutter}>
              <div className="h-full w-full mb-4">
                <CountdownTimer
                  userData={userData}
                  packageOptionData={packageOptionData}
                  crestBalance={coins}
                  setCrestBalance1={setCoins}
                  setTimerLoaded={setTimerLoaded}
                  pageTitle={pageTitle}
                />
              </div>
            </div>

            <div className="w-[50%]">
              {timerLoaded === true ? (
                <CrestlearnNavArea
                  userScore={score}
                  userBadge={badge}
                  userCrestCoin={coins}
                  userName={usersName}
                  userRole={role}
                />
              ) : null}
            </div>
          </div>
          {children}
        </main>
      </div>
    );
  }
  return <div> loading..............</div>;
}

export default AppLayout;
