"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard, MessageCircle, ShoppingBag, Receipt, TrendingUp,
  Upload, Wallet, FileText, Package, Users, Truck, CreditCard,
  BarChart3, Settings, Store, Bot, Globe, Megaphone, Database,
  CheckSquare, Shield, DollarSign, Building2
} from "lucide-react"

const navGroups = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/" },
      { label: "Analytics", icon: BarChart3, href: "/analytics" },
    ]
  },
  {
    label: "Operasional",
    items: [
      { label: "Orders", icon: ShoppingBag, href: "/orders" },
      { label: "Inventory / WMS", icon: Package, href: "/inventory" },
      { label: "PIM Produk", icon: Database, href: "/pim" },
      { label: "WhatsApp", icon: MessageCircle, href: "/whatsapp" },
      { label: "Supplier", icon: Truck, href: "/supplier" },
      { label: "CRM", icon: Users, href: "/crm" },
    ]
  },
  {
    label: "Keuangan",
    items: [
      { label: "Finance & Cashflow", icon: DollarSign, href: "/finance" },
      { label: "TransaksiKu", icon: Wallet, href: "/transaksiku" },
      { label: "Pembayaran", icon: CreditCard, href: "/payments" },
      { label: "Invoice", icon: FileText, href: "/invoice" },
    ]
  },
  {
    label: "Channel",
    items: [
      { label: "Storefront", icon: Store, href: "/storefront" },
      { label: "Seller Center", icon: Building2, href: "/seller" },
      { label: "Marketplace", icon: Globe, href: "/marketplace" },
      { label: "Meta Ads", icon: Megaphone, href: "/ads" },
    ]
  },
  {
    label: "Sistem",
    items: [
      { label: "AI Assistant", icon: Bot, href: "/ai" },
      { label: "Shipping", icon: Truck, href: "/shipping" },
      { label: "Import Data", icon: Upload, href: "/import" },
      { label: "SOP & Checklist", icon: CheckSquare, href: "/sop" },
      { label: "Auth & Roles", icon: Shield, href: "/auth" },
      { label: "Settings", icon: Settings, href: "/settings" },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex w-64 flex-col bg-card border-r border-border">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">GT</span>
          </div>
          <div>
            <h1 className="font-bold text-foreground text-sm">Giandi Textile</h1>
            <p className="text-[10px] text-muted-foreground">Enterprise Hub v3</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-3">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-4">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-1">{group.label}</p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">NG</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Nofza Giandi</p>
            <p className="text-xs text-muted-foreground truncate">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
