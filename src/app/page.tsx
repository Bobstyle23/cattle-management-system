"use client";

import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { getDashboard } from "@/services/dashboard";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: dashboard, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  });

  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <StatCard title="Total Cattle" value={dashboard.total} />
        <StatCard title="Healthy" value={dashboard.healthy} />
        <StatCard title="Sold" value={dashboard.sold} />
        <StatCard title="Pregnant" value={dashboard.pregnant} />
        <StatCard title="Sick" value={dashboard.sick} />
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
