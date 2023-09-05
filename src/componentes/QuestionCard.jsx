/* eslint-disable react/prop-types */
//import { Fragment } from "react";
import TitleQuestion from "./TitleQuestion";
import AnswersList from "./AnswersList";
import "./QuestionCard.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function QuestionCard({ countries, isRuning, countAnswers }) {
  const [countriesSelected, setCountriesSelected] = useState([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    function selectRandomCountries(array, cantidad) {
      if (array.length < cantidad) {
        return "No hay suficientes elementos en el array";
      }

      const countriesChoosed = [];

      while (countriesChoosed.length < cantidad) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const itemSelected = array.splice(randomIndex, 1)[0];
        countriesChoosed.push(itemSelected);
      }

      return countriesChoosed;
    }

    setCountriesSelected(selectRandomCountries(countries, 4));
  }, [next, countries]);

  let country = countriesSelected[Math.floor(Math.random() * 4)]; //country that gets choosen randomly
  function onNext() {
    setNext(next + 1);
    console.log("onnext");
  }

  if (Boolean(country) === false) {
    return <p>loading</p>;
  }

  let label = "Which country does this flag belong to ?";
  if (next % 2 === 0) {
    label = `${country?.capital[0]} is the capital of : `;
  }
  if (Boolean(countriesSelected) === false) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {/*Capital questions*/}
      <>
        <TitleQuestion
          label={label}
          flagImg={country.flags.png}
          showFlag={next % 2 !== 0}
        />
        <AnswersList
          options={countriesSelected}
          countryChoosed={country}
          onNext={onNext}
          countAnswers={countAnswers}
          isRuning={isRuning}
        />
      </>
    </>
  );
}
