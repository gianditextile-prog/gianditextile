import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface KPICardProps {
  title: string
  value: string
  change?: string
  trend?: "up" | "down"
  icon?: ReactNode
  className?: string
  subtitle?: string
}

export function KPICard({ title, value, change, trend, icon, className, subtitle }: KPICardProps) {
  return (
    <div className={cn("bg-card rounded-xl p-4 lg:p-5 border border-border", className)}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        {icon && (
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
      {change && (
        <div className={cn(
          "flex items-center gap-1 mt-2 text-xs font-medium",
          trend === "up" ? "text-green-500" : "text-red-500"
        )}>
          {trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {change}
        </div>
      )}
    </div>
  )
}
