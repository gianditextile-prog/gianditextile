// ============================================================
// GIANDI TEXTILE — DATA CONSTANTS
// ============================================================

export type TxItem = {
  product: string
  variant: string
  qty: number
  unit: string
  harga_beli: number
  harga_jual: number
  bayar_supplier: number
  total_customer: number
  profit: number
}

export type Transaction = {
  id: string
  tanggal: string
  source: 'wa' | 'mp'
  customer?: string
  order_id?: string
  platform?: string
  unit: string
  items: TxItem[]
}

export type TransaksiKu = {
  tgl: string
  ket: string
  kat: string
  masuk: number
  keluar: number
}

export type Invoice = {
  no: string
  date: string
  customer: string
  phone: string
  address: string
  items: {
    product: string
    variant: string
    qty: number
    unit: string
    hj: number
    total: number
  }[]
  grand_total: number
}

// ── TRANSAKSIKU DATA (April 2026) ──────────────────────────
export const TX: TransaksiKu[] = [
  {tgl:"01/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"01/04/2026",ket:"Evin Trina Eka Saputri",kat:"Uang keluar",masuk:0,keluar:2000000},
  {tgl:"01/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:222000,keluar:0},
  {tgl:"01/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:7159500,keluar:0},
  {tgl:"01/04/2026",ket:"Evin Trina Eka Saputri",kat:"Uang keluar",masuk:0,keluar:567000},
  {tgl:"01/04/2026",ket:"Nur Irwansyah",kat:"Uang keluar",masuk:0,keluar:58000},
  {tgl:"01/04/2026",ket:"Bangun Austindo Kurir",kat:"Belanja",masuk:0,keluar:15000},
  {tgl:"01/04/2026",ket:"Nofza Giandi Putra",kat:"Uang keluar",masuk:0,keluar:200000},
  {tgl:"01/04/2026",ket:"Kantong Utama",kat:"Tabungan",masuk:960000,keluar:0},
  {tgl:"02/04/2026",ket:"GoPay Tabungan",kat:"Tabungan",masuk:34000,keluar:0},
  {tgl:"02/04/2026",ket:"GoPay Tabungan",kat:"Tabungan",masuk:0,keluar:25000},
  {tgl:"02/04/2026",ket:"Operasional",kat:"Uang masuk",masuk:0,keluar:100000},
  {tgl:"02/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"02/04/2026",ket:"Evin Trina Eka Saputri",kat:"Uang keluar",masuk:0,keluar:472000},
  {tgl:"02/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:99000},
  {tgl:"03/04/2026",ket:"Sembako",kat:"Belanja",masuk:0,keluar:70000},
  {tgl:"04/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:50000},
  {tgl:"04/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"04/04/2026",ket:"Andre",kat:"Uang keluar",masuk:0,keluar:60000},
  {tgl:"04/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"04/04/2026",ket:"Evin Trina Eka Saputri",kat:"Uang keluar",masuk:0,keluar:634500},
  {tgl:"04/04/2026",ket:"Toko Intisari",kat:"Belanja",masuk:0,keluar:35000},
  {tgl:"04/04/2026",ket:"Bangun Austindo Kurir",kat:"Belanja",masuk:0,keluar:14000},
  {tgl:"04/04/2026",ket:"Muhamat Rizki",kat:"Top up",masuk:0,keluar:50000},
  {tgl:"05/04/2026",ket:"Nofza Giandi Putra",kat:"Top up",masuk:0,keluar:45000},
  {tgl:"06/04/2026",ket:"Nofza Giandi Putra",kat:"Uang keluar",masuk:0,keluar:6500000},
  {tgl:"06/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:847562,keluar:0},
  {tgl:"06/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:1821500,keluar:0},
  {tgl:"07/04/2026",ket:"Bangun Austindo Kurir",kat:"Belanja",masuk:0,keluar:2000},
  {tgl:"07/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:100000},
  {tgl:"07/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:183825,keluar:0},
  {tgl:"08/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:63212,keluar:0},
  {tgl:"08/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"08/04/2026",ket:"Fajar Ahmad",kat:"Uang keluar",masuk:0,keluar:1170000},
  {tgl:"08/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"08/04/2026",ket:"Arham Rahimi",kat:"Uang keluar",masuk:0,keluar:1267500},
  {tgl:"08/04/2026",ket:"Studio Bogor",kat:"Tabungan",masuk:400000,keluar:0},
  {tgl:"08/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:4025000,keluar:0},
  {tgl:"08/04/2026",ket:"GoPay Tabungan",kat:"Tabungan",masuk:0,keluar:20000},
  {tgl:"08/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:30000},
  {tgl:"08/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:7200000,keluar:0},
  {tgl:"08/04/2026",ket:"Evin Trina Eka Saputri",kat:"Uang keluar",masuk:0,keluar:2080000},
  {tgl:"09/04/2026",ket:"Warung Bang Opik",kat:"Belanja",masuk:0,keluar:36000},
  {tgl:"09/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:5000},
  {tgl:"09/04/2026",ket:"Vincent Dadlani",kat:"Uang keluar",masuk:0,keluar:6664000},
  {tgl:"09/04/2026",ket:"MyTelkomsel Apps",kat:"Belanja",masuk:0,keluar:5000},
  {tgl:"09/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:43000},
  {tgl:"10/04/2026",ket:"Bintang Trio Tex",kat:"Belanja",masuk:0,keluar:446000},
  {tgl:"10/04/2026",ket:"Fakhri Aslam",kat:"Uang keluar",masuk:0,keluar:140000},
  {tgl:"10/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:697000,keluar:0},
  {tgl:"10/04/2026",ket:"Ahmad Maolani",kat:"Uang keluar",masuk:0,keluar:10000},
  {tgl:"10/04/2026",ket:"Operasional",kat:"Tabungan",masuk:0,keluar:300000},
  {tgl:"11/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:259000,keluar:0},
  {tgl:"11/04/2026",ket:"Fakhri Aslam",kat:"Uang keluar",masuk:0,keluar:140000},
  {tgl:"11/04/2026",ket:"Bintang Trio Tex",kat:"Belanja",masuk:0,keluar:189000},
  {tgl:"11/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:350889,keluar:0},
  {tgl:"11/04/2026",ket:"Operasional",kat:"Tabungan",masuk:0,keluar:154000},
  {tgl:"12/04/2026",ket:"Tri Owi Utomo",kat:"Top up",masuk:0,keluar:28500},
  {tgl:"12/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:50000},
  {tgl:"13/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:50000},
  {tgl:"13/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:7000},
  {tgl:"14/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:110000},
  {tgl:"14/04/2026",ket:"Bintang Trio Tex",kat:"Belanja",masuk:0,keluar:1895000},
  {tgl:"14/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:1665000,keluar:0},
  {tgl:"14/04/2026",ket:"Muhammad Fauzan",kat:"Uang masuk",masuk:202000,keluar:0},
  {tgl:"14/04/2026",ket:"GoPay Tabungan",kat:"Tabungan",masuk:0,keluar:20000},
  {tgl:"14/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:543929,keluar:0},
  {tgl:"14/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:18000},
  {tgl:"14/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:810000,keluar:0},
  {tgl:"15/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:4431000,keluar:0},
  {tgl:"15/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"15/04/2026",ket:"Fakhri Aslam",kat:"Uang keluar",masuk:0,keluar:129500},
  {tgl:"15/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:20000},
  {tgl:"15/04/2026",ket:"Muhammad Fauzan",kat:"Uang masuk",masuk:7000,keluar:0},
  {tgl:"15/04/2026",ket:"Anisa Zelvia Safitri",kat:"Uang masuk",masuk:78000,keluar:0},
  {tgl:"15/04/2026",ket:"A&W Ratu Plaza",kat:"Belanja",masuk:0,keluar:71000},
  {tgl:"15/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"15/04/2026",ket:"Evin Trina Eka Saputri",kat:"Uang keluar",masuk:0,keluar:3369500},
  {tgl:"15/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:110000},
  {tgl:"16/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:30000},
  {tgl:"16/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"16/04/2026",ket:"Suni",kat:"Uang keluar",masuk:0,keluar:150000},
  {tgl:"16/04/2026",ket:"Bintang Trio Tex",kat:"Belanja",masuk:0,keluar:825500},
  {tgl:"16/04/2026",ket:"Arham Rahimi",kat:"Uang keluar",masuk:0,keluar:13806000},
  {tgl:"16/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:29400000,keluar:0},
  {tgl:"17/04/2026",ket:"Kantong Utama",kat:"Refund",masuk:0,keluar:920000},
  {tgl:"17/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"17/04/2026",ket:"Arham Rahimi",kat:"Uang keluar",masuk:0,keluar:2574000},
  {tgl:"17/04/2026",ket:"Fajar Ahmad",kat:"Uang keluar",masuk:0,keluar:1033500},
  {tgl:"17/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:30000},
  {tgl:"18/04/2026",ket:"Evin Trina Eka Saputri",kat:"Uang keluar",masuk:0,keluar:1250000},
  {tgl:"18/04/2026",ket:"Shopee Seller Wallet",kat:"Tabungan",masuk:1286784,keluar:0},
  {tgl:"18/04/2026",ket:"Muhammad Fauzan",kat:"Uang keluar",masuk:0,keluar:123000},
  {tgl:"18/04/2026",ket:"Bangun Austindo Kurir",kat:"Belanja",masuk:0,keluar:4000},
  {tgl:"18/04/2026",ket:"Bintang Trio Tex",kat:"Belanja",masuk:0,keluar:1353000},
  {tgl:"18/04/2026",ket:"Biaya Transfer Keluar",kat:"Biaya",masuk:0,keluar:2500},
  {tgl:"18/04/2026",ket:"Suni",kat:"Uang keluar",masuk:0,keluar:40000},
  {tgl:"18/04/2026",ket:"VO, Pangrango",kat:"Belanja",masuk:0,keluar:160000},
  {tgl:"19/04/2026",ket:"Muhammad Syah Rulli",kat:"Top up",masuk:0,keluar:75000},
  {tgl:"19/04/2026",ket:"Nofza Giandi Putra",kat:"Uang masuk",masuk:7606777,keluar:0},
]

// ── INVOICE DATA ───────────────────────────────────────────
export const INVOICES_RAW: Invoice[] = [
  {no:"#347",date:"2026-04-02",customer:"Lalu Erwin Syahroni",phone:"62 87865792031",address:"Jl. menang, gerung selatan, lombok barat",items:[{product:"Marbella Silk",variant:"Soft Mocha",qty:67,unit:"yard",hj:21500,total:1440500},{product:"Marbella Silk",variant:"Blush Petal",qty:68,unit:"yard",hj:21500,total:1462000},{product:"Marbella Silk",variant:"Rich Burgundy",qty:20,unit:"meter",hj:29000,total:580000},{product:"Marbella Silk",variant:"Dusty Lavender",qty:20,unit:"meter",hj:29000,total:580000},{product:"Marbella Silk",variant:"Mahogany",qty:20,unit:"meter",hj:29000,total:580000},{product:"Marbella Silk",variant:"Cloud Grey",qty:20,unit:"meter",hj:29000,total:580000},{product:"Marbella Silk",variant:"Blush Mauve",qty:20,unit:"meter",hj:29000,total:580000}],grand_total:5802500},
  {no:"#348",date:"2026-04-08",customer:"Mahiza Indonesia",phone:"62 895-3214-05776",address:"Jl. H Siun 2D No.40, Ceger, Cipayung, Jakarta Timur",items:[{product:"Maheen",variant:"Col 2",qty:176,unit:"yard",hj:30000,total:5280000},{product:"Maheen",variant:"Col 41",qty:120,unit:"yard",hj:30000,total:3600000},{product:"Maheen",variant:"Col 28",qty:120,unit:"yard",hj:30000,total:3600000}],grand_total:12480000},
  {no:"#349",date:"2026-04-13",customer:"Ihda Asna",phone:"6281226600094",address:"Kober gg riswan, purwokerto barat, banyumas",items:[{product:"Maheen",variant:"Black",qty:3,unit:"meter",hj:45000,total:135000},{product:"Maheen",variant:"Navy",qty:3,unit:"meter",hj:45000,total:135000},{product:"Maheen",variant:"Cocoa Soil",qty:3,unit:"meter",hj:45000,total:135000},{product:"Maheen",variant:"Purple Clay",qty:3,unit:"meter",hj:45000,total:135000},{product:"Maheen",variant:"Brown Earth",qty:3,unit:"meter",hj:45000,total:135000},{product:"Maheen",variant:"Blue Sky",qty:3,unit:"meter",hj:45000,total:135000}],grand_total:810000},
  {no:"#351",date:"2026-04-14",customer:"Ummu Salma",phone:"62896-6213-2199",address:"Jl randusari timur, antapani, Bandung",items:[{product:"Maheen",variant:"Black",qty:37,unit:"meter",hj:45000,total:1665000}],grand_total:1665000},
  {no:"#352",date:"2026-04-14",customer:"Novianti RJA",phone:"62896-6213-2199",address:"RJA perintis, Jl.perintis kemerdekaan KM 8, Makassar",items:[{product:"Marbella Silk",variant:"Twilight Navy",qty:350,unit:"yard",hj:21000,total:7350000},{product:"Marbella Silk",variant:"Classic Taupe",qty:350,unit:"yard",hj:21000,total:7350000},{product:"Marbella Silk",variant:"Mahogany",qty:350,unit:"yard",hj:21000,total:7350000},{product:"Marbella Silk",variant:"Mystic Plum",qty:350,unit:"yard",hj:21000,total:7350000}],grand_total:29400000},
  {no:"#353",date:"2026-04-14",customer:"Zakhira Konveksi",phone:"6281280521675",address:"Perum.HBTB Jl.Anantakupa Raya, Cimanggis Depok",items:[{product:"Marbella Silk",variant:"Soft Mocha",qty:65,unit:"yard",hj:21500,total:1397500},{product:"Marbella Silk",variant:"Burnt Mahogany",qty:60,unit:"yard",hj:21500,total:1290000},{product:"Marbella Silk",variant:"Concrete Taupe",qty:60,unit:"yard",hj:21500,total:1290000},{product:"Maheen",variant:"Mahogany Wood",qty:5,unit:"meter",hj:45000,total:225000},{product:"Maheen",variant:"Dark Plum Soil",qty:5,unit:"meter",hj:45000,total:225000}],grand_total:4427500},
  {no:"#357",date:"2026-04-18",customer:"Husnul Khotimah",phone:"62 853-9904-6150",address:"TOKO AR MOTOR, pasar sentral takalala, kab.soppeng, sulsel",items:[{product:"Marbella Silk",variant:"Soft Mocha",qty:198,unit:"yard",hj:21500,total:4257000},{product:"Marbella Silk",variant:"Black",qty:70,unit:"yard",hj:21500,total:1505000},{product:"Marbella Silk",variant:"Strom Blue",qty:5,unit:"meter",hj:29000,total:145000},{product:"Marbella Silk",variant:"Burgundy",qty:5,unit:"meter",hj:29000,total:145000},{product:"Marbella Silk",variant:"Slate Blue",qty:5,unit:"meter",hj:29000,total:145000},{product:"Marbella Silk",variant:"Dust Plum",qty:10,unit:"meter",hj:29000,total:290000}],grand_total:6487000},
  {no:"#358",date:"2026-04-18",customer:"Rosi",phone:"81395398595",address:"Konveksi A Jajang, Jl. Cigondewah Kidul, Bandung",items:[{product:"Maheen",variant:"Warm Taupe",qty:20,unit:"meter",hj:49000,total:980000}],grand_total:980000},
  {no:"#359",date:"2026-04-21",customer:"Ummu Afda",phone:"62 857-7749-2379",address:"Dukuh condong, kec bandar, kab batang jateng",items:[{product:"Marbella Silk",variant:"Burgundy",qty:70,unit:"yard",hj:21500,total:1505000}],grand_total:1505000},
  {no:"#360",date:"2026-04-21",customer:"Novianti RJA",phone:"62896-6213-2199",address:"RJA perintis, Jl.perintis kemerdekaan KM 8, Makassar",items:[{product:"Marbella Silk",variant:"Soft Petal",qty:350,unit:"yard",hj:21000,total:7350000},{product:"Marbella Silk",variant:"Cocoa Ash",qty:350,unit:"yard",hj:21000,total:7350000}],grand_total:14700000},
  {no:"#361",date:"2026-04-22",customer:"Mahiza Indonesia",phone:"62 895-3214-05776",address:"Jl. H Siun 2D No.40, Ceger, Cipayung, Jakarta Timur",items:[{product:"Maheen",variant:"Col 40",qty:120,unit:"yard",hj:30000,total:3600000},{product:"Maheen",variant:"Col 41",qty:120,unit:"yard",hj:30000,total:3600000},{product:"Maheen",variant:"Col 46",qty:98.5,unit:"yard",hj:30000,total:2955000},{product:"Maheen",variant:"Col 20",qty:117.5,unit:"yard",hj:30000,total:3525000},{product:"Maheen",variant:"Col 45",qty:123,unit:"yard",hj:30000,total:3690000}],grand_total:17370000},
  {no:"#362",date:"2026-04-24",customer:"Risa Puspita Sandi",phone:"6283175694207",address:"Jl.Penyirapan, desa suka negara, kec.soreang, kab.bandung",items:[{product:"Marbella Silk",variant:"Black",qty:70,unit:"yard",hj:21500,total:1505000},{product:"Marbella Silk",variant:"Mahogany",qty:68,unit:"yard",hj:21500,total:1462000},{product:"Marbella Silk",variant:"Coffee",qty:68,unit:"yard",hj:21500,total:1462000}],grand_total:4429000},
]

// ── INVENTORY DATA ─────────────────────────────────────────
export const PRODUCTS_DATA: Record<string, {no:number,warna:string,status:"READY"|"SOLD_OUT"}[]> = {
  "Marbella Albalad": [
    {no:1,warna:"Hitam",status:"READY"},{no:2,warna:"Broken White",status:"SOLD_OUT"},
    {no:3,warna:"Classic Maroon",status:"READY"},{no:4,warna:"Burgundy",status:"READY"},
    {no:5,warna:"Storm Blue",status:"READY"},{no:6,warna:"Deep Teal",status:"READY"},
    {no:7,warna:"Urban Mist",status:"READY"},{no:8,warna:"Warm Sand",status:"SOLD_OUT"},
    {no:9,warna:"Cocoa Chestnut",status:"READY"},{no:10,warna:"Blush Mauve",status:"READY"},
    {no:11,warna:"Warm Tan",status:"READY"},{no:12,warna:"Classic Taupe",status:"READY"},
    {no:13,warna:"Coffee",status:"READY"},{no:14,warna:"Chocolate Brown",status:"READY"},
    {no:15,warna:"Dusty Lavender",status:"READY"},{no:16,warna:"Mystic Plum",status:"READY"},
    {no:17,warna:"Soft Mocha",status:"READY"},{no:18,warna:"Twilight Navy",status:"READY"},
    {no:19,warna:"Slate Blue",status:"READY"},{no:20,warna:"Charcoal",status:"READY"},
    {no:21,warna:"Fog Stone",status:"READY"},{no:22,warna:"Dust Plum",status:"READY"},
    {no:23,warna:"Soft Petal",status:"READY"},{no:24,warna:"Blush Petal",status:"READY"},
    {no:25,warna:"Silver Mist",status:"READY"},{no:26,warna:"Jade Forest",status:"SOLD_OUT"},
    {no:27,warna:"Terracotta",status:"READY"},{no:28,warna:"Nude Mahogany",status:"READY"},
    {no:29,warna:"Deep Oxblood",status:"SOLD_OUT"},{no:30,warna:"Burnt Mahogany",status:"READY"},
  ],
  "Marbella Fasa": [
    {no:1,warna:"Black",status:"READY"},{no:2,warna:"Royal Navy",status:"READY"},
    {no:3,warna:"Maroon",status:"READY"},{no:4,warna:"Rose Wood",status:"READY"},
    {no:5,warna:"Sage Grey",status:"READY"},{no:6,warna:"Cloudy Blue",status:"READY"},
    {no:7,warna:"Deep Slate",status:"READY"},{no:8,warna:"Vanilla Dust",status:"READY"},
    {no:9,warna:"Caramel Nude",status:"READY"},{no:10,warna:"Burnt Peach",status:"READY"},
    {no:11,warna:"Teal Seafoam",status:"SOLD_OUT"},{no:12,warna:"Broken White",status:"READY"},
    {no:13,warna:"Mocha Blush",status:"READY"},{no:14,warna:"Soft Sky",status:"SOLD_OUT"},
    {no:15,warna:"Blush Cream",status:"READY"},{no:16,warna:"Cool Denim",status:"READY"},
    {no:17,warna:"Burgundy",status:"READY"},{no:18,warna:"Amethyst",status:"READY"},
    {no:19,warna:"Mauve Ash",status:"READY"},{no:20,warna:"Concrete Taupe",status:"READY"},
    {no:21,warna:"Velvet Maroon",status:"READY"},{no:22,warna:"Cloud Grey",status:"READY"},
    {no:23,warna:"Silver Drift",status:"READY"},{no:24,warna:"Mocha",status:"READY"},
    {no:25,warna:"Smoky Earth",status:"READY"},{no:26,warna:"Hazelnut",status:"READY"},
    {no:27,warna:"Cocoa Ash",status:"READY"},{no:28,warna:"Dark Brown",status:"READY"},
    {no:29,warna:"Arctic Grey",status:"READY"},{no:30,warna:"Coffee",status:"READY"},
    {no:31,warna:"Forest Teal",status:"READY"},{no:32,warna:"Carbon Black",status:"READY"},
  ],
  "Maheen": [
    {no:1,warna:"Soft Broken White",status:"READY"},{no:2,warna:"Warm Sand Beige",status:"READY"},
    {no:3,warna:"Natural Nude",status:"SOLD_OUT"},{no:4,warna:"Cream Stone",status:"SOLD_OUT"},
    {no:5,warna:"Cocoa Sand",status:"SOLD_OUT"},{no:6,warna:"Khaki Clay",status:"SOLD_OUT"},
    {no:7,warna:"Tiramisu Earth",status:"SOLD_OUT"},{no:8,warna:"Ash Peach Clay",status:"SOLD_OUT"},
    {no:9,warna:"Soft Peach Sand",status:"READY"},{no:10,warna:"Blush Pink",status:"SOLD_OUT"},
    {no:11,warna:"Ivory Linen",status:"READY"},{no:12,warna:"Peach Dust",status:"READY"},
    {no:13,warna:"Lilac Stone Grey",status:"READY"},{no:14,warna:"Silver Pebble",status:"READY"},
    {no:15,warna:"Ash Stone Grey",status:"READY"},{no:16,warna:"Blue Slate Grey",status:"READY"},
    {no:17,warna:"Mint Clay",status:"READY"},{no:18,warna:"Oat Moss",status:"READY"},
    {no:19,warna:"Olive Clay",status:"READY"},{no:20,warna:"Warm Taupe",status:"READY"},
    {no:21,warna:"Golden Mustard",status:"READY"},{no:22,warna:"Dusty Purple Clay",status:"SOLD_OUT"},
    {no:23,warna:"Indigo Earth",status:"READY"},{no:24,warna:"Muted Mauve Earth",status:"READY"},
    {no:25,warna:"Cocoa Soil",status:"READY"},{no:26,warna:"Dark Mocha Earth",status:"SOLD_OUT"},
    {no:27,warna:"Mahogany Wood",status:"READY"},{no:28,warna:"Cinnamon Bark",status:"READY"},
    {no:29,warna:"Burnt Terracotta",status:"READY"},{no:30,warna:"Maroon Soil",status:"READY"},
    {no:31,warna:"Burgundy Earth",status:"READY"},{no:32,warna:"Dark Plum Soil",status:"READY"},
    {no:33,warna:"Deep Teal Earth",status:"READY"},{no:34,warna:"Army Green Earth",status:"READY"},
    {no:35,warna:"Dark Jade Green",status:"SOLD_OUT"},{no:36,warna:"Deep Navy Earth",status:"SOLD_OUT"},
    {no:37,warna:"True Black Soil",status:"SOLD_OUT"},
  ],
  "Royanna Silk": [
    {no:1,warna:"Black",status:"SOLD_OUT"},{no:2,warna:"Snow White",status:"SOLD_OUT"},
    {no:3,warna:"Dark Maroon",status:"SOLD_OUT"},{no:4,warna:"Burgundy",status:"READY"},
    {no:5,warna:"Misty Purple",status:"SOLD_OUT"},{no:6,warna:"Deep Teal",status:"SOLD_OUT"},
    {no:7,warna:"Ash Grey",status:"READY"},{no:8,warna:"Warm Mocha",status:"SOLD_OUT"},
    {no:9,warna:"Dusty Rose",status:"SOLD_OUT"},{no:10,warna:"Dusty Cocoa",status:"SOLD_OUT"},
    {no:11,warna:"Stone Grey",status:"SOLD_OUT"},{no:12,warna:"Ink Blue",status:"READY"},
    {no:13,warna:"Vanilla Latte",status:"READY"},{no:14,warna:"Dusty Ungu",status:"READY"},
  ],
  "Cathy": [
    {no:1,warna:"Black",status:"READY"},{no:2,warna:"Off White",status:"READY"},
    {no:3,warna:"Navy Blue",status:"READY"},{no:4,warna:"Maroon",status:"READY"},
    {no:5,warna:"Dusty Rose",status:"READY"},{no:6,warna:"Sage Green",status:"READY"},
    {no:7,warna:"Caramel",status:"READY"},{no:8,warna:"Charcoal",status:"READY"},
    {no:9,warna:"Blush Pink",status:"READY"},{no:10,warna:"Deep Teal",status:"READY"},
    {no:11,warna:"Warm Beige",status:"READY"},{no:12,warna:"Olive Green",status:"READY"},
    {no:13,warna:"Lavender Grey",status:"READY"},{no:14,warna:"Cocoa Brown",status:"READY"},
    {no:15,warna:"Steel Blue",status:"READY"},{no:16,warna:"Nude Peach",status:"READY"},
    {no:17,warna:"Forest Green",status:"READY"},{no:18,warna:"Dusty Mauve",status:"READY"},
    {no:19,warna:"Burgundy",status:"READY"},{no:20,warna:"Slate Grey",status:"READY"},
    {no:21,warna:"Warm Ivory",status:"READY"},{no:22,warna:"Deep Plum",status:"READY"},
    {no:23,warna:"Taupe",status:"READY"},{no:24,warna:"Terracotta",status:"READY"},
    {no:25,warna:"Mocha",status:"READY"},{no:26,warna:"Dusty Teal",status:"READY"},
    {no:27,warna:"Warm Brown",status:"READY"},{no:28,warna:"Silver Grey",status:"READY"},
    {no:29,warna:"Deep Navy",status:"READY"},{no:30,warna:"Blush Cream",status:"READY"},
    {no:31,warna:"Muted Green",status:"READY"},{no:32,warna:"Smoky Plum",status:"READY"},
    {no:33,warna:"Dusty Coral",status:"READY"},{no:34,warna:"Stone Beige",status:"READY"},
    {no:35,warna:"Dark Chocolate",status:"READY"},{no:36,warna:"Ink Navy",status:"READY"},
  ],
  "Golden Silk": [
    {no:1,warna:"Classic Black",status:"READY"},{no:2,warna:"Pearl White",status:"READY"},
    {no:3,warna:"Deep Navy",status:"READY"},{no:4,warna:"Royal Maroon",status:"READY"},
    {no:5,warna:"Sage Mist",status:"READY"},{no:6,warna:"Warm Caramel",status:"READY"},
    {no:7,warna:"Charcoal Smoke",status:"READY"},{no:8,warna:"Blush Champagne",status:"READY"},
    {no:9,warna:"Emerald Deep",status:"READY"},{no:10,warna:"Warm Ivory",status:"READY"},
    {no:11,warna:"Olive Silk",status:"READY"},{no:12,warna:"Lavender Dusk",status:"READY"},
    {no:13,warna:"Cocoa Velvet",status:"READY"},{no:14,warna:"Nude Sand",status:"READY"},
    {no:15,warna:"Burgundy Gold",status:"READY"},{no:16,warna:"Slate Mist",status:"READY"},
    {no:17,warna:"Warm Cream",status:"READY"},{no:18,warna:"Deep Plum Silk",status:"READY"},
    {no:19,warna:"Taupe Silk",status:"READY"},{no:20,warna:"Terra Silk",status:"READY"},
    {no:21,warna:"Mocha Gold",status:"READY"},{no:22,warna:"Warm Earth",status:"READY"},
    {no:23,warna:"Silver Silk",status:"READY"},{no:24,warna:"Midnight Navy",status:"READY"},
  ],
}

// ── WHATSAPP ORDERS DATA ───────────────────────────────────
export const WA_DATA: Transaction[] = [
  {
    id: "WA-001",
    tanggal: "2026-04-02",
    source: "wa",
    customer: "Lalu Erwin Syahroni",
    unit: "yard",
    items: [
      { product: "Marbella Silk", variant: "Soft Mocha", qty: 67, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 1005000, total_customer: 1440500, profit: 435500 },
      { product: "Marbella Silk", variant: "Blush Petal", qty: 68, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 1020000, total_customer: 1462000, profit: 442000 },
    ]
  },
  {
    id: "WA-002",
    tanggal: "2026-04-08",
    source: "wa",
    customer: "Mahiza Indonesia",
    unit: "yard",
    items: [
      { product: "Maheen", variant: "Col 2", qty: 176, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 3872000, total_customer: 5280000, profit: 1408000 },
      { product: "Maheen", variant: "Col 41", qty: 120, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 2640000, total_customer: 3600000, profit: 960000 },
      { product: "Maheen", variant: "Col 28", qty: 120, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 2640000, total_customer: 3600000, profit: 960000 },
    ]
  },
  {
    id: "WA-003",
    tanggal: "2026-04-13",
    source: "wa",
    customer: "Ihda Asna",
    unit: "meter",
    items: [
      { product: "Maheen", variant: "Black", qty: 3, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 96000, total_customer: 135000, profit: 39000 },
      { product: "Maheen", variant: "Navy", qty: 3, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 96000, total_customer: 135000, profit: 39000 },
      { product: "Maheen", variant: "Cocoa Soil", qty: 3, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 96000, total_customer: 135000, profit: 39000 },
      { product: "Maheen", variant: "Purple Clay", qty: 3, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 96000, total_customer: 135000, profit: 39000 },
      { product: "Maheen", variant: "Brown Earth", qty: 3, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 96000, total_customer: 135000, profit: 39000 },
      { product: "Maheen", variant: "Blue Sky", qty: 3, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 96000, total_customer: 135000, profit: 39000 },
    ]
  },
  {
    id: "WA-004",
    tanggal: "2026-04-14",
    source: "wa",
    customer: "Ummu Salma",
    unit: "meter",
    items: [
      { product: "Maheen", variant: "Black", qty: 37, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 1184000, total_customer: 1665000, profit: 481000 },
    ]
  },
  {
    id: "WA-005",
    tanggal: "2026-04-14",
    source: "wa",
    customer: "Novianti RJA",
    unit: "yard",
    items: [
      { product: "Marbella Silk", variant: "Twilight Navy", qty: 350, unit: "yard", harga_beli: 14000, harga_jual: 21000, bayar_supplier: 4900000, total_customer: 7350000, profit: 2450000 },
      { product: "Marbella Silk", variant: "Classic Taupe", qty: 350, unit: "yard", harga_beli: 14000, harga_jual: 21000, bayar_supplier: 4900000, total_customer: 7350000, profit: 2450000 },
      { product: "Marbella Silk", variant: "Mahogany", qty: 350, unit: "yard", harga_beli: 14000, harga_jual: 21000, bayar_supplier: 4900000, total_customer: 7350000, profit: 2450000 },
      { product: "Marbella Silk", variant: "Mystic Plum", qty: 350, unit: "yard", harga_beli: 14000, harga_jual: 21000, bayar_supplier: 4900000, total_customer: 7350000, profit: 2450000 },
    ]
  },
  {
    id: "WA-006",
    tanggal: "2026-04-14",
    source: "wa",
    customer: "Zakhira Konveksi",
    unit: "yard",
    items: [
      { product: "Marbella Silk", variant: "Soft Mocha", qty: 65, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 975000, total_customer: 1397500, profit: 422500 },
      { product: "Marbella Silk", variant: "Burnt Mahogany", qty: 60, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 900000, total_customer: 1290000, profit: 390000 },
      { product: "Marbella Silk", variant: "Concrete Taupe", qty: 60, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 900000, total_customer: 1290000, profit: 390000 },
    ]
  },
  {
    id: "WA-007",
    tanggal: "2026-04-18",
    source: "wa",
    customer: "Husnul Khotimah",
    unit: "yard",
    items: [
      { product: "Marbella Silk", variant: "Soft Mocha", qty: 198, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 2970000, total_customer: 4257000, profit: 1287000 },
      { product: "Marbella Silk", variant: "Black", qty: 70, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 1050000, total_customer: 1505000, profit: 455000 },
    ]
  },
  {
    id: "WA-008",
    tanggal: "2026-04-18",
    source: "wa",
    customer: "Rosi",
    unit: "meter",
    items: [
      { product: "Maheen", variant: "Warm Taupe", qty: 20, unit: "meter", harga_beli: 35000, harga_jual: 49000, bayar_supplier: 700000, total_customer: 980000, profit: 280000 },
    ]
  },
  {
    id: "WA-009",
    tanggal: "2026-04-21",
    source: "wa",
    customer: "Ummu Afda",
    unit: "yard",
    items: [
      { product: "Marbella Silk", variant: "Burgundy", qty: 70, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 1050000, total_customer: 1505000, profit: 455000 },
    ]
  },
  {
    id: "WA-010",
    tanggal: "2026-04-21",
    source: "wa",
    customer: "Novianti RJA",
    unit: "yard",
    items: [
      { product: "Marbella Silk", variant: "Soft Petal", qty: 350, unit: "yard", harga_beli: 14000, harga_jual: 21000, bayar_supplier: 4900000, total_customer: 7350000, profit: 2450000 },
      { product: "Marbella Silk", variant: "Cocoa Ash", qty: 350, unit: "yard", harga_beli: 14000, harga_jual: 21000, bayar_supplier: 4900000, total_customer: 7350000, profit: 2450000 },
    ]
  },
  {
    id: "WA-011",
    tanggal: "2026-04-22",
    source: "wa",
    customer: "Mahiza Indonesia",
    unit: "yard",
    items: [
      { product: "Maheen", variant: "Col 40", qty: 120, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 2640000, total_customer: 3600000, profit: 960000 },
      { product: "Maheen", variant: "Col 41", qty: 120, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 2640000, total_customer: 3600000, profit: 960000 },
      { product: "Maheen", variant: "Col 46", qty: 98.5, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 2167000, total_customer: 2955000, profit: 788000 },
      { product: "Maheen", variant: "Col 20", qty: 117.5, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 2585000, total_customer: 3525000, profit: 940000 },
      { product: "Maheen", variant: "Col 45", qty: 123, unit: "yard", harga_beli: 22000, harga_jual: 30000, bayar_supplier: 2706000, total_customer: 3690000, profit: 984000 },
    ]
  },
  {
    id: "WA-012",
    tanggal: "2026-04-24",
    source: "wa",
    customer: "Risa Puspita Sandi",
    unit: "yard",
    items: [
      { product: "Marbella Silk", variant: "Black", qty: 70, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 1050000, total_customer: 1505000, profit: 455000 },
      { product: "Marbella Silk", variant: "Mahogany", qty: 68, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 1020000, total_customer: 1462000, profit: 442000 },
      { product: "Marbella Silk", variant: "Coffee", qty: 68, unit: "yard", harga_beli: 15000, harga_jual: 21500, bayar_supplier: 1020000, total_customer: 1462000, profit: 442000 },
    ]
  },
]

// ── MARKETPLACE ORDERS DATA ────────────────────────────────
export const MP_DATA: Transaction[] = [
  {
    id: "MP-001",
    tanggal: "2026-04-01",
    source: "mp",
    order_id: "SHP2604010001",
    platform: "Shopee",
    unit: "meter",
    items: [
      { product: "Marbella Silk", variant: "Black", qty: 5, unit: "meter", harga_beli: 20000, harga_jual: 29000, bayar_supplier: 100000, total_customer: 145000, profit: 45000 },
      { product: "Marbella Silk", variant: "Navy", qty: 3, unit: "meter", harga_beli: 20000, harga_jual: 29000, bayar_supplier: 60000, total_customer: 87000, profit: 27000 },
    ]
  },
  {
    id: "MP-002",
    tanggal: "2026-04-02",
    source: "mp",
    order_id: "TKT2604020002",
    platform: "Tiktok",
    unit: "meter",
    items: [
      { product: "Maheen", variant: "Warm Taupe", qty: 8, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 256000, total_customer: 360000, profit: 104000 },
    ]
  },
  {
    id: "MP-003",
    tanggal: "2026-04-04",
    source: "mp",
    order_id: "SHP2604040003",
    platform: "Shopee",
    unit: "meter",
    items: [
      { product: "Marbella Silk", variant: "Burgundy", qty: 10, unit: "meter", harga_beli: 20000, harga_jual: 29000, bayar_supplier: 200000, total_customer: 290000, profit: 90000 },
    ]
  },
  {
    id: "MP-004",
    tanggal: "2026-04-06",
    source: "mp",
    order_id: "LZD2604060004",
    platform: "Lazada",
    unit: "meter",
    items: [
      { product: "Golden Silk", variant: "Pearl White", qty: 6, unit: "meter", harga_beli: 25000, harga_jual: 35000, bayar_supplier: 150000, total_customer: 210000, profit: 60000 },
      { product: "Golden Silk", variant: "Royal Maroon", qty: 4, unit: "meter", harga_beli: 25000, harga_jual: 35000, bayar_supplier: 100000, total_customer: 140000, profit: 40000 },
    ]
  },
  {
    id: "MP-005",
    tanggal: "2026-04-08",
    source: "mp",
    order_id: "SHP2604080005",
    platform: "Shopee",
    unit: "meter",
    items: [
      { product: "Cathy", variant: "Dusty Rose", qty: 12, unit: "meter", harga_beli: 18000, harga_jual: 26000, bayar_supplier: 216000, total_customer: 312000, profit: 96000 },
    ]
  },
  {
    id: "MP-006",
    tanggal: "2026-04-10",
    source: "mp",
    order_id: "TKT2604100006",
    platform: "Tiktok",
    unit: "meter",
    items: [
      { product: "Marbella Silk", variant: "Soft Mocha", qty: 15, unit: "meter", harga_beli: 20000, harga_jual: 29000, bayar_supplier: 300000, total_customer: 435000, profit: 135000 },
    ]
  },
  {
    id: "MP-007",
    tanggal: "2026-04-11",
    source: "mp",
    order_id: "SHPBGR2604110007",
    platform: "Shopee Bogor",
    unit: "meter",
    items: [
      { product: "Maheen", variant: "Black", qty: 20, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 640000, total_customer: 900000, profit: 260000 },
    ]
  },
  {
    id: "MP-008",
    tanggal: "2026-04-13",
    source: "mp",
    order_id: "SHP2604130008",
    platform: "Shopee",
    unit: "meter",
    items: [
      { product: "Royanna Silk", variant: "Burgundy", qty: 8, unit: "meter", harga_beli: 22000, harga_jual: 32000, bayar_supplier: 176000, total_customer: 256000, profit: 80000 },
    ]
  },
  {
    id: "MP-009",
    tanggal: "2026-04-15",
    source: "mp",
    order_id: "TKT2604150009",
    platform: "Tiktok",
    unit: "meter",
    items: [
      { product: "Marbella Silk", variant: "Classic Taupe", qty: 10, unit: "meter", harga_beli: 20000, harga_jual: 29000, bayar_supplier: 200000, total_customer: 290000, profit: 90000 },
      { product: "Marbella Silk", variant: "Coffee", qty: 8, unit: "meter", harga_beli: 20000, harga_jual: 29000, bayar_supplier: 160000, total_customer: 232000, profit: 72000 },
    ]
  },
  {
    id: "MP-010",
    tanggal: "2026-04-17",
    source: "mp",
    order_id: "SHP2604170010",
    platform: "Shopee",
    unit: "meter",
    items: [
      { product: "Cathy", variant: "Navy Blue", qty: 15, unit: "meter", harga_beli: 18000, harga_jual: 26000, bayar_supplier: 270000, total_customer: 390000, profit: 120000 },
    ]
  },
  {
    id: "MP-011",
    tanggal: "2026-04-18",
    source: "mp",
    order_id: "LZD2604180011",
    platform: "Lazada",
    unit: "meter",
    items: [
      { product: "Golden Silk", variant: "Deep Navy", qty: 12, unit: "meter", harga_beli: 25000, harga_jual: 35000, bayar_supplier: 300000, total_customer: 420000, profit: 120000 },
    ]
  },
  {
    id: "MP-012",
    tanggal: "2026-04-20",
    source: "mp",
    order_id: "TKT2604200012",
    platform: "Tiktok",
    unit: "meter",
    items: [
      { product: "Maheen", variant: "Cocoa Soil", qty: 10, unit: "meter", harga_beli: 32000, harga_jual: 45000, bayar_supplier: 320000, total_customer: 450000, profit: 130000 },
    ]
  },
  {
    id: "MP-013",
    tanggal: "2026-04-22",
    source: "mp",
    order_id: "SHP2604220013",
    platform: "Shopee",
    unit: "meter",
    items: [
      { product: "Marbella Silk", variant: "Dusty Lavender", qty: 8, unit: "meter", harga_beli: 20000, harga_jual: 29000, bayar_supplier: 160000, total_customer: 232000, profit: 72000 },
    ]
  },
  {
    id: "MP-014",
    tanggal: "2026-04-24",
    source: "mp",
    order_id: "SHPBGR2604240014",
    platform: "Shopee Bogor",
    unit: "meter",
    items: [
      { product: "Cathy", variant: "Charcoal", qty: 18, unit: "meter", harga_beli: 18000, harga_jual: 26000, bayar_supplier: 324000, total_customer: 468000, profit: 144000 },
    ]
  },
  {
    id: "MP-015",
    tanggal: "2026-04-25",
    source: "mp",
    order_id: "TKT2604250015",
    platform: "Tiktok",
    unit: "meter",
    items: [
      { product: "Golden Silk", variant: "Cocoa Velvet", qty: 6, unit: "meter", harga_beli: 25000, harga_jual: 35000, bayar_supplier: 150000, total_customer: 210000, profit: 60000 },
    ]
  },
]

// ── HELPER FUNCTIONS ───────────────────────────────────────
export const formatRupiah = (n: number): string => {
  const abs = Math.abs(n)
  const sign = n < 0 ? '-' : ''
  if (abs >= 1e9) return sign + 'Rp ' + (abs/1e9).toFixed(2) + 'M'
  if (abs >= 1e6) return sign + 'Rp ' + (abs/1e6).toFixed(1) + 'Jt'
  if (abs >= 1e3) return sign + 'Rp ' + (abs/1e3).toFixed(0) + 'rb'
  return sign + 'Rp ' + abs.toLocaleString('id-ID')
}

export const formatRupiahFull = (n: number): string =>
  'Rp ' + Math.round(n).toLocaleString('id-ID')

export const txRevenue = (t: Transaction): number =>
  t.items.reduce((s, i) => s + i.total_customer, 0)

export const txCost = (t: Transaction): number =>
  t.items.reduce((s, i) => s + i.bayar_supplier, 0)

export const txProfit = (t: Transaction): number =>
  txRevenue(t) - txCost(t)

export const txQty = (t: Transaction): number =>
  t.items.reduce((s, i) => s + i.qty, 0)

export const monthKey = (d: string): string => {
  try { const dt = new Date(d); return dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0') }
  catch { return '' }
}

export const monthLabel = (k: string): string => {
  if (!k) return '—'
  const [y, m] = k.split('-')
  return ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][+m-1] + ' ' + y
}

export const formatDate = (d: string): string => {
  try { return new Date(d).toLocaleDateString('id-ID', {day:'2-digit',month:'short',year:'numeric'}) }
  catch { return d }
}

export const getSwatchColor = (w: string): string => {
  const map: Record<string, string> = {
    hitam:'#1a1820',black:'#1a1820','carbon black':'#1a1820',
    'broken white':'#e0d8cc','off white':'#e0d8cc',ivory:'#ded0b0',
    cream:'#e0d0a0',vanilla:'#e0c890',maroon:'#6b1a2a',burgundy:'#7a1a2a',
    'dark maroon':'#4a0f1a',navy:'#1a2a4a','navy blue':'#1a2a4a',
    'royal navy':'#1a3060','deep navy':'#0f1e3a','twilight navy':'#1a2545',
    'midnight navy':'#0a1428','ink blue':'#1a2a5a',teal:'#1a6a5a',
    'deep teal':'#0f5040','forest teal':'#0f5a40',charcoal:'#353040',
    'slate blue':'#4a5a7a','cloud grey':'#a09898','fog stone':'#9a9088',
    'concrete taupe':'#8a8078','ash grey':'#9a9080','arctic grey':'#a8a090',
    'urban mist':'#909098',green:'#3a6a3a',sage:'#6a8060',olive:'#6a6a30',
    jade:'#2a7060',pink:'#e080a0',blush:'#e8a0b0','baby rose':'#e8b0b8',
    'dusty rose':'#c08888','soft petal':'#e8b0b0',purple:'#6a3a8a',
    'mystic plum':'#5a2a7a','dusty lavender':'#9a80b0',grape:'#6a3090',
    'steel violet':'#5a4a7a',amethyst:'#7a508a','deep plum':'#4a2060',
    'dust plum':'#5a3a6a',brown:'#7a4a2a',chocolate:'#5a3020',
    'dark brown':'#4a2a15',cocoa:'#6a4030',mocha:'#7a5040',
    'warm tan':'#b08060',caramel:'#c08840',hazelnut:'#9a6840',
    mahogany:'#6a3020','soft mocha':'#9a7060',taupe:'#a89880',
    'warm sand':'#c0a070',terracotta:'#c06040','burnt peach':'#c86860',
    rust:'#a03828',gold:'#c89018','rose wood':'#8a4050',mauve:'#9a6080',
    'steel blue':'#4a6090','storm blue':'#3a5a8a',silver:'#a0a090',graphite:'#6a6858',
    white:'#f5f5f0','pearl white':'#f0ebe0','snow white':'#fafaf5',
    blue:'#3a5a9a','sky blue':'#5a8ac0',lavender:'#9080b0',
    peach:'#e8a080',coral:'#e07060',rose:'#d06080',
  }
  const k = w.toLowerCase()
  for (const [key, val] of Object.entries(map)) if (k.includes(key)) return val
  return '#6a5a80'
}

// ── CATEGORY COLORS ────────────────────────────────────────
export const CATEGORY_COLORS: Record<string, string> = {
  'Uang masuk': '#00D4AA',
  'Uang keluar': '#FF6B7A',
  'Belanja': '#4E9FF5',
  'Tabungan': '#F0B429',
  'Biaya': '#9B7EF5',
  'Refund': '#FF9F43',
  'Top up': '#00CFE8',
}

// ── ALL TRANSACTIONS ───────────────────────────────────────
export const ALL_TRANSACTIONS = [...WA_DATA, ...MP_DATA].sort(
  (a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime()
)

// ── UI COMPONENT DATA EXPORTS ──────────────────────────────
export const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]

// Dashboard KPIs
export const dashboardKPIs = [
  { id: "1", title: "Total Penjualan", value: "Rp 362 Jt", change: "+12.5%", trend: "up", icon: "TrendingUp" },
  { id: "2", title: "Total Order", value: "156", change: "+8.2%", trend: "up", icon: "ShoppingCart" },
  { id: "3", title: "Total Transaksi", value: "Rp 267 Jt", change: "-3.1%", trend: "down", icon: "CreditCard" },
  { id: "4", title: "Total Profit", value: "Rp 95 Jt", change: "+15.3%", trend: "up", icon: "Wallet" },
]

// Recent transactions for dashboard
export const recentTransactions = ALL_TRANSACTIONS.slice(0, 10).map(tx => ({
  id: tx.id,
  customer: tx.customer || tx.order_id || "Customer",
  date: formatDate(tx.tanggal),
  amount: txRevenue(tx),
  status: "completed" as const,
  source: tx.source === "wa" ? "WhatsApp" : tx.platform || "Marketplace",
  platform: tx.platform,
}))

// Sales chart data
export const salesChartData = [
  { month: "Jan", penjualan: 45000000, target: 50000000 },
  { month: "Feb", penjualan: 52000000, target: 50000000 },
  { month: "Mar", penjualan: 48000000, target: 55000000 },
  { month: "Apr", penjualan: 68000000, target: 60000000 },
  { month: "Mei", penjualan: 72000000, target: 65000000 },
  { month: "Jun", penjualan: 65000000, target: 70000000 },
]

// Platform distribution for donut chart
export const platformData = [
  { name: "WhatsApp", value: 45, color: "#25D366" },
  { name: "Shopee", value: 25, color: "#EE4D2D" },
  { name: "TikTok", value: 18, color: "#000000" },
  { name: "Lazada", value: 12, color: "#0F146D" },
]

// WhatsApp KPIs
export const whatsappKPIs = [
  { id: "1", title: "Total Pesan", value: "1,234", change: "+15.2%", trend: "up", icon: "MessageCircle" },
  { id: "2", title: "Konversi", value: "68%", change: "+5.1%", trend: "up", icon: "TrendingUp" },
  { id: "3", title: "Pelanggan Baru", value: "89", change: "+12.3%", trend: "up", icon: "Users" },
  { id: "4", title: "Order Selesai", value: "156", change: "+8.7%", trend: "up", icon: "CheckCircle" },
]

// WhatsApp transactions
export const whatsappTransactions = WA_DATA.map(tx => ({
  id: tx.id,
  customer: tx.customer || "Customer",
  date: formatDate(tx.tanggal),
  amount: txRevenue(tx),
  status: "completed" as const,
  source: "WhatsApp",
  items: tx.items,
}))

// Marketplace KPIs
export const marketplaceKPIs = [
  { id: "1", title: "Total Toko", value: "4", change: "0%", trend: "up", icon: "Store" },
  { id: "2", title: "Penjualan", value: "Rp 125 Jt", change: "+18.5%", trend: "up", icon: "TrendingUp" },
  { id: "3", title: "Order", value: "342", change: "+22.1%", trend: "up", icon: "Package" },
  { id: "4", title: "Rating", value: "4.9", change: "+0.2", trend: "up", icon: "Star" },
]

// Marketplace transactions
export const marketplaceTransactions = MP_DATA.map(tx => ({
  id: tx.id,
  customer: tx.order_id || "Order",
  date: formatDate(tx.tanggal),
  amount: txRevenue(tx),
  status: "completed" as const,
  source: "Marketplace",
  platform: tx.platform,
  items: tx.items,
}))

// Marketplace chart data
export const marketplaceChartData = [
  { month: "Jan", tokopedia: 15000000, shopee: 12000000, tiktok: 8000000 },
  { month: "Feb", tokopedia: 18000000, shopee: 15000000, tiktok: 10000000 },
  { month: "Mar", tokopedia: 22000000, shopee: 18000000, tiktok: 14000000 },
  { month: "Apr", tokopedia: 25000000, shopee: 22000000, tiktok: 18000000 },
  { month: "Mei", tokopedia: 28000000, shopee: 25000000, tiktok: 22000000 },
  { month: "Jun", tokopedia: 32000000, shopee: 28000000, tiktok: 25000000 },
]

// Transaction KPIs
export const transactionKPIs = [
  { id: "1", title: "Total Transaksi", value: "487", change: "+12.5%", trend: "up", icon: "Receipt" },
  { id: "2", title: "Nilai Transaksi", value: "Rp 362 Jt", change: "+18.2%", trend: "up", icon: "TrendingUp" },
  { id: "3", title: "Pending", value: "12", change: "-5.1%", trend: "down", icon: "Clock" },
  { id: "4", title: "Selesai", value: "475", change: "+14.3%", trend: "up", icon: "CheckCircle" },
]

// All transactions for transaction page
export const allTransactions = ALL_TRANSACTIONS.map(tx => ({
  id: tx.id,
  customer: tx.customer || tx.order_id || "Customer",
  date: formatDate(tx.tanggal),
  amount: txRevenue(tx),
  status: "completed" as const,
  source: tx.source === "wa" ? "WhatsApp" : tx.platform || "Marketplace",
  platform: tx.platform,
  items: tx.items,
}))

// Profit KPIs
export const profitKPIs = [
  { id: "1", title: "Total Profit", value: "Rp 95 Jt", change: "+15.3%", trend: "up", icon: "DollarSign" },
  { id: "2", title: "Pendapatan", value: "Rp 362 Jt", change: "+12.5%", trend: "up", icon: "TrendingUp" },
  { id: "3", title: "Pengeluaran", value: "Rp 267 Jt", change: "+8.2%", trend: "up", icon: "TrendingDown" },
  { id: "4", title: "Margin", value: "26.2%", change: "+2.1%", trend: "up", icon: "Percent" },
]

// Profit chart data
export const profitChartData = [
  { month: "Jan", revenue: 45000000, cost: 32000000, profit: 13000000 },
  { month: "Feb", revenue: 52000000, cost: 38000000, profit: 14000000 },
  { month: "Mar", revenue: 48000000, cost: 35000000, profit: 13000000 },
  { month: "Apr", revenue: 68000000, cost: 48000000, profit: 20000000 },
  { month: "Mei", revenue: 72000000, cost: 52000000, profit: 20000000 },
  { month: "Jun", revenue: 65000000, cost: 48000000, profit: 17000000 },
]

// Profit breakdown data
export const profitBreakdownData = [
  { category: "WhatsApp", amount: 37500000, percentage: 39.5, color: "#25D366" },
  { category: "Tokopedia", amount: 21250000, percentage: 22.4, color: "#00AA5B" },
  { category: "Shopee", amount: 18000000, percentage: 18.9, color: "#EE4D2D" },
  { category: "TikTok Shop", amount: 11250000, percentage: 11.8, color: "#000000" },
  { category: "Import", amount: 7000000, percentage: 7.4, color: "#6B7280" },
]

// TransaksiKu KPIs
export const transaksikuKPIs = [
  { id: "1", title: "Saldo", value: "Rp 45.2 Jt", change: "+8.5%", trend: "up", icon: "Wallet" },
  { id: "2", title: "Pemasukan", value: "Rp 65 Jt", change: "+12.3%", trend: "up", icon: "TrendingUp" },
  { id: "3", title: "Pengeluaran", value: "Rp 42 Jt", change: "+5.1%", trend: "up", icon: "ArrowUpRight" },
  { id: "4", title: "Tabungan", value: "Rp 18 Jt", change: "+15.2%", trend: "up", icon: "ArrowDownLeft" },
]

// TransaksiKu data
export const transaksikuData = TX.map((tx, idx) => ({
  id: `TX-${String(idx + 1).padStart(3, "0")}`,
  description: tx.ket,
  category: tx.kat,
  date: tx.tgl,
  amount: tx.masuk || tx.keluar,
  type: tx.masuk > 0 ? "income" : "expense" as "income" | "expense",
  account: "BCA",
}))

// Invoice KPIs
export const invoiceKPIs = [
  { id: "1", title: "Total Invoice", value: "89", change: "+12.5%", trend: "up", icon: "FileText" },
  { id: "2", title: "Nilai Invoice", value: "Rp 125 Jt", change: "+18.2%", trend: "up", icon: "TrendingUp" },
  { id: "3", title: "Menunggu", value: "12", change: "-3.1%", trend: "down", icon: "Clock" },
  { id: "4", title: "Lunas", value: "77", change: "+15.3%", trend: "up", icon: "CheckCircle" },
]

// Invoice data
export const invoiceData = INVOICES_RAW.map((inv, idx) => ({
  id: `INV-${String(idx + 1).padStart(3, "0")}`,
  number: inv.no,
  customer: inv.customer,
  date: formatDate(inv.date),
  dueDate: formatDate(new Date(new Date(inv.date).getTime() + 14 * 24 * 60 * 60 * 1000).toISOString()),
  amount: inv.grand_total,
  status: idx % 4 === 0 ? "pending" : idx % 5 === 0 ? "overdue" : "paid" as "pending" | "overdue" | "paid" | "draft",
}))

// Inventory KPIs
export const inventoryKPIs = [
  { id: "1", title: "Total Produk", value: "156", change: "+5.2%", trend: "up", icon: "Package" },
  { id: "2", title: "Stok Rendah", value: "12", change: "-2.1%", trend: "down", icon: "AlertTriangle" },
  { id: "3", title: "Terjual", value: "342", change: "+18.5%", trend: "up", icon: "TrendingUp" },
  { id: "4", title: "Nilai Stok", value: "Rp 85 Jt", change: "+8.2%", trend: "up", icon: "Boxes" },
]

// Inventory data
export const inventoryData = Object.entries(PRODUCTS_DATA).flatMap(([productName, variants]) =>
  variants.map((v, idx) => ({
    id: `${productName.substring(0, 3).toUpperCase()}-${String(v.no).padStart(3, "0")}`,
    sku: `SKU-${productName.substring(0, 3).toUpperCase()}-${String(v.no).padStart(3, "0")}`,
    name: `${productName} - ${v.warna}`,
    category: productName,
    price: productName.includes("Maheen") ? 45000 : productName.includes("Golden") ? 35000 : 29000,
    stock: v.status === "READY" ? Math.floor(Math.random() * 100) + 20 : 0,
    minStock: 10,
  }))
)

// ============================================================
// ENTERPRISE v3 — ADDITIONAL EXPORTS (Finance Module Integration)
// ============================================================

// ── VALIDATED FINANCE KPIs (April 2026) ───────────────────
export const financeKPIs = {
  overview: {
    totalPenjualan: 994500000,
    totalModal: 922700000,
    profitBersih: 71800000,
    totalTransaksi: 777,
    waOrders: 61,
    marketplaceOrders: 716,
    profitMargin: 7.2,
  },
  whatsapp: {
    penjualan: 869400000,
    modal: 814000000,
    profit: 55400000,
    totalYard: 40690,
  },
  marketplace: {
    penjualan: 125100000,
    profit: 16400000,
    modal: 108700000,
    totalMeter: 3764,
    platforms: ['Shopee', 'TikTok', 'Lazada', 'Shopee Bogor'],
  },
  transaksiku: {
    totalMasuk: 70300000,
    totalKeluar: 52100000,
    saldoBersih: 18200000,
    totalEntri: 100,
  },
}

// ── MONTHLY TRENDS ────────────────────────────────────────
export const monthlyTrends = [
  { month: 'Jan', penjualan: 72000000, modal: 67000000, profit: 5000000 },
  { month: 'Feb', penjualan: 68000000, modal: 63000000, profit: 5000000 },
  { month: 'Mar', penjualan: 85000000, modal: 79000000, profit: 6000000 },
  { month: 'Apr', penjualan: 994500000, modal: 922700000, profit: 71800000 },
  { month: 'Mei', penjualan: 91000000, modal: 84000000, profit: 7000000 },
  { month: 'Jun', penjualan: 78000000, modal: 72000000, profit: 6000000 },
]

// ── ENRICHED PLATFORM DATA (with orders + units) ──────────
export const platformDataEnriched = [
  { name: 'WhatsApp', value: 869400000, color: '#25D366', orders: 61, unit: 'yard' },
  { name: 'Shopee', value: 62500000, color: '#EE4D2D', orders: 358, unit: 'meter' },
  { name: 'TikTok', value: 31200000, color: '#00f2ea', orders: 179, unit: 'meter' },
  { name: 'Lazada', value: 18700000, color: '#0F0F8F', orders: 107, unit: 'meter' },
  { name: 'Shopee Bogor', value: 12700000, color: '#FF6B35', orders: 72, unit: 'meter' },
]

// ── ENTERPRISE PRODUCT CATALOG (PIM) ─────────────────────
export const products = [
  { id: "GDT-001", name: "Silk Premium Madinah", sku: "GDT-001-BLK", type: "Silk", supplierCode: "SP-001", price: 95000, stock: 450, unit: "meter", colors: ["Hitam", "Navy", "Maroon", "Cream"], mami: true },
  { id: "GDT-002", name: "Crepe Morocco Matte", sku: "GDT-002-NVY", type: "Crepe", supplierCode: "SP-002", price: 72000, stock: 820, unit: "meter", colors: ["Navy", "Hitam", "Abu", "Coklat"], mami: true },
  { id: "GDT-003", name: "Chiffon Korea Soft", sku: "GDT-003-CRM", type: "Chiffon", supplierCode: "SP-003", price: 48000, stock: 1200, unit: "meter", colors: ["Cream", "Pink", "Lilac", "Sage"], mami: false },
  { id: "GDT-004", name: "Jersey Rajut Premium", sku: "GDT-004-GRY", type: "Jersey", supplierCode: "SP-004", price: 65000, stock: 38, unit: "meter", colors: ["Grey", "Navy", "Hitam"], mami: true },
  { id: "GDT-005", name: "Georgette Turki Matte", sku: "GDT-005-GLD", type: "Georgette", supplierCode: "SP-005", price: 88000, stock: 650, unit: "meter", colors: ["Gold", "Rose", "Teal", "Burgundy"], mami: false },
]

// ── ENTERPRISE SUPPLIERS ──────────────────────────────────
export const suppliers = [
  { id: "SUP-001", name: "Bintang Trio Tex", code: "SP-001", city: "Bandung", contact: "0812-3456-7890", type: "Kain Sutra", totalOrders: 24, totalSpent: 48500000, rating: 4.8 },
  { id: "SUP-002", name: "Arham Rahimi Textile", code: "SP-002", city: "Jakarta", contact: "0821-9876-5432", type: "Kain Crepe", totalOrders: 18, totalSpent: 32100000, rating: 4.6 },
  { id: "SUP-003", name: "Fajar Ahmad Fabric", code: "SP-003", city: "Solo", contact: "0856-1234-5678", type: "Kain Chiffon", totalOrders: 32, totalSpent: 28700000, rating: 4.7 },
  { id: "SUP-004", name: "Vincent Dadlani Co", code: "SP-004", city: "Surabaya", contact: "0878-5555-1234", type: "Kain Jersey", totalOrders: 15, totalSpent: 41200000, rating: 4.5 },
]

// ── ENTERPRISE CUSTOMERS ──────────────────────────────────
export const customers = [
  { id: "CUS-001", name: "Evin Trina Eka Saputri", phone: "0812-xxxx-xxxx", city: "Jakarta", totalOrders: 12, totalSpent: 8200000, segment: "VIP", lastOrder: "15 Apr 2026" },
  { id: "CUS-002", name: "Muhammad Fauzan", phone: "0821-xxxx-xxxx", city: "Bogor", totalOrders: 8, totalSpent: 3100000, segment: "Regular", lastOrder: "17 Apr 2026" },
  { id: "CUS-003", name: "Anisa Zelvia Safitri", phone: "0856-xxxx-xxxx", city: "Depok", totalOrders: 5, totalSpent: 1900000, segment: "Regular", lastOrder: "15 Apr 2026" },
  { id: "CUS-004", name: "Tri Owi Utomo", phone: "0878-xxxx-xxxx", city: "Bekasi", totalOrders: 3, totalSpent: 850000, segment: "New", lastOrder: "12 Apr 2026" },
]

// ── ENTERPRISE ORDERS ─────────────────────────────────────
export const orders = [
  { id: "ORD-001", customer: "Arham Rahimi", platform: "WhatsApp", items: 4, total: 13806000, status: "delivered", date: "16 Apr 2026" },
  { id: "ORD-002", customer: "Vincent Dadlani", platform: "WhatsApp", items: 3, total: 6664000, status: "delivered", date: "09 Apr 2026" },
  { id: "ORD-003", customer: "Evin Trina Eka Saputri", platform: "WhatsApp", items: 6, total: 3369500, status: "processing", date: "15 Apr 2026" },
  { id: "ORD-004", customer: "Shopee Customer", platform: "Shopee", items: 2, total: 847562, status: "shipped", date: "06 Apr 2026" },
  { id: "ORD-005", customer: "Fakhri Aslam", platform: "WhatsApp", items: 2, total: 269500, status: "delivered", date: "15 Apr 2026" },
]

// ── ENTERPRISE INVENTORY ──────────────────────────────────
export const inventory = [
  { sku: "GDT-001-BLK", product: "Silk Premium Madinah - Hitam", stock: 450, reorderPoint: 100, unit: "meter", value: 42750000, warehouse: "Gudang Utama" },
  { sku: "GDT-002-NVY", product: "Crepe Morocco - Navy", stock: 820, reorderPoint: 150, unit: "meter", value: 59040000, warehouse: "Gudang Utama" },
  { sku: "GDT-003-CRM", product: "Chiffon Korea - Cream", stock: 1200, reorderPoint: 200, unit: "meter", value: 57600000, warehouse: "Gudang Bogor" },
  { sku: "GDT-004-GRY", product: "Jersey Rajut - Grey", stock: 38, reorderPoint: 100, unit: "meter", value: 2470000, warehouse: "Gudang Utama" },
  { sku: "GDT-005-GLD", product: "Georgette Turki - Gold", stock: 650, reorderPoint: 120, unit: "meter", value: 57200000, warehouse: "Gudang Bogor" },
]
