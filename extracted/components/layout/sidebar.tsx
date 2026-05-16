"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  Receipt,
  TrendingUp,
  Upload,
  Wallet,
  FileText,
  Package,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "WhatsApp", icon: MessageCircle, href: "/whatsapp" },
  { label: "Marketplace", icon: ShoppingBag, href: "/marketplace" },
  { label: "Transaksi", icon: Receipt, href: "/transaksi" },
  { label: "Profit", icon: TrendingUp, href: "/profit" },
  { label: "Import", icon: Upload, href: "/import" },
  { label: "TransaksiKu", icon: Wallet, href: "/transaksiku" },
  { label: "Invoice", icon: FileText, href: "/invoice" },
  { label: "Inventory", icon: Package, href: "/inventory" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex w-64 flex-col bg-card border-r border-border">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">GT</span>
          </div>
          <div>
            <h1 className="font-bold text-foreground text-sm">Giandi Textile</h1>
            <p className="text-[10px] text-muted-foreground">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">NG</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Nofza Giandi</p>
            <p className="text-xs text-muted-foreground truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
