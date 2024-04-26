"use client";
import { useChat } from "ai/react";
import {
  Bot,
  Loader,
  Loader2,
  MoreHorizontal,
  Plus,
  Send,
  User2,
  X,
} from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

import PromptScreen from "@/components/shared/PromptScreen";
import MainScreen from "@/components/shared/MainScreen";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/genai",
    });

  return (
    <div className="flex h-full w-screen gap-2 flex-col items-center text-lg justify-center">
      <MainScreen messages={messages} isLoading={isLoading} />
      <PromptScreen
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
      />
    </div>
  );
}
