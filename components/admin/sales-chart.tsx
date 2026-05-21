"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: {
    month: string;
    sales: number;
  }[];
}

export default function SalesChart({
  data,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Monthly Sales
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Revenue overview for the last months
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600">
          Analytics
        </div>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2f8fff"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#2f8fff"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 12,
                fill: "#6b7280",
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 12,
                fill: "#6b7280",
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#2f8fff"
              strokeWidth={3}
              fill="url(#salesGradient)"
              dot={{
                r: 4,
                strokeWidth: 2,
                fill: "#fff",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}