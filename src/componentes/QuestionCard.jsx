/* eslint-disable react/prop-types */
//import { Fragment } from "react";
import TitleQuestion from "./TitleQuestion";
import AnswersList from "./AnswersList";
import "./QuestionCard.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function QuestionCard({ countries }) {
  const [countriesSelected, setCountriesSelected] = useState([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    let auxArray = [];
    while (auxArray.length < 4) {
      auxArray = [
        countries[Math.floor(Math.random() * countries.length)],
        ...auxArray,
      ];
    }
    setCountriesSelected(auxArray);
  }, [next, countries]);

  let correctIndex = Math.floor(Math.random() * 4);
  let country = countriesSelected[correctIndex]; //country that gets choosen randomly
  function onNext() {
    setNext(next + 1);
    console.log("onnext");
  }

  if (Boolean(country) === false) {
    return <p>loading</p>;
  }

  let label = "Which country does this flag belong to ?";
  if (next % 2 === 0) {
    label = `${country.capital[0]} is the capital of : `;
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
        />
      </>
    </>
  );
}
