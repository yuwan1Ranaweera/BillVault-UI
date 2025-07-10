"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, FileText, Download, Share, Trash2, Grid3X3, List, Filter } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface FilesScreenProps {
  onBack: () => void
  accountType?: "individual" | "business"
}

export function FilesScreen({ onBack, accountType = "individual" }: FilesScreenProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const isIndividual = accountType === "individual"

  const files = [
    {
      id: 1,
      name: isIndividual ? "Grocery Receipt" : "Customer Receipt #1001",
      date: "Dec 10, 2024",
      size: "2.4 MB",
      type: "PDF",
      category: "Food & Dining",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: isIndividual ? "Electric Bill" : "Bulk Upload - Electronics",
      date: "Dec 8, 2024",
      size: "1.8 MB",
      type: "PDF",
      category: isIndividual ? "Utilities" : "Electronics",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      name: isIndividual ? "Medical Invoice" : "QR Shared - Pharmacy",
      date: "Dec 5, 2024",
      size: "3.2 MB",
      type: "PDF",
      category: isIndividual ? "Healthcare" : "Pharmacy",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      name: isIndividual ? "Phone Bill" : "Business Receipt #2001",
      date: "Dec 3, 2024",
      size: "1.5 MB",
      type: "PDF",
      category: isIndividual ? "Utilities" : "Technology",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      name: isIndividual ? "Restaurant Receipt" : "Customer Receipt #3001",
      date: "Dec 1, 2024",
      size: "2.1 MB",
      type: "PDF",
      category: "Food & Dining",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 6,
      name: isIndividual ? "Gas Station" : "Fuel Receipt #4001",
      date: "Nov 28, 2024",
      size: "1.9 MB",
      type: "PDF",
      category: "Transportation",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <StatusBar />

      {/* Fixed Header */}
      <div className="px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-purple-50 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
            <ArrowLeft className="w-6 h-6 text-slate-700" />
          </Button>
          <h1 className="text-lg font-semibold text-slate-900">My Files</h1>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="p-2 h-auto rounded-full hover:bg-slate-100"
            >
              {viewMode === "grid" ? (
                <List className="w-5 h-5 text-slate-700" />
              ) : (
                <Grid3X3 className="w-5 h-5 text-slate-700" />
              )}
            </Button>
            <Button variant="ghost" size="sm" className="p-2 h-auto rounded-full hover:bg-slate-100">
              <Filter className="w-5 h-5 text-slate-700" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">{files.length}</p>
            <p className="text-sm text-slate-600">Total Files</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">12.9</p>
            <p className="text-sm text-slate-600">MB Used</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">3</p>
            <p className="text-sm text-slate-600">This Week</p>
          </div>
        </div>
      </div>

      {/* Scrollable Files */}
      <div className="h-full overflow-y-auto pb-24">
        <div className="px-6 pt-2">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 gap-4">
              {files.map((file) => (
                <Card
                  key={file.id}
                  className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-20 bg-gradient-to-br ${file.color} rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg relative overflow-hidden`}
                    >
                      <div className="absolute inset-1 bg-white/90 rounded-lg flex flex-col justify-center items-center">
                        <FileText className="w-6 h-6 text-slate-600 mb-1" />
                        <span className="text-xs font-medium text-slate-600">{file.type}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1 truncate">{file.name}</h4>
                    <p className="text-xs text-slate-500 mb-1">{file.date}</p>
                    <p className="text-xs text-slate-400">{file.size}</p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {files.map((file) => (
                <Card
                  key={file.id}
                  className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${file.color} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                    >
                      <div className="absolute inset-1 bg-white/90 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-slate-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{file.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <span>{file.date}</span>
                        <span>•</span>
                        <span>{file.size}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                          {file.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Download className="w-4 h-4 text-slate-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Share className="w-4 h-4 text-slate-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
