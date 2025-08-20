import Link from "next/link";
import { ArrowRight, Heart, BarChart3, BookOpen, Users } from "lucide-react";
import { Button } from "../../src/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../src/app/components/ui/card";
import "../app/lib/init-data";
import { User } from "../app/lib/auth-context";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your guided journey to
            <span className="text-blue-600 block">diabetes remission</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An Innovative E-Learning digital platform supporting Type 2 diabetes
            patients through structured lifestyle intervention and clinical
            research participation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="flex">
              <div className="flex">
                <ArrowRight className=" h-5 w-5" />
                <div className="w-2"></div>
                <Link href="/dashboard">Start Your Journey</Link>
              </div>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/admin/dashboard">For Researchers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Support for Diabetes Remission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Interactive Education</CardTitle>
                <CardDescription>
                  Learn about diabetes remission through engaging modules
                  covering low-energy diets, lifestyle changes, and progress
                  monitoring.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Health Tracking</CardTitle>
                <CardDescription>
                  Monitor glucose levels, track meals, and visualize your
                  progress with intuitive charts and personalized insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Research Participation</CardTitle>
                <CardDescription>
                  Contribute to groundbreaking diabetes research while receiving
                  structured support from healthcare professionals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Proven Results in Diabetes Remission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="text-center p-0">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  46-86%
                </div>
                <div className="text-gray-600">
                  Remission success rate with structured support
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="text-center p-0">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  12-20
                </div>
                <div className="text-gray-600">
                  Weeks of low-energy diet intervention
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="text-center p-0">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600">
                  Platform user satisfaction rating
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
