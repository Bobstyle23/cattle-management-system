import { Cattle } from "@/entities/Cattle";
import { CattleFormValues } from "@/entities/CattleFormValues";

export async function getCattle(): Promise<Cattle[]> {
  const response = await fetch("/api/cattle");

  if (!response.ok) {
    throw new Error("Failed to fetch cattle");
  }

  return response.json();
}

export async function getCattleById(id: string): Promise<Cattle> {
  const response = await fetch(`/api/cattle/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch cattle");
  }

  return response.json();
}

export async function createCattle(data: CattleFormValues): Promise<Cattle> {
  const response = await fetch("/api/cattle", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create cattle");
  }

  return response.json();
}
