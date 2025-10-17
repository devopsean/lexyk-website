import React from 'react'
import {STRINGS} from '../constants/strings'
import Googleplaystore from './googleplaystore'
import Applestore from './applestore'


function Store() {
  return (
    <div className='text-center justify-center px-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl over-2000:text-[3.5vw] lg:mx-4 xl:mx-6 my-4 sm:my-5 lg:my-5 xl:my-7 font-bold text-white'>
            {STRINGS.welcomemsg}
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl over-2000:text-[1.75vw]/[2vw] text-white font-medium px-2 sm:px-4'>
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