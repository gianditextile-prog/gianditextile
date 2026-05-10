"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { MonthPillStrip } from "@/components/shared/month-pill-strip"
import { TransactionCard } from "@/components/shared/transaction-card"
import { FilterBar } from "@/components/shared/filter-bar"
import { Pagination } from "@/components/shared/pagination"
import { DetailModal } from "@/components/shared/detail-modal"
import { 
  whatsappKPIs, 
  whatsappTransactions, 
  months 
} from "@/lib/data"
import { 
  MessageCircle, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Search 
} from "lucide-react"
import { Input } from "@/components/ui/input"

const iconMap = {
  MessageCircle,
  TrendingUp,
  Users,
  CheckCircle
}

export default function WhatsAppPage() {
  const [selectedMonth, setSelectedMonth] = useState("Mei")
  const [selectedTransaction, setSelectedTransaction] = useState<typeof whatsappTransactions[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const itemsPerPage = 10

  const filteredTransactions = whatsappTransactions.filter(tx => {
    const matchesSearch = tx.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tx.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || tx.status === statusFilter
    return matchesSearch && matchesStatus
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
        <Topbar title="WhatsApp" />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <MonthPillStrip 
            months={months}
            selectedMonth={selectedMonth}
            onSelect={setSelectedMonth}
          />

          {/* KPI Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {whatsappKPIs.map((kpi) => {
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

          {/* Transactions List */}
          <div className="mt-6 bg-card rounded-xl p-4 lg:p-6 border border-border">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <h3 className="font-semibold text-foreground">Daftar Transaksi WhatsApp</h3>
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
                <FilterBar 
                  statusFilter={statusFilter}
                  onStatusChange={setStatusFilter}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              {paginatedTransactions.map((tx) => (
                <TransactionCard 
                  key={tx.id} 
                  transaction={tx}
                  onClick={() => setSelectedTransaction(tx)}
                />
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

      <DetailModal
        transaction={selectedTransaction}
        open={!!selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
      />
    </div>
  )
}
