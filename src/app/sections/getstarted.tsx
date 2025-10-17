import React from "react";
import Image from "next/image";
import { STRINGS } from "../constants/strings";
import Pyramid from "../../../public/Pyramid.png";
import Helix from "../../../public/Helix.png";

function Getstarted() {
  return (
    <div className="relative text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Pyramid - Hidden on mobile and tablet, visible on desktop */}
        <div className="relative hidden lg:block">
          <div className="scale-125 -translate-y-[80px] over-2000:-translate-y-[4vw] translate-x-[60px] over-2000:translate-x-[5vw]">
            <Image className="over-2000:w-[30vw] over-2000:h-auto" src={Pyramid} alt="Pyramid" />
          </div>
        </div>

        {/* Main content */}
        <div className="px-4">
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

        {/* Helix - Hidden on mobile and tablet, visible on desktop */}
        <div className="relative overflow-hidden hidden lg:block">
          <div className="scale-90 translate-y-[75px] over-1300:translate-y-[100px] over-2000:translate-y-[7vw] -left-full translate-x-[30px] over-2000:translate-x-[3.5vw]">
            <Image className="over-2000:w-[30vw] over-2000:h-auto" src={Helix} alt="Helix" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
