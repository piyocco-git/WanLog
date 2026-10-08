// src/data/mockData.ts

import type {
  Pet,
  CareRecord,
  HealthRecord,
} from "@/types";

export const pet: Pet = {
  id: "pet-001",
  name: "コタロウ",
  nickname: "コタくん",
  breed: "柴犬",
  ageMonths: 29,
  condition: "元気いっぱい",
};

export const careRecords: CareRecord[] = [
  {
    id: "care-001",
    type: "meal",
    label: "ごはん（朝食）",
    time: "7:30",
    completedBy: "パパ",
  },
  {
    id: "care-002",
    type: "medicine",
    label: "おやつ（ご褒美）",
    time: "10:15",
    completedBy: "ママ",
  },
];

export const latestHealthRecord: HealthRecord = {
  id: "health-001",
  level: "warning",
  title: "ちょっと軟便気味",
  recordedAt: "昨日 21:00",
  description:
    "うんちがいつもより柔らかめでした。食欲や元気はバッチリあります。様子を見ます。",
};
