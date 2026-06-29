"use client";

import BreedChart from "@/components/dashboard/BreedChart";
import ChartCard from "@/components/dashboard/ChartCard";
import { StatCard } from "@/components/dashboard/StatCard";
import StatusChart from "@/components/dashboard/StatusChart";
import { Button } from "@/components/ui/button";
import { getDashboard } from "@/services/dashboard";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: dashboard, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
    staleTime: 0,
  });

  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="self-end mb-4">
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

      <div className="grid grid-cols-5 gap-4 mb-4">
        <StatCard title="Total Cattle" value={dashboard.total} />
        <StatCard title="Healthy" value={dashboard.healthy} />
        <StatCard title="Sold" value={dashboard.sold} />
        <StatCard title="Pregnant" value={dashboard.pregnant} />
        <StatCard title="Sick" value={dashboard.sick} />
      </div>

      <div className="grid gap-6">
        <ChartCard title="Breed Distribution">
          <BreedChart data={dashboard.breedChart} />
        </ChartCard>

        <ChartCard title="Status Distribution">
          <StatusChart data={dashboard.statusChart} />
        </ChartCard>
      </div>
    </div>
  );
}
