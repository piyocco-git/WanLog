export type Pet = {
  id: string;
  name: string;
  nickname: string;
  breed: string;
  ageMonths: number;
  condition: string;
};

export type DailyStatus = {
  completed: number;
  total: number;
};

export type CareRecord = {
  id: string;
  type: "meal" | "medicine" | "walk" | "toilet";
  label: string;
  time: string;
  completedBy: string;
};

export type HealthRecord = {
  id: string;
  level: "normal" | "warning" | "danger";
  title: string;
  recordedAt: string;
  description: string;
};


export type BottomNavigationItemProps = {
  item: {
    label: string;
    href: string;
    icon: string;
  };
};
