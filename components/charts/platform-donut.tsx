"use client"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface PlatformDonutProps {
  data: { name: string; value: number; color: string }[]
}

export function PlatformDonut({ data }: PlatformDonutProps) {
  const fmt = (v: number) => v >= 1000000 ? `Rp ${(v/1000000).toFixed(0)}Jt` : `Rp ${(v/1000).toFixed(0)}Rb`
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => [fmt(value), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
        <Legend formatter={(value) => <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{value}</span>} />
      </PieChart>
    </ResponsiveContainer>
  )
}
