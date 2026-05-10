"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

interface PlatformDonutProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
}

export function PlatformDonut({ data }: PlatformDonutProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="flex flex-col items-center">
      <div className="h-[200px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              formatter={(value: number) => [`${value}%`, ""]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{total}%</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4 w-full">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0" 
              style={{ backgroundColor: item.color }} 
            />
            <span className="text-sm text-muted-foreground truncate">{item.name}</span>
            <span className="text-sm font-medium text-foreground ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
