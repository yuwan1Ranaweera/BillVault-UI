# BillVault Mobile App UI

A modern and intuitive mobile application UI for BillVault, designed to help users manage their bills and documents smarter. This project focuses on a sleek user experience with features like OCR scanning, QR code integration, multi-language translation, and comprehensive bill management.

## ✨ Features

*   **Onboarding Flow**: Guided sign-up and login processes for individual and business accounts.
*   **Account Type Selection**: Choose between individual and business accounts with distinct features.
*   **AI OCR Scanning**: Scan physical bills and receipts to automatically extract key information.
*   **QR Code Integration**: Scan QR codes from businesses to receive digital receipts instantly.
*   **Bill Translation**: Translate bill content into multiple languages (simulated).
*   **File Management**: View and organize all your stored bills and documents in a user-friendly interface.
*   **Bill Details View**: Detailed view of each bill, including extracted information and a toggle for translated content.
*   **Upload Functionality**: Upload existing bill images or PDFs from your device.
*   **Animated Vault Save**: Visual feedback for successful bill saving.
*   **Profile Management**: Access and manage user profile information and account settings.
*   **Responsive Design**: Optimized for mobile screens.

## 🚀 Technologies Used

*   **Next.js**: React framework for building modern web applications.
*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: Strongly typed JavaScript that enhances code quality and maintainability.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **shadcn/ui**: Reusable UI components built with Radix UI and Tailwind CSS.
*   **Lucide React**: A collection of beautiful and customizable open-source icons.

## 📦 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

*   [Node.js](https://nodejs.org/en/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    \`\`\`bash
    git clone https://github.com/your-username/billvault-mobile-ui.git
    cd billvault-mobile-ui
    \`\`\`
    (Replace `your-username/billvault-mobile-ui.git` with your actual repository URL)

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`

### Running the Application

To start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application. The UI is designed for a mobile frame, so it's best viewed by resizing your browser window or using your browser's developer tools to simulate a mobile device.

## 📂 Project Structure

The core application logic and UI components are organized as follows:

\`\`\`
.
├── app/
│   └── page.tsx             # Main application entry point and screen routing
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── mobile-frame.tsx     # Mobile phone frame wrapper
│   └── status-bar.tsx       # Mobile status bar component
├── public/
│   ├── images/              # Static images (e.g., logo)
│   └── videos/              # Static videos (e.g., vault animation)
└── screens/
    ├── account-type-screen.tsx
    ├── bill-details-screen.tsx
    ├── business-login.tsx
    ├── business-signup.tsx
    ├── files-screen.tsx
    ├── home-screen.tsx
    ├── individual-login.tsx
    ├── individual-signup.tsx
    ├── login-account-type.tsx
    ├── ocr-scan-screen.tsx
    ├── profile-screen.tsx
    ├── qr-scanner-screen.tsx
    ├── search-screen.tsx
    ├── signup-account-type.tsx
    ├── signup-individual.tsx
    ├── signup-screen.tsx
    ├── signup-verification.tsx
    ├── translate-options-screen.tsx
    ├── upload-screen.tsx
    ├── vault-animation-screen.tsx
    └── welcome-screen.tsx   # Individual UI screens for different app states
\`\`\`

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
