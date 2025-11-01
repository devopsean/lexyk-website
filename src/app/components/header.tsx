"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/Logo.svg";
import wordmark from "../../../public/WordMark.svg";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import { getTranslations } from "@/lib/translations";
import { getLocaleFromPath } from "@/lib/translations";

const Header = () => {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getTranslations(locale);
  
  return (
    <header className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between max-w-screen-2xl over-2000:max-w-[80vw] mx-auto">
      <div className="flex items-center text-2xl font-bold">
        <Link href={locale === 'en' ? '/' : `/${locale}/`} className="hover:text-gray-300 mr-2 sm:mr-3" aria-label="Go to Lexykapp homepage">
          <Image src={logo} alt="Lexykapp logo - vocabulary learning app for French, Spanish, and English" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 over-2000:w-[3.5vw] over-2000:h-auto"/>
        </Link>
        <Image src={wordmark} alt="Lexykapp wordmark" className="w-16 h-auto sm:w-20 md:w-24 over-2000:w-[3.5vw] over-2000:h-auto"/>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <LanguageSwitcher />
        {/* Make the button clickable */}
        <button 
          onClick={() => {
            const storeSection = document.getElementById('store-buttons');
            if (storeSection) {
              storeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-white hover:bg-gray-50 text-black text-xs sm:text-sm md:text-base py-2 px-3 sm:py-2 sm:px-4 md:py-2 md:px-4 over-2000:py-[0.5vw] over-2000:px-[0.75vw] over-2000:text-[1vw] rounded-lg sm:rounded-xl">
          <p className="font-inter">{t.hero.cta}</p>
        </button>
      </div>
    </header>
  );
};

export default Header;