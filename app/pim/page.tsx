"use client"
import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { products } from "@/lib/data"
import { formatRpFull, formatNumber } from "@/lib/format"
import { Search, Plus, Star } from "lucide-react"

export default function PIMPage() {
  const [search, setSearch] = useState("")
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Product Information Management" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari produk, SKU..." className="w-full pl-9 pr-4 py-2.5 bg-muted rounded-lg text-sm focus:outline-none" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              <Plus className="h-4 w-4" /> Produk Baru
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map(p => (
              <div key={p.id} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-colors">
                <div className="h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                  <span className="text-4xl font-bold text-muted-foreground/20">{p.type[0]}</span>
                  {p.mami && (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="h-2.5 w-2.5" fill="currentColor" /> MAMI
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{p.sku}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm font-bold text-primary">{formatRpFull(p.price)}<span className="text-xs font-normal text-muted-foreground">/m</span></p>
                      <p className="text-xs text-muted-foreground">Stok: {formatNumber(p.stock)} {p.unit}</p>
                    </div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-lg font-medium">{p.type}</span>
                  </div>
                  <div className="mt-3 flex gap-1 flex-wrap">
                    {p.colors.map(c => (
                      <span key={c} className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{c}</span>
                    ))}
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
