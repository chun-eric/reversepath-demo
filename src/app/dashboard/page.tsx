"use client";

import Link from "next/link";
import { useAuth } from "../lib/auth-context";
import {
  Heart,
  BookOpen,
  BarChart3,
  TrendingUp,
  Calendar,
  Target,
  Award,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                ReversePath
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome back, {user?.name || "User"}
              </span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {user?.name?.charAt(0) || "U"}
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Remission Journey</h1>
          <p className="text-blue-100 text-lg mb-4">
            Day 15 of your 12-week program
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Target: HbA1c &lt; 6.5%</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Progress: On track</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Glucose</p>
                  <p className="text-2xl font-bold text-gray-900">124 mg/dL</p>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">
                ↓ 15% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Calories Today</p>
                  <p className="text-2xl font-bold text-gray-900">750</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <p className="text-sm text-blue-600 mt-2">50 under target</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Weight Loss</p>
                  <p className="text-2xl font-bold text-gray-900">8.2 kg</p>
                </div>
                <div className="bg-purple-100 p-2 rounded-full">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <p className="text-sm text-purple-600 mt-2">Great progress!</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Learning Progress</p>
                  <p className="text-2xl font-bold text-gray-900">85%</p>
                </div>
                <div className="bg-orange-100 p-2 rounded-full">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <p className="text-sm text-orange-600 mt-2">
                2 modules remaining
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-800">
                        Morning glucose reading
                      </span>
                    </div>
                    <span className="text-sm text-green-600">Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-800">Log lunch meal</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-800">
                        Complete Module 3: Meal Planning
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <BarChart3 className="h-8 w-8 text-blue-600 mb-3" />
                  <CardTitle className="text-lg mb-2">Track Health</CardTitle>
                  <CardDescription>
                    Log glucose, meals, and weight
                  </CardDescription>
                </CardContent>
              </Card>

              <Link href="/dashboard/education">
                <Card className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-green-600 mb-3" />
                    <CardTitle className="text-lg mb-2">Learn</CardTitle>
                    <CardDescription>
                      Interactive modules and quizzes
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
                  <CardTitle className="text-lg mb-2">Progress</CardTitle>
                  <CardDescription>
                    View trends and achievements
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Award className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Week 2 Complete</p>
                      <p className="text-xs text-gray-600">
                        Consistent tracking
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Target className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Glucose Target</p>
                      <p className="text-xs text-gray-600">5 days in range</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Learning Streak</p>
                      <p className="text-xs text-gray-600">7 days active</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Research Check-in</p>
                      <p className="text-xs text-gray-600">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">
                        New Module Available
                      </p>
                      <p className="text-xs text-gray-600">
                        Exercise & Diabetes
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Access */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* <Link href="/admin/dashboard">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    {user?.role === "RESEARCHER" || user?.role === "ADMIN"
                      ? "Research Dashboard"
                      : "View Research Data"}
                  </Button>
                </Link> */}
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Export My Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
