export function formatRp(n: number): string {
  if (n >= 1_000_000_000) return `Rp ${(n / 1_000_000_000).toFixed(1)} M`
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toFixed(1)} Jt`
  if (n >= 1_000) return `Rp ${(n / 1_000).toFixed(1)} Rb`
  return `Rp ${n.toLocaleString('id-ID')}`
}

export function formatRpFull(n: number): string {
  return `Rp ${n.toLocaleString('id-ID')}`
}

export function formatNumber(n: number): string {
  return n.toLocaleString('id-ID')
}
