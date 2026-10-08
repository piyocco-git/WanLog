import type { Pet } from "@/types";

type Props = {
  pet: Pet;
};

export function PetProfileCard({ pet }: Props) {
  return (
    <section className="card">
      <div className="pet-icon">
        🐾
      </div>

      <div>
        <h2>
          {pet.name}（{pet.nickname}）
        </h2>

        <p>
          {pet.breed}・{formatAge(pet.ageMonths)}
          （{pet.condition}）
        </p>
      </div>
    </section>
  );
}

function formatAge(ageMonths: number): string {
  const years = Math.floor(ageMonths / 12);
  const months = ageMonths % 12;

  return `${years}歳${months}ヶ月`;
}
