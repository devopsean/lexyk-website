import React from 'react'
import Image from 'next/image'
import { STRINGS } from '../constants/strings'
import feature1 from '../../../public/FeatureItem1.svg'
import feature2 from '../../../public/FeatureItem2.svg'
import feature3 from '../../../public/FeatureItem3.svg'


function Features() {
  return (
    <div className='max-w-[1400px] over-2000:max-w-[68vw] over-2000:h-[30vw] mx-auto mb-36 -mt-32'>
        <div className='text-center mb-20 over-2000:mb-[5vw]'>
            <h1 className='text-4xl  lg:text-6xl xl:text-7xl over-2000:text-[3.5vw] lg:mx-4 xl:mx-6 lg:my-5 xl:my-7  font-bold mb-6 over-2000:mb-[2vw]'>{STRINGS.section3}</h1>
            <p className='text-white text-2xl over-2000:text-[1.25vw]/[2vw] max-w-2xl over-2000:max-w-[40vw] mx-auto font-medium'>{STRINGS.sectionabt3}</p>
        </div>
        <div className='grid md:grid-cols-3 gap-6 mb-32'>
            <div className='rounded-2xl over-2000:rounded-[0.75vw] p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-6'>
                    <Image
                        className='over-2000:w-[3vw] over-2000:h-auto'
                        src={feature1}
                        alt="Robot"
                    />
                </div>
                <h3 className='text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2'>{STRINGS.section3items.item1.title}</h3>
                <p className='text-white over-2000:text-[0.75vw]/[1.25vw] text-sm font-medium'>{STRINGS.section3items.item1.about}</p>
            </div>
            <div className='rounded-2xl p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-6'>
                    <Image
                        className='over-2000:w-[3vw] over-2000:h-auto'
                        src={feature2}
                        alt='Rocket'
                    />
                </div>
                <h3 className='text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2'>{STRINGS.section3items.item2.title}</h3>
                <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw]'>{STRINGS.section3items.item2.about}</p>
            </div>
            <div className='rounded-2xl p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-6'>
                    <Image 
                        className='over-2000:w-[3vw] over-2000:h-auto'
                        src={feature3}
                        alt='Fire'
                    />
                </div>
                <h3 className='text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2'>{STRINGS.section3items.item3.title}</h3>
                <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw]'>{STRINGS.section3items.item3.about}</p>
            </div>
        </div>
    </div>
  )
}

export default Features