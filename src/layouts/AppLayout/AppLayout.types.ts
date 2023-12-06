export type AppLayoutProps = {
  noNavigation?: boolean;
  children: React.ReactNode;
  userData: any;
  packageOptionData: PackageData[];
  crestBalance?: number;
  setCrestBalance?: (arg: number) => void;
  setTimerLoaded: (arg: boolean) => void;
  timerLoaded: boolean;
  pageTitle: string;
  displayAchievementNotification?: boolean;
};

interface PackageData {
  map: any;
  cost: number;
  extra_days: number;
  id: number;
  package: number;
  payment_type: string;
}
