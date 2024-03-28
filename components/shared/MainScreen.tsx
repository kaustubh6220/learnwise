"use client"

import React from 'react'
// import Lottie from 'lottie-react'
// import animationData from '../../public/assets/gif/earth.json'
import Image from 'next/image'

const MainScreen = () => {
  return (
    <div className=' border-2 border-slate-400 shadow-md rounded-lg h-5/6 w-5/6 flex flex-row justify-between items-center'>
        <p>Weather is this hour-to-hour, day to day condition of the atmosphere. A hot or humid weather may make one irritable. A pleasant, breezy weather can make one cheerful and even plan for an outing. Weather can change dramatically from day today. The average weather condition of a place for a longer period of time represents the climate of that place.</p>
        <Image src='/assets/gif/earth1.gif' height={120} width={120} alt='logo'/>

      {/* <Lottie animationData={animationData} style={{height:140,width:100}}/> */}
    </div>
  )
}

export default MainScreen
