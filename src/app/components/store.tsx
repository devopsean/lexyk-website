"use client";

import React from 'react'
import { usePathname } from 'next/navigation'
import { getStrings } from '../constants/strings'
import { getLocaleFromPath } from '@/lib/translations'
import Googleplaystore from './googleplaystore'
import Applestore from './applestore'


function Store() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const STRINGS = getStrings(locale);
  
  return (
    <div id="store-buttons" className='text-center justify-center px-4 max-w-7xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl over-2000:text-[2.5vw] my-4 sm:my-5 lg:my-5 xl:my-7 font-bold text-white leading-tight px-2 sm:px-4 lg:px-6 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto'>
            <div className='block'>{STRINGS.welcomeLine1}</div>
            <div className='block'>{STRINGS.welcomeLine2}</div>
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl over-2000:text-[1.5vw]/[2vw] text-white font-medium px-2 sm:px-4 lg:px-8 xl:px-16 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl over-1700:max-w-[60vw] over-2000:max-w-[55vw] mx-auto'>
            {STRINGS.aboutapp}
        </p>
        <div className="flex flex-col my-6 sm:my-8 over-2000:my-[3vw] sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Applestore/>
            <Googleplaystore/>
        </div>
    </div>
  )
}

export default Store