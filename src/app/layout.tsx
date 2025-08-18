import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "../app/lib/init-data";
import { AuthProvider } from "../app/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReversePath - Diabetes Remission Platform",
  description:
    "Evidence-based digital platform for Type 2 diabetes remission through lifestyle intervention",
  keywords:
    "diabetes remission, low energy diet, health tracking, clinical research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
