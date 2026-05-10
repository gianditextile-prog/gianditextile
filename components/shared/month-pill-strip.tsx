"use client"

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

interface MonthPillStripProps {
  months: string[]
  selectedMonth: string
  onSelect: (month: string) => void
  className?: string
}

const monthNames: Record<string, string> = {
  '2025-11': 'Nov 2025',
  '2025-12': 'Des 2025',
  '2026-01': 'Jan 2026',
  '2026-02': 'Feb 2026',
  '2026-03': 'Mar 2026',
  '2026-04': 'Apr 2026',
  '2026-05': 'Mei 2026',
}

export function MonthPillStrip({ months, selectedMonth, onSelect, className }: MonthPillStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 150
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 h-8 w-8 text-muted-foreground hover:text-foreground"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div
        ref={scrollRef}
        className="flex-1 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex items-center gap-2 pb-1">
          <button
            onClick={() => onSelect('all')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              selectedMonth === 'all'
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            )}
          >
            Semua
          </button>
          {months.map((month) => (
            <button
              key={month}
              onClick={() => onSelect(month)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                selectedMonth === month
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {monthNames[month] || month}
            </button>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 h-8 w-8 text-muted-foreground hover:text-foreground"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
