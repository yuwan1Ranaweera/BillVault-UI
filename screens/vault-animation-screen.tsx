"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Lock, Unlock, FileText } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState, useEffect } from "react"

interface VaultAnimationScreenProps {
  onComplete: () => void
  billData: any
  accountType?: "individual" | "business"
}

export function VaultAnimationScreen({ onComplete, billData, accountType = "individual" }: VaultAnimationScreenProps) {
  const [animationStep, setAnimationStep] = useState(0)
  const isIndividual = accountType === "individual"

  useEffect(() => {
    const steps = [
      { delay: 500, step: 1 }, // Vault appears
      { delay: 1000, step: 2 }, // Vault opens
      { delay: 1500, step: 3 }, // Bill flies in
      { delay: 2000, step: 4 }, // Bill enters vault
      { delay: 2500, step: 5 }, // Vault closes
      { delay: 3000, step: 6 }, // Success message
    ]

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setAnimationStep(step), delay)
    })

    // Auto complete after animation
    setTimeout(() => {
      onComplete()
    }, 4000)
  }, [onComplete])

  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-center justify-center"
      style={{
        background: isIndividual
          ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
          : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      }}
    >
      <StatusBar isDark />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-white/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-40 left-6 w-20 h-20 bg-white/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Vault Animation */}
        <div className="relative mb-8">
          {/* Vault Base */}
          <div
            className={`w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl shadow-2xl transition-all duration-1000 ${
              animationStep >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            {/* Vault Door */}
            <div
              className={`absolute inset-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl transition-all duration-1000 origin-left ${
                animationStep >= 2 && animationStep < 5 ? "rotate-y-90 opacity-50" : "rotate-y-0 opacity-100"
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: animationStep >= 2 && animationStep < 5 ? "rotateY(-90deg)" : "rotateY(0deg)",
              }}
            >
              {/* Vault Handle */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                {animationStep >= 2 && animationStep < 5 ? (
                  <Unlock className="w-8 h-8 text-yellow-400" />
                ) : (
                  <Lock className="w-8 h-8 text-gray-400" />
                )}
              </div>

              {/* Vault Interior (visible when open) */}
              {animationStep >= 2 && animationStep < 5 && (
                <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl opacity-80">
                  <div className="absolute inset-4 border-2 border-dashed border-white/30 rounded-lg"></div>
                </div>
              )}
            </div>

            {/* BillVault Logo on Vault */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <div className="text-white font-bold text-sm">BillVault</div>
            </div>
          </div>

          {/* Flying Bill Animation */}
          {animationStep >= 3 && (
            <div
              className={`absolute transition-all duration-1000 ${
                animationStep >= 4
                  ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0"
                  : "-top-20 left-1/2 transform -translate-x-1/2 scale-100 opacity-100"
              }`}
            >
              <div className="w-24 h-32 bg-white rounded-lg shadow-lg relative overflow-hidden">
                {/* Bill Content */}
                <div className="p-3">
                  <div className="text-center mb-2">
                    <div className="w-8 h-2 bg-blue-500 rounded mx-auto mb-1"></div>
                    <div className="text-xs font-bold text-slate-800">{billData?.merchant || "Store"}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 bg-slate-300 rounded"></div>
                    <div className="h-1 bg-slate-300 rounded w-3/4"></div>
                    <div className="h-1 bg-slate-300 rounded w-1/2"></div>
                  </div>
                  <div className="mt-2 pt-1 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-800">{billData?.total || "$0.00"}</div>
                  </div>
                </div>

                {/* Sparkle Effect */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          )}
        </div>

        {/* Success Message */}
        {animationStep >= 6 && (
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Bill Successfully Saved!</h2>
            <p className="text-white/80 mb-6">Your document is now secure in BillVault</p>

            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 mx-8">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{billData?.merchant || "Document"}</span>
              </div>
              <div className="text-white/80 text-sm">
                {billData?.total || "Saved"} • {billData?.date || "Today"}
              </div>
            </div>
          </div>
        )}

        {/* Skip Button */}
        <Button
          onClick={onComplete}
          variant="ghost"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white"
        >
          Skip Animation
        </Button>
      </div>
    </div>
  )
}
