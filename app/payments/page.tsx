"use client"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { Construction } from "lucide-react"

export default function Page() {
  const titles: Record<string, string> = {
    crm: "CRM - Pelanggan", supplier: "Supplier Management", analytics: "Analytics",
    payments: "Pembayaran", storefront: "Storefront / Katalog", seller: "Seller Center",
    shipping: "Shipping & Logistik", ads: "Meta Ads Center", ai: "AI Assistant Center",
    sop: "SOP & Go-Live Checklist", auth: "Auth & Role Management", settings: "System Settings"
  }
  const slug = "payments"
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title={titles[slug] || slug} />
        <main className="flex-1 p-6 pb-24 lg:pb-6 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Construction className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{titles[slug] || slug}</h3>
            <p className="text-sm text-muted-foreground max-w-sm">Modul ini sedang dalam pengembangan aktif. Data sudah tersinkronisasi dengan Supabase.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-xs mx-auto text-left">
              {["Database terhubung", "Auth ready", "API siap", "UI in progress"].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />{f}
                </div>
              ))}
            </div>
          </div>
        </main>
        <BottomTabs />
      </div>
    </div>
  )
}
