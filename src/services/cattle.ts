export async function getCattle() {
  const response = await fetch("/api/cattle");

  if (!response.ok) {
    throw new Error("Failed to fetch cattle");
  }

  return response.json();
}
