import { CareRecord } from "@/types";
type Props = {
  item: CareRecord;
};

export function CareScheduleItem({ item }: Props) {
  return (
    <div className="care-item">
      <div>
        <span>◷</span>
        <span>{item.label}</span>
      </div>

      <strong>
        {item.time}（{item.completedBy}が完了）
      </strong>
    </div>
  );
}
