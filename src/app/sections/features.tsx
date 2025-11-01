"use client";

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getStrings } from '../constants/strings'
import { getLocaleFromPath } from '@/lib/translations'
import feature1 from '../../../public/FeatureItem1.svg'
import feature2 from '../../../public/FeatureItem2.svg'
import feature3 from '../../../public/FeatureItem3.svg'


function Features() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const STRINGS = getStrings(locale);
  
  // Feature icons - using same icons for now, can be customized later
  const featureIcons = [feature1, feature2, feature3, feature2, feature1];
  const featureAlts = [
    "Smart vocabulary flashcards icon for 7 languages learning",
    "AI camera translation icon for instant photo translation", 
    "Real-time voice chat icon for conversation practice",
    "Goal tracking and insights icon for language learning progress",
    "Flexible learning schedule icon for on-the-go study"
  ];
  
  return (
    <div className='max-w-[1400px] over-2000:max-w-[75vw] mx-auto mb-16 sm:mb-24 md:mb-32 lg:mb-36 -mt-12 sm:-mt-20 md:-mt-24 lg:-mt-32 px-4 sm:px-6'>
        <div className='text-center mb-12 sm:mb-16 md:mb-20 over-2000:mb-[5vw]'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl over-2000:text-[3.5vw] mx-4 lg:mx-4 xl:mx-6 my-4 sm:my-5 lg:my-5 xl:my-7 font-bold mb-4 sm:mb-6 over-2000:mb-[2vw]'>{STRINGS.section3}</h1>
            <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl over-2000:text-[1.25vw]/[2vw] max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl over-1700:max-w-[60vw] over-2000:max-w-[50vw] mx-auto font-medium px-4'>{STRINGS.sectionabt3}</p>
        </div>
        
        {/* 5 Features Grid: 2 columns on tablet, 3 columns on desktop, with centered bottom row */}
        <div className='mb-16 sm:mb-24 md:mb-32'>
            {/* First row: 3 items */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6'>
                {/* Tile 1: Glassmorphism */}
                <div className='feature-glass rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center relative z-10'>
                    <div className='flex justify-center my-4 sm:my-6 relative z-10'>
                        <Image
                            className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                            src={featureIcons[0]}
                            alt={featureAlts[0]}
                        />
                    </div>
                    <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2 relative z-10'>{STRINGS.section3items.item1.title}</h3>
                    <p className='text-white over-2000:text-[0.75vw]/[1.25vw] text-sm font-medium relative z-10'>{STRINGS.section3items.item1.about}</p>
                </div>
                
                {/* Tile 2: Moving reflective light border */}
                <div className='feature-reflective-border rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center relative z-10'>
                    <div className='flex justify-center my-4 sm:my-6 relative z-10'>
                        <Image
                            className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                            src={featureIcons[1]}
                            alt={featureAlts[1]}
                        />
                    </div>
                    <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2 relative z-10'>{STRINGS.section3items.item2.title}</h3>
                    <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw] font-medium relative z-10'>{STRINGS.section3items.item2.about}</p>
                </div>
                
                {/* Tile 3: Neon border with glow */}
                <div className='feature-neon-border rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center relative z-10'>
                    <div className='flex justify-center my-4 sm:my-6 relative z-10'>
                        <Image 
                            className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                            src={featureIcons[2]}
                            alt={featureAlts[2]}
                        />
                    </div>
                    <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2 relative z-10'>{STRINGS.section3items.item3.title}</h3>
                    <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw] font-medium relative z-10'>{STRINGS.section3items.item3.about}</p>
                </div>
            </div>
            
            {/* Second row: 2 items centered */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto'>
                {/* Tile 4: Animated gradient border */}
                <div className='feature-gradient-border rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center relative z-10'>
                    <div className='flex justify-center my-4 sm:my-6 relative z-10'>
                        <Image
                            className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                            src={featureIcons[3]}
                            alt={featureAlts[3]}
                        />
                    </div>
                    <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2 relative z-10'>{STRINGS.section3items.item4.title}</h3>
                    <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw] font-medium relative z-10'>{STRINGS.section3items.item4.about}</p>
                </div>
                
                {/* Tile 5: Pulsing border */}
                <div className='feature-pulse-border rounded-xl sm:rounded-2xl over-2000:rounded-[0.75vw] p-6 sm:p-8 text-center relative z-10'>
                    <div className='flex justify-center my-4 sm:my-6 relative z-10'>
                        <Image
                            className='w-12 h-12 sm:w-14 sm:h-14 over-2000:w-[3vw] over-2000:h-auto'
                            src={featureIcons[4]}
                            alt={featureAlts[4]}
                        />
                    </div>
                    <h3 className='text-base sm:text-lg over-2000:text-[1vw]/[1.5vw] font-semibold mb-2 relative z-10'>{STRINGS.section3items.item5.title}</h3>
                    <p className='text-white text-sm over-2000:text-[0.75vw]/[1.25vw] font-medium relative z-10'>{STRINGS.section3items.item5.about}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features