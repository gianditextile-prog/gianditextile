"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { MonthPillStrip } from "@/components/shared/month-pill-strip"
import { Pagination } from "@/components/shared/pagination"
import { 
  transaksikuKPIs, 
  transaksikuData, 
  months 
} from "@/lib/data"
import { 
  Wallet, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft,
  Search,
  Plus,
  Filter
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const iconMap = {
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft
}

export default function TransaksiKuPage() {
  const [selectedMonth, setSelectedMonth] = useState("Mei")
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const itemsPerPage = 10

  const filteredTransactions = transaksikuData.filter(tx => {
    const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || tx.type === typeFilter
    return matchesSearch && matchesType
  })

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="TransaksiKu" />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <MonthPillStrip 
            months={months}
            selectedMonth={selectedMonth}
            onSelect={setSelectedMonth}
          />

          {/* KPI Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {transaksikuKPIs.map((kpi) => {
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

          {/* Personal Transactions */}
          <div className="mt-6 bg-card rounded-xl p-4 lg:p-6 border border-border">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <h3 className="font-semibold text-foreground">Transaksi Pribadi</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari transaksi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full sm:w-[200px]"
                  />
                </div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Tipe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Tipe</SelectItem>
                    <SelectItem value="income">Pemasukan</SelectItem>
                    <SelectItem value="expense">Pengeluaran</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                  Tambah
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              {paginatedTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      tx.type === "income" ? "bg-green-100" : "bg-red-100"
                    )}>
                      {tx.type === "income" ? (
                        <ArrowDownLeft className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{tx.description}</p>
                      <p className="text-xs text-muted-foreground">{tx.category} • {tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      "font-semibold text-sm",
                      tx.type === "income" ? "text-green-600" : "text-red-600"
                    )}>
                      {tx.type === "income" ? "+" : "-"}Rp {tx.amount.toLocaleString("id-ID")}
                    </p>
                    <p className="text-xs text-muted-foreground">{tx.account}</p>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </main>

        <BottomTabs />
      </div>
    </div>
  )
}
