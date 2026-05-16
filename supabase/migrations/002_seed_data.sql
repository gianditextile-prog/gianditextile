-- ============================================================
-- GIANDI TEXTILE — SEED DATA
-- ============================================================

-- Seed Suppliers
INSERT INTO suppliers (code, name, city, contact, fabric_type, rating) VALUES
  ('SP-001', 'Bintang Trio Tex', 'Bandung', '0812-3456-7890', 'Kain Sutra', 4.8),
  ('SP-002', 'Arham Rahimi Textile', 'Jakarta', '0821-9876-5432', 'Kain Crepe', 4.6),
  ('SP-003', 'Fajar Ahmad Fabric', 'Solo', '0856-1234-5678', 'Kain Chiffon', 4.7),
  ('SP-004', 'Vincent Dadlani Co', 'Surabaya', '0878-5555-1234', 'Kain Jersey', 4.5)
ON CONFLICT (code) DO NOTHING;

-- Seed Products
INSERT INTO products (sku, name, type, supplier_code, price_per_meter, stock, colors, is_mami, warehouse) VALUES
  ('GDT-001-BLK', 'Silk Premium Madinah - Hitam', 'Silk', 'SP-001', 95000, 450, ARRAY['Hitam','Navy','Maroon','Cream'], true, 'Gudang Utama'),
  ('GDT-002-NVY', 'Crepe Morocco Matte - Navy', 'Crepe', 'SP-002', 72000, 820, ARRAY['Navy','Hitam','Abu','Coklat'], true, 'Gudang Utama'),
  ('GDT-003-CRM', 'Chiffon Korea Soft - Cream', 'Chiffon', 'SP-003', 48000, 1200, ARRAY['Cream','Pink','Lilac','Sage'], false, 'Gudang Bogor'),
  ('GDT-004-GRY', 'Jersey Rajut Premium - Grey', 'Jersey', 'SP-004', 65000, 38, ARRAY['Grey','Navy','Hitam'], true, 'Gudang Utama'),
  ('GDT-005-GLD', 'Georgette Turki Matte - Gold', 'Georgette', 'SP-005', 88000, 650, ARRAY['Gold','Rose','Teal','Burgundy'], false, 'Gudang Bogor')
ON CONFLICT (sku) DO NOTHING;

-- Seed Finance Snapshot April 2026
INSERT INTO finance_snapshots (period, total_penjualan, total_modal, profit_bersih, total_transaksi, wa_orders, marketplace_orders, profit_margin)
VALUES ('Apr-2026', 994500000, 922700000, 71800000, 777, 61, 716, 7.2)
ON CONFLICT DO NOTHING;
