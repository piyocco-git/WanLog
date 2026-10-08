
import { Header } from "@/components/Header";
import { PetProfileCard } from "@/components/PetProfileCard";
import { QuickRecordButton } from "@/components/QuickRecordButton";
import { CareSchedule } from "@/components/CareSchedule";
import { HealthRecordCard } from "@/components/HealthRecordCard";
import { BottomNavigation } from "@/components/BottomNavigation";

import {
  pet,
  careRecords,
  latestHealthRecord,
} from "@/data/mockData";

export default function HomePage() {
  return (
    <div className="app">
      <Header />

      <main className="home-content">
        <PetProfileCard pet={pet} />

        <QuickRecordButton />


        <CareSchedule items={careRecords} />

        <HealthRecordCard
          record={latestHealthRecord}
        />
      </main>

      <BottomNavigation />
    </div>
  );
}
