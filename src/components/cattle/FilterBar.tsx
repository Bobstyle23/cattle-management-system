"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

interface FilterBarProps {
  breed: string;
  gender: string;
  status: string;

  onBreedChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}

export default function FilterBar({
  breed,
  gender,
  status,
  onBreedChange,
  onGenderChange,
  onStatusChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="mb-6 flex gap-4">
      <Select value={breed} onValueChange={onBreedChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Breed" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Breeds</SelectItem>
          <SelectItem value="Angus">Angus</SelectItem>
          <SelectItem value="Holstein">Holstein</SelectItem>
          <SelectItem value="Jersey">Jersey</SelectItem>
        </SelectContent>
      </Select>

      <Select value={gender} onValueChange={onGenderChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>
          <SelectItem value="MALE">Male</SelectItem>
          <SelectItem value="FEMALE">Female</SelectItem>
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>
          <SelectItem value="HEALTHY">Healthy</SelectItem>
          <SelectItem value="SICK">Sick</SelectItem>
          <SelectItem value="PREGNANT">Pregnant</SelectItem>
          <SelectItem value="SOLD">Sold</SelectItem>
          <SelectItem value="DECEASED">Deceased</SelectItem>
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        onClick={onReset}
        disabled={breed == "ALL" && gender == "ALL" && status == "ALL"}
      >
        Reset
      </Button>
    </div>
  );
}
