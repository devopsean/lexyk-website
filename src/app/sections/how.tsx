import React from "react";
import Image from "next/image";
import { STRINGS } from "../constants/strings";
import bgEllipse2 from "../../../public/Bg_Ellipse.svg";
import Screenshots from "../components/screenshots";


function How() {
  return (
    <div className="relative -translate-y-[230px]">
      <div className="absolute inset-0 w-full -z-10">
        <Image
          className="section-divider w-full"
          src={bgEllipse2}
          alt="divider"
        />
      </div>

      <div className="max-w-6xl mx-auto pt-[138px]">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl lg:mx-4 xl:mx-6 lg:my-5 xl:my-7 font-bold">
            {STRINGS.section2}
          </h2>
          <p className="text-gray-300 text-2xl max-w-2xl mx-auto font-medium">
            {STRINGS.sectionabt2}
          </p>
        </div>        
      </div>
      <Screenshots/>
    </div>
  );
}

export default How;
