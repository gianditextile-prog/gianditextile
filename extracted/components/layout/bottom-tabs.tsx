"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  Receipt,
  MoreHorizontal,
  TrendingUp,
  Upload,
  Wallet,
  FileText,
  Package,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mainTabs = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "WhatsApp", icon: MessageCircle, href: "/whatsapp" },
  { label: "Marketplace", icon: ShoppingBag, href: "/marketplace" },
  { label: "Transaksi", icon: Receipt, href: "/transaksi" },
]

const moreTabs = [
  { label: "Profit", icon: TrendingUp, href: "/profit" },
  { label: "Import", icon: Upload, href: "/import" },
  { label: "TransaksiKu", icon: Wallet, href: "/transaksiku" },
  { label: "Invoice", icon: FileText, href: "/invoice" },
  { label: "Inventory", icon: Package, href: "/inventory" },
]

export function BottomTabs() {
  const pathname = usePathname()
  const isMoreActive = moreTabs.some((tab) => tab.href === pathname)

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t border-border pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {mainTabs.map((tab) => {
          const Icon = tab.icon
          const isActive = pathname === tab.href
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </Link>
          )
        })}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isMoreActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <MoreHorizontal className="h-5 w-5" />
              <span className="text-[10px] font-medium">Lainnya</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48"
            sideOffset={8}
          >
            {moreTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = pathname === tab.href
              return (
                <DropdownMenuItem
                  key={tab.href}
                  asChild
                  className={cn(isActive && "text-primary")}
                >
                  <Link href={tab.href} className="flex items-center gap-3 cursor-pointer">
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </Link>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
