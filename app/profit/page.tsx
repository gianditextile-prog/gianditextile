"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { MonthPillStrip } from "@/components/shared/month-pill-strip"
import { ProfitChart } from "@/components/charts/profit-chart"
import { ProfitBreakdown } from "@/components/charts/profit-breakdown"
import { 
  profitKPIs, 
  profitChartData, 
  profitBreakdownData,
  months 
} from "@/lib/data"
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Percent 
} from "lucide-react"

const iconMap = {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Percent
}

export default function ProfitPage() {
  const [selectedMonth, setSelectedMonth] = useState("Mei")

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Profit" />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <MonthPillStrip 
            months={months}
            selectedMonth={selectedMonth}
            onSelect={setSelectedMonth}
          />

          {/* KPI Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {profitKPIs.map((kpi) => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Profit Chart */}
            <div className="bg-card rounded-xl p-4 lg:p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Trend Profit</h3>
                <select className="text-sm bg-muted rounded-lg px-3 py-1.5 border-0 text-muted-foreground">
                  <option>6 Bulan Terakhir</option>
                  <option>3 Bulan Terakhir</option>
                  <option>1 Tahun</option>
                </select>
              </div>
              <ProfitChart data={profitChartData} />
            </div>

            {/* Profit Breakdown */}
            <div className="bg-card rounded-xl p-4 lg:p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Breakdown Profit</h3>
              <ProfitBreakdown data={profitBreakdownData} />
            </div>
          </div>

          {/* Profit Summary Table */}
          <div className="mt-6 bg-card rounded-xl p-4 lg:p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Ringkasan Profit per Sumber</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Sumber</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Pendapatan</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Biaya</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Profit</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { source: "WhatsApp", revenue: 125000000, cost: 87500000, profit: 37500000, margin: 30 },
                    { source: "Tokopedia", revenue: 85000000, cost: 63750000, profit: 21250000, margin: 25 },
                    { source: "Shopee", revenue: 72000000, cost: 54000000, profit: 18000000, margin: 25 },
                    { source: "TikTok Shop", revenue: 45000000, cost: 33750000, profit: 11250000, margin: 25 },
                    { source: "Import", revenue: 35000000, cost: 28000000, profit: 7000000, margin: 20 },
                  ].map((row) => (
                    <tr key={row.source} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 px-4 text-sm font-medium text-foreground">{row.source}</td>
                      <td className="py-3 px-4 text-sm text-right text-foreground">
                        Rp {row.revenue.toLocaleString("id-ID")}
                      </td>
                      <td className="py-3 px-4 text-sm text-right text-muted-foreground">
                        Rp {row.cost.toLocaleString("id-ID")}
                      </td>
                      <td className="py-3 px-4 text-sm text-right font-medium text-green-600">
                        Rp {row.profit.toLocaleString("id-ID")}
                      </td>
                      <td className="py-3 px-4 text-sm text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {row.margin}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-muted/50">
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">Total</td>
                    <td className="py-3 px-4 text-sm text-right font-semibold text-foreground">
                      Rp 362.000.000
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-semibold text-muted-foreground">
                      Rp 267.000.000
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-semibold text-green-600">
                      Rp 95.000.000
                    </td>
                    <td className="py-3 px-4 text-sm text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        26.2%
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </main>

        <BottomTabs />
      </div>
    </div>
  )
}
