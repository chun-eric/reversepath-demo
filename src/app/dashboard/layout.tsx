import DashboardNavbar from "../components/layout/DashboardNavbar";
import Footer from "../components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
