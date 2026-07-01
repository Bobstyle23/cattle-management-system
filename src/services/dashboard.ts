import { Dashboard } from "@/entities/Dashboard";

export async function getDashboard(): Promise<Dashboard> {
  const response = await fetch(`/api/dashboard`);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  return response.json();
}
