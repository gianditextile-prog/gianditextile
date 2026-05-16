"use client"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { inventory } from "@/lib/data"
import { formatRpFull, formatNumber } from "@/lib/format"
import { AlertTriangle, Package } from "lucide-react"

export default function InventoryPage() {
  const lowStock = inventory.filter(i => i.stock <= i.reorderPoint)
  const totalValue = inventory.reduce((sum, i) => sum + i.value, 0)
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Inventory / WMS" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground">Total SKU</p>
              <p className="text-2xl font-bold mt-1">{inventory.length}</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground">Nilai Stok</p>
              <p className="text-xl font-bold mt-1">{formatRpFull(totalValue)}</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-red-500/20">
              <p className="text-sm text-muted-foreground">Stok Rendah</p>
              <p className="text-2xl font-bold mt-1 text-red-500">{lowStock.length}</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground">Gudang</p>
              <p className="text-2xl font-bold mt-1">2</p>
            </div>
          </div>
          {lowStock.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
              <p className="text-sm text-red-600 font-medium">{lowStock.length} produk mendekati stok minimum — perlu reorder segera</p>
            </div>
          )}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 text-left">
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">SKU</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Produk</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground text-right">Stok</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground text-right">Reorder</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground text-right">Nilai</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Gudang</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {inventory.map(item => {
                  const isLow = item.stock <= item.reorderPoint
                  return (
                    <tr key={item.sku} className={`hover:bg-muted/30 transition-colors ${isLow ? 'bg-red-500/5' : ''}`}>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{item.sku}</td>
                      <td className="px-4 py-3 font-medium">{item.product}</td>
                      <td className={`px-4 py-3 text-right font-bold ${isLow ? 'text-red-500' : 'text-green-600'}`}>{formatNumber(item.stock)} {item.unit}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground">{formatNumber(item.reorderPoint)}</td>
                      <td className="px-4 py-3 text-right font-medium">{formatRpFull(item.value)}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{item.warehouse}</td>
                      <td className="px-4 py-3">
                        {isLow
                          ? <span className="text-xs bg-red-500/10 text-red-600 px-2 py-0.5 rounded-full font-medium flex items-center gap-1 w-fit"><AlertTriangle className="h-3 w-3" />Low</span>
                          : <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-medium">OK</span>
                        }
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </main>
        <BottomTabs />
      </div>
    </div>
  )
}
