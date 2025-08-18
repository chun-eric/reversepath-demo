"use client";

import Link from "next/link";
import {
  Users,
  BarChart3,
  Download,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BookOpen,
  Heart,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function AdminDashboardPage() {
  // Mock research data - in real app this would come from database
  const studyMetrics = {
    totalParticipants: 156,
    activeParticipants: 142,
    completedProgram: 23,
    averageWeightLoss: 11.2,
    remissionRate: 68,
    averageHbA1c: 6.1,
  };

  const recentActivity = [
    {
      id: 1,
      participant: "Sarah M.",
      action: "Completed Module 2",
      time: "2 hours ago",
      status: "success",
    },
    {
      id: 2,
      participant: "John D.",
      action: "Missed glucose reading",
      time: "4 hours ago",
      status: "warning",
    },
    {
      id: 3,
      participant: "Maria L.",
      action: "Weight milestone reached",
      time: "6 hours ago",
      status: "success",
    },
    {
      id: 4,
      participant: "Robert K.",
      action: "Started Week 8",
      time: "1 day ago",
      status: "info",
    },
    {
      id: 5,
      participant: "Emma W.",
      action: "High glucose alert",
      time: "1 day ago",
      status: "alert",
    },
  ];

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
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                Research Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  Dr. Samantha Hocking
                </span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  SH
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Study Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Diabetes Remission Study</h1>
          <p className="text-blue-100 text-lg mb-6">
            Virtual Care Platform - University of Sydney Clinical Trial
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">
                {studyMetrics.totalParticipants}
              </div>
              <div className="text-sm opacity-90">Total Enrolled</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">
                {studyMetrics.activeParticipants}
              </div>
              <div className="text-sm opacity-90">Active Participants</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">
                {studyMetrics.remissionRate}%
              </div>
              <div className="text-sm opacity-90">Remission Rate</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">
                {studyMetrics.averageWeightLoss}kg
              </div>
              <div className="text-sm opacity-90">Avg Weight Loss</div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Platform Engagement</p>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">
                ↑ 12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Average HbA1c</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {studyMetrics.averageHbA1c}%
                  </p>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <p className="text-sm text-blue-600 mt-2">↓ 1.8% from baseline</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Module Completion</p>
                  <p className="text-2xl font-bold text-gray-900">73%</p>
                </div>
                <div className="bg-purple-100 p-2 rounded-full">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <p className="text-sm text-purple-600 mt-2">
                285 modules completed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Retention Rate</p>
                  <p className="text-2xl font-bold text-gray-900">91%</p>
                </div>
                <div className="bg-orange-100 p-2 rounded-full">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <p className="text-sm text-orange-600 mt-2">142 of 156 active</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Participant Management */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Participant Activity</span>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activity.status === "success"
                              ? "bg-green-500"
                              : activity.status === "warning"
                              ? "bg-yellow-500"
                              : activity.status === "alert"
                              ? "bg-red-500"
                              : "bg-blue-500"
                          }`}
                        ></div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {activity.participant}
                          </p>
                          <p className="text-sm text-gray-600">
                            {activity.action}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-blue-600 mb-3" />
                  <CardTitle className="text-lg mb-2">
                    Participant Overview
                  </CardTitle>
                  <CardDescription>
                    View detailed participant profiles and progress
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <BarChart3 className="h-8 w-8 text-green-600 mb-3" />
                  <CardTitle className="text-lg mb-2">Analytics</CardTitle>
                  <CardDescription>
                    Comprehensive study metrics and trends
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Download className="h-8 w-8 text-purple-600 mb-3" />
                  <CardTitle className="text-lg mb-2">Data Export</CardTitle>
                  <CardDescription>
                    Download study data for analysis
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Alerts & Summary */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                  Attention Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-red-800">
                        High Glucose Alert
                      </p>
                      <p className="text-xs text-red-600">
                        3 participants with elevated readings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-yellow-800">
                        Missed Check-ins
                      </p>
                      <p className="text-xs text-yellow-600">
                        7 participants overdue for monitoring
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">
                        Module Completion
                      </p>
                      <p className="text-xs text-blue-600">
                        12 participants ready for Week 8
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Study Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Enrollment Target</p>
                      <p className="text-xs text-gray-600">
                        156/150 participants (104%)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Data Collection</p>
                      <p className="text-xs text-gray-600">
                        Week 12 of 24-week study
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">Preliminary Results</p>
                      <p className="text-xs text-gray-600">
                        Promising remission rates observed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Active participants
                    </span>
                    <span className="font-semibold">142</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Glucose readings logged
                    </span>
                    <span className="font-semibold">324</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Meals tracked</span>
                    <span className="font-semibold">186</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Modules completed
                    </span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Platform engagement
                    </span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
