import React from "react";
import Image from "next/image";
import { STRINGS } from "../constants/strings";
import bgEllipse2 from "../../../public/Bg_Ellipse.svg";
import Screenshots from "../components/screenshots";


function How() {
  return (
    <div className="relative -translate-y-[230px] over-2000:-translate-y-[13vw]">
      <div className="absolute inset-0 w-full -z-10 ">
        <Image
          className="section-divider w-full h-auto object-cover"
          src={bgEllipse2}
          alt="divider"
        />
      </div>

      <div className="max-w-6xl over-2000:max-w-[60vw] mx-auto pt-[138px] over-2000:pt-[8vw]">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl over-2000:text-[3.5vw] lg:mx-4 xl:mx-6 lg:my-5 xl:my-7 font-bold">
            {STRINGS.section2}
          </h2>
          <p className="text-gray-300 text-2xl over-2000:text-[1.25vw]/[2vw] max-w-2xl over-2000:max-w-[40vw] mx-auto font-medium">
            {STRINGS.sectionabt2}
          </p>
        </div>        
      </div>
      <Screenshots/>
    </div>
  );
}

export default How;
