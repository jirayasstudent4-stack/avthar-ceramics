"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    revenue: 40000,
  },
  {
    month: "Feb",
    revenue: 55000,
  },
  {
    month: "Mar",
    revenue: 70000,
  },
  {
    month: "Apr",
    revenue: 90000,
  },
  {
    month: "May",
    revenue: 120000,
  },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl border p-6 w-full">
      <h2 className="text-2xl font-bold mb-5">
        Monthly Revenue
      </h2>

      <div className="w-full h-[350px] min-w-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}