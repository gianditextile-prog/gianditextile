"use client"

import { Bell, Search, Menu } from "lucide-react"

export function Topbar({ title }: { title: string }) {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center px-4 lg:px-6 gap-4">
      <button className="lg:hidden text-muted-foreground hover:text-foreground">
        <Menu className="h-5 w-5" />
      </button>
      <h2 className="font-semibold text-foreground flex-1">{title}</h2>
      <div className="flex items-center gap-2">
        <button className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground">
          <Search className="h-4 w-4" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </div>
    </header>
  )
}
