"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ value, onSearch }: SearchBarProps) {
  return (
    <div className="relative mb-6 max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        size={18}
      />

      <Input
        className="pl-10"
        placeholder="Search by tag number or breed..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
