"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface SalesChartProps {
  data: { month: string; wa: number; mp: number; total: number }[]
}

const fmt = (v: number) => v >= 1000000 ? `${(v/1000000).toFixed(0)}Jt` : `${(v/1000).toFixed(0)}Rb`

export function SalesChart({ data }: SalesChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="colorWA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#25D366" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#25D366" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorMP" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EE4D2D" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#EE4D2D" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <Tooltip formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
        <Legend />
        <Area type="monotone" dataKey="wa" name="WhatsApp" stroke="#25D366" fill="url(#colorWA)" strokeWidth={2} />
        <Area type="monotone" dataKey="mp" name="Marketplace" stroke="#EE4D2D" fill="url(#colorMP)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
