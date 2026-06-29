"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { CATTLE_BREEDS } from "@/entities/Breed";
import { genderOptions } from "@/entities/Gender";
import { statusOptions } from "@/entities/Status";
import { FieldLabel } from "../ui/field";

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
      <FieldLabel>Breed</FieldLabel>
      <Select value={breed} onValueChange={onBreedChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Breed" />
        </SelectTrigger>

        <SelectContent id="breed">
          <SelectItem value="ALL">All</SelectItem>
          {CATTLE_BREEDS.map((breed) => (
            <SelectItem value={breed} key={breed}>
              {breed}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldLabel>Gender</FieldLabel>

      <Select value={gender} onValueChange={onGenderChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>
          {genderOptions.map((gender) => (
            <SelectItem value={gender.value} key={gender.value}>
              {gender.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <FieldLabel>Status</FieldLabel>
      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>
          {statusOptions.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
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
