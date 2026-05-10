"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { MonthPillStrip } from "@/components/shared/month-pill-strip"
import { Pagination } from "@/components/shared/pagination"
import { 
  invoiceKPIs, 
  invoiceData, 
  months 
} from "@/lib/data"
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Search,
  Plus,
  Download,
  Eye,
  Send
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
  FileText,
  TrendingUp,
  Clock,
  CheckCircle
}

const statusColors = {
  paid: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  overdue: "bg-red-100 text-red-800",
  draft: "bg-gray-100 text-gray-800"
}

const statusLabels = {
  paid: "Lunas",
  pending: "Menunggu",
  overdue: "Jatuh Tempo",
  draft: "Draft"
}

export default function InvoicePage() {
  const [selectedMonth, setSelectedMonth] = useState("Mei")
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const itemsPerPage = 10

  const filteredInvoices = invoiceData.filter(inv => {
    const matchesSearch = inv.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         inv.number.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || inv.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage)
  const paginatedInvoices = filteredInvoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Invoice" />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <MonthPillStrip 
            months={months}
            selectedMonth={selectedMonth}
            onSelect={setSelectedMonth}
          />

          {/* KPI Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {invoiceKPIs.map((kpi) => {
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

          {/* Invoice List */}
          <div className="mt-6 bg-card rounded-xl p-4 lg:p-6 border border-border">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <h3 className="font-semibold text-foreground">Daftar Invoice</h3>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari invoice..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full sm:w-[200px]"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Status</SelectItem>
                    <SelectItem value="paid">Lunas</SelectItem>
                    <SelectItem value="pending">Menunggu</SelectItem>
                    <SelectItem value="overdue">Jatuh Tempo</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                  Buat Invoice
                </Button>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">No. Invoice</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Pelanggan</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Tanggal</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Jatuh Tempo</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Total</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedInvoices.map((inv) => (
                    <tr key={inv.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 px-4 text-sm font-medium text-primary">{inv.number}</td>
                      <td className="py-3 px-4 text-sm text-foreground">{inv.customer}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{inv.date}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{inv.dueDate}</td>
                      <td className="py-3 px-4 text-sm text-right font-medium text-foreground">
                        Rp {inv.amount.toLocaleString("id-ID")}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                          statusColors[inv.status as keyof typeof statusColors]
                        )}>
                          {statusLabels[inv.status as keyof typeof statusLabels]}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-3">
              {paginatedInvoices.map((inv) => (
                <div
                  key={inv.id}
                  className="p-4 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-primary text-sm">{inv.number}</p>
                      <p className="text-sm text-foreground">{inv.customer}</p>
                    </div>
                    <span className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                      statusColors[inv.status as keyof typeof statusColors]
                    )}>
                      {statusLabels[inv.status as keyof typeof statusLabels]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="text-xs text-muted-foreground">
                      {inv.date} • Due: {inv.dueDate}
                    </div>
                    <p className="font-semibold text-foreground">
                      Rp {inv.amount.toLocaleString("id-ID")}
                    </p>
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
