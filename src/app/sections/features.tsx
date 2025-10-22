import React from 'react'
import Image from 'next/image'
import { STRINGS } from '../constants/strings'
import feature1 from '../../../public/FeatureItem1.svg'
import feature2 from '../../../public/FeatureItem2.svg'
import feature3 from '../../../public/FeatureItem3.svg'


function Features() {
  return (
    <div className='max-w-[1400px] over-2000:max-w-[68vw] over-2000:h-[30vw] mx-auto mb-16 sm:mb-24 md:mb-32 lg:mb-36 -mt-12 sm:-mt-20 md:-mt-24 lg:-mt-32 px-4 sm:px-6'>
        <div className='text-center mb-12 sm:mb-16 md:mb-20 over-2000:mb-[5vw]'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl over-2000:text-[3.5vw] mx-4 lg:mx-4 xl:mx-6 my-4 sm:my-5 lg:my-5 xl:my-7 font-bold mb-4 sm:mb-6 over-2000:mb-[2vw]'>{STRINGS.section3}</h1>
            <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl over-2000:text-[1.25vw]/[2vw] max-w-2xl over-2000:max-w-[40vw] mx-auto font-medium px-4'>{STRINGS.sectionabt3}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24 md:mb-32'>
            <div className='rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-4 sm:my-6'>
                    <Image
                        className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                        src={feature1}
                        alt="Curated vocabulary lists icon for French, Spanish, and English learning"
                    />
                </div>
                <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2'>{STRINGS.section3items.item1.title}</h3>
                <p className='text-white over-2000:text-[0.75vw]/[1.25vw] text-sm font-medium'>{STRINGS.section3items.item1.about}</p>
            </div>
            <div className='rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-4 sm:my-6'>
                    <Image
                        className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                        src={feature2}
                        alt='Goal setting and tracking icon for vocabulary learning progress'
                    />
                </div>
                <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2'>{STRINGS.section3items.item2.title}</h3>
                <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw]'>{STRINGS.section3items.item2.about}</p>
            </div>
            <div className='rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-4 sm:my-6'>
                    <Image 
                        className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                        src={feature3}
                        alt='Personalized vocabulary lists icon for custom language learning'
                    />
                </div>
                <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2'>{STRINGS.section3items.item3.title}</h3>
                <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw]'>{STRINGS.section3items.item3.about}</p>
            </div>
        </div>
    </div>
  )
}

export default Features