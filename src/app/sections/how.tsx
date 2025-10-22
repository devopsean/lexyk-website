import React from "react";
import Image from "next/image";
import { STRINGS } from "../constants/strings";
import bgEllipse2 from "../../../public/Bg_Ellipse.svg";
import Screenshots from "../components/screenshots";


function How() {
  return (
    <div className="relative -translate-y-20 sm:-translate-y-32 md:-translate-y-40 lg:-translate-y-[230px] over-2000:-translate-y-[13vw]">
      <div className="absolute inset-0 w-full -z-10 ">
        <Image
          className="section-divider w-full h-auto object-cover"
          src={bgEllipse2}
          alt="Gradient ellipse divider section background"
        />
      </div>

      <div className="max-w-6xl over-2000:max-w-[60vw] mx-auto pt-16 sm:pt-24 md:pt-28 lg:pt-[138px] over-2000:pt-[8vw] px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl over-2000:text-[3.5vw] mx-4 lg:mx-4 xl:mx-6 my-4 sm:my-5 lg:my-5 xl:my-7 font-bold">
            {STRINGS.section2}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl over-2000:text-[1.25vw]/[2vw] max-w-2xl over-2000:max-w-[40vw] mx-auto font-medium px-4">
            {STRINGS.sectionabt2}
          </p>
        </div>        
      </div>
      <Screenshots/>
    </div>
  );
}

export default How;
