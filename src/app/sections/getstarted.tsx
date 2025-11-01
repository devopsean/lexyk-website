"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getStrings } from "../constants/strings";
import { getLocaleFromPath } from "@/lib/translations";
import Pyramid from "../../../public/Pyramid.png";
import Helix from "../../../public/Helix.png";

function Getstarted() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const STRINGS = getStrings(locale);
  
  return (
    <div className="relative text-center py-12 sm:py-16 md:py-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center pl-4 sm:pl-6">
        {/* Pyramid - Scaled for mobile, full size on desktop */}
        <div className="absolute bottom-0 left-0 lg:relative lg:bottom-auto lg:left-auto z-0">
          <div className="w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 2xl:w-60 over-1700:w-[18vw] over-2000:w-[22vw] opacity-60 lg:opacity-100 translate-x-2 translate-y-8 sm:translate-x-4 sm:translate-y-12 md:translate-x-6 md:translate-y-16 lg:-translate-y-[80px] over-2000:-translate-y-[4vw] lg:translate-x-[60px] over-2000:translate-x-[5vw]">
            <div className="pyramid-float">
              <Image className="w-full h-auto" src={Pyramid} alt="Pyramid shape representing structured vocabulary building foundation" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl over-2000:text-[3.5vw] lg:mx-4 xl:mx-6 my-4 sm:my-5 lg:my-5 xl:my-7 font-bold mb-4 sm:mb-6 flex items-center justify-center gap-4">
            {STRINGS.section4}
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl over-2000:text-[1.25vw]/[2vw] max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl over-1700:max-w-[55vw] over-2000:max-w-[40vw] mx-auto font-medium mb-6 sm:mb-8 px-2">
            {STRINGS.sectionabt4}
          </p>
          <button 
            onClick={() => {
              const storeSection = document.getElementById('store-buttons');
              if (storeSection) {
                storeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-white text-black text-sm sm:text-base rounded-lg sm:rounded-xl over-2000:rounded-[0.5vw] hover:bg-white/90 px-6 py-3 sm:px-8 sm:py-4 over-2000:py-[1vw] over-2000:px-[1.25vw] over-2000:text-[1.25vw] transition-colors">
            {STRINGS.ctaButton}
          </button>
        </div>
      </div>

      {/* Helix - Positioned at absolute right edge of viewport, completely flush */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none" style={{ right: 0 }}>
        <div className="w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 2xl:w-60 over-1700:w-[18vw] over-2000:w-[22vw] opacity-60 lg:opacity-100 translate-y-8 sm:translate-y-12 md:translate-y-16 lg:translate-y-[75px] over-1300:translate-y-[100px] over-2000:translate-y-[7vw] spiral-3d-container">
          <div className="spiral-3d">
            <Image className="w-full h-auto" src={Helix} alt="Helix spiral representing upward vocabulary learning progression" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
