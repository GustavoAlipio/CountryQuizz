import { useState } from "react";

import "./App.css";
import { useCountries } from "./hooks/useCountries";
import QuestionCard from "./componentes/QuestionCard";
function App() {
  const [start, setStart] = useState(true);
  const countries = useCountries();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [run, setRun] = useState(true);
  const handleStart = () => {
    setStart(false);
  };

  const countAnswers = () => {
    setCorrectAnswers((correctAnswers) => correctAnswers + 1);
  };
  const isRuning = () => {
    setRun(false);
  };
  const tryAgain = () => {
    setRun(true);
    setCorrectAnswers(() => 0);
  };

  return (
    <>
      <h1>COUNTRY QUIZ </h1>
      {run && (
        <div className="earth-icon">
          <img src="./public/earth.svg" alt="earth-icon" />
        </div>
      )}
      {start ? (
        <button className="start-quizz" onClick={handleStart}>
          Start quizz
        </button>
      ) : run ? (
        <QuestionCard
          className="Question-Card"
          countries={countries}
          countAnswers={countAnswers}
          isRuning={isRuning}
        />
      ) : (
        <div>
          <img src="./public/cup.svg" alt="cup-image" />
          <p className="results">Results</p>
          <p className="correct-answers">
            You got <span className="big-number"> {correctAnswers} </span>
            correct answers
          </p>
          <button className="try-again" onClick={tryAgain}>
            Try Again
          </button>
        </div>
      )}
    </>
  );
}

export default App;
