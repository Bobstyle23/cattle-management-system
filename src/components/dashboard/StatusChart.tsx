"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

interface Props {
  data: {
    status: string;
    value: number;
  }[];
}

const STATUS_COLORS: Record<string, string> = {
  HEALTHY: "#22c55e", // green
  SICK: "#ef4444", // red
  PREGNANT: "#f59e0b", // amber
  SOLD: "#6b7280", // gray
};

const chartConfig = {
  HEALTHY: {
    label: "Healthy",
    color: "hsl(var(--chart-1))",
  },
  SICK: {
    label: "Sick",
    color: "hsl(var(--chart-2))",
  },
  PREGNANT: {
    label: "Pregnant",
    color: "hsl(var(--chart-3))",
  },
  SOLD: {
    label: "Sold",
    color: "hsl(var(--chart-4))",
  },
};

export default function StatusChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="status"
          outerRadius={100}
          label={({ name, value }) => `${name} (${value})`}
        />
        <Tooltip />

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
