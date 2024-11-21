import React from "react";
import Image from "next/image";
import { STRINGS } from "../constants/strings";
import Pyramid from "../../../public/Pyramid.png";
import Helix from "../../../public/Helix.png";


function Getstarted() {
  return (
    <div className="relative text-center py-20 bg-gradient-to-b from-customblue to-black w-full">
      <div className="grid lg:grid-cols-3 gap-12 items-center ">
        
        <div className="relative ">
          <div className="scale-125 -translate-y-[80px] translate-x-[60px]">
            <Image src={Pyramid} alt="Pyramid" />
          </div>
        </div>

        <div className="">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl lg:mx-4 xl:mx-6 lg:my-5 xl:my-7 md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
            {STRINGS.section4}
          </h2>
          <p className="text-white text-2xl max-w-2xl mx-auto mb-8">
            {STRINGS.sectionabt4}
          </p>
          <button className="bg-white text-black rounded-xl hover:bg-white/90 px-8 py-4">
            Get Started
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="scale-90 translate-y-[100px] translate-x-[30px]">
            <Image src={Helix} alt="Helix" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
