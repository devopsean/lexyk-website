import React from "react";
import Image from "next/image";
import { STRINGS } from "../constants/strings";
import Pyramid from "../../../public/Pyramid.png";
import Helix from "../../../public/Helix.png";

function Getstarted() {
  return (
    <div className="relative text-center py-20 ">
      <div className="grid lg:grid-cols-3 gap-12 items-center ">
        <div className="relative ">
          <div className="scale-125 -translate-y-[80px] over-2000:-translate-y-[4vw] translate-x-[60px] over-2000:translate-x-[5vw]">
            <Image className="over-2000:w-[30vw] over-2000:h-auto" src={Pyramid} alt="Pyramid" />
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl over-2000:text-[3.5vw] lg:mx-4 xl:mx-6 lg:my-5 xl:my-7 md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
            {STRINGS.section4}
          </h2>
          <p className="text-white text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl over-2000:text-[1.25vw]/[2vw] max-w-2xl over-2000:max-w-[40vw] mx-auto mb-8">
            {STRINGS.sectionabt4}
          </p>
          <button className="bg-white text-black rounded-xl over-2000:rounded-[0.5vw] hover:bg-white/90 px-8 py-4 over-2000:py-[1vw] over-2000:px-[1.25vw] over-2000:text-[1.25vw]">
            Get Started
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="scale-90 translate-y-[75px] over-1300:translate-y-[100px] over-2000:translate-y-[7vw] -left-full translate-x-[30px] over-2000:translate-x-[3.5vw]">
            <Image className="over-2000:w-[30vw] over-2000:h-auto" src={Helix} alt="Helix" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
