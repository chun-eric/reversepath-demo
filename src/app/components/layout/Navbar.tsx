"use client";

import Link from "next/link";
import { useAuth } from "@/app/lib/auth-context";
import { useProgressData } from "@/app/lib/hooks/useProgressdata";
import {
  Heart,
  BookOpen,
  BarChart3,
  LogOut,
  User,
  Home,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, Shield, Eye, FileText, Users } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { getEducationProgress, getTrackingProgress, getOverallProgress } =
    useProgressData();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Check if we're on dashboard pages
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Always Present */}
          <div className="flex items-center space-x-4 w-30">
            <div>
              <Link
                href={isAuthenticated ? "/dashboard" : "/"}
                className="flex items-center space-x-2"
              >
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="hidden md:inline-flex text-xl font-bold text-gray-900">
                  ReversePath
                </span>
              </Link>
            </div>
            {/* Privacy Protected - Only show on privacy page */}
            <div className="">
              {pathname === "/privacy" && (
                <div className="flex items-center space-x-2 px-3 py-2 rounded-md bg-green-50">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">
                    Privacy Protected
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Center Navigation - Adapts based on current section */}
          {isAuthenticated && isDashboard && (
            <div className="flex items-center space-x-4">
              {/* Back to Dashboard - Only show on sub-pages */}
              {pathname !== "/dashboard" && (
                <>
                  <Button variant="ghost" size="sm">
                    <Link href="/dashboard" className="flex items-center">
                      <Home className="h-4 w-4 mr-2" />
                      Back to Dashboard
                    </Link>
                  </Button>
                  <div className="h-6 w-px bg-gray-300"></div>
                </>
              )}

              {/* Section Title */}
              <h1 className="text-xl font-semibold text-gray-900">
                {pathname === "/dashboard" && "Dashboard"}
                {pathname?.startsWith("/dashboard/education") &&
                  "Education Hub"}
                {pathname?.startsWith("/dashboard/tracking") &&
                  "Health Tracking"}
                {pathname?.startsWith("/dashboard/progress") &&
                  "Progress Center"}
              </h1>

              {/* Main Navigation - Only show on main dashboard */}
              {pathname === "/dashboard" && (
                <div className="hidden lg:flex items-center space-x-6 ml-8">
                  <Link
                    href="/dashboard/education"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Education</span>
                  </Link>

                  <Link
                    href="/dashboard/tracking"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                  >
                    <BarChart3 className="h-4 w-4" />
                    <span>Tracking</span>
                  </Link>

                  <Link
                    href="/dashboard/progress"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>Progress</span>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Right Side - Changes based on authentication */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              // Unauthenticated State
              <>
                <Button variant="ghost">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button>
                  <Link href="/register">Get Started</Link>
                </Button>
              </>
            ) : (
              // Authenticated State
              <>
                {/* Section-specific Progress */}
                {pathname?.startsWith("/dashboard/education") && (
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                    <span>Progress:</span>
                    <span className="font-semibold text-green-600">
                      {getEducationProgress()}
                    </span>
                  </div>
                )}

                {pathname?.startsWith("/dashboard/tracking") && (
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                    <span>Today:</span>
                    <span className="font-semibold text-purple-600">
                      {getTrackingProgress()}
                    </span>
                  </div>
                )}

                {pathname?.startsWith("/dashboard/progress") && (
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-semibold text-orange-600">
                      {getOverallProgress()}
                    </span>
                  </div>
                )}

                {/* Welcome message - only on main dashboard */}
                {pathname === "/dashboard" && (
                  <span className="hidden sm:inline-flex text-sm text-gray-600">
                    Welcome back, {user?.name || "User"}
                  </span>
                )}

                {/* User Avatar */}
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {user?.name?.charAt(0) || "U"}
                </div>

                {/* Logout Button */}
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation - Only for authenticated users */}
        {isAuthenticated && isDashboard && (
          <div className="md:hidden border-t border-gray-200 py-2">
            <div className="flex space-x-1">
              <Link
                href="/dashboard"
                className={`flex-1 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-xs font-medium
                  ${
                    pathname === "/dashboard"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>

              <Link
                href="/dashboard/education"
                className={`flex-1 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-xs font-medium
                  ${
                    pathname?.startsWith("/dashboard/education")
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700"
                  }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Learn</span>
              </Link>

              <Link
                href="/dashboard/tracking"
                className={`flex-1 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-xs font-medium
                  ${
                    pathname?.startsWith("/dashboard/tracking")
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700"
                  }`}
              >
                <BarChart3 className="h-4 w-4" />
                <span>Track</span>
              </Link>

              <Link
                href="/dashboard/progress"
                className={`flex-1 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-xs font-medium
                  ${
                    pathname?.startsWith("/dashboard/progress")
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700"
                  }`}
              >
                <TrendingUp className="h-4 w-4" />
                <span>Progress</span>
              </Link>
            </div>
          </div>
        )}

        {/* Privacy */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/privacy"
            className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
              ${pathname === "/privacy"}`}
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-600 font-medium">
                Privacy Protected
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
