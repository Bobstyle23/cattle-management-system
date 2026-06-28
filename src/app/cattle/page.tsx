import CattleTable from "@/components/cattle/CattleTable";
import SearchBar from "@/components/cattle/SearchBar";
import FilterBar from "@/components/cattle/FilterBar";

export default function CattlePage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Cattle</h2>

      <SearchBar />

      <FilterBar />

      <CattleTable />
    </>
  );
}
