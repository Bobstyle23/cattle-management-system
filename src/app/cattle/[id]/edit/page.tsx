import CattleForm from "@/components/cattle/CattleForm";

export default function EditPage() {
  const cattle = {
    tagNumber: "COW-001",
    breed: "Angus",
    gender: "MALE",
    status: "HEALTHY",
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Edit Cattle</h2>
      <CattleForm />
    </>
  );
}
