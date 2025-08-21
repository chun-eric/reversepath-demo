"use client";

import Link from "next/link";
import { useAuth } from "../../lib/auth-context";
import { useRouter } from "next/navigation";
import { Heart, LogOut, Settings, Bell, User } from "lucide-react";
import { Button } from "../ui/button";

export default function DashboardNavbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 pointer">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              ReversePath
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/education"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Learning
            </Link>
            <Link
              href="/dashboard/tracking"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Health Tracking
            </Link>
            <Link
              href="/dashboard/progress"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Progress
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>

            {/* User Info */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 hidden sm:block">
                Welcome back, {user?.name || "User"}
              </span>

              {/* User Avatar */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {user?.name?.charAt(0) || "U"}
              </div>

              {/* Settings */}
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>

              {/* Logout */}
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Optional) */}
      <div className="md:hidden bg-gray-50 border-t">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/education"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium"
          >
            Learning
          </Link>
          <Link
            href="/dashboard/tracking"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium"
          >
            Health Tracking
          </Link>
          <Link
            href="/dashboard/progress"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium"
          >
            Progress
          </Link>
        </div>
      </div>
    </nav>
  );
}
