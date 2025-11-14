"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/Logo.svg";
import wordmark from "../../../public/WordMark.svg";
import Link from "next/link";
import { getLocaleFromPath, getLocalizedPath } from "@/lib/translations";

export default function Header2() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const homePath = getLocalizedPath('/', locale);
  
  return (
    <div>
      <header className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between max-w-7xl over-2000:max-w-[70vw] mx-auto">
        <div className="flex items-center text-2xl font-bold">
          <Link href={homePath} className="hover:text-gray-300 transition-colors mr-2 sm:mr-3 flex items-center gap-2" aria-label="Return to Lexykapp homepage">
            <Image
              src={logo}
              alt="Lexykapp logo - vocabulary learning app for French, Spanish, and English"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[5vw] lg:h-auto over-2000:w-[3.5vw] over-2000:h-auto"
            />
            <Image
              src={wordmark}
              alt="Lexykapp wordmark"
              className="w-16 h-auto sm:w-20 md:w-24 lg:w-[5vw] lg:h-auto over-2000:w-[3.5vw] over-2000:h-auto"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}
