"use client"
import { cn } from "@/lib/utils"

interface MonthPillStripProps {
  months: string[]
  selectedMonth: string
  onSelect: (month: string) => void
}

export function MonthPillStrip({ months, selectedMonth, onSelect }: MonthPillStripProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {months.map((m) => (
        <button key={m} onClick={() => onSelect(m)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all",
            selectedMonth === m
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
          )}>
          {m}
        </button>
      ))}
    </div>
  )
}
