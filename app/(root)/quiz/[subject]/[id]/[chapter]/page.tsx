'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type SubjectProps = {
  params: {
    id: string;
    subject: string;
    chapter: string;
  };
};

type QuizQuestion = {
  answer: string;
  options: string[];
  question: string;
  type: string;
};

const QuizQuestionPage: React.FC<SubjectProps> = ({ params: { id, subject, chapter } }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Decode the chapter parameter
        const decodedChapter = decodeURIComponent(chapter);

        // Make the API call using axios
        const response = await axios.post('http://127.0.0.1:5000/generate_quiz', {
          class: id,
          subject: subject,
          chapter: decodedChapter, // Use the decoded chapter here
        });

        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [id, subject, chapter]); // Dependency array stays the same

  if (loading) {
    return <div>Loading quiz questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Quiz Questions for {subject} - {chapter}</h1>
      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        <div>
          {questions.map((question, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3>Question {index + 1}:</h3>
              <p>{question.question}</p>
              <ul>
                {question.options.map((option, idx) => (
                  <li key={idx}>
                    <label>
                      <input type="radio" name={`question-${index}`} value={option} /> {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizQuestionPage;
