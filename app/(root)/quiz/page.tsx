'use client';

import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import quizAnimationData from '../../../public/assets/gif/quiz.json';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { RiEnglishInput } from 'react-icons/ri';
import { MdScience } from 'react-icons/md';
import { GiCrossedSwords, GiWorld } from 'react-icons/gi';
import { BiMath } from "react-icons/bi";

const subjects = [
  { name: 'English', gradient: 'from-red-700 via-red-500 to-red-400', icon: RiEnglishInput },
  // { name: 'Math', gradient: 'from-blue-700 via-blue-500 to-blue-400', icon: BiMath  },
  { name: 'Science', gradient: 'from-green-700 via-green-500 to-green-400', icon: MdScience },
  { name: 'History', gradient: 'from-amber-700 via-amber-500 to-amber-400', icon: GiCrossedSwords },
  { name: 'Geography', gradient: 'from-sky-700 via-sky-500 to-sky-400', icon: GiWorld },
];

const QuizPage = () => {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const handleSubmit = (subject: string) => {
    if (selectedClass) {
      router.push(`/quiz/${subject}/${selectedClass}`);
    } else {
      alert('Please select a class.');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center justify-center border-orange-400 border-b-2 text-center p-4 static h-60">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Learn, Test, and Excel!</h1>
          <p className="scroll-m-20 text-xl tracking-tight mt-2 py-6 px-12">
            Discover a variety of quizzes tailored to your interests and needs.
            Whether you're preparing for exams, brushing up on general knowledge, or just having fun,
            we’ve got you covered!
          </p>
        </div>
        <Lottie
          className="absolute -bottom-16 border-orange-400 border-t-2 bg-white rounded-full p-0"
          animationData={quizAnimationData}
          style={{ maxWidth: 200 }}
        />
      </div>

      <div className="col-span-12 grid gap-2 md:gap-8 lg:grid-cols-8 mt-4 px-8 py-16">
        {subjects.map(({ name, gradient, icon: Icon }, index) => (
          <Dialog key={index}>
            <DialogTrigger className="col-span-2">
              <Card
                className={`col-span-2 cursor-pointer bg-gradient-to-tr ${gradient} hover:shadow-lg`}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white" />
                  <Icon className="h-4 w-4 text-muted-foreground text-white" />
                </CardHeader>
                <CardContent>
                  <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-left">
                    {name}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className={`bg-gradient-to-tr ${gradient}`}>
              <DialogHeader>
                <DialogDescription className="w-full py-4">
                  <Select onValueChange={(value) => setSelectedClass(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Your Class" />
                    </SelectTrigger>
                    <SelectContent className="h-32">
                      {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((cls) => (
                        <SelectItem key={cls} value={cls}>
                          {cls}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  className="bg-gradient-to-tr from-red-500 to-red-700 border-red-800 border-2"
                  onClick={() => handleSubmit(name)}
                >
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
