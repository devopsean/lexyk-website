import React from 'react'
import Image from 'next/image'
import { STRINGS } from '../constants/strings'
import feature1 from '../../../public/FeatureItem1.svg'
import feature2 from '../../../public/FeatureItem2.svg'
import feature3 from '../../../public/FeatureItem3.svg'


function Features() {
  return (
    <div className='max-w-[1400px] mx-auto mb-36 -mt-32'>
        <div className='text-center mb-20'>
            <h1 className='text-4xl  lg:text-6xl xl:text-7xl lg:mx-4 xl:mx-6 lg:my-5 xl:my-7  font-bold mb-6'>{STRINGS.section3}</h1>
            <p className='text-white text-2xl max-w-2xl mx-auto font-medium'>{STRINGS.sectionabt3}</p>
        </div>
        <div className='grid md:grid-cols-3 gap-6 mb-32'>
            <div className='rounded-2xl p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-6'>
                    <Image
                        src={feature1}
                        alt="Robot"
                    />
                </div>
                <h3 className='text-2xl font-semibold mb-2'>{STRINGS.section3items.item1.title}</h3>
                <p className='text-white text-xl font-medium'>{STRINGS.section3items.item1.about}</p>
            </div>
            <div className='rounded-2xl p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-6'>
                    <Image
                        src={feature2}
                        alt='Rocket'
                    />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{STRINGS.section3items.item2.title}</h3>
                <p className='text-white text-sm'>{STRINGS.section3items.item2.about}</p>
            </div>
            <div className='rounded-2xl p-8 text-center border border-gray-50'>
                <div className='flex justify-center my-6'>
                    <Image 
                        src={feature3}
                        alt='Fire'
                    />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{STRINGS.section3items.item3.title}</h3>
                <p className='text-white text-sm'>{STRINGS.section3items.item3.about}</p>
            </div>
        </div>
    </div>
  )
}

export default Features