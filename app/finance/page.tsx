"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { KPICard } from "@/components/shared/kpi-card"
import { financeKPIs, TX, monthlyTrends, platformData } from "@/lib/data"
import { formatRp, formatRpFull, formatNumber } from "@/lib/format"
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts"
import {
  TrendingUp, MessageCircle, ShoppingBag, Wallet, DollarSign,
  Download, Filter, ArrowUpRight, ArrowDownRight
} from "lucide-react"

type Tab = "overview" | "whatsapp" | "marketplace" | "transaksiku" | "cashflow" | "export"

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview Bisnis" },
  { key: "whatsapp", label: "Order WhatsApp" },
  { key: "marketplace", label: "Marketplace" },
  { key: "transaksiku", label: "TransaksiKu" },
  { key: "cashflow", label: "Cashflow & Trends" },
  { key: "export", label: "Export Reports" },
]

const KAT_COLORS: Record<string, string> = {
  "Uang masuk": "bg-green-500/10 text-green-600",
  "Uang keluar": "bg-red-500/10 text-red-600",
  "Belanja": "bg-orange-500/10 text-orange-600",
  "Tabungan": "bg-blue-500/10 text-blue-600",
  "Biaya": "bg-purple-500/10 text-purple-600",
  "Refund": "bg-yellow-500/10 text-yellow-600",
  "Top up": "bg-cyan-500/10 text-cyan-600",
}

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview")
  const [txFilter, setTxFilter] = useState("Semua")

  const { overview, whatsapp, marketplace, transaksiku } = financeKPIs

  const filteredTX = txFilter === "Semua" ? TX : TX.filter(t => t.kat === txFilter)

  const txCategories = ["Semua", "Uang masuk", "Uang keluar", "Belanja", "Tabungan", "Biaya", "Refund", "Top up"]

  // Cashflow data from TX
  const dailyCashflow: Record<string, { masuk: number; keluar: number }> = {}
  TX.forEach(t => {
    if (!dailyCashflow[t.tgl]) dailyCashflow[t.tgl] = { masuk: 0, keluar: 0 }
    dailyCashflow[t.tgl].masuk += t.masuk
    dailyCashflow[t.tgl].keluar += t.keluar
  })
  const cashflowData = Object.entries(dailyCashflow).slice(0, 20).map(([tgl, v]) => ({
    tgl: tgl.slice(0, 5),
    masuk: v.masuk,
    keluar: v.keluar,
    net: v.masuk - v.keluar
  }))

  const marketplacePieData = [
    { name: "Shopee", value: 62500000, color: "#EE4D2D" },
    { name: "TikTok", value: 31200000, color: "#010101" },
    { name: "Lazada", value: 18700000, color: "#0F0F8F" },
    { name: "Shopee Bogor", value: 12700000, color: "#FF6B35" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Finance & Cashflow" />
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-3 mb-6 scrollbar-hide">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard title="Total Penjualan" value={formatRp(overview.totalPenjualan)} change="+12.4% vs lalu" trend="up" icon={<TrendingUp className="h-5 w-5" />} />
                <KPICard title="Total Modal" value={formatRp(overview.totalModal)} icon={<DollarSign className="h-5 w-5" />} />
                <KPICard title="Profit Bersih" value={formatRp(overview.profitBersih)} change="+5.1% vs lalu" trend="up" icon={<ArrowUpRight className="h-5 w-5" />} />
                <KPICard title="Profit Margin" value={`${overview.profitMargin}%`} change="-0.3%" trend="down" icon={<Wallet className="h-5 w-5" />} />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <KPICard title="Total Transaksi" value={formatNumber(overview.totalTransaksi)} subtitle="Semua channel" />
                <KPICard title="WA Orders" value={formatNumber(overview.waOrders)} subtitle="WhatsApp" />
                <KPICard title="Marketplace Orders" value={formatNumber(overview.marketplaceOrders)} subtitle="Semua platform" />
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Komposisi Revenue per Channel</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={[
                    { name: "WhatsApp", penjualan: whatsapp.penjualan, modal: whatsapp.modal, profit: whatsapp.profit },
                    { name: "Marketplace", penjualan: marketplace.penjualan, modal: marketplace.modal, profit: marketplace.profit },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={v => `${(v/1000000).toFixed(0)}Jt`} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Tooltip formatter={(v: number) => [formatRpFull(v), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    <Legend />
                    <Bar dataKey="penjualan" name="Penjualan" fill="#3b82f6" radius={[4,4,0,0]} />
                    <Bar dataKey="modal" name="Modal" fill="#f59e0b" radius={[4,4,0,0]} />
                    <Bar dataKey="profit" name="Profit" fill="#10b981" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-3xl font-bold text-green-500 mt-2">{formatRp(whatsapp.penjualan)}</p>
                  <div className="mt-3 space-y-1 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Modal</span><span>{formatRp(whatsapp.modal)}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Profit</span><span className="text-green-500 font-medium">{formatRp(whatsapp.profit)}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Total Yard</span><span>{formatNumber(whatsapp.totalYard)} yd</span></div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Marketplace</h4>
                  <p className="text-3xl font-bold text-orange-500 mt-2">{formatRp(marketplace.penjualan)}</p>
                  <div className="mt-3 space-y-1 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Modal</span><span>{formatRp(marketplace.modal)}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Profit</span><span className="text-green-500 font-medium">{formatRp(marketplace.profit)}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Total Meter</span><span>{formatNumber(marketplace.totalMeter)} m</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── WHATSAPP ── */}
          {activeTab === "whatsapp" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard title="Penjualan WA" value={formatRp(whatsapp.penjualan)} trend="up" change={`${overview.waOrders} orders`} icon={<MessageCircle className="h-5 w-5" />} />
                <KPICard title="Modal WA" value={formatRp(whatsapp.modal)} icon={<DollarSign className="h-5 w-5" />} />
                <KPICard title="Profit WA" value={formatRp(whatsapp.profit)} trend="up" change={`${((whatsapp.profit/whatsapp.penjualan)*100).toFixed(1)}% margin`} icon={<TrendingUp className="h-5 w-5" />} />
                <KPICard title="Total Yard" value={`${formatNumber(whatsapp.totalYard)} yd`} subtitle="Unit kain WA" />
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Analisis WhatsApp Orders</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-green-500">{formatRp(whatsapp.penjualan / overview.waOrders)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Avg. Order Value</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-blue-500">{formatNumber(Math.round(whatsapp.totalYard / overview.waOrders))} yd</p>
                    <p className="text-xs text-muted-foreground mt-1">Avg. Yard/Order</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-purple-500">{((whatsapp.profit/whatsapp.penjualan)*100).toFixed(1)}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Profit Margin</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Rekonsiliasi WA</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    <tr className="py-2"><td className="py-2 text-muted-foreground">Revenue Penjualan</td><td className="py-2 text-right font-medium text-green-500">{formatRpFull(whatsapp.penjualan)}</td></tr>
                    <tr><td className="py-2 text-muted-foreground">Biaya Modal / HPP</td><td className="py-2 text-right font-medium text-red-500">- {formatRpFull(whatsapp.modal)}</td></tr>
                    <tr><td className="py-2 font-semibold text-foreground">Profit Bersih WA</td><td className="py-2 text-right font-bold text-primary">{formatRpFull(whatsapp.profit)}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── MARKETPLACE ── */}
          {activeTab === "marketplace" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard title="Penjualan MP" value={formatRp(marketplace.penjualan)} trend="up" icon={<ShoppingBag className="h-5 w-5" />} />
                <KPICard title="Modal MP" value={formatRp(marketplace.modal)} icon={<DollarSign className="h-5 w-5" />} />
                <KPICard title="Profit MP" value={formatRp(marketplace.profit)} trend="up" change={`${((marketplace.profit/marketplace.penjualan)*100).toFixed(1)}%`} icon={<TrendingUp className="h-5 w-5" />} />
                <KPICard title="Total Meter" value={`${formatNumber(marketplace.totalMeter)} m`} subtitle="Unit kain MP" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Distribusi Platform</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={marketplacePieData} cx="50%" cy="50%" outerRadius={80} paddingAngle={3} dataKey="value" label={({ name, percent }) => `${name} ${(percent*100).toFixed(0)}%`} labelLine={false}>
                        {marketplacePieData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(v: number) => [formatRpFull(v), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Per Platform</h3>
                  <div className="space-y-3">
                    {marketplacePieData.map(p => (
                      <div key={p.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
                          <span className="text-sm font-medium">{p.name}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">{formatRp(p.value)}</p>
                          <p className="text-xs text-muted-foreground">{((p.value/marketplace.penjualan)*100).toFixed(1)}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── TRANSAKSIKU ── */}
          {activeTab === "transaksiku" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard title="Total Masuk" value={formatRp(transaksiku.totalMasuk)} trend="up" icon={<ArrowUpRight className="h-5 w-5" />} className="border-green-500/20" />
                <KPICard title="Total Keluar" value={formatRp(transaksiku.totalKeluar)} icon={<ArrowDownRight className="h-5 w-5" />} className="border-red-500/20" />
                <KPICard title="Saldo Bersih" value={formatRp(transaksiku.saldoBersih)} trend="up" icon={<Wallet className="h-5 w-5" />} />
                <KPICard title="Total Entri" value={formatNumber(transaksiku.totalEntri)} subtitle="Transaksi" />
              </div>
              {/* Filter */}
              <div className="flex gap-2 flex-wrap">
                {txCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setTxFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      txFilter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {/* TX Table */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Daftar Transaksi ({filteredTX.length})</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 text-left">
                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Tanggal</th>
                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Keterangan</th>
                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Kategori</th>
                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground text-right">Masuk</th>
                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground text-right">Keluar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredTX.map((tx, i) => (
                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-2.5 text-muted-foreground whitespace-nowrap">{tx.tgl}</td>
                          <td className="px-4 py-2.5 font-medium text-foreground">{tx.ket}</td>
                          <td className="px-4 py-2.5">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${KAT_COLORS[tx.kat] || "bg-muted text-muted-foreground"}`}>
                              {tx.kat}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-right font-medium text-green-600">
                            {tx.masuk > 0 ? formatRpFull(tx.masuk) : "-"}
                          </td>
                          <td className="px-4 py-2.5 text-right font-medium text-red-500">
                            {tx.keluar > 0 ? formatRpFull(tx.keluar) : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── CASHFLOW ── */}
          {activeTab === "cashflow" && (
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Cashflow Harian (April 2026)</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={cashflowData}>
                    <defs>
                      <linearGradient id="masukGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="keluarGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="tgl" tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={v => `${(v/1000000).toFixed(0)}Jt`} tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Tooltip formatter={(v: number) => [formatRpFull(v), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    <Legend />
                    <Area type="monotone" dataKey="masuk" name="Uang Masuk" stroke="#10b981" fill="url(#masukGrad)" strokeWidth={2} />
                    <Area type="monotone" dataKey="keluar" name="Uang Keluar" stroke="#ef4444" fill="url(#keluarGrad)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Trend Bulanan</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={v => `${(v/1000000).toFixed(0)}Jt`} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Tooltip formatter={(v: number) => [formatRpFull(v), '']} contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    <Legend />
                    <Bar dataKey="penjualan" name="Penjualan" fill="#3b82f6" radius={[4,4,0,0]} />
                    <Bar dataKey="profit" name="Profit" fill="#10b981" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* ── EXPORT ── */}
          {activeTab === "export" && (
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-6">Export Laporan Keuangan</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    { title: "Laporan Overview Bisnis", desc: "KPI, profit, margin, semua channel", format: "PDF / Excel" },
                    { title: "Detail WhatsApp Orders", desc: "Semua transaksi WA dengan detail produk", format: "Excel" },
                    { title: "Detail Marketplace", desc: "Per platform: Shopee, TikTok, Lazada", format: "Excel" },
                    { title: "TransaksiKu Lengkap", desc: "Semua 100 entri dengan kategori", format: "Excel / CSV" },
                    { title: "Cashflow Bulanan", desc: "Arus kas masuk & keluar per hari", format: "Excel" },
                    { title: "Rekonsiliasi Keuangan", desc: "Revenue vs Modal vs Profit, semua channel", format: "PDF" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-xl">
                      <div>
                        <p className="font-medium text-foreground text-sm">{r.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full mt-1 inline-block">{r.format}</span>
                      </div>
                      <button className="ml-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                        <Download className="h-4 w-4" />
                        Export
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Rekonsiliasi Final</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    <tr><td className="py-3 text-muted-foreground">Total Penjualan (WA + MP)</td><td className="py-3 text-right font-semibold">{formatRpFull(overview.totalPenjualan)}</td></tr>
                    <tr><td className="py-3 text-muted-foreground">Total Modal / HPP</td><td className="py-3 text-right font-semibold text-red-500">- {formatRpFull(overview.totalModal)}</td></tr>
                    <tr><td className="py-3 font-bold text-foreground text-base">Profit Bersih Total</td><td className="py-3 text-right font-bold text-green-500 text-base">{formatRpFull(overview.profitBersih)}</td></tr>
                    <tr><td className="py-3 text-muted-foreground">Profit Margin</td><td className="py-3 text-right font-semibold text-primary">{overview.profitMargin}%</td></tr>
                    <tr><td className="py-3 text-muted-foreground">Total Transaksi</td><td className="py-3 text-right font-semibold">{overview.totalTransaksi}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
        <BottomTabs />
      </div>
    </div>
  )
}
