"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Shield,
  FileText,
  Users,
  Bell,
  Download,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

interface ConsentItem {
  id: string;
  title: string;
  description: string;
  required: boolean;
  granted: boolean;
  category: "essential" | "research" | "communication" | "optional";
  details: string[];
  lastUpdated: string;
}

export default function ConsentManagementPage() {
  const [consentItems, setConsentItems] = useState<ConsentItem[]>([
    {
      id: "platform-use",
      title: "Platform Use and Account Creation",
      description:
        "Essential consent for creating and maintaining your ReversePath account",
      required: true,
      granted: true,
      category: "essential",
      details: [
        "Create and maintain your user account",
        "Provide access to educational content",
        "Enable platform functionality and features",
        "Ensure account security and authentication",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
    {
      id: "health-data-collection",
      title: "Health Data Collection for Research",
      description:
        "Collection of your health information for diabetes remission research",
      required: true,
      granted: true,
      category: "research",
      details: [
        "Blood glucose readings and trends",
        "Weight, height, and BMI measurements",
        "Medication information and changes",
        "Dietary intake and meal logging",
        "Exercise and physical activity data",
        "Laboratory results (HbA1c, lipids, etc.)",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
    {
      id: "research-participation",
      title: "Clinical Research Participation",
      description:
        "Participation in University of Sydney diabetes remission study",
      required: true,
      granted: true,
      category: "research",
      details: [
        "Use of de-identified data for clinical research",
        "Inclusion in research publications (anonymized)",
        "Data sharing with approved research collaborators",
        "Long-term follow-up for research outcomes",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
    {
      id: "education-tracking",
      title: "Educational Progress Tracking",
      description:
        "Monitoring your learning progress through educational modules",
      required: false,
      granted: true,
      category: "research",
      details: [
        "Track completion of learning modules",
        "Record quiz scores and assessments",
        "Monitor time spent on educational content",
        "Analyze learning effectiveness for research",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
    {
      id: "telehealth-support",
      title: "Telehealth Consultation Support",
      description:
        "Enable telehealth features and healthcare provider communication",
      required: false,
      granted: true,
      category: "essential",
      details: [
        "Share relevant health data with your GP",
        "Enable video consultation features",
        "Facilitate communication with research team",
        "Provide progress reports to healthcare providers",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
    {
      id: "study-communications",
      title: "Study-Related Communications",
      description: "Receive important updates about the research study",
      required: false,
      granted: true,
      category: "communication",
      details: [
        "Important study updates and announcements",
        "Appointment reminders and scheduling",
        "Safety alerts and medical notifications",
        "Platform updates and new features",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
    {
      id: "platform-improvement",
      title: "Platform Improvement Analytics",
      description: "Anonymous usage data to improve platform functionality",
      required: false,
      granted: false,
      category: "optional",
      details: [
        "Anonymous usage patterns and navigation",
        "Platform performance and error tracking",
        "Feature usage statistics (de-identified)",
        "User experience optimization data",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
    {
      id: "future-research",
      title: "Future Research Opportunities",
      description: "Be contacted about related diabetes research studies",
      required: false,
      granted: false,
      category: "optional",
      details: [
        "Information about new diabetes research studies",
        "Opportunities for follow-up research participation",
        "Invitations to diabetes research events",
        "Updates on research findings and outcomes",
      ],
      lastUpdated: "2025-08-18T10:00:00Z",
    },
  ]);

  const toggleConsent = (id: string) => {
    setConsentItems((items) =>
      items.map((item) =>
        item.id === id && !item.required
          ? {
              ...item,
              granted: !item.granted,
              lastUpdated: new Date().toISOString(),
            }
          : item
      )
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "essential":
        return "border-blue-200 bg-blue-50";
      case "research":
        return "border-green-200 bg-green-50";
      case "communication":
        return "border-purple-200 bg-purple-50";
      case "optional":
        return "border-gray-200 bg-gray-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "essential":
        return <Shield className="h-5 w-5 text-blue-600" />;
      case "research":
        return <FileText className="h-5 w-5 text-green-600" />;
      case "communication":
        return <Bell className="h-5 w-5 text-purple-600" />;
      case "optional":
        return <Eye className="h-5 w-5 text-gray-600" />;
      default:
        return <Shield className="h-5 w-5 text-gray-600" />;
    }
  };

  const exportConsentData = () => {
    const consentData = {
      userId: "demo-patient-1",
      exportDate: new Date().toISOString(),
      consents: consentItems.map((item) => ({
        id: item.id,
        title: item.title,
        granted: item.granted,
        required: item.required,
        lastUpdated: item.lastUpdated,
      })),
    };

    const blob = new Blob([JSON.stringify(consentData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reversepath-consent-record-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Link href="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">
                  ReversePath
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">
                Consent Management
              </span>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Consent Management
          </h1>
          <p className="text-lg text-gray-600">
            Manage your consent preferences for research participation and data
            use
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              Your consent choices are recorded and can be updated at any time.
              Required consents are necessary for research participation.
            </p>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {
                  consentItems.filter(
                    (item) => item.category === "essential" && item.granted
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Essential</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {
                  consentItems.filter(
                    (item) => item.category === "research" && item.granted
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Research</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {
                  consentItems.filter(
                    (item) => item.category === "communication" && item.granted
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Communication</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Eye className="h-6 w-6 text-gray-600" />
              </div>
              <div className="text-2xl font-bold text-gray-600">
                {
                  consentItems.filter(
                    (item) => item.category === "optional" && item.granted
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Optional</div>
            </CardContent>
          </Card>
        </div>

        {/* Consent Items */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Consent Preferences
            </h2>
            <Button variant="outline" onClick={exportConsentData}>
              <Download className="h-4 w-4 mr-2" />
              Export Record
            </Button>
          </div>

          {consentItems.map((item) => (
            <Card
              key={item.id}
              className={`transition-all duration-200 ${getCategoryColor(
                item.category
              )}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {getCategoryIcon(item.category)}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                      {item.required && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                          Required
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        This consent covers:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {item.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-0.5">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-xs text-gray-500">
                      Last updated:{" "}
                      {new Date(item.lastUpdated).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>

                  <div className="ml-6 flex flex-col items-center space-y-2">
                    <button
                      onClick={() => toggleConsent(item.id)}
                      disabled={item.required}
                      className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
                        item.granted
                          ? "bg-green-100 text-green-600 hover:bg-green-200"
                          : "bg-red-100 text-red-600 hover:bg-red-200"
                      } ${
                        item.required
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    >
                      {item.granted ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        <XCircle className="h-6 w-6" />
                      )}
                    </button>
                    <div
                      className={`text-xs font-medium ${
                        item.granted ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.granted ? "Granted" : "Denied"}
                    </div>
                    {!item.required && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleConsent(item.id)}
                        className="text-xs"
                      >
                        {item.granted ? "Withdraw" : "Grant"}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Information */}
        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Your Rights Under Australian Privacy Law
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Right to Withdraw</h4>
                  <p className="text-sm text-gray-700">
                    You can withdraw consent at any time, except for required
                    consents necessary for research participation. Withdrawal
                    does not affect data already collected with your consent.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Impact of Withdrawal</h4>
                  <p className="text-sm text-gray-700">
                    Withdrawing research consent may affect your participation
                    in the study. You can still access educational content and
                    platform features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data Retention</h4>
                  <p className="text-sm text-gray-700">
                    De-identified research data may be retained even after
                    consent withdrawal, as required by NHMRC guidelines for
                    research integrity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact for Changes</h4>
                  <p className="text-sm text-gray-700">
                    For questions about consent or to make changes, contact our
                    Privacy Officer at privacy@reversepath.edu.au.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Ethics and Governance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Ethics Approval</h4>
                <p className="text-gray-700">
                  This research has been approved by the University of Sydney
                  Human Research Ethics Committee (Protocol Number: 2025/XXX).
                  Your consent is documented and managed according to the
                  National Statement on Ethical Conduct in Human Research.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Consent Documentation</h4>
                <p className="text-gray-700">
                  All consent changes are automatically logged with timestamps
                  and stored securely. You can export your complete consent
                  history at any time using the "Export Record" button above.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Independent Review</h4>
                <p className="text-gray-700">
                  If you have concerns about the research or your consent, you
                  can contact the University of Sydney Human Research Ethics
                  Committee at ethics@sydney.edu.au or +61 2 8627 8176.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-white rounded-lg border">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              Need Help with Consent Management?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Link href="/privacy">View Privacy Policy</Link>
              </Button>
              <Button variant="outline">
                <Link href="/terms">View Terms of Service</Link>
              </Button>
              <Button>
                <Link href="mailto:privacy@reversepath.edu.au">
                  Contact Privacy Officer
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Your consent choices are important to us. We are committed to
              respecting your privacy and ensuring transparent use of your data
              for diabetes research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
