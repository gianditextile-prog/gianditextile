"use client"

interface ProfitBreakdownProps {
  data: Array<{
    category: string
    amount: number
    percentage: number
    color: string
  }>
}

export function ProfitBreakdown({ data }: ProfitBreakdownProps) {
  const total = data.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.category} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{item.category}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Rp {item.amount.toLocaleString("id-ID")}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                ({item.percentage}%)
              </span>
            </div>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(item.amount / total) * 100}%`,
                backgroundColor: item.color,
              }}
            />
          </div>
        </div>
      ))}
      <div className="pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Total Profit</span>
          <span className="text-lg font-bold text-green-600">
            Rp {total.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  )
}
