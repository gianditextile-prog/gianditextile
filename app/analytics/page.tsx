"use client"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { monthlyTrends, platformData, financeKPIs } from "@/lib/data"
import { formatRpFull, formatRp } from "@/lib/format"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Analytics" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Revenue Total", value: formatRp(financeKPIs.overview.totalPenjualan) },
              { label: "Profit Margin", value: `${financeKPIs.overview.profitMargin}%` },
              { label: "Avg Order WA", value: formatRp(financeKPIs.whatsapp.penjualan / financeKPIs.overview.waOrders) },
              { label: "Avg Order MP", value: formatRp(financeKPIs.marketplace.penjualan / financeKPIs.overview.marketplaceOrders) },
            ].map((k, i) => (
              <div key={i} className="bg-card rounded-xl p-4 border border-border">
                <p className="text-xs text-muted-foreground">{k.label}</p>
                <p className="text-xl font-bold mt-1">{k.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-xl p-5 border border-border">
            <h3 className="font-semibold mb-4">Revenue & Profit Trend</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => `${(v/1000000).toFixed(0)}Jt`} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v: number) => [formatRpFull(v), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="penjualan" name="Revenue" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="profit" name="Profit" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold mb-4">Revenue per Platform</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={platformData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis type="number" tickFormatter={v => `${(v/1000000).toFixed(0)}Jt`} tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip formatter={(v: number) => [formatRpFull(v), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                  <Bar dataKey="value" name="Revenue" radius={[0,4,4,0]}>
                    {platformData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold mb-4">Share per Channel</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={platformData} cx="50%" cy="50%" outerRadius={80} paddingAngle={2} dataKey="value">
                    {platformData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend formatter={(v) => <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{v}</span>} />
                  <Tooltip formatter={(v: number) => [formatRpFull(v), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
        <BottomTabs />
      </div>
    </div>
  )
}
