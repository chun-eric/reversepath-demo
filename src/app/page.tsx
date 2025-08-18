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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                ReversePath
              </span>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-x-20 items-left space-x-2 max-w-[30%]">
              <div className="flex gap-2 mb-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">ReversePath</span>
              </div>
              <div className="text-sm text-gray-400 ml-2 ">
                Supporting diabetes remission through digital innovation
              </div>
            </div>

            <div className="flex flex-col text-xs gap-4 max-w-[40%] text-gray-400 mt-2 ">
              <Link href="/privacy" className="hover:text-gray-200">
                Privacy Policy
              </Link>
              <Link href="/data-protection" className="hover:text-gray-200">
                Data Protection
              </Link>
              <Link href="/contact" className="hover:text-gray-200">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-400">
            <p>
              2025. Telehealth E-learning platform developed for University of
              Sydney diabetes remission study
            </p>
            <p className="mt-2 ">
              Built with accessibility and evidence-based care in mind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
