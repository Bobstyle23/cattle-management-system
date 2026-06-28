import AppLayout from "@/components/layout/AppLayout";
import { StatCard } from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <AppLayout>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-5 gap-4">
        <StatCard title="Total Cattle" value={52} />
        <StatCard title="Healthy" value={31} />
        <StatCard title="Sold" value={8} />
        <StatCard title="Pregnant" value={4} />
        <StatCard title="Sick" value={9} />
      </div>
    </AppLayout>
  );
}
