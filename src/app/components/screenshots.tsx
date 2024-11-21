import React from 'react'
import Image from 'next/image';
import mockup1 from "../../../public/Mockup1.svg";
import mockup2 from "../../../public/Mockup2.svg";
import mockup3 from "../../../public/Mockup3.svg";


function Screenshots() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black gap-8 md:gap-4">
          <div>
            <Image src={mockup1} alt="screenshot" />
          </div>
          <div>
            <Image src={mockup3} alt="screenshot" />
          </div>
          <div>
            <Image src={mockup2} alt="screenshot" />
          </div>
        </div>
  )
}

export default Screenshots