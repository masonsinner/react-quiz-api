import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
  author: string;
  created_on: string;
}

interface CreateQuestionFormProps {
  onSuccess: (newQuestion: Question) => void;
}

const CreateQuestionForm: React.FC<CreateQuestionFormProps> = ({ onSuccess }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newQuestion: Question = {
      id: Date.now(),
      question,
      answer,
      author: '', // Set the logged-in user's ID or username here
      created_on: new Date().toISOString(),
    };

    onSuccess(newQuestion);

    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a New Question</h3>
      <label>
        Question:
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} required />
      </label>
      <br />
      <label>
        Answer:
        <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateQuestionForm;
