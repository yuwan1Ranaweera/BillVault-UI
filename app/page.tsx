"use client"

import { useState } from "react"
import { MobileFrame } from "../components/mobile-frame"
import { WelcomeScreen } from "../screens/welcome-screen"
import { SignUpAccountType } from "../screens/signup-account-type"
import { LoginAccountType } from "../screens/login-account-type"
import { IndividualSignUp } from "../screens/individual-signup"
import { BusinessSignUp } from "../screens/business-signup"
import { IndividualLogin } from "../screens/individual-login"
import { BusinessLogin } from "../screens/business-login"
import { HomeScreen } from "../screens/home-screen"
import { OCRScanScreen } from "../screens/ocr-scan-screen"
import { QRScannerScreen } from "../screens/qr-scanner-screen"
import { VaultAnimationScreen } from "../screens/vault-animation-screen"
import { SearchScreen } from "../screens/search-screen"
import { FilesScreen } from "../screens/files-screen"
import { ProfileScreen } from "../screens/profile-screen"

type Screen =
  | "welcome"
  | "signup-account-type"
  | "login-account-type"
  | "individual-signup"
  | "business-signup"
  | "individual-login"
  | "business-login"
  | "individual-home"
  | "business-home"
  | "ocr-scan"
  | "qr-scan"
  | "vault-animation"
  | "search"
  | "files"
  | "profile"

export default function BillVaultApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome")
  const [accountType, setAccountType] = useState<"individual" | "business">("individual")
  const [scannedBillData, setScannedBillData] = useState<any>(null)

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return (
          <WelcomeScreen
            onLogin={() => setCurrentScreen("login-account-type")}
            onSignUp={() => setCurrentScreen("signup-account-type")}
          />
        )
      case "signup-account-type":
        return (
          <SignUpAccountType
            onBack={() => setCurrentScreen("welcome")}
            onIndividual={() => {
              setAccountType("individual")
              setCurrentScreen("individual-signup")
            }}
            onBusiness={() => {
              setAccountType("business")
              setCurrentScreen("business-signup")
            }}
          />
        )
      case "login-account-type":
        return (
          <LoginAccountType
            onBack={() => setCurrentScreen("welcome")}
            onIndividual={() => {
              setAccountType("individual")
              setCurrentScreen("individual-login")
            }}
            onBusiness={() => {
              setAccountType("business")
              setCurrentScreen("business-login")
            }}
          />
        )
      case "individual-signup":
        return (
          <IndividualSignUp
            onBack={() => setCurrentScreen("signup-account-type")}
            onSignUp={() => setCurrentScreen("individual-home")}
            onLogin={() => setCurrentScreen("individual-login")}
          />
        )
      case "business-signup":
        return (
          <BusinessSignUp
            onBack={() => setCurrentScreen("signup-account-type")}
            onSignUp={() => setCurrentScreen("business-home")}
            onLogin={() => setCurrentScreen("business-login")}
          />
        )
      case "individual-login":
        return (
          <IndividualLogin
            onBack={() => setCurrentScreen("login-account-type")}
            onLogin={() => setCurrentScreen("individual-home")}
            onSignUp={() => setCurrentScreen("individual-signup")}
          />
        )
      case "business-login":
        return (
          <BusinessLogin
            onBack={() => setCurrentScreen("login-account-type")}
            onLogin={() => setCurrentScreen("business-home")}
            onSignUp={() => setCurrentScreen("business-signup")}
          />
        )
      case "individual-home":
        return (
          <HomeScreen
            onScan={() => alert("Individual quick scan functionality")}
            onOCRScan={() => setCurrentScreen("ocr-scan")}
            onQRScan={() => setCurrentScreen("qr-scan")}
            onBillDetails={() => alert("Individual bill details functionality")}
            onSearch={() => setCurrentScreen("search")}
            onFiles={() => setCurrentScreen("files")}
            onProfile={() => setCurrentScreen("profile")}
            accountType="individual"
          />
        )
      case "business-home":
        return (
          <HomeScreen
            onScan={() => alert("Business scan functionality")}
            onOCRScan={() => setCurrentScreen("ocr-scan")}
            onQRScan={() => setCurrentScreen("qr-scan")}
            onBillDetails={() => alert("Business bill details functionality")}
            onSearch={() => setCurrentScreen("search")}
            onFiles={() => setCurrentScreen("files")}
            onProfile={() => setCurrentScreen("profile")}
            accountType="business"
          />
        )
      case "ocr-scan":
        return (
          <OCRScanScreen
            onBack={() => setCurrentScreen(accountType === "individual" ? "individual-home" : "business-home")}
            onScanComplete={(billData) => {
              setScannedBillData(billData)
              setCurrentScreen("vault-animation")
            }}
            accountType={accountType}
          />
        )
      case "qr-scan":
        return (
          <QRScannerScreen
            onBack={() => setCurrentScreen(accountType === "individual" ? "individual-home" : "business-home")}
            onScanComplete={() => {
              setScannedBillData({ merchant: "Business Receipt", total: "$299.99", date: "Today" })
              setCurrentScreen("vault-animation")
            }}
            accountType={accountType}
          />
        )
      case "vault-animation":
        return (
          <VaultAnimationScreen
            onComplete={() => setCurrentScreen(accountType === "individual" ? "individual-home" : "business-home")}
            billData={scannedBillData}
            accountType={accountType}
          />
        )
      case "search":
        return (
          <SearchScreen
            onBack={() => setCurrentScreen(accountType === "individual" ? "individual-home" : "business-home")}
            accountType={accountType}
          />
        )
      case "files":
        return (
          <FilesScreen
            onBack={() => setCurrentScreen(accountType === "individual" ? "individual-home" : "business-home")}
            accountType={accountType}
          />
        )
      case "profile":
        return (
          <ProfileScreen
            onBack={() => setCurrentScreen(accountType === "individual" ? "individual-home" : "business-home")}
            onLogout={() => setCurrentScreen("welcome")}
            accountType={accountType}
          />
        )
      default:
        return null
    }
  }

  return <MobileFrame>{renderScreen()}</MobileFrame>
}
