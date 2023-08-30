import { useState } from "react";

import "./App.css";
import { useCountries } from "./hooks/useCountries";
import QuestionCard from "./componentes/QuestionCard";
function App() {
  // const [countriesSelected, setCountriesSelected] = useState([]);
  const [start, setStart] = useState(true);
  const countries = useCountries();

  const handleStart = () => {
    setStart(false);
  };
  return (
    <>
      <section>
        <h1>Country Quiz</h1>

        {start ? (
          <button className="start-quizz" onClick={handleStart}>
            Start quizz
          </button>
        ) : (
          <QuestionCard
            className="Question-Card"
            countriesInQuestionCard={countries}
          />
        )}
      </section>
    </>
  );
}

export default App;
