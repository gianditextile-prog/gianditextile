"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { MonthPillStrip } from "@/components/shared/month-pill-strip"
import { TransactionCard } from "@/components/shared/transaction-card"
import { SalesChart } from "@/components/charts/sales-chart"
import { PlatformDonut } from "@/components/charts/platform-donut"
import { 
  dashboardKPIs, 
  recentTransactions, 
  salesChartData, 
  platformData,
  months 
} from "@/lib/data"
import { 
  TrendingUp, 
  ShoppingCart, 
  CreditCard, 
  Wallet,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const iconMap = {
  TrendingUp,
  ShoppingCart,
  CreditCard,
  Wallet
}

export default function DashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState("Mei")

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Dashboard" />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          {/* Month Selector */}
          <MonthPillStrip 
            months={months}
            selectedMonth={selectedMonth}
            onSelect={setSelectedMonth}
          />

          {/* KPI Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {dashboardKPIs.map((kpi) => {
              const Icon = iconMap[kpi.icon as keyof typeof iconMap]
              return (
                <KPICard
                  key={kpi.id}
                  title={kpi.title}
                  value={kpi.value}
                  change={kpi.change}
                  trend={kpi.trend as "up" | "down"}
                  icon={<Icon className="h-5 w-5" />}
                />
              )
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Sales Chart - Takes 2 columns on desktop */}
            <div className="lg:col-span-2 bg-card rounded-xl p-4 lg:p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Grafik Penjualan</h3>
                <select className="text-sm bg-muted rounded-lg px-3 py-1.5 border-0 text-muted-foreground">
                  <option>6 Bulan Terakhir</option>
                  <option>3 Bulan Terakhir</option>
                  <option>1 Tahun</option>
                </select>
              </div>
              <SalesChart data={salesChartData} />
            </div>

            {/* Platform Donut */}
            <div className="bg-card rounded-xl p-4 lg:p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Platform Penjualan</h3>
              <PlatformDonut data={platformData} />
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mt-6 bg-card rounded-xl p-4 lg:p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Transaksi Terbaru</h3>
              <Link 
                href="/transaksi" 
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
              >
                Lihat Semua
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentTransactions.slice(0, 5).map((tx) => (
                <TransactionCard key={tx.id} transaction={tx} />
              ))}
            </div>
          </div>
        </main>

        {/* Mobile Bottom Tabs */}
        <BottomTabs />
      </div>
    </div>
  )
}
