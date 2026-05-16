"use client"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { suppliers } from "@/lib/data"
import { formatRpFull } from "@/lib/format"
import { Star, Plus, MapPin } from "lucide-react"

export default function SupplierPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Supplier Management" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">{suppliers.length} Supplier Aktif</h3>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              <Plus className="h-4 w-4" /> Tambah Supplier
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {suppliers.map(s => (
              <div key={s.id} className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-foreground">{s.name}</p>
                    <p className="text-xs font-mono text-muted-foreground">{s.code}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />{s.city} · {s.type}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4" fill="currentColor" />
                    <span className="text-sm font-bold">{s.rating}</span>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm font-bold">{s.totalOrders} PO</p>
                    <p className="text-[10px] text-muted-foreground">Total Orders</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm font-bold">{formatRpFull(s.totalSpent)}</p>
                    <p className="text-[10px] text-muted-foreground">Total Pembelian</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <BottomTabs />
      </div>
    </div>
  )
}
