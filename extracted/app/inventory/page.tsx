"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { Pagination } from "@/components/shared/pagination"
import { 
  inventoryKPIs, 
  inventoryData 
} from "@/lib/data"
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  Boxes,
  Search,
  Plus,
  Edit,
  Trash2
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
  Package,
  AlertTriangle,
  TrendingUp,
  Boxes
}

export default function InventoryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [stockFilter, setStockFilter] = useState("all")
  const itemsPerPage = 10

  const filteredInventory = inventoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    const matchesStock = stockFilter === "all" || 
                        (stockFilter === "low" && item.stock <= item.minStock) ||
                        (stockFilter === "normal" && item.stock > item.minStock)
    return matchesSearch && matchesCategory && matchesStock
  })

  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage)
  const paginatedInventory = filteredInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const categories = [...new Set(inventoryData.map(item => item.category))]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Inventory" />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          {/* KPI Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {inventoryKPIs.map((kpi) => {
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

          {/* Inventory List */}
          <div className="mt-6 bg-card rounded-xl p-4 lg:p-6 border border-border">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <h3 className="font-semibold text-foreground">Daftar Produk</h3>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full sm:w-[200px]"
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={stockFilter} onValueChange={setStockFilter}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Stok" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Stok</SelectItem>
                    <SelectItem value="low">Stok Rendah</SelectItem>
                    <SelectItem value="normal">Stok Normal</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                  Tambah Produk
                </Button>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">SKU</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Nama Produk</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Kategori</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Harga</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Stok</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedInventory.map((item) => (
                    <tr key={item.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 px-4 text-sm font-mono text-muted-foreground">{item.sku}</td>
                      <td className="py-3 px-4 text-sm font-medium text-foreground">{item.name}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.category}</td>
                      <td className="py-3 px-4 text-sm text-right text-foreground">
                        Rp {item.price.toLocaleString("id-ID")}
                      </td>
                      <td className="py-3 px-4 text-sm text-right">
                        <span className={cn(
                          "font-medium",
                          item.stock <= item.minStock ? "text-red-600" : "text-foreground"
                        )}>
                          {item.stock}
                        </span>
                        <span className="text-muted-foreground"> / {item.minStock}</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {item.stock <= item.minStock ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <AlertTriangle className="h-3 w-3" />
                            Stok Rendah
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Normal
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
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
              {paginatedInventory.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{item.sku}</p>
                    </div>
                    {item.stock <= item.minStock ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <AlertTriangle className="h-3 w-3" />
                        Low
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Normal
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="text-xs text-muted-foreground">
                      {item.category} • Stok: <span className={cn(
                        "font-medium",
                        item.stock <= item.minStock ? "text-red-600" : "text-foreground"
                      )}>{item.stock}</span>
                    </div>
                    <p className="font-semibold text-foreground">
                      Rp {item.price.toLocaleString("id-ID")}
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
