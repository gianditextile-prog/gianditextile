-- ============================================================
-- GIANDI TEXTILE — INITIAL DATABASE SCHEMA
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  sku VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  supplier_code VARCHAR(50),
  price_per_meter INTEGER NOT NULL DEFAULT 0,
  stock INTEGER NOT NULL DEFAULT 0,
  unit VARCHAR(20) DEFAULT 'meter',
  colors TEXT[] DEFAULT '{}',
  is_mami BOOLEAN DEFAULT FALSE,
  warehouse VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Suppliers table
CREATE TABLE IF NOT EXISTS suppliers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100),
  contact VARCHAR(100),
  fabric_type VARCHAR(100),
  rating DECIMAL(2,1) DEFAULT 5.0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  city VARCHAR(100),
  segment VARCHAR(50) DEFAULT 'New',
  total_orders INTEGER DEFAULT 0,
  total_spent BIGINT DEFAULT 0,
  last_order_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  customer_id UUID REFERENCES customers(id),
  platform VARCHAR(50) NOT NULL DEFAULT 'WhatsApp',
  status VARCHAR(50) DEFAULT 'processing',
  total BIGINT NOT NULL DEFAULT 0,
  notes TEXT,
  order_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  sku VARCHAR(50),
  product_name VARCHAR(255),
  variant VARCHAR(100),
  qty DECIMAL(10,2) NOT NULL,
  unit VARCHAR(20) DEFAULT 'meter',
  harga_beli INTEGER NOT NULL DEFAULT 0,
  harga_jual INTEGER NOT NULL DEFAULT 0,
  total_customer BIGINT,
  profit BIGINT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Transactions (TransaksiKu) table
CREATE TABLE IF NOT EXISTS transaksiku (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  tgl DATE NOT NULL,
  keterangan TEXT NOT NULL,
  kategori VARCHAR(100) NOT NULL,
  masuk BIGINT DEFAULT 0,
  keluar BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Finance snapshots
CREATE TABLE IF NOT EXISTS finance_snapshots (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  period VARCHAR(20) NOT NULL,
  total_penjualan BIGINT DEFAULT 0,
  total_modal BIGINT DEFAULT 0,
  profit_bersih BIGINT DEFAULT 0,
  total_transaksi INTEGER DEFAULT 0,
  wa_orders INTEGER DEFAULT 0,
  marketplace_orders INTEGER DEFAULT 0,
  profit_margin DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE transaksiku ENABLE ROW LEVEL SECURITY;
ALTER TABLE finance_snapshots ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow authenticated users)
CREATE POLICY "Authenticated read" ON products FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated write" ON products FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON suppliers FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated write" ON suppliers FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON customers FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated write" ON customers FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON orders FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated write" ON orders FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON order_items FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated write" ON order_items FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON transaksiku FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated write" ON transaksiku FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated read" ON finance_snapshots FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated write" ON finance_snapshots FOR ALL TO authenticated USING (true);
