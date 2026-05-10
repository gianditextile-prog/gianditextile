"use client"

import { cn } from "@/lib/utils"
import { X, MessageCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { formatRupiahFull, formatDate, txRevenue, txCost, txProfit, type Transaction } from "@/lib/data"
import { useMediaQuery } from "@/hooks/use-media-query"

interface DetailModalProps {
  transaction: Transaction | null
  open: boolean
  onClose: () => void
}

function TransactionDetails({ transaction }: { transaction: Transaction }) {
  const revenue = txRevenue(transaction)
  const cost = txCost(transaction)
  const profit = txProfit(transaction)
  const isWA = transaction.source === 'wa'

  return (
    <div className="space-y-4">
      {/* Header Info */}
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "p-3 rounded-xl",
            isWA ? "bg-[#25D366]/10" : "bg-[#FF6B00]/10"
          )}
        >
          {isWA ? (
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
          ) : (
            <ShoppingBag className="h-6 w-6 text-[#FF6B00]" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground">
            {isWA ? transaction.customer : transaction.order_id}
          </p>
          <p className="text-sm text-muted-foreground">
            {formatDate(transaction.tanggal)}
            {!isWA && transaction.platform && ` • ${transaction.platform}`}
          </p>
        </div>
        <span
          className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            isWA
              ? "bg-[#25D366]/10 text-[#25D366]"
              : "bg-[#FF6B00]/10 text-[#FF6B00]"
          )}
        >
          {isWA ? "WhatsApp" : transaction.platform}
        </span>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass-card rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Revenue</p>
          <p className="text-sm font-semibold text-foreground">{formatRupiahFull(revenue)}</p>
        </div>
        <div className="glass-card rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Modal</p>
          <p className="text-sm font-semibold text-[#FF6B7A]">{formatRupiahFull(cost)}</p>
        </div>
        <div className="glass-card rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Profit</p>
          <p className="text-sm font-semibold text-[#00D4AA]">{formatRupiahFull(profit)}</p>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Detail Item</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {transaction.items.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-3 space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{item.product}</p>
                  <p className="text-xs text-muted-foreground">{item.variant}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  {item.qty} {item.unit}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground">Harga Jual:</span>
                  <p className="font-medium text-foreground">{formatRupiahFull(item.harga_jual)}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Harga Beli:</span>
                  <p className="font-medium text-foreground">{formatRupiahFull(item.harga_beli)}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Profit:</span>
                  <p className="font-medium text-[#00D4AA]">{formatRupiahFull(item.profit)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DetailModal({ transaction, open, onClose }: DetailModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (!transaction) return null

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="bg-card border-border max-w-lg">
          <DialogHeader>
            <DialogTitle>Detail Transaksi</DialogTitle>
          </DialogHeader>
          <TransactionDetails transaction={transaction} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="bg-card border-border">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle>Detail Transaksi</DrawerTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DrawerHeader>
        <div className="px-4 pb-8 overflow-y-auto max-h-[70vh]">
          <TransactionDetails transaction={transaction} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
