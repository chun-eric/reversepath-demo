import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
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
            <Link href="/terms" className="hover:text-gray-200">
              Terms & Conditions
            </Link>
            {/* <Link href="/consent" className="hover:text-gray-200">
              Consent Management
            </Link> */}
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
  );
}
