"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't show global navbar on dashboard or admin pages
  const isDashboardPage =
    pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin");

  if (isDashboardPage) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  // Landing pages get the marketing navbar + footer
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
