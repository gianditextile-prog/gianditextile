"use client"

import { cn } from "@/lib/utils"
import { MessageCircle, ShoppingBag } from "lucide-react"

interface Transaction {
  id: string
  customer: string
  date: string
  amount: number
  status: string
  source: string
  platform?: string
}

interface TransactionCardProps {
  transaction: Transaction
  onClick?: () => void
  showPlatform?: boolean
  showSource?: boolean
}

export function TransactionCard({ 
  transaction, 
  onClick, 
  showPlatform = false,
  showSource = false 
}: TransactionCardProps) {
  const isWA = transaction.source === "WhatsApp"
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between p-4 bg-muted/50 rounded-lg",
        "hover:bg-muted transition-colors text-left",
        onClick && "cursor-pointer"
      )}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div
          className={cn(
            "p-2 rounded-lg shrink-0",
            isWA ? "bg-green-100" : "bg-orange-100"
          )}
        >
          {isWA ? (
            <MessageCircle className="h-4 w-4 text-green-600" />
          ) : (
            <ShoppingBag className="h-4 w-4 text-orange-600" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground truncate">
            {transaction.customer}
          </p>
          <p className="text-xs text-muted-foreground">
            {transaction.date}
            {showSource && ` • ${transaction.source}`}
            {showPlatform && transaction.platform && ` • ${transaction.platform}`}
          </p>
        </div>
      </div>
      <div className="text-right shrink-0 ml-4">
        <p className="text-sm font-semibold text-foreground">
          Rp {transaction.amount.toLocaleString("id-ID")}
        </p>
        <span
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium",
            transaction.status === "completed"
              ? "bg-green-100 text-green-800"
              : transaction.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          )}
        >
          {transaction.status === "completed" ? "Selesai" : transaction.status}
        </span>
      </div>
    </button>
  )
}
