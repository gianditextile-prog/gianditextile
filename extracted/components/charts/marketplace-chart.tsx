"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

interface MarketplaceChartProps {
  data: Array<{
    month: string
    tokopedia: number
    shopee: number
    tiktok: number
  }>
}

export function MarketplaceChart({ data }: MarketplaceChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
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
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            iconSize={10}
          />
          <Bar 
            dataKey="tokopedia" 
            name="Tokopedia" 
            fill="#00AA5B" 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            dataKey="shopee" 
            name="Shopee" 
            fill="#EE4D2D" 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            dataKey="tiktok" 
            name="TikTok Shop" 
            fill="#000000" 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
