import { cn } from "@/lib/utils"

interface TransactionCardProps {
  id: string
  customer: string
  amount: number
  platform?: string
  status: string
  date: string
}

const statusColors: Record<string, string> = {
  completed: "bg-green-500/10 text-green-500",
  processing: "bg-yellow-500/10 text-yellow-500",
  shipped: "bg-blue-500/10 text-blue-500",
  cancelled: "bg-red-500/10 text-red-500",
  pending: "bg-orange-500/10 text-orange-500",
}

export function TransactionCard({ id, customer, amount, platform, status, date }: TransactionCardProps) {
  return (
    <div className="flex items-center gap-3 py-3 hover:bg-muted/20 transition-colors px-1 rounded-lg">
      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-xs font-bold text-primary">{customer.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">{customer}</p>
        <p className="text-xs text-muted-foreground">{id} · {platform} · {date}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-semibold text-foreground">Rp {amount.toLocaleString("id-ID")}</p>
        <span className={cn("text-[10px] font-medium px-2 py-0.5 rounded-full", statusColors[status] || "bg-muted text-muted-foreground")}>
          {status}
        </span>
      </div>
    </div>
  )
}
