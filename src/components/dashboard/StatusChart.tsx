"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface Props {
  data: {
    status: string;
    value: number;
  }[];
}

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
