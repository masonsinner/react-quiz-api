import React, { useEffect, useState } from 'react';
import CreateQuestionForm from './createquiz';

interface Question {
  id: number;
  question: string;
  answer: string;
  author: string;
  created_on: string;
}

const Quizzes: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch('https://cae-bookstore.herokuapp.com/question/all')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.questions);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleEditQuestion = (questionId: number) => {
    console.log(`Edit question with ID: ${questionId}`);
  };

  const handleDeleteQuestion = (questionId: number) => {
    console.log(`Delete question with ID: ${questionId}`);
  };

  const addQuestion = (newQuestion: Question) => {
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  };

  return (
    <div id="Quizzes">
      <h3>You must be logged in to edit or create questions.</h3>
      <CreateQuestionForm onSuccess={addQuestion} />
      {questions.map(question => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <p>Answer: {question.answer}</p>
          <p>Author: {question.author}</p>
          <p>Created On: {question.created_on}</p>
          <button onClick={() => handleEditQuestion(question.id)}>Edit Question</button>
          <button onClick={() => handleDeleteQuestion(question.id)}>Delete Question</button>
        </div>
      ))}
    </div>
  );
}

export default Quizzes;
