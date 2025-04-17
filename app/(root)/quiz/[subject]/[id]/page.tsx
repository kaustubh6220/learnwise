'use client';

import React from 'react';
import syllabus from '../../../../../constants/syllabus'; // Import the JSON data
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface Book {
  [unit: string]: string[]; // Assuming each unit has an array of chapter names
}

interface Chapter {
  [chapter: string]: string; // Assuming each chapter is just a string
}

interface Subject {
  Books: {
    [bookName: string]: Array<Book | Chapter>;
  };
}

interface ClassData {
  Subjects: {
    [subjectName: string]: Subject;
  };
}

interface Syllabus {
  [className: string]: ClassData;
}

type SubjectProps = {
  params: {
    id: string; // Class ID
    subject: string; // Subject Name
  };
};

const syllabusData = syllabus as unknown as Syllabus;

const SubjectPage: React.FC<SubjectProps> = ({ params: { id, subject } }) => {
  const classData = syllabusData[id]?.Subjects?.[subject];
  const router = useRouter();

  if (!classData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
        <h1 className="text-2xl font-semibold">No Data Available</h1>
        <p className="text-lg">The syllabus for the selected class or subject is unavailable.</p>
      </div>
    );
  }

  // Access the Books data for the subject
  const books = classData.Books || {};

  return (
    <div className="min-h-screen ">
      <header className="text-black py-6">
        <div className="container mx-auto px-4">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            {subject} Syllabus for {id}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {Object.keys(books).length > 0 ? (
          Object.entries(books).map(([bookName, units], bookIndex) => (
            <div key={bookIndex} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{bookName}</h2>
              {Array.isArray(units) && units.length > 0 ? (
                <div className="space-y-6">
                  {units.map((item, unitIndex) => {
                    const [unitName, chapters] = Object.entries(item)[0];
                    return (
                      <Card
                        key={unitIndex}
                        className="p-4 bg-white shadow rounded-lg border border-gray-200 flex items-center justify-between cursor-pointer"
                      >
                        <div>
                          <CardTitle className="text-lg font-medium text-gray-800">{unitName}</CardTitle>
                          <CardDescription className="text-gray-600 mt-1 text-xl">
                            Chapter: {Array.isArray(chapters) ? chapters.join(', ') : chapters}
                          </CardDescription>
                        </div>
                        <Button
                          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                          onClick={() => {
                            // Assuming each chapter in the unit is a string
                            const chapter = Array.isArray(chapters) ? chapters[0] : chapters;
                            router.push(`/quiz/${subject}/${id}/${chapter}`);
                          }}
                        >
                          Solve Quiz
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500">No units or chapters found in {bookName}.</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No books or chapters found for this subject.</p>
        )}
      </main>
    </div>
  );
};

export default SubjectPage;
