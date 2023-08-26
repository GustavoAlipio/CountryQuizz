import { useState, useEffect } from "react";

import "./App.css";
import TitleQuestion from "./componentes/TitleQuestion";
import QuestionList from "./componentes/QuestionList";
import Actions from "./componentes/Actions";
import { useCountries } from "./hooks/useCountries";

function App() {
  const [countriesSelected, setCountriesSelected] = useState([]);
  const countries = useCountries();

  const [next, setNext] = useState(false);

  useEffect(() => {
    // countries have all
    //
    let auxArray = [];

    while (auxArray.length < 4) {
      auxArray = [
        countries[Math.floor(Math.random() * countries.length)],
        ...auxArray,
      ];
    }
    setCountriesSelected(auxArray);
  }, [countries, next]);

  const handleNext = () => {
    setNext(!next);
    console.log("next question");
  };
  const handleVerify = () => {
    //
  };

  const handleClick = (option) => () => {
    console.log({ option });
  };

  const capital = countriesSelected[Math.floor(Math.random() * 4)]?.capital[0];
  return (
    <>
      {countriesSelected.length === 4 ? (
        <section>
          <h2>Country Quiz</h2>
          <TitleQuestion capital={capital} />
          <QuestionList
            randomCountries={countriesSelected}
            onClickOption={handleClick}
          />
          <Actions onNext={handleNext} onVerify={handleVerify} />
        </section>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
