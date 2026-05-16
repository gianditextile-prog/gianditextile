"use client"
import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { customers } from "@/lib/data"
import { formatRpFull } from "@/lib/format"
import { Search, Plus, Phone, MapPin } from "lucide-react"

const segmentColors: Record<string, string> = {
  VIP: "bg-yellow-500/10 text-yellow-600",
  Regular: "bg-blue-500/10 text-blue-600",
  New: "bg-green-500/10 text-green-600",
}

export default function CRMPage() {
  const [search, setSearch] = useState("")
  const filtered = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="CRM - Manajemen Pelanggan" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari pelanggan..." className="w-full pl-9 pr-4 py-2.5 bg-muted rounded-lg text-sm focus:outline-none" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              <Plus className="h-4 w-4" /> Tambah
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filtered.map(c => (
              <div key={c.id} className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{c.name.slice(0,2).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{c.name}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <MapPin className="h-3 w-3" />{c.city}
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${segmentColors[c.segment]}`}>{c.segment}</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-muted rounded-lg p-2">
                    <p className="text-sm font-bold">{c.totalOrders}</p>
                    <p className="text-[10px] text-muted-foreground">Orders</p>
                  </div>
                  <div className="bg-muted rounded-lg p-2">
                    <p className="text-sm font-bold">{formatRpFull(c.totalSpent)}</p>
                    <p className="text-[10px] text-muted-foreground">Total Spent</p>
                  </div>
                  <div className="bg-muted rounded-lg p-2">
                    <p className="text-xs font-bold">{c.lastOrder}</p>
                    <p className="text-[10px] text-muted-foreground">Last Order</p>
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
