"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, DollarSign, ShoppingBag, Wallet, Package } from "lucide-react"

const tabs = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Orders", icon: ShoppingBag, href: "/orders" },
  { label: "Finance", icon: DollarSign, href: "/finance" },
  { label: "Transaksi", icon: Wallet, href: "/transaksiku" },
  { label: "Produk", icon: Package, href: "/pim" },
]

export function BottomTabs() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card border-t border-border">
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = pathname === tab.href
          return (
            <Link key={tab.href} href={tab.href} className={cn(
              "flex-1 flex flex-col items-center justify-center py-2 gap-1",
              isActive ? "text-primary" : "text-muted-foreground"
            )}>
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
