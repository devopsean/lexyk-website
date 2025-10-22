import React from "react";
import { Metadata } from "next";
import Header2 from "../components/header2";
import Link from "next/link";
import Image from "next/image";
import stars from "../../../public/Stars.svg";
import pyramid from "../../../public/Pyramid.png";
import helix from "../../../public/Helix.png";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description: "Learn how to delete your Lexykapp account and personal data. Follow our simple step-by-step instructions for account deletion.",
  openGraph: {
    title: "Data Deletion Instructions - Lexykapp",
    description: "Instructions for deleting your Lexykapp account and personal data.",
    url: "https://www.lexykapp.com/data-deletion",
  },
  alternates: {
    canonical: "https://www.lexykapp.com/data-deletion",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DataDeletion() {
  return (
    <div
      id="page-wrapper"
      className="bg-black origin-top-left transition-transform overflow-hidden min-h-screen relative"
    >
      <Header2 />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
        {/* Stars background */}
        <div className="absolute inset-0 w-full z-0 opacity-30">
          <Image
            className="w-full h-auto"
            src={stars}
            alt="Decorative stars background"
            priority
          />
        </div>
        
        {/* Pyramid - Bottom Left */}
        <div className="absolute bottom-0 left-0 z-0">
          <div className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 over-2000:w-[20vw] opacity-40 lg:opacity-50 translate-x-[-20%] translate-y-[10%]">
            <Image 
              className="w-full h-auto" 
              src={pyramid} 
              alt="Decorative pyramid" 
            />
          </div>
        </div>
        
        {/* Helix - Top Right */}
        <div className="absolute top-20 right-0 z-0">
          <div className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 over-2000:w-[20vw] opacity-40 lg:opacity-50 translate-x-[20%] -translate-y-[10%]">
            <Image 
              className="w-full h-auto" 
              src={helix} 
              alt="Decorative helix" 
            />
          </div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C114D]/30 via-transparent to-[#2C1D73]/30 z-[1]"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6">
        <div className="text-white p-4 sm:p-6 md:p-8 lg:mx-4 xl:mx-6 my-4 sm:my-6 lg:my-8 xl:my-10 max-w-4xl over-2000:max-w-[60vw] w-full">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] over-2000:text-[3vw] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#5E4CC9] via-[#7B6FE8] to-[#A29EE8] bg-clip-text text-transparent">
              Data Deletion Instructions
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[1.5vw] over-2000:text-[1.2vw] leading-relaxed">
              Quick guide to removing your Lexyk account and personal data
            </p>
          </div>

          {/* Main Instructions */}
          <div className="bg-gradient-to-br from-[#1C114D] to-[#2C1D73] rounded-xl p-6 sm:p-8 md:p-10 border border-[#5E4CC9]/30 mb-6 sm:mb-8">
            <p className="text-gray-200 text-base sm:text-lg lg:text-[1.4vw] over-2000:text-[1.1vw] mb-6 sm:mb-8 leading-relaxed">
              If you would like to delete your Lexyk account and associated personal data, you can do so directly from within the app:
            </p>
            
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              {[
                { step: "1", text: "Open the Lexyk app on your device" },
                { step: "2", text: "Go to Settings" },
                { step: "3", text: "Scroll to the bottom and tap Delete Account" },
                { step: "4", text: "Confirm the deletion when prompted" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-4 sm:p-5 bg-[#150D38]/50 rounded-lg border border-[#5E4CC9]/20 hover:border-[#5E4CC9]/40 transition-colors"
                >
                  <div className="bg-[#4947C7] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">{item.step}</span>
                  </div>
                  <p className="text-gray-200 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] leading-relaxed pt-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Warning */}
            <div className="bg-gradient-to-r from-[#4947C7]/20 to-[#7B6FE8]/20 border-2 border-[#4947C7] rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#4947C7] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-200 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] leading-relaxed">
                  <strong className="text-white">Important:</strong> Once confirmed, your account and personal data will be <strong className="text-white">permanently deleted</strong> from our systems. This process cannot be undone.
                </p>
              </div>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="bg-gradient-to-r from-[#1C114D] to-[#2C1D73] rounded-xl p-5 sm:p-6 md:p-8 border border-[#5E4CC9]/30 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-[2vw] over-2000:text-[1.5vw] font-bold mb-3 sm:mb-4">
              Need Assistance?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] mb-4 leading-relaxed">
              If you experience any issues deleting your account or have already uninstalled the app, please contact our support team:
            </p>
            <a
              href="mailto:support@lexyk.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4947C7] to-[#5E4CC9] hover:from-[#5E4CC9] hover:to-[#7B6FE8] text-white font-bold py-3 sm:py-4 px-5 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#4947C7]/40 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
          </div>

          {/* More Information Link */}
          <div className="bg-gradient-to-r from-[#150D38]/50 to-[#2C1D73]/50 rounded-xl p-5 sm:p-6 border border-[#5E4CC9]/20 mb-6 sm:mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7B6FE8] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[1.6vw] over-2000:text-[1.3vw] font-bold mb-2 text-white">
                  Want More Details?
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] mb-3 leading-relaxed">
                  For comprehensive information about what data gets deleted, processing times, and legal compliance, visit our detailed account deletion page.
                </p>
                <Link
                  href="/delete-account"
                  className="inline-flex items-center gap-2 text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] group"
                >
                  View Complete Deletion Guide
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-sm sm:text-base lg:text-[1.2vw] over-2000:text-[1vw]">
              <Link
                href="/privacy"
                className="text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <span className="hidden sm:inline text-gray-500">•</span>
              <Link
                href="/terms"
                className="text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors underline underline-offset-4"
              >
                Terms of Service
              </Link>
              <span className="hidden sm:inline text-gray-500">•</span>
              <Link
                href="/"
                className="text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors underline underline-offset-4"
              >
                Back to Home
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
