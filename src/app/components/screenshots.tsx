import React from 'react'
import Image from 'next/image';
import mockup1 from "../../../public/Mockup1.svg";
import mockup2 from "../../../public/Mockup2.svg";
import mockup3 from "../../../public/Mockup3.svg";


function Screenshots() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-4 px-4 sm:px-6">
          <div className="w-48 sm:w-56 md:w-auto">
            <Image className='w-full h-auto md:w-auto over-2000:w-[15vw] over-2000:h-auto' src={mockup1} alt="Lexykapp mobile app screenshot showing vocabulary flashcard interface for French, Spanish, and English learning" />
          </div>
          <div className="w-48 sm:w-56 md:w-auto">
            <Image className='w-full h-auto md:w-auto over-2000:w-[15vw] over-2000:h-auto' src={mockup3} alt="Lexykapp app screenshot displaying vocabulary list and learning progress tracking" />
          </div>
          <div className="w-48 sm:w-56 md:w-auto">
            <Image className='w-full h-auto md:w-auto over-2000:w-[15vw] over-2000:h-auto' src={mockup2} alt="Lexykapp mobile interface showing personalized vocabulary goals and achievement tracking" />
          </div>
        </div>
  )
}

export default Screenshots