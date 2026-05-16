"use client"
import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { orders } from "@/lib/data"
import { formatRpFull } from "@/lib/format"
import { Search, Filter, Plus, Eye, ShoppingBag } from "lucide-react"

const statusColors: Record<string, string> = {
  delivered: "bg-green-500/10 text-green-600",
  processing: "bg-yellow-500/10 text-yellow-600",
  shipped: "bg-blue-500/10 text-blue-600",
  cancelled: "bg-red-500/10 text-red-600",
}

export default function OrdersPage() {
  const [search, setSearch] = useState("")
  const filtered = orders.filter(o =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Orders Management" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari order..." className="w-full pl-9 pr-4 py-2.5 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              <Plus className="h-4 w-4" /> Tambah
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Orders", value: orders.length, icon: ShoppingBag },
              { label: "Delivered", value: orders.filter(o => o.status === "delivered").length, icon: ShoppingBag },
              { label: "Processing", value: orders.filter(o => o.status === "processing").length, icon: ShoppingBag },
              { label: "Shipped", value: orders.filter(o => o.status === "shipped").length, icon: ShoppingBag },
            ].map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-4 border border-border">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-bold mt-1">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 text-left">
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Order ID</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Customer</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Platform</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Items</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground text-right">Total</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Tanggal</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map(o => (
                  <tr key={o.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{o.id}</td>
                    <td className="px-4 py-3 font-medium">{o.customer}</td>
                    <td className="px-4 py-3 text-muted-foreground">{o.platform}</td>
                    <td className="px-4 py-3 text-muted-foreground">{o.items} item</td>
                    <td className="px-4 py-3 text-right font-semibold">{formatRpFull(o.total)}</td>
                    <td className="px-4 py-3"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[o.status]}`}>{o.status}</span></td>
                    <td className="px-4 py-3 text-muted-foreground">{o.date}</td>
                    <td className="px-4 py-3"><button className="text-primary hover:text-primary/80"><Eye className="h-4 w-4" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <BottomTabs />
      </div>
    </div>
  )
}
