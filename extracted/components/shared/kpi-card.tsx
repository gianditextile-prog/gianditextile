"use client"

import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface KPICardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
}

export function KPICard({ title, value, change, trend, icon }: KPICardProps) {
  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground mb-1 truncate">{title}</p>
          <p className="text-lg lg:text-xl font-bold text-foreground truncate">{value}</p>
          <div className="flex items-center gap-1 mt-2">
            {trend === "up" ? (
              <TrendingUp className="h-3 w-3 text-green-500" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500" />
            )}
            <span
              className={cn(
                "text-xs font-medium",
                trend === "up" ? "text-green-500" : "text-red-500"
              )}
            >
              {change}
            </span>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
          {icon}
        </div>
      </div>
    </div>
  )
}
