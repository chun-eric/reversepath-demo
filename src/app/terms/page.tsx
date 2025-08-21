import Link from "next/link";
import {
  Heart,
  ArrowLeft,
  Scale,
  FileText,
  AlertTriangle,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
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
              <Scale className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Legal terms governing your use of the ReversePath diabetes remission
            research platform
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Last Updated:</strong> August 18, 2025 |{" "}
              <strong>Effective Date:</strong> August 18, 2025
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">
                Important Legal Notice
              </h3>
              <p className="text-amber-700">
                ReversePath is a research platform for diabetes remission
                studies. This is NOT a medical device and does NOT provide
                medical advice, diagnosis, or treatment. Always consult your
                healthcare provider for medical decisions. These terms are
                governed by Australian law.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Scale className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Australian Consumer Law</CardTitle>
              <CardDescription>
                Your consumer rights under Australian Competition and Consumer
                Act 2010
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Research Participation</CardTitle>
              <CardDescription>
                Voluntary participation in University of Sydney diabetes
                research
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Agreement to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Acceptance</h4>
                <p className="text-gray-700">
                  By accessing or using ReversePath, you agree to be bound by
                  these Terms of Service and our Privacy Policy. If you disagree
                  with any part of these terms, you may not access the service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Service Provider</h4>
                <div className="bg-gray-50 p-3 rounded">
                  <p>
                    <strong>Entity:</strong> The University of Sydney
                  </p>
                  <p>
                    <strong>ABN:</strong> 15 XXX XXX XXX
                  </p>
                  <p>
                    <strong>Address:</strong> Camperdown NSW 2006, Australia
                  </p>
                  <p>
                    <strong>Contact:</strong> reversepath@sydney.edu.au
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Governing Law</h4>
                <p className="text-gray-700">
                  These Terms are governed by the laws of New South Wales,
                  Australia. Any disputes will be subject to the exclusive
                  jurisdiction of the courts of New South Wales.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Platform Purpose */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Purpose and Scope</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Research Platform</h4>
                <p className="text-gray-700">
                  ReversePath is a digital research platform designed to support
                  clinical studies investigating Type 2 diabetes remission
                  through lifestyle interventions. The platform facilitates:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Educational content delivery on diabetes management</li>
                  <li>Health data collection for research purposes</li>
                  <li>Telehealth consultation support</li>
                  <li>Progress monitoring and reporting</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">
                  Not Medical Services
                </h4>
                <p className="text-red-700">
                  ReversePath does NOT provide medical advice, diagnosis, or
                  treatment. It is NOT a medical device under the Therapeutic
                  Goods Administration (TGA) regulations. All health decisions
                  must be made in consultation with qualified healthcare
                  professionals.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle>User Eligibility and Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Eligibility Requirements</h4>
                <p className="text-gray-700 mb-2">
                  To use ReversePath, you must:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Be 18 years of age or older</li>
                  <li>Have been diagnosed with Type 2 diabetes</li>
                  <li>Be participating in the approved research study</li>
                  <li>
                    Have provided informed consent for research participation
                  </li>
                  <li>Be under the care of a qualified healthcare provider</li>
                  <li>Reside in Australia during the study period</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Account Responsibilities</h4>
                <p className="text-gray-700">You are responsible for:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and current information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Research Participation */}
          <Card>
            <CardHeader>
              <CardTitle>Research Participation Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Voluntary Participation</h4>
                <p className="text-gray-700">
                  Participation in the diabetes remission research study is
                  entirely voluntary. You may withdraw from the study at any
                  time without penalty or loss of access to standard medical
                  care.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ethics Approval</h4>
                <p className="text-gray-700">
                  This research has been approved by the University of Sydney
                  Human Research Ethics Committee (Protocol Number: 2025/XXX)
                  and follows the National Statement on Ethical Conduct in Human
                  Research.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Use for Research</h4>
                <p className="text-gray-700">
                  By participating, you consent to the use of your de-identified
                  data for:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Clinical research into diabetes remission</li>
                  <li>Academic publications and presentations</li>
                  <li>Platform improvement and development</li>
                  <li>Regulatory submissions to health authorities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Permitted Uses</h4>
                <p className="text-gray-700">
                  You may use ReversePath only for:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Participating in the approved research study</li>
                  <li>Accessing educational content about diabetes</li>
                  <li>Recording health data as instructed by researchers</li>
                  <li>Communicating with the research team as appropriate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prohibited Activities</h4>
                <p className="text-gray-700">You must NOT:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Use the platform for commercial purposes</li>
                  <li>Share your account credentials with others</li>
                  <li>Input false or misleading health information</li>
                  <li>Attempt to access other users' data</li>
                  <li>Interfere with platform security or functionality</li>
                  <li>Use the platform for illegal activities</li>
                  <li>Provide medical advice to other users</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">University Ownership</h4>
                <p className="text-gray-700">
                  The University of Sydney owns all intellectual property rights
                  in ReversePath, including:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Software code and algorithms</li>
                  <li>Educational content and materials</li>
                  <li>User interface designs</li>
                  <li>Research methodologies</li>
                  <li>Trademarks and branding</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Your Content</h4>
                <p className="text-gray-700">
                  You retain ownership of your personal health data. By using
                  ReversePath, you grant the University a license to use your
                  de-identified data for research purposes as outlined in the
                  Privacy Policy and research consent forms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Third-Party Content</h4>
                <p className="text-gray-700">
                  Some educational content may be licensed from third parties.
                  Such content remains the property of its respective owners and
                  is used under appropriate licensing agreements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Australian Consumer Law */}
          <Card>
            <CardHeader>
              <CardTitle>Australian Consumer Law Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Consumer Guarantees</h4>
                <p className="text-gray-700">
                  Under the Australian Consumer Law (Schedule 2 of the
                  Competition and Consumer Act 2010), you have guaranteed rights
                  that cannot be excluded, including:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Services provided with due care and skill</li>
                  <li>Services fit for the purpose disclosed</li>
                  <li>Services delivered within a reasonable time</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                <p className="text-gray-700">
                  To the extent permitted by law, the University's liability is
                  limited to the re-supply of services or payment of the cost of
                  re-supply. The University excludes liability for consequential
                  damages, loss of data, or business interruption.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Nothing in these Terms
                </h4>
                <p className="text-blue-700">
                  Nothing in these Terms excludes, restricts, or modifies any
                  consumer guarantee, warranty, or other right that you may have
                  under Australian Consumer Law or other applicable laws which
                  cannot be excluded, restricted, or modified by agreement.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Platform Availability */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Availability and Modifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Availability</h4>
                <p className="text-gray-700">
                  We strive to maintain ReversePath's availability 24/7, but
                  cannot guarantee uninterrupted access. The platform may be
                  unavailable due to:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Scheduled maintenance and updates</li>
                  <li>Technical issues or system failures</li>
                  <li>Internet connectivity problems</li>
                  <li>Force majeure events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Platform Modifications</h4>
                <p className="text-gray-700">
                  We may modify ReversePath's features, functionality, or these
                  Terms at any time. Material changes will be communicated with
                  30 days' advance notice where practical.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Study Completion</h4>
                <p className="text-gray-700">
                  Access to ReversePath will be provided for the duration of the
                  research study. Following study completion, you will have the
                  opportunity to export your personal data before account
                  closure.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Privacy Policy</h4>
                <p className="text-gray-700">
                  Our collection, use, and disclosure of personal information is
                  governed by our Privacy Policy, which complies with the
                  Privacy Act 1988 (Cth) and Australian Privacy Principles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Health Information</h4>
                <p className="text-gray-700">
                  Health information is collected and managed in accordance with
                  the Privacy Act 1988 (Cth), NHMRC guidelines, and relevant
                  state health records legislation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Security</h4>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures
                  to protect your personal information, including encryption,
                  access controls, and regular security assessments.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination of Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Your Right to Terminate</h4>
                <p className="text-gray-700">
                  You may terminate your participation and delete your account
                  at any time by contacting the research team. Data collected
                  prior to termination may be retained for research purposes
                  unless you specifically request its deletion.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  University's Right to Terminate
                </h4>
                <p className="text-gray-700">
                  We may suspend or terminate your access if you:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Violate these Terms of Service</li>
                  <li>Withdraw from the research study</li>
                  <li>Fail to meet eligibility requirements</li>
                  <li>Engage in behavior that compromises platform security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Effect of Termination</h4>
                <p className="text-gray-700">
                  Upon termination, your access to ReversePath will cease
                  immediately. You will have 30 days to request export of your
                  personal data before account deletion.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Internal Resolution</h4>
                <p className="text-gray-700">
                  If you have a concern or complaint, please contact us first at
                  reversepath@sydney.edu.au. We aim to resolve issues promptly
                  and fairly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  External Complaint Mechanisms
                </h4>
                <p className="text-gray-700">
                  If internal resolution is unsuccessful, you may:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    Contact the University of Sydney Student Complaints Unit
                  </li>
                  <li>
                    Lodge a complaint with the Office of the Australian
                    Information Commissioner (OAIC)
                  </li>
                  <li>
                    Seek resolution through NSW Civil and Administrative
                    Tribunal (NCAT)
                  </li>
                  <li>
                    Consult with the Australian Competition and Consumer
                    Commission (ACCC)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Jurisdiction</h4>
                <p className="text-gray-700">
                  Any legal proceedings relating to these Terms must be brought
                  in the courts of New South Wales, Australia, and you consent
                  to the exclusive jurisdiction of those courts.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">General Inquiries</h4>
                  <div className="bg-gray-50 p-3 rounded">
                    <p>
                      <strong>Email:</strong> reversepath@sydney.edu.au
                    </p>
                    <p>
                      <strong>Phone:</strong> +61 2 9351 2222
                    </p>
                    <p>
                      <strong>Hours:</strong> Mon-Fri 9AM-5PM AEST
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Privacy Concerns</h4>
                  <div className="bg-gray-50 p-3 rounded">
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 p-6 bg-white rounded-lg border">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              Related Legal Documents
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
              <Button variant="outline">
                <Link href="/consent">Consent Management</Link>
              </Button>
              <Button>
                <Link href="mailto:reversepath@sydney.edu.au">
                  Contact Legal Team
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              By continuing to use ReversePath, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
