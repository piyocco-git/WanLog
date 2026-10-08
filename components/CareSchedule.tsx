import { CareRecord } from "@/types";
import { CareScheduleItem } from "./CareScheduleItem";

type Props = {
  items: CareRecord[];
};

export function CareSchedule({ items }: Props) {
  return (
    <section>
      <h2>さいごのお世話</h2>

      <div>
        {items.map((item) => (
          <CareScheduleItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
