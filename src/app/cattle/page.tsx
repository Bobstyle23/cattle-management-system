"use client";

import CattleTable from "@/components/cattle/CattleTable";
import SearchBar from "@/components/cattle/SearchBar";
import FilterBar from "@/components/cattle/FilterBar";
import { Cattle } from "@/entities/Cattle";
import { useState } from "react";

export default function CattlePage() {
  const [search, setSearch] = useState<string>("");

  const [breed, setBreed] = useState("ALL");
  const [gender, setGender] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const cattle: Cattle[] = [
    {
      id: "1",
      tagNumber: "COW-001",
      breed: "Angus",
      gender: "MALE",
      dateOfBirth: "2022-01-10",
      status: "HEALTHY",
    },
    {
      id: "2",
      tagNumber: "COW-002",
      breed: "Holstein",
      gender: "FEMALE",
      dateOfBirth: "2021-05-18",
      status: "PREGNANT",
    },
    {
      id: "3",
      tagNumber: "COW-003",
      breed: "Hereford",
      gender: "MALE",
      dateOfBirth: "2023-05-02",
      status: "SICK",
    },

    {
      id: "4",
      tagNumber: "COW-004",
      breed: "Simmental",
      gender: "MALE",
      dateOfBirth: "2024-11-12",
      status: "SOLD",
    },
  ];

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

      <CattleTable cattle={filteredCattle} />
    </>
  );
}
