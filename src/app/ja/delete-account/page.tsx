"use client";

import React from "react";
import Header2 from "../../components/header2";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import stars from "../../../../public/Stars.svg";
import pyramid from "../../../../public/Pyramid.png";
import helix from "../../../../public/Helix.png";
import { getTranslations, getLocaleFromPath, getLocalizedPath } from "@/lib/translations";

export default function DeleteAccount() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getTranslations(locale);
  
  const dataItems = [
    { icon: "👤", text: t.pages.deleteAccount.dataItem1 },
    { icon: "📊", text: t.pages.deleteAccount.dataItem2 },
    { icon: "📚", text: t.pages.deleteAccount.dataItem3 },
    { icon: "⚙️", text: t.pages.deleteAccount.dataItem4 },
    { icon: "💳", text: t.pages.deleteAccount.dataItem5 },
    { icon: "📱", text: t.pages.deleteAccount.dataItem6 },
  ];
  
  const method1Steps = [
    t.pages.deleteAccount.method1Step1,
    t.pages.deleteAccount.method1Step2,
    t.pages.deleteAccount.method1Step3,
    t.pages.deleteAccount.method1Step4,
    t.pages.deleteAccount.method1Step5,
  ];
  
  const method2Items = [
    t.pages.deleteAccount.method2Item1,
    t.pages.deleteAccount.method2Item2,
    t.pages.deleteAccount.method2Item3,
  ];
  
  const complianceItems = [
    t.pages.deleteAccount.gdpr,
    t.pages.deleteAccount.googlePlay,
    t.pages.deleteAccount.appStore,
  ];

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
              {t.pages.deleteAccount.title}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[1.5vw] over-2000:text-[1.2vw] leading-relaxed">
              {t.pages.deleteAccount.subtitle}
            </p>
          </div>

          {/* Warning Box */}
          <div className="bg-gradient-to-r from-[#4947C7]/20 to-[#7B6FE8]/20 border-2 border-[#4947C7] rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4947C7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2vw] over-2000:text-[1.8vw] font-bold text-[#4947C7] mb-2 sm:mb-3">
                  {t.pages.deleteAccount.warningTitle}
                </h2>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-[1.3vw] over-2000:text-[1vw] leading-relaxed">
                  {t.pages.deleteAccount.warningText}
                </p>
              </div>
            </div>
          </div>

          {/* Methods Section */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3vw] over-2000:text-[2.2vw] font-bold mb-6 sm:mb-8 text-center">
              {t.pages.deleteAccount.howToDelete}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {/* Method 1 */}
              <div className="bg-gradient-to-br from-[#1C114D] to-[#2C1D73] rounded-xl p-5 sm:p-6 md:p-8 border border-[#5E4CC9]/30 hover:border-[#5E4CC9] transition-all duration-300 hover:shadow-lg hover:shadow-[#4947C7]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#4947C7] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">1</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[2vw] over-2000:text-[1.5vw] font-bold">
                    {t.pages.deleteAccount.method1Title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] mb-4 leading-relaxed">
                  {t.pages.deleteAccount.method1Text}
                </p>
                <ol className="list-decimal list-inside space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw]">
                  {method1Steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                <div className="mt-4 sm:mt-6 px-3 sm:px-4 py-2 sm:py-3 bg-[#4947C7]/20 rounded-lg border border-[#4947C7]/40">
                  <p className="text-xs sm:text-sm lg:text-[1.1vw] over-2000:text-[0.9vw] text-gray-200">
                    ⏱️ <strong className="text-white">{t.pages.deleteAccount.processingTimeImmediate}</strong>
                  </p>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-gradient-to-br from-[#1C114D] to-[#2C1D73] rounded-xl p-5 sm:p-6 md:p-8 border border-[#5E4CC9]/30 hover:border-[#5E4CC9] transition-all duration-300 hover:shadow-lg hover:shadow-[#4947C7]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#4947C7] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">2</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[2vw] over-2000:text-[1.5vw] font-bold">
                    {t.pages.deleteAccount.method2Title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] mb-4 leading-relaxed">
                  {t.pages.deleteAccount.method2Text}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] text-gray-200">
                    <p className="mb-2"><strong className="text-white">{t.pages.deleteAccount.method2Subject}</strong></p>
                    <p className="mb-3"><strong className="text-white">{t.pages.deleteAccount.method2Include}</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      {method2Items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="mailto:support@lexykapp.com?subject=Account%20Deletion%20Request"
                    className="block w-full text-center bg-gradient-to-r from-[#4947C7] to-[#5E4CC9] hover:from-[#5E4CC9] hover:to-[#7B6FE8] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#4947C7]/40 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw]"
                  >
                    {t.pages.deleteAccount.emailUsForDeletion}
                  </a>
                </div>
                <div className="mt-4 sm:mt-6 px-3 sm:px-4 py-2 sm:py-3 bg-[#4947C7]/20 rounded-lg border border-[#4947C7]/40">
                  <p className="text-xs sm:text-sm lg:text-[1.1vw] over-2000:text-[0.9vw] text-gray-200">
                    ⏱️ <strong className="text-white">{t.pages.deleteAccount.processingTime30Days}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Deletion Section */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3vw] over-2000:text-[2.2vw] font-bold mb-6 sm:mb-8 text-center">
              {t.pages.deleteAccount.whatDataGetsDeleted}
            </h2>
            <div className="bg-gradient-to-br from-[#150D38] to-[#2C1D73] rounded-xl p-5 sm:p-6 md:p-8 border border-[#5E4CC9]/30">
              <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] mb-4 sm:mb-6 leading-relaxed">
                {t.pages.deleteAccount.whatDataGetsDeletedText}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {dataItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-[#1C114D]/50 rounded-lg border border-[#5E4CC9]/20"
                  >
                    <span className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</span>
                    <p className="text-gray-200 text-xs sm:text-sm lg:text-[1.2vw] over-2000:text-[0.95vw] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="bg-gradient-to-r from-[#1C114D]/50 to-[#2C1D73]/50 rounded-xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 border border-[#5E4CC9]/20">
            <h2 className="text-xl sm:text-2xl lg:text-[2vw] over-2000:text-[1.5vw] font-bold mb-3 sm:mb-4">
              {t.pages.deleteAccount.yourDataRights}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] leading-relaxed">
              {t.pages.deleteAccount.yourDataRightsText}
            </p>
            <ul className="list-disc list-inside mt-3 sm:mt-4 space-y-2 text-gray-200 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw]">
              {complianceItems.map((item, index) => (
                <li key={index}><strong className="text-white">{item.split(' - ')[0]}</strong> - {item.split(' - ')[1]}</li>
              ))}
            </ul>
          </div>

          {/* Quick Instructions Link */}
          <div className="bg-gradient-to-r from-[#150D38]/50 to-[#2C1D73]/50 rounded-xl p-5 sm:p-6 border border-[#5E4CC9]/20 mb-6 sm:mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7B6FE8] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[1.6vw] over-2000:text-[1.3vw] font-bold mb-2 text-white">
                  {t.pages.deleteAccount.quickInstructions}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] mb-3 leading-relaxed">
                  {t.pages.deleteAccount.quickInstructionsText}
                </p>
                <Link
                  href={getLocalizedPath('/data-deletion', locale)}
                  className="inline-flex items-center gap-2 text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] group"
                >
                  {t.pages.deleteAccount.viewQuickGuide}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact & Privacy Link */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-[#1C114D] to-[#2C1D73] rounded-xl p-5 sm:p-6 border border-[#5E4CC9]/30">
              <h3 className="text-lg sm:text-xl lg:text-[1.8vw] over-2000:text-[1.4vw] font-bold mb-2 sm:mb-3">
                {t.pages.deleteAccount.needHelpTitle}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw] mb-3 sm:mb-4">
                {t.pages.deleteAccount.needHelpText}
              </p>
              <a
                href="mailto:support@lexykapp.com"
                className="inline-flex items-center gap-2 text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors text-sm sm:text-base lg:text-[1.3vw] over-2000:text-[1vw]"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@lexykapp.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-sm sm:text-base lg:text-[1.2vw] over-2000:text-[1vw]">
              <Link
                href={getLocalizedPath('/privacy', locale)}
                className="text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors underline underline-offset-4"
              >
                {t.pages.dataDeletion.privacyPolicy}
              </Link>
              <span className="hidden sm:inline text-gray-500">•</span>
              <Link
                href={getLocalizedPath('/terms', locale)}
                className="text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors underline underline-offset-4"
              >
                {t.pages.dataDeletion.termsOfService}
              </Link>
              <span className="hidden sm:inline text-gray-500">•</span>
              <Link
                href={getLocalizedPath('/', locale)}
                className="text-[#7B6FE8] hover:text-[#A29EE8] font-semibold transition-colors underline underline-offset-4"
              >
                {t.pages.dataDeletion.backToHome}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
