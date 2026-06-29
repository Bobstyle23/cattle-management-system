"use client";

import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { getCattle } from "@/services/cattle";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: cattles = [], isLoading } = useQuery({
    queryKey: ["cattle"],
    queryFn: getCattle,
  });

  const router = useRouter();

  const healthyCattlesCount = cattles.filter(
    (cattle) => cattle.status == "HEALTHY",
  ).length;

  const soldCattlesCount = cattles.filter(
    (cattle) => cattle.status == "SOLD",
  ).length;

  const pregnantCattlesCount = cattles.filter(
    (cattle) => cattle.status == "PREGNANT",
  ).length;

  const sickCattlesCount = cattles.filter(
    (cattle) => cattle.status == "SICK",
  ).length;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <StatCard title="Total Cattle" value={cattles.length} />
        <StatCard title="Healthy" value={healthyCattlesCount} />
        <StatCard title="Sold" value={soldCattlesCount} />
        <StatCard title="Pregnant" value={pregnantCattlesCount} />
        <StatCard title="Sick" value={sickCattlesCount} />
      </div>

      <div className="self-end ">
        <Button
          variant="outline"
          className="mr-4"
          onClick={() => router.push("/cattle")}
        >
          See all cattles
        </Button>

        <Button variant="default" onClick={() => router.push("/cattle/new")}>
          Add new cattle
        </Button>
      </div>
    </div>
  );
}
