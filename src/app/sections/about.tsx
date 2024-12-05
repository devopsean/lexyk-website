import React from "react";
import Store from "../components/store";
import Image from "next/image";
import rocket from "../../../public/Rocket.svg";
import thorus from "../../../public/Thorus.png";
import stars from "../../../public/Stars.svg";


function About() {
  return (
    <section>
      <div className="relative grid lg:grid-cols-3 gap-12 items-center pb-56 bg-gradient-to-b from-black via-gradcol1 via-gradcol2 via-gradcol3 to-gradcol4 w-full over-2000:h-[50vw]">
        <div className="absolute inset-0 w-full z-1 -translate-y-10">
            <Image
              className="w-full"
                src={stars}
                alt="Stars"
            />
        </div>

        <div className="relative ">
          <div className="translate-x-[100px] -translate-y-[100px] h-40 over-1700:scale-125 over-1700:translate-x-[200px] over-2000:translate-x-[10vw] over-2000:-translate-y-[10vw]">
            <Image className="over-2000:w-[20vw] over-2000:h-auto" src={rocket} alt="Rocket" />
          </div>
        </div>

        <div>
          <Store />
        </div>

        <div className="relative overflow-hidden">
          <div className="xl:translate-x-[150px] translate-y-[30px] xl:translate-y-[60px] translate-x-[100px] 2xl:translate-y-0 over-2000:translate-x-[10vw]">
            <Image className="over-2000:w-[30vw] over-2000:h-auto" src={thorus} alt="Thorus" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
