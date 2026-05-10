"use client"

import { useState, useCallback } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { BottomTabs } from "@/components/layout/bottom-tabs"
import { 
  Upload, 
  FileSpreadsheet, 
  CheckCircle, 
  AlertCircle,
  Download,
  Trash2,
  Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImportHistory {
  id: string
  filename: string
  date: string
  status: "success" | "error" | "processing"
  records: number
  errors: number
}

const importHistory: ImportHistory[] = [
  { id: "1", filename: "transaksi_mei_2024.xlsx", date: "2024-05-15", status: "success", records: 150, errors: 0 },
  { id: "2", filename: "transaksi_april_2024.xlsx", date: "2024-04-28", status: "success", records: 142, errors: 2 },
  { id: "3", filename: "data_pelanggan.csv", date: "2024-04-15", status: "error", records: 0, errors: 5 },
  { id: "4", filename: "transaksi_maret_2024.xlsx", date: "2024-03-20", status: "success", records: 128, errors: 0 },
]

export default function ImportPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && (file.name.endsWith('.xlsx') || file.name.endsWith('.csv'))) {
      setUploadedFile(file)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }, [])

  const handleUpload = async () => {
    if (!uploadedFile) return
    setIsUploading(true)
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsUploading(false)
    setUploadedFile(null)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar title="Import Data" />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 overflow-auto">
          {/* Upload Section */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Upload File</h3>
            
            <div
              className={cn(
                "border-2 border-dashed rounded-xl p-8 text-center transition-colors",
                isDragging ? "border-primary bg-primary/5" : "border-border",
                uploadedFile && "border-green-500 bg-green-50"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {uploadedFile ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <FileSpreadsheet className="h-10 w-10 text-green-600" />
                    <div className="text-left">
                      <p className="font-medium text-foreground">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Button 
                      onClick={handleUpload} 
                      disabled={isUploading}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {isUploading ? "Mengupload..." : "Upload & Proses"}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setUploadedFile(null)}
                      disabled={isUploading}
                    >
                      Batalkan
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <p className="text-foreground font-medium">
                      Drag & drop file di sini
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      atau klik untuk memilih file
                    </p>
                  </div>
                  <input
                    type="file"
                    accept=".xlsx,.csv"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer" asChild>
                      <span>Pilih File</span>
                    </Button>
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Format yang didukung: .xlsx, .csv (maks. 10MB)
                  </p>
                </div>
              )}
            </div>

            {/* Template Download */}
            <div className="mt-4 p-4 bg-muted rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-foreground">Template Import</p>
                <p className="text-xs text-muted-foreground">
                  Download template untuk format yang benar
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download Template
              </Button>
            </div>
          </div>

          {/* Import History */}
          <div className="mt-6 bg-card rounded-xl p-4 lg:p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Riwayat Import</h3>
            
            <div className="space-y-3">
              {importHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      item.status === "success" && "bg-green-100",
                      item.status === "error" && "bg-red-100",
                      item.status === "processing" && "bg-yellow-100"
                    )}>
                      {item.status === "success" && <CheckCircle className="h-5 w-5 text-green-600" />}
                      {item.status === "error" && <AlertCircle className="h-5 w-5 text-red-600" />}
                      {item.status === "processing" && <FileSpreadsheet className="h-5 w-5 text-yellow-600" />}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.filename}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-foreground">{item.records} records</p>
                      {item.errors > 0 && (
                        <p className="text-xs text-red-600">{item.errors} errors</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <BottomTabs />
      </div>
    </div>
  )
}
