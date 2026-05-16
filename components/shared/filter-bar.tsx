"use client"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterOption {
  value: string
  label: string
}

interface FilterBarProps {
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  filters?: {
    id: string
    label: string
    value: string
    options: FilterOption[]
    onChange: (value: string) => void
  }[]
  className?: string
}

export function FilterBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Cari...",
  filters = [],
  className,
}: FilterBarProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="pl-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>
      {filters.map((filter) => (
        <Select key={filter.id} value={filter.value} onValueChange={filter.onChange}>
          <SelectTrigger className="w-full sm:w-[180px] bg-secondary border-border text-foreground">
            <SelectValue placeholder={filter.label} />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {filter.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  )
}
