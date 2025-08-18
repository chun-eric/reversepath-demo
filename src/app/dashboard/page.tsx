"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle,
  PlayCircle,
  Award,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  educationModules,
  calculateModuleProgress,
} from "../lib/education-content";

export default function EducationPage() {
  // Mock user progress - in real app this would come from database
  const completedModules = ["diabetes-remission-basics"];
  const currentModule = "low-energy-diet";
  const overallProgress = calculateModuleProgress(completedModules);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Link href="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">
                ReversePath Education Hub
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {overallProgress}% Complete
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                S
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">Your Learning Journey</h2>
          <p className="text-green-100 text-lg mb-6">
            Master the knowledge you need for successful diabetes remission
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">
                    {completedModules.length}
                  </div>
                  <div className="text-sm opacity-90">Modules Completed</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">{overallProgress}%</div>
                  <div className="text-sm opacity-90">Overall Progress</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Average Quiz Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Modules */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Learning Modules
          </h3>

          <div className="grid gap-6">
            {educationModules.map((module, index) => {
              const isCompleted = completedModules.includes(module.id);
              const isCurrent = currentModule === module.id;
              const isLocked =
                !isCompleted &&
                !isCurrent &&
                index > 0 &&
                !completedModules.includes(educationModules[index - 1].id);

              return (
                <Card
                  key={module.id}
                  className={`transition-all duration-200 ${
                    isCompleted
                      ? "border-green-200 bg-green-50"
                      : isCurrent
                      ? "border-blue-200 bg-blue-50 shadow-md"
                      : isLocked
                      ? "border-gray-200 bg-gray-100 opacity-60"
                      : "border-gray-200 hover:shadow-md"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Module Icon */}
                      <div
                        className={`p-3 rounded-full ${
                          isCompleted
                            ? "bg-green-100"
                            : isCurrent
                            ? "bg-blue-100"
                            : "bg-gray-100"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        ) : isCurrent ? (
                          <PlayCircle className="h-8 w-8 text-blue-600" />
                        ) : (
                          <BookOpen className="h-8 w-8 text-gray-400" />
                        )}
                      </div>

                      {/* Module Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-xl font-semibold text-gray-900">
                              Module {module.order}: {module.title}
                            </h4>
                            {isCompleted && (
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Completed
                              </span>
                            )}
                            {isCurrent && (
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                In Progress
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {module.duration} min
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                          {module.description}
                        </p>

                        {/* Learning Objectives */}
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">
                            Learning Objectives:
                          </h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {module.learningObjectives
                              .slice(0, 2)
                              .map((objective, objIndex) => (
                                <li key={objIndex} className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  {objective}
                                </li>
                              ))}
                            {module.learningObjectives.length > 2 && (
                              <li className="text-gray-500 italic">
                                +{module.learningObjectives.length - 2} more
                                objectives...
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            {isCompleted && (
                              <div className="flex items-center text-sm text-green-600">
                                <Award className="h-4 w-4 mr-1" />
                                Quiz Score: 92%
                              </div>
                            )}
                          </div>

                          <div className="flex space-x-2">
                            {isCompleted && (
                              <Button variant="outline" size="sm">
                                Review
                              </Button>
                            )}
                            {(isCurrent || isCompleted) && (
                              <Button
                                size="sm"
                                className={
                                  isCompleted
                                    ? "bg-green-600 hover:bg-green-700"
                                    : ""
                                }
                              >
                                {isCompleted ? "Retake" : "Continue"} Module
                              </Button>
                            )}
                            {isLocked && (
                              <Button variant="outline" size="sm" disabled>
                                Locked
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                Progress Tracking
              </CardTitle>
              <CardDescription>
                Monitor your learning journey and quiz performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Detailed Progress
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                Study Resources
              </CardTitle>
              <CardDescription>
                Download guides, meal plans, and tracking sheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Download Resources
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-purple-600" />
                Achievements
              </CardTitle>
              <CardDescription>
                Earn badges and certificates for your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Achievements
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
