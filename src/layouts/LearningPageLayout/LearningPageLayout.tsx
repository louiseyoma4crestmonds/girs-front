import { useState, useEffect } from "react";
import Image from "next/future/image";

import Button from "@/atoms/Button";
import CrestlearnNavArea from "@/molecules/CrestlearnNavArea";
import LearningSideNote from "@/molecules/LearningSideNote";
import { getCrestCoins, getScore, getBadge } from "src/pages/api/user";
import { LearningPageProps } from "./LearningPageLayout.types";
import styles from "./LearningPageLayout.module.css";

function LearningPageLayout(props: LearningPageProps): JSX.Element {
  const [navBarRightStyle, setNavBarRightStyles] = useState("phone:invisible");
  const [navBarLeftStyle, setNavBarLeftStyles] = useState("phone:visible");
  const [videoButtonStyle, setVideoButtonStyles] = useState(
    "border-b border-crest-red text-crest-red"
  );
  const [noteButtonStyle, setNoteButtonStyles] = useState(
    "opacity-50 text-crest-gray-dark border-b border-crest-background  "
  );
  const {
    children,
    userData,
    userNotes,
    title,
    nextTitle,
    backToQuiz,
    startQuiz,
    currentObjectiveId,
  } = props;

  const [notesVisible, setNotesVisible] = useState(false);

  const [userScore, setUserScore] = useState<number>(
    userData?.data[0].user.score || 0
  );
  const [userBadge, setUserBadge] = useState<number>(
    userData?.data[0].user.badge || 0
  );
  const [userCrestCoin, setUserCrestcoin] = useState<number>(
    userData?.data[0].user.crest_coins || 0
  );

  const [userName, setUserName] = useState<string>(
    `${userData?.data[0].user.first_name || ""} ${
      userData?.data[0].user.last_name || ""
    }`
  );
  const [userRole, setUserRole] = useState<string>(
    userData?.data[0].user.role || ""
  );

  const JourneyTitle =
    userData?.data[0].user.learning_progress.learning_journey;

  useEffect(() => {
    getCrestCoins(userData?.data[0].user.email, userData?.data[0].token).then(
      (res) => {
        setUserCrestcoin(res.data.data.total_coins);
      }
    );
    getScore(userData?.data[0].user.email, userData?.data[0].token).then(
      (res) => {
        setUserScore(res.data.data.total_score);
      }
    );
    getBadge(userData?.data[0].user.email, userData?.data[0].token).then(
      (res) => {
        setUserBadge(res.data.data.badge);
      }
    );
    setUserName(
      `${userData?.data[0].user.first_name || ""} ${
        userData?.data[0].user.last_name || ""
      }`
    );
    setUserRole(userData?.data[0].user.role);
  }, [userScore, userBadge]);

  const switchPane = (noteSwitch: string) => {
    if (noteSwitch === "note") {
      setNotesVisible(true);
      setNoteButtonStyles("border-b border-crest-red text-crest-red");
      setVideoButtonStyles("border-b opacity-50 text-crest-gray-dark");
      setNavBarRightStyles("phone:visible");
      setNavBarLeftStyles("phone:invisible ");
    } else {
      setNotesVisible(false);
      setNoteButtonStyles("border-b opacity-50 text-crest-gray-dark");
      setVideoButtonStyles("border-b border-crest-red text-crest-red");
      setNavBarRightStyles("phone:invisible");
      setNavBarLeftStyles("phone:visible");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("downloadConfirmed") === "confirmed") {
      localStorage.removeItem("pendingDownload");
      localStorage.removeItem("downloadConfirmed");
    }
  }, []);

  return (
    <div className={styles.mainFrame}>
      <div className={styles.titleArea}>
        <div className={styles.titleBar}>
          <Image
            src="/icons/backArrowLearning.svg"
            width={25}
            height={21}
            alt="<"
            className="cursor-pointer"
            onClick={backToQuiz}
          />
          <div className="flex flex-col ml-4">
            <div className="w-full">
              {JourneyTitle.charAt(0).toUpperCase() +
                JourneyTitle.slice(1).toLowerCase() +
                " "}
              Learning Journey
            </div>
            <div className="w-full text-2xl font-bold text-crest-red">
              {title}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <CrestlearnNavArea
            userScore={userScore}
            userBadge={userBadge}
            userCrestCoin={userCrestCoin}
            userName={userName}
            userRole={userRole}
          />
        </div>
      </div>
      <div className={styles.middlePane}>
        <div className={styles.navBar}>
          <div
            className={`${styles.watchVideoClick} ${videoButtonStyle}`}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              switchPane("video");
            }}
            onClick={() => {
              switchPane("video");
            }}
          >
            Watch Video
          </div>
          <div
            className={`${styles.updateNoteClick} ${noteButtonStyle}`}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              switchPane("note");
            }}
            onClick={() => {
              switchPane("note");
            }}
          >
            Notes
          </div>
        </div>

        <div className={`${styles.leftFrame} ${navBarLeftStyle}`}>
          {children}
        </div>
        {notesVisible && (
          <div className={`${styles.rightFrame2} ${navBarRightStyle}`}>
            {currentObjectiveId !== null ? (
              <LearningSideNote
                userNotes={userNotes}
                userData={userData}
                currentObjectiveId={Number(currentObjectiveId)}
              />
            ) : null}
          </div>
        )}
        <div className={`${styles.rightFrame} ${navBarRightStyle}`}>
          {currentObjectiveId !== null ? (
            <LearningSideNote
              userNotes={userNotes}
              userData={userData}
              currentObjectiveId={Number(currentObjectiveId)}
            />
          ) : null}
        </div>
      </div>

      {notesVisible ? null : (
        <div className={styles.bottomArea}>
          <div className="flex justify-center ml-[40px] mr-[40px] phone:mx-2 ">
            <div className=" w-full  bg-crest-white rounded py-7 px-5 phone:flex phone:flex-col phone:px-0 ">
              <div className="flex flex-row justify-between w-full items-center phone:flex-col phone:items-start phone:space-y-4 ">
                <div className="flex flex-col phone:mx-4">
                  <div className=" flex gap-1 items-center ">
                    <span className="text-crest-red text-lg font-bold phone:text-sm ">
                      Whats next?
                    </span>
                    <Image
                      src="/images/information-line.svg"
                      width={20}
                      height={20}
                      alt="information"
                    />{" "}
                  </div>
                  <div className="text-2xl font-bold text-crest-black">
                    {nextTitle}
                  </div>
                </div>
                <div className="phone:w-full">
                  <Button
                    variant="primary"
                    color="deepOrange"
                    width="full"
                    onClick={startQuiz}
                  >
                    <p
                      className="px-6 text-lg font-medium phone:flex phone:justify-center phone:w-full phone:text-xl"
                      id="learngingNextButton"
                    >
                      Start Quiz
                    </p>
                  </Button>
                </div>
              </div>
              <div className="mt-6 ">
                <div className="bg-[#F5F5F5] rounded-lg py-5 px-4 ">
                  <p className="text-[#3C3C3C] font-normal text-[23px] mb-2 phone:text-lg ">
                    Ready to assess your understanding of this objective? Take
                    the quiz and test your knowledge.
                  </p>
                  <ul className="text-[#606060] font-normal text-lg list-disc px-8 leading-9 phone:text-base phone:space-y-4 ">
                    <li>
                      The quiz may include multiple-choice and/or open-ended
                      questions.
                    </li>

                    <li>
                      Immediate feedback will be provided after you submit your
                      answers.
                    </li>
                    <li>
                      You can review your answers and repeat the objective if
                      the quiz is failed.
                    </li>
                    <li>
                      Successfully completing the quiz will unlock the next
                      objective in your learning journey.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LearningPageLayout;
