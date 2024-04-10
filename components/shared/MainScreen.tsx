"use client"

import React from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import animationData from '../../public/assets/gif/welcomeTeacher.json'


const MainScreen = () => {
  return (
    <div className=' border-t-2 shadow-lg rounded-lg h-5/6 w-5/6 flex flex-row items-center justify-center text-center max-lg:p-4'>
      <div className=' flex flex-col items-center justify-center'>
        <p className=' text-3xl text-slate-500'>Welcome To LearnWise!</p>
        <p className=' text-2xl mt-2 text-slate-600'>How can we help you...?</p>
      </div>

      <Lottie animationData={animationData} style={{height:'330px', width:'300px'}} />
    </div>
  )
}

export default MainScreen
