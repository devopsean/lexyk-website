import React from 'react'
import {STRINGS} from '../constants/strings'
import Googleplaystore from './googleplaystore'
import Applestore from './applestore'


function Store() {
  return (
    <div className='text-center justify-center'>
        <h1 className='text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl lg:mx-4 xl:mx-6 lg:my-5 xl:my-7 font-bold text-white'>
            {STRINGS.welcomemsg}
        </h1>
        <p className='text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium'>
            {STRINGS.aboutapp}
        </p>
        <div className="flex flex-col my-4 xl sm:flex-row gap-4 justify-center">
            <Applestore/>
            <Googleplaystore/>
        </div>
    </div>
  )
}

export default Store