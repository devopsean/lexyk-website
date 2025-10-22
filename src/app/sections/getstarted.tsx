import React from "react";
import Image from "next/image";
import { STRINGS } from "../constants/strings";
import Pyramid from "../../../public/Pyramid.png";
import Helix from "../../../public/Helix.png";

function Getstarted() {
  return (
    <div className="relative text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Pyramid - Scaled for mobile, full size on desktop */}
        <div className="absolute bottom-0 left-0 lg:relative lg:bottom-auto lg:left-auto z-0">
          <div className="w-28 sm:w-36 md:w-44 lg:w-auto opacity-60 lg:opacity-100 lg:scale-125 translate-x-2 translate-y-8 sm:translate-x-4 sm:translate-y-12 md:translate-x-6 md:translate-y-16 lg:-translate-y-[80px] over-2000:-translate-y-[4vw] lg:translate-x-[60px] over-2000:translate-x-[5vw]">
            <Image className="w-full h-auto over-2000:w-[30vw] over-2000:h-auto" src={Pyramid} alt="Pyramid shape representing structured vocabulary building foundation" />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl over-2000:text-[3.5vw] lg:mx-4 xl:mx-6 my-4 sm:my-5 lg:my-5 xl:my-7 font-bold mb-4 sm:mb-6 flex items-center justify-center gap-4">
            {STRINGS.section4}
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl over-2000:text-[1.25vw]/[2vw] max-w-2xl over-2000:max-w-[40vw] mx-auto font-medium mb-6 sm:mb-8 px-2">
            {STRINGS.sectionabt4}
          </p>
          <button className="bg-white text-black text-sm sm:text-base rounded-lg sm:rounded-xl over-2000:rounded-[0.5vw] hover:bg-white/90 px-6 py-3 sm:px-8 sm:py-4 over-2000:py-[1vw] over-2000:px-[1.25vw] over-2000:text-[1.25vw] transition-colors">
            Get Started
          </button>
        </div>

        {/* Helix - Scaled for mobile, full size on desktop */}
        <div className="absolute bottom-0 right-0 lg:relative lg:bottom-auto lg:right-auto overflow-hidden z-0">
          <div className="w-28 sm:w-36 md:w-44 lg:w-auto opacity-60 lg:opacity-100 lg:scale-90 translate-x-2 translate-y-8 sm:translate-x-4 sm:translate-y-12 md:translate-x-6 md:translate-y-16 lg:translate-y-[75px] over-1300:translate-y-[100px] over-2000:translate-y-[7vw] lg:-left-full lg:translate-x-[30px] over-2000:translate-x-[3.5vw]">
            <Image className="w-full h-auto over-2000:w-[30vw] over-2000:h-auto" src={Helix} alt="Helix spiral representing upward vocabulary learning progression" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
