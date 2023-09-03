import { useState } from "react";

import "./App.css";
import { useCountries } from "./hooks/useCountries";
import QuestionCard from "./componentes/QuestionCard";
function App() {
  // const [countriesSelected, setCountriesSelected] = useState([]);
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
    setRun(() => false);
  };
  const tryAgain = () => {
    setRun(() => true);
    setCorrectAnswers(() => 0);
  };

  return (
    <>
      <section>
        <h1>Country Quiz</h1>

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
            <h2>You got {correctAnswers} correct answers</h2>
            <button className="try-again" onClick={tryAgain}>
              Try Again
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
