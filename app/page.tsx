"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { MonthPillStrip } from "@/components/shared/month-pill-strip"
import { TransactionCard } from "@/components/shared/transaction-card"
import {
  dashboardKPIs,
  recentTransactions,
  salesChartData,
  platformData,
  months,
  financeKPIs,
} from "@/lib/data"
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts"
import {
  TrendingUp, ShoppingCart, CreditCard, Wallet, ArrowRight,
  Package, AlertTriangle, DollarSign, TrendingDown
} from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, ShoppingCart, CreditCard, Wallet, DollarSign, TrendingDown
}

const fmtJt = (v: number) => `${(v / 1_000_000).toFixed(0)}Jt`

export default function DashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState("Apr")

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Executive Dashboard" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">

          {/* Header */}
          <div className="mb-5">
            <h2 className="text-xl font-bold text-foreground">Giandi Textile Enterprise</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Data real — April 2026</p>
          </div>

          {/* Month Selector */}
          <MonthPillStrip months={months} selectedMonth={selectedMonth} onSelect={setSelectedMonth} />

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {[
              { title: "Total Penjualan", value: "Rp 994,5 Jt", change: "+12.4%", trend: "up" as const, icon: "TrendingUp" },
              { title: "Total Transaksi", value: "777", change: "+8.2%", trend: "up" as const, icon: "ShoppingCart" },
              { title: "Profit Bersih", value: "Rp 71,8 Jt", change: "+5.1%", trend: "up" as const, icon: "DollarSign" },
              { title: "Profit Margin", value: "7.2%", change: "-0.3%", trend: "down" as const, icon: "Wallet" },
            ].map((k, i) => {
              const Icon = iconMap[k.icon]
              return (
                <KPICard key={i} title={k.title} value={k.value} change={k.change}
                  trend={k.trend} icon={<Icon className="h-4 w-4" />} />
              )
            })}
          </div>

          {/* Quick Nav */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {[
              { href: "/finance", label: "Finance & Cashflow", badge: "7.2% margin", color: "text-yellow-500" },
              { href: "/orders", label: "Orders", badge: "5 aktif", color: "text-green-500" },
              { href: "/inventory", label: "Inventory", badge: "1 stok rendah", color: "text-red-500" },
              { href: "/analytics", label: "Analytics", badge: "Lihat semua", color: "text-blue-400" },
            ].map(a => (
              <Link key={a.href} href={a.href}
                className="bg-card rounded-xl p-4 border border-border hover:border-primary/40 transition-all group">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{a.label}</p>
                <p className={`text-xs mt-1 font-medium ${a.color}`}>{a.badge}</p>
              </Link>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            {/* Sales Area Chart */}
            <div className="lg:col-span-2 bg-card rounded-xl p-5 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">Grafik Penjualan</h3>
                  <p className="text-xs text-muted-foreground">WA vs Marketplace</p>
                </div>
                <Link href="/analytics" className="text-xs text-primary flex items-center gap-1 hover:opacity-80">
                  Detail <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={[
                  { month: "Jan", wa: 45000000, mp: 18000000 },
                  { month: "Feb", wa: 52000000, mp: 16000000 },
                  { month: "Mar", wa: 68000000, mp: 17000000 },
                  { month: "Apr", wa: 869400000, mp: 125100000 },
                  { month: "Mei", wa: 71000000, mp: 20000000 },
                  { month: "Jun", wa: 60000000, mp: 18000000 },
                ]}>
                  <defs>
                    <linearGradient id="gWA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#25D366" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#25D366" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="gMP" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F0B429" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#F0B429" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8B82A8" }} axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={fmtJt} tick={{ fontSize: 10, fill: "#8B82A8" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    formatter={(v: number) => [`Rp ${v.toLocaleString("id-ID")}`, ""]}
                    contentStyle={{ background: "#13121C", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px", fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Area type="monotone" dataKey="wa" name="WhatsApp" stroke="#25D366" fill="url(#gWA)" strokeWidth={2} />
                  <Area type="monotone" dataKey="mp" name="Marketplace" stroke="#F0B429" fill="url(#gMP)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Channel Donut */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-1">Per Channel</h3>
              <p className="text-xs text-muted-foreground mb-3">Distribusi revenue</p>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={[
                    { name: "WhatsApp", value: 869400000, color: "#25D366" },
                    { name: "Shopee", value: 62500000, color: "#EE4D2D" },
                    { name: "TikTok", value: 31200000, color: "#00f2ea" },
                    { name: "Lazada", value: 18700000, color: "#0F0F8F" },
                    { name: "Shopee Bgr", value: 12700000, color: "#FF6B35" },
                  ]} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">
                    {[
                      "#25D366", "#EE4D2D", "#00f2ea", "#0F0F8F", "#FF6B35"
                    ].map((c, i) => <Cell key={i} fill={c} />)}
                  </Pie>
                  <Legend wrapperStyle={{ fontSize: 10 }} formatter={(v) => <span style={{ color: "#8B82A8" }}>{v}</span>} />
                  <Tooltip formatter={(v: number) => [`Rp ${(v/1000000).toFixed(0)} Jt`, ""]}
                    contentStyle={{ background: "#13121C", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px", fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* WA vs MP Summary Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">WhatsApp</h4>
                <span className="text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full font-medium">61 orders</span>
              </div>
              <p className="text-2xl font-bold text-green-400">Rp 869,4 Jt</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="text-xs font-bold text-foreground">Rp 814 Jt</p>
                  <p className="text-[10px] text-muted-foreground">Modal</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="text-xs font-bold text-green-400">Rp 55,4 Jt</p>
                  <p className="text-[10px] text-muted-foreground">Profit</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="text-xs font-bold text-foreground">40.690 yd</p>
                  <p className="text-[10px] text-muted-foreground">Total Yard</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">Marketplace</h4>
                <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded-full font-medium">716 orders</span>
              </div>
              <p className="text-2xl font-bold text-yellow-400">Rp 125,1 Jt</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="text-xs font-bold text-foreground">Rp 108,7 Jt</p>
                  <p className="text-[10px] text-muted-foreground">Modal</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="text-xs font-bold text-green-400">Rp 16,4 Jt</p>
                  <p className="text-[10px] text-muted-foreground">Profit</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="text-xs font-bold text-foreground">3.764 m</p>
                  <p className="text-[10px] text-muted-foreground">Total Meter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mt-4 bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Transaksi Terbaru</h3>
              <Link href="/transaksi" className="text-sm text-primary hover:opacity-80 flex items-center gap-1">
                Semua <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y divide-border">
              {recentTransactions.slice(0, 6).map((tx: any) => (
                <TransactionCard key={tx.id} id={tx.id} customer={tx.customer}
                  amount={tx.amount} platform={tx.source || "WhatsApp"}
                  status={tx.status} date={tx.date} />
              ))}
            </div>
          </div>

        </main>
        <BottomTabs />
      </div>
    </div>
  )
}
