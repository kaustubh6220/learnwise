"use client"

import Image from "next/image";
import Lottie from 'lottie-react'
import animationData from '../../public/assets/gif/welcome.json'
import studentAnimationData from '../../public/assets/gif/studentTeacher.json'
import lastAnimation from '../../public/assets/gif/personalised.json'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center mt-4 mb-4 gap-4 w-full">
      <div className="flex flex-row justify-center items-center lg:w-11/12  rounded-xl max-lg:flex-col">
        <Lottie className="lg:hidden" animationData={animationData}  />
        <div className=" text-center w-9/12  flex flex-col gap-4 items-center">
          <p className=" max-lg:text-xl text-3xl text-slate-600">Welcome to LearnWise, where learning meets innovation! </p>
          <p className=" max-lg:text-sm text-2xl text-slate-500">We understand the challenges of grasping complex concepts. Our platform offers a revolutionary solution for students struggling with specific topics. Whether it's math, science, history, or any subject, our intuitive system is designed to assist you effectively.</p>
          <Link href='/ask'>
            <Button className=" bg-orange-400 hover:bg-orange-500 w-fit rounded-lg">Explore Now !</Button>
          </Link>
        </div>
        <Lottie className=" max-lg:hidden" animationData={animationData}  />
      </div>


      <div className="flex flex-row justify-center items-center lg:w-5/6  rounded-xl max-lg:flex-col">
        <Lottie animationData={studentAnimationData}  />
        <div className=" text-center w-9/12 flex flex-col gap-4 items-center">
          <p className=" max-lg:text-xl text-3xl text-slate-600">At LearnWise, we harness the power of artificial intelligence to enhance your learning experience. </p>
          <p className=" max-lg:text-sm text-2xl text-slate-500">With a simple upload of text or image, our AI-driven system takes over. Sit back, relax, and witness the magic as our virtual teacher simplifies the concept into easily understandable bits. Say goodbye to confusion and hello to effortless learning with LearnWise.</p>

        </div>
      </div>


      <div className="flex flex-row justify-center items-center  lg:w-5/6  rounded-xl max-lg:flex-col">
        <Lottie className="lg:hidden" animationData={lastAnimation} style={{maxWidth:400}} />
        <div className=" text-center w-9/12 flex flex-col gap-4 items-center">
          <p className=" max-lg:text-sm text-2xl text-slate-500">At LearnWise, we're dedicated to simplifying learning. Understanding diverse learning styles, our platform provides personalized experiences. Whether you prefer auditory or visual learning, our virtual teacher adjusts accordingly. Through interactive voice explanations, we empower you to conquer even the most challenging topics. Bid farewell to generic education and embrace tailored learning at LearnWise.</p>
        </div>
        <Lottie className="max-lg:hidden" animationData={lastAnimation} style={{maxWidth:400}} />
      </div>
    </div>
  );
}
