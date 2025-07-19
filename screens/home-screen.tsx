"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Home,
  Search,
  Plus,
  User,
  Upload,
  FileText,
  TrendingUp,
  Clock,
  Star,
  Scan,
  QrCode,
  Languages,
  Shield,
  Lock,
} from "lucide-react"
import { StatusBar } from "../components/status-bar"

interface HomeScreenProps {
  onOCRScan: () => void
  onQRScan: () => void
  onBillDetails: (billData: any) => void // Modified to pass billData
  onSearch: () => void
  onFiles: () => void
  onProfile: () => void
  onTranslate: () => void // New prop for translate feature
  onUploadFile: () => void // New prop for upload feature
  accountType?: "individual" | "business"
}

export function HomeScreen({
  onOCRScan,
  onQRScan,
  onBillDetails,
  onSearch,
  onFiles,
  onProfile,
  onTranslate, // Destructure new prop
  onUploadFile, // Destructure new prop
  accountType = "individual",
}: HomeScreenProps) {
  const isIndividual = accountType === "individual"

  const recentBills = [
    {
      id: 1,
      name: isIndividual ? "Grocery Receipt" : "Customer Receipt #001",
      date: "2 hours ago",
      amount: "$45.67",
      type: "receipt",
      color: "from-blue-500 to-cyan-500",
      category: "Food & Dining",
      merchant: "SuperMart",
      location: "123 Main St",
      receiptId: "#12345",
      items: [
        { name: "Organic Bananas", qty: "2 lbs", price: "$3.98" },
        { name: "Whole Milk", qty: "1 gal", price: "$4.29" },
        { name: "Bread Loaf", qty: "1 pc", price: "$2.49" },
      ],
    },
    {
      id: 2,
      name: isIndividual ? "Electricity Bill" : "Bulk Upload - Electronics",
      date: "1 day ago",
      amount: isIndividual ? "$89.23" : "$2,456.78",
      type: "bill",
      color: "from-yellow-500 to-orange-500",
      category: isIndividual ? "Utilities" : "Electronics",
      merchant: "PowerCorp",
      location: "Online",
      receiptId: "#67890",
      items: [{ name: "Electricity Usage", qty: "1 month", price: "$89.23" }],
    },
    {
      id: 3,
      name: isIndividual ? "Medical Invoice" : "QR Shared - Pharmacy",
      date: "3 days ago",
      amount: isIndividual ? "$156.00" : "$89.45",
      type: "invoice",
      color: "from-emerald-500 to-teal-500",
      category: isIndividual ? "Healthcare" : "Pharmacy",
      merchant: "HealthCare+",
      location: "456 Oak Ave",
      receiptId: "#11223",
      items: [{ name: "Consultation Fee", qty: "1", price: "$156.00" }],
    },
  ]

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <StatusBar />

      {/* Fixed Header */}
      <div className="px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-purple-50 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Good morning{isIndividual ? "!" : ", Business!"}</h1>
            <p className="text-slate-600">
              {isIndividual ? "Ready to scan your bills?" : "Manage your business documents"}
            </p>
          </div>
          <Button
            onClick={onProfile}
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              background: isIndividual
                ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            }}
          >
            <User className="w-6 h-6 text-white" />
          </Button>
        </div>

        {/* Account Type Badge */}
        <div className="mb-4">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium text-white"
            style={{
              background: isIndividual
                ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            }}
          >
            {isIndividual ? "Individual Account" : "Business Account"}
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search bills, receipts, warranties..."
            onClick={onSearch}
            className={`w-full h-12 pl-12 pr-4 rounded-2xl border border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm cursor-pointer ${
              isIndividual ? "focus:ring-purple-500" : "focus:ring-emerald-500"
            }`}
            readOnly
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto pb-24">
        <div className="px-6 pt-2">
          {/* Vault Stats Cards with AI Vault Images */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card
              className="p-4 border-0 shadow-lg relative overflow-hidden"
              style={{
                background: isIndividual
                  ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                  : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              }}
            >
              {/* Vault Background */}
              <div className="absolute top-2 right-2 opacity-20">
                <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="text-white relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-5 h-5" />
                    <span className="text-sm font-medium">BillVault</span>
                  </div>
                  <TrendingUp className="w-4 h-4 opacity-70" />
                </div>
                <p className="text-2xl font-bold">{isIndividual ? "247" : "1,247"}</p>
                <p className="text-sm opacity-90">Secured Documents</p>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 border-0 shadow-lg relative overflow-hidden">
              {/* Vault Background */}
              <div className="absolute top-2 right-2 opacity-20">
                <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="text-white relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium">Recent</span>
                  </div>
                  <Star className="w-4 h-4 opacity-70" />
                </div>
                <p className="text-2xl font-bold">{isIndividual ? "12" : "89"}</p>
                <p className="text-sm opacity-90">This Month</p>
              </div>
            </Card>
          </div>

          {/* Smart Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {isIndividual ? "Smart Features" : "Business Tools"}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Button
                onClick={onOCRScan}
                className="flex flex-col items-center p-6 h-auto bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02]"
                variant="ghost"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-lg"
                  style={{
                    background: isIndividual
                      ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                      : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  }}
                >
                  <Scan className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-900 font-medium text-sm">AI OCR Scan</span>
                <span className="text-slate-500 text-xs">Auto-extract text</span>
              </Button>

              <Button
                onClick={onQRScan}
                className="flex flex-col items-center p-6 h-auto bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02]"
                variant="ghost"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-lg ${
                    isIndividual
                      ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                      : "bg-gradient-to-br from-blue-500 to-cyan-500"
                  }`}
                >
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-900 font-medium text-sm">
                  {isIndividual ? "QR Scanner" : "Generate QR"}
                </span>
                <span className="text-slate-500 text-xs">{isIndividual ? "Business sharing" : "Customer sharing"}</span>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {" "}
              {/* Changed to 2 columns */}
              <Button
                onClick={onTranslate} // Use the new onTranslate prop
                className="flex flex-col items-center p-4 h-auto bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02]"
                variant="ghost"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <Languages className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-900 font-medium text-xs">Translate</span>
              </Button>
              <Button
                onClick={onUploadFile} // Use the new onUploadFile prop
                className="flex flex-col items-center p-4 h-auto bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02]"
                variant="ghost"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-900 font-medium text-xs">Upload Bill</span>
              </Button>
            </div>
          </div>

          {/* Recent Documents */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Recent Bills</h3>
              <Button
                variant="link"
                onClick={onFiles}
                className="p-0 h-auto text-sm font-medium"
                style={{ color: isIndividual ? "#9B7EBD" : "#10b981" }}
              >
                View All
              </Button>
            </div>

            <div className="space-y-3">
              {recentBills.map((doc) => (
                <Card
                  key={doc.id}
                  className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => onBillDetails(doc)} // Pass the specific document data
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                    >
                      <div className="absolute inset-1 bg-white/90 rounded-lg flex flex-col justify-center items-center">
                        <div className="w-6 h-1 bg-slate-300 rounded mb-1"></div>
                        <div className="w-4 h-1 bg-slate-300 rounded mb-1"></div>
                        <div className="w-5 h-1 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-900">{doc.name}</h4>
                        <span className="font-bold text-slate-900">{doc.amount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-500">{doc.date}</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                          {doc.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 shadow-lg">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center mb-1"
              style={{
                background: isIndividual
                  ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                  : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              }}
            >
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-medium" style={{ color: isIndividual ? "#9B7EBD" : "#10b981" }}>
              Home
            </span>
          </div>
          <Button onClick={onSearch} className="flex flex-col items-center bg-transparent hover:bg-slate-50 p-2">
            <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center mb-1">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <span className="text-xs text-slate-400">Search</span>
          </Button>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-1 shadow-lg">
              <Plus className="w-6 h-6 text-white" />
            </div>
          </div>
          <Button onClick={onFiles} className="flex flex-col items-center bg-transparent hover:bg-slate-50 p-2">
            <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center mb-1">
              <FileText className="w-5 h-5 text-slate-400" />
            </div>
            <span className="text-xs text-slate-400">Files</span>
          </Button>
          <Button onClick={onProfile} className="flex flex-col items-center bg-transparent hover:bg-slate-50 p-2">
            <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center mb-1">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            <span className="text-xs text-slate-400">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
