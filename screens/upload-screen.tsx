"use client"

import { Button } from "@/components/ui/button"
import { Camera, X } from "lucide-react"

interface UploadScreenProps {
  onBack: () => void
  onCapture: () => void
}

export function UploadScreen({ onBack, onCapture }: UploadScreenProps) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-purple-600 to-purple-800 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-8">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-0 h-auto">
          <X className="w-6 h-6 text-white" />
        </Button>
        <h1 className="text-white font-medium">Upload Bill</h1>
        <div className="w-6"></div>
      </div>

      {/* Camera View */}
      <div className="px-6 flex-1 flex flex-col items-center justify-center">
        <div className="w-64 h-80 bg-black/20 rounded-2xl border-2 border-white/30 border-dashed flex items-center justify-center mb-8 backdrop-blur-sm">
          <div className="text-center">
            <Camera className="w-16 h-16 text-white/60 mx-auto mb-4" />
            <p className="text-white/80 text-sm">Position your bill within the frame</p>
          </div>
        </div>

        <Button
          onClick={onCapture}
          className="w-20 h-20 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-purple-700 rounded-full"></div>
        </Button>
      </div>

      {/* Bottom Actions */}
      <div className="px-6 pb-8">
        <div className="flex justify-center space-x-8">
          <Button variant="ghost" className="text-white">
            Gallery
          </Button>
          <Button variant="ghost" className="text-white">
            Flash
          </Button>
        </div>
      </div>
    </div>
  )
}
