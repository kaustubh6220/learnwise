"use client"

import React, { useEffect, useState } from "react";
import Markdown from "./Markdown";
import { Bot, Play, User2 } from "lucide-react";
import { Message } from "ai/react";
import Lottie from "lottie-react";
import { FaPlay, FaPause, FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

import animationData from '../../public/assets/gif/teaching.json';
import welcomeTeacher from '../../public/assets/gif/welcomeTeacher.json';
import { useSpring, animated } from '@react-spring/web'
import { ScrollArea } from "../ui/scroll-area";



type Props = {
  messages: Message[],
  isLoading: boolean
};

const MainScreen = ({ messages, isLoading }: Props) => {

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [allMessagesLoaded, setAllMessagesLoaded] = useState(false);
  const [volume, setVolume] = useState(50); // Initial volume level
  const [lastMessageIndex, setLastMessageIndex] = useState(0);

useEffect(() => {
  if (isSpeaking && allMessagesLoaded) {
    speakMessage(messages[messageIndex].content, messages[messageIndex].role);
  }
}, [isSpeaking, allMessagesLoaded, messageIndex, messages, volume]);


  useEffect(() => {
    if (messages.length > 0) {
      setAllMessagesLoaded(true);
    }
  }, [messages]);

  const speakMessage = (message: string, role: string) => {
    if (role !== "user") {
      const speechSynthesisUtterance = new SpeechSynthesisUtterance(messages[messages.length - 1].content);
      speechSynthesisUtterance.volume = volume / 100; // Set the volume
      speechSynthesisUtterance.onend = () => {
        if (messageIndex + 1 < messages.length) {
          setMessageIndex(messageIndex + 1);
        } else {
          setIsSpeaking(false);
        }
      };
      speechSynthesis.speak(speechSynthesisUtterance);
    } else {
      if (messageIndex + 1 < messages.length) {
        setMessageIndex(messageIndex + 1);
      } else {
        setIsSpeaking(false);
      }
    }
  };

  const handleStartSpeaking = () => {
    if (allMessagesLoaded) {
      setIsSpeaking(true);
      // Resume from the last message index
      setMessageIndex(lastMessageIndex);
    }
  };

  const handleStopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    // Save the last message index
    setLastMessageIndex(messageIndex);
  };

  const handleVolumeUp = () => {
    if (volume < 100) {
      setVolume(volume + 10); // Increase volume by 10%
    }
  };

  const handleVolumeDown = () => {
    if (volume > 0) {
      setVolume(volume - 10); // Decrease volume by 10%
    }
  };

  return (
    <>
      <div className=' border-t-2 border-slate-200 shadow-lg rounded-lg h-5/6 w-5/6 flex justify-between items-center'>
        <div id="chatbox" className=" w-full h-full flex flex-col justify-between">
          <div>
            {messages.length === 0 && (
                <>
                  <div 
                      className='flex flex-row items-center justify-center text-center '>
                    <div className=' text-center flex flex-col items-center justify-center'>
                      <p className=' text-3xl text-slate-500'>Welcome To LearnWise!</p>
                      <p className=' text-2xl mt-2 text-slate-600'>How can we help you...?</p>
                    </div>
                    <Lottie animationData={welcomeTeacher} style={{ height:'320px', width:'320px' }} />
                  </div>  
                </>
              )}
            {messages.length > 0 && (
              <div
                className={` flex flex-row items-center justify-center ml-6 mr-6 h-60 mt-4 ${
                  messages[messages.length - 1].role === "user" ? "hidden" : ""
                }`}
              >
                <div
                  className=" w-1/5 h-60 items-center justify-center"
                >
                  <Lottie className=" max-lg:hidden" animationData={animationData} />
                </div>
                <ScrollArea className="w-4/5 text-center h-60 ">
                  <p>{messages[messages.length - 1].content}</p>
                </ScrollArea>

              </div>
            )}
          </div>
          {messages.length !== 0 && (
            <div className=" border-t-2 ml-2 mr-2 flex gap-4 items-center">
              <div className=" p-2">
                {!isSpeaking && (
                  <FaPlay className=" cursor-pointer" onClick={handleStartSpeaking}>Start Explanation</FaPlay>
                )}
                {isSpeaking && (
                  <FaPause className=" cursor-pointer" onClick={handleStopSpeaking}>Stop Speaking</FaPause>
                )}
              </div>
                <FaVolumeDown className="cursor-pointer " onClick={handleVolumeDown} />
                <FaVolumeUp className="cursor-pointer " onClick={handleVolumeUp} />
                <VscDebugRestart className="cursor-pointer" onClick={handleStartSpeaking} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainScreen;
