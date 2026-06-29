"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

interface BreedData {
  breed: string;
  count: number;
}

interface Props {
  data: BreedData[];
}

export default function BreedChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="breed" />

        <YAxis allowDecimals={false} />

        <Tooltip />

        <Bar dataKey="count" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
