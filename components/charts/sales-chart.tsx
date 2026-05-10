"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface SalesChartProps {
  data: Array<{
    month: string
    penjualan: number
    target: number
  }>
}

export function SalesChart({ data }: SalesChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPenjualan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D32F2F" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#D32F2F" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9E9E9E" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#9E9E9E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            formatter={(value: number) => [`Rp ${value.toLocaleString("id-ID")}`, ""]}
            labelStyle={{ color: "#111827", fontWeight: 600 }}
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#9E9E9E"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTarget)"
            name="Target"
          />
          <Area
            type="monotone"
            dataKey="penjualan"
            stroke="#D32F2F"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPenjualan)"
            name="Penjualan"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Penjualan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400" />
          <span className="text-sm text-muted-foreground">Target</span>
        </div>
      </div>
    </div>
  )
}
