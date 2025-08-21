"use client";

import Link from "next/link";
import { Shield, Eye, FileText, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header /*/}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            How ReversePath protects your health information in compliance with
            Australian privacy laws
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Last Updated:</strong> August 18, 2025 |{" "}
              <strong>Effective Date:</strong> August 18, 2025
            </p>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">
                Australian Privacy Act Compliant
              </CardTitle>
              <CardDescription>
                Full compliance with Australian Privacy Principles (APPs)
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Research Transparency</CardTitle>
              <CardDescription>
                Clear disclosure of how your data supports diabetes research
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Your Rights Protected</CardTitle>
              <CardDescription>
                Access, correct, delete, and export your personal information
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Organisation Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Organisation Information (APP 1)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">About ReversePath</h4>
                <p className="text-gray-700">
                  ReversePath is a digital health platform operated by the
                  University of Sydney, designed to support Type 2 diabetes
                  remission research through evidence-based lifestyle
                  interventions and telehealth consultations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <div className="bg-gray-50 p-3 rounded">
                  <p>
                    <strong>Privacy Officer:</strong> Dr. Sarah Hocking
                  </p>
                  <p>
                    <strong>Email:</strong> privacy@reversepath.edu.au
                  </p>
                  <p>
                    <strong>Phone:</strong> +61 2 9351 2222
                  </p>
                  <p>
                    <strong>Address:</strong> University of Sydney, NSW 2006,
                    Australia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle>What Information We Collect (APP 3)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Health Information</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Blood glucose readings and trends</li>
                  <li>Weight, height, and BMI measurements</li>
                  <li>Medication information and dosages</li>
                  <li>Dietary intake and meal logging data</li>
                  <li>Exercise and physical activity data</li>
                  <li>HbA1c and other laboratory results</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Name, email address, and contact details</li>
                  <li>Date of birth and gender</li>
                  <li>Emergency contact information</li>
                  <li>Healthcare provider details</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Educational Data</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Learning module completion and scores</li>
                  <li>Time spent on educational content</li>
                  <li>Quiz responses and assessment results</li>
                  <li>Platform engagement and interaction data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information (APP 6)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Primary Purposes</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    <strong>Diabetes Research:</strong> Contributing to clinical
                    studies on Type 2 diabetes remission
                  </li>
                  <li>
                    <strong>Health Monitoring:</strong> Tracking your progress
                    during the remission program
                  </li>
                  <li>
                    <strong>Educational Support:</strong> Personalizing learning
                    content and assessments
                  </li>
                  <li>
                    <strong>Clinical Care:</strong> Supporting telehealth
                    consultations with healthcare providers
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Secondary Purposes</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Platform improvement and optimization</li>
                  <li>
                    Academic publication of de-identified research findings
                  </li>
                  <li>Quality assurance and safety monitoring</li>
                  <li>Compliance with regulatory requirements</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>Data Sharing and Disclosure (APP 6)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Authorized Recipients</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    <strong>Research Team:</strong> University of Sydney
                    diabetes researchers (de-identified data only)
                  </li>
                  <li>
                    <strong>Healthcare Providers:</strong> Your nominated GP or
                    endocrinologist (with consent)
                  </li>
                  <li>
                    <strong>Ethics Committee:</strong> Human Research Ethics
                    Committee for audit purposes
                  </li>
                  <li>
                    <strong>Regulatory Bodies:</strong> TGA, NHMRC as required
                    by law
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">
                  We Never Share Data For:
                </h4>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  <li>Marketing or commercial purposes</li>
                  <li>Insurance company assessments</li>
                  <li>Employment screening</li>
                  <li>Non-research third-party analytics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights (APP 12 & 13)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Access Rights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Request copies of your personal information</li>
                    <li>View all data collected about you</li>
                    <li>Understand how your data is being used</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Correction Rights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Update incorrect personal information</li>
                    <li>Correct inaccurate health data</li>
                    <li>Add missing information to your profile</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Deletion Rights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Request deletion of personal information</li>
                    <li>Withdraw from research participation</li>
                    <li>Account closure and data removal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Portability Rights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Export your data in standard formats</li>
                    <li>Transfer data to another provider</li>
                    <li>Receive machine-readable data copies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle>Data Security and Storage (APP 11)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Security Measures</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>AES-256 encryption for data storage</li>
                  <li>Multi-factor authentication for researcher access</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>ISO 27001 compliant infrastructure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Retention</h4>
                <p className="text-gray-700">
                  Health data is retained for 7 years following study completion
                  as required by NHMRC guidelines. Personal identifiers are
                  removed after 3 years, with only de-identified research data
                  retained for the full period. You may request earlier deletion
                  subject to research requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Complaints */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Complaints and Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Making a Complaint</h4>
                <p className="text-gray-700 mb-3">
                  If you have concerns about how we handle your personal
                  information, please contact our Privacy Officer first:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p>
                    <strong>Privacy Officer:</strong> Dr. John Smith
                  </p>
                  <p>
                    <strong>Email:</strong> privacy@reversepath.edu.au
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 30 days
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">External Complaints</h4>
                <p className="text-gray-700 mb-2">
                  If you're not satisfied with our response, you can lodge a
                  complaint with:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>
                      Office of the Australian Information Commissioner (OAIC)
                    </strong>
                  </p>
                  <p>
                    <strong>Website:</strong> www.oaic.gov.au
                  </p>
                  <p>
                    <strong>Phone:</strong> 1300 363 992
                  </p>
                  <p>
                    <strong>Email:</strong> enquiries@oaic.gov.au
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Ethics */}
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
                  The study follows the National Statement on Ethical Conduct in
                  Human Research (2023).
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Withdrawal from Research</h4>
                <p className="text-gray-700">
                  You may withdraw from the research study at any time without
                  affecting your access to standard diabetes care. Data
                  collected up to the point of withdrawal may be retained for
                  research purposes unless you specifically request its
                  deletion.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 p-6 bg-white rounded-lg border">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              Need More Information?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Link href="/terms">View Terms of Service</Link>
              </Button>
              <Button variant="outline">
                <Link href="/consent">Manage Consent Preferences</Link>
              </Button>
              <Button>
                <Link href="mailto:privacy@reversepath.edu.au">
                  Contact Privacy Officer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
