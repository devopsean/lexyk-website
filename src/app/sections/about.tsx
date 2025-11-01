import React from "react";
import Store from "../components/store";
import Image from "next/image";
import rocket from "../../../public/Rocket.svg";
import thorus from "../../../public/Thorus.png";
import stars from "../../../public/Stars.svg";


function About() {
  return (
    <section>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center pb-20 sm:pb-32 md:pb-40 lg:pb-56 bg-gradient-to-b from-black via-gradcol1 via-gradcol2 via-gradcol3 to-gradcol4 w-full over-2000:h-[50vw] px-4 sm:px-6 lg:px-0">
        {/* Stars background with horizontal scrolling - continuous loop */}
        <div className="absolute inset-0 w-full z-1 -translate-y-10 overflow-hidden">
          <div className="stars-scroll-container">
            <div className="stars-scroll w-full flex-shrink-0">
              <Image
                className="w-full h-auto"
                src={stars}
                alt="Decorative stars background pattern for Lexykapp vocabulary learning app"
              />
            </div>
            <div className="stars-scroll w-full flex-shrink-0">
              <Image
                className="w-full h-auto"
                src={stars}
                alt="Decorative stars background pattern for Lexykapp vocabulary learning app"
              />
            </div>
          </div>
        </div>

        {/* Spinning shooting stars - slow horizontal movement */}
        <div className="shooting-star shooting-star-1" style={{top: '15%'}}></div>
        <div className="shooting-star shooting-star-2" style={{top: '40%'}}></div>
        <div className="shooting-star shooting-star-3" style={{top: '65%'}}></div>

        {/* Comets with gradient tails */}
        <div className="comet comet-1" style={{top: '10%', left: '0'}}></div>
        <div className="comet comet-2" style={{top: '30%', right: '0'}}></div>
        <div className="comet comet-3" style={{top: '50%', left: '50%'}}></div>

        {/* Rocket - Scaled for mobile, full size on desktop with float animation */}
        <div className="absolute top-0 left-0 lg:relative lg:top-auto lg:left-auto z-0">
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 2xl:w-48 over-1700:w-[15vw] over-2000:w-[18vw] translate-x-4 -translate-y-8 sm:translate-x-8 sm:-translate-y-12 md:translate-x-12 md:-translate-y-16 lg:translate-x-[100px] lg:-translate-y-[100px] over-1700:translate-x-[200px] over-2000:translate-x-[10vw] over-2000:-translate-y-[10vw]">
            <div className="rocket-float">
              <Image className="w-full h-auto" src={rocket} alt="Rocket illustration representing fast vocabulary learning progress" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 pt-10 sm:pt-16 md:pt-20 lg:pt-0">
          <Store />
        </div>

        {/* Thorus - Scaled for mobile, full size on desktop */}
        <div className="absolute top-0 right-0 lg:relative lg:top-auto lg:right-auto overflow-hidden z-0">
          <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64 over-1700:w-[20vw] over-2000:w-[25vw] translate-x-4 translate-y-8 sm:translate-x-8 sm:translate-y-12 md:translate-x-12 md:translate-y-16 xl:translate-x-[150px] lg:translate-y-[30px] xl:translate-y-[60px] lg:translate-x-[100px] 2xl:translate-y-0 over-2000:translate-x-[10vw]">
            <Image className="w-full h-auto" src={thorus} alt="3D torus shape representing continuous language learning cycle" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
