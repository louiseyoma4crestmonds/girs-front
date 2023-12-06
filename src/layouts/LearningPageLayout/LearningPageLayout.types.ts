export type LearningPageProps = {
  children: React.ReactNode;
  userNotes: any;
  userData: any;
  title: string;
  nextTitle: string;
  backToQuiz: () => void;
  startQuiz: () => void;
  currentObjectiveId: string;
};
