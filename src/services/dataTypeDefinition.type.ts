export type LoginProps = {
  userData: any;
  packageOptionData: PackageData[];
};

export type ObjectiveDataType = {
  attempts: number;
  coins_earned: number;
  id: string;
  learning_objective: {
    duration: string;
    has_children: boolean;
    id: number;
    learning_journey: string;
    objective_class: string;
    title: string;
    weight: number;
  };
  progress_status: string;
  right_quiz_answers: number;
  score: number;
  stars: string;
  wrong_quiz_answers: number;
};

export type FirstObjectiveDataType = {
  progress_status: string;
  attempts: number;
  learning_objective: {
    title: string;
    id: number;
    learning_journey: string;
    // duration: string
    // has_children: boolean
    // objective_class: string
  };
  score: number;
  stars: string;
  coins_earned: number;
  id: string;
  journey: string;
};
export type SecondObjectiveDataType = {
  progress_status: string;
  attempts: number;
  learning_objective: {
    title: string;
    id: number;
    learning_journey: string;
    // duration: string
    has_children?: boolean;
    // objective_class: string
  };
  score: number;
  stars: string;
  coins_earned: number;
  id: string;
  journey: string;
};

export type AllObjectiveDataType = {
  data: ObjectiveDataType[];
  data2: FirstObjectiveDataType[];
};

export interface PackageData {
  map: any;
  cost: number;
  extra_days: number;
  id: number;
  package: number;
  payment_type: string;
}
export type MyNotesProps = {
  userData: any;
  userNotes: any;
};

export type MyNotesProps1 = {
  userNotes: any;
  userData: any;
  packageOptionData: PackageData[];
};

export type CookiesPolicyType = {
  setDisplayCookiesPolicy: (arg: boolean) => void;
  setRegisterCookies: (arg: boolean) => void;
  setDisplayPolicyPopup: (arg: boolean) => void;
  setCookiesState: (arg: string) => void;
};

export type ProgressBarType = {
  completedObjective: number;
  objectiveLegth: number;
};
export type ProgressBarTypeDashboard = {
  completedObjective: number;
  objectiveLegth: number;
  notStartedObjective: number;
  inProgressObjective: number;
  completedObjectiveSpec: number;
  notStartedObjectiveSpec: number;
  inProgressObjectiveSpec: number;
  objectiveLengthSpec: number;
  userData: any;
};
export type QuizData = {
  coin_reward: number;
  id: number;
  duration: number;
  pass_mark: number;
  module: number;
  quiz_title: string;
};

export type UserDataProps = {
  token: string;
  user: {
    badge: number;
    email: string;
    first_name: string;
    group: string;
    is_first_time: boolean;
    last_name: string;
    learning_progress: {
      actual_objective_id: number;
      learning_journey: string;
      users_active_learning_objective: number;
    };
    middle_name: string;
    mobile_number: string;
    personal_email: string;
    profile_image: string;
    role: string;
    score: number;
  };
};

export type ChildObjectiveProps = {
  id: number;
  progress_status: string;
  score: number;
  stars: string;
  coins_earned: number;
  attempts: number;
  module: {
    id: number;
    title: string;
    weight: number;
    duration: string;
    objective: {
      id: number;
      title: string;
      weight: number;
      duration: string;
      learning_journey: string;
      objective_class: string;
      has_children: boolean;
    };
  };
  right_quiz_answers: number;
  wrong_quiz_answers: number;
};

export interface IUserVideos {
  id: number;
  isDisliked: boolean;
  isFavourite: boolean;
  isLiked: boolean;
  isSubbested: boolean;
  status: string;
  user: { group: string; role: string };
  video: {
    category: string;
    duration: string;
    free: boolean;
    id: number;
    likes: number;
    producer: string;
    source: string;
    thumbnail: string;
    title: string;
    totalViews: number;
  };
}
