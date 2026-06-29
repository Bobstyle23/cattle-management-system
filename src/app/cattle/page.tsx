"use client";

import CattleTable from "@/components/cattle/CattleTable";
import SearchBar from "@/components/cattle/SearchBar";
import FilterBar from "@/components/cattle/FilterBar";
import { Cattle } from "@/entities/Cattle";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCattle, getCattle, updateCattle } from "@/services/cattle";
import { useRouter } from "next/navigation";

export default function CattlePage() {
  const [search, setSearch] = useState<string>("");

  const [breed, setBreed] = useState("ALL");
  const [gender, setGender] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const { data: cattle = [], isLoading } = useQuery({
    queryKey: ["cattle"],
    queryFn: getCattle,
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteCattle,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cattle"],
      });
    },
  });

  const router = useRouter();

  const filteredCattle = cattle.filter((c: Cattle) => {
    const keyword = search.toLowerCase();

    const matchesSearch =
      c.tagNumber.toLowerCase().includes(keyword) ||
      c.breed.toLowerCase().includes(keyword);

    const matchesBreed = breed == "ALL" || c.breed == breed;

    const matchesGender = gender == "ALL" || c.gender == gender;

    const matchesStatus = status == "ALL" || c.status == status;

    return matchesSearch && matchesBreed && matchesGender && matchesStatus;
  });

  const handleReset = () => {
    setBreed("ALL");
    setGender("ALL");
    setStatus("ALL");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Cattle</h2>

      <SearchBar value={search} onSearch={setSearch} />

      <FilterBar
        breed={breed}
        gender={gender}
        status={status}
        onBreedChange={setBreed}
        onGenderChange={setGender}
        onStatusChange={setStatus}
        onReset={handleReset}
      />

      <CattleTable
        cattle={filteredCattle}
        onDelete={(id) => deleteMutation.mutate(id)}
        onEdit={(id) => router.push(`/cattle/${id}/edit`)}
      />
    </>
  );
}
