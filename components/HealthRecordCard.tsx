import { HealthRecord } from "@/types";

type Props = {
  record: HealthRecord;
};

export function HealthRecordCard({ record }: Props) {
  return (
    <section className="card">
      <h2>最近の体調記録</h2>

      <article>
        <strong>
          ⚠ {record.title}（{record.recordedAt}）
        </strong>

        <p>{record.description}</p>
      </article>
    </section>
  );
}

function getHealthRecordClass(
  level: HealthRecord["level"],
): string {
  switch (level) {
    case "normal":
      return "health-normal";

    case "warning":
      return "health-warning";

    case "danger":
      return "health-danger";
  }
}
