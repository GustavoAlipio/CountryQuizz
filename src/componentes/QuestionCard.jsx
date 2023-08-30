/* eslint-disable react/prop-types */
//import { Fragment } from "react";
import TitleQuestion from "./TitleQuestion";
import AnswersList from "./AnswersList";
import "./QuestionCard.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function QuestionCard({ countriesInQuestionCard }) {
  const [countriesSelected, setCountriesSelected] = useState([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    let auxArray = [];
    while (auxArray.length < 4) {
      auxArray = [
        countriesInQuestionCard[
          Math.floor(Math.random() * countriesInQuestionCard.length)
        ],
        ...auxArray,
      ];
    }
    setCountriesSelected(auxArray);
  }, [next, countriesInQuestionCard]);

  let country = countriesSelected[Math.floor(Math.random() * 4)]; //country that gets choosen randomly

  function onNext() {
    setNext(next + 1);
    console.log("onnext");
  }

  return (
    <>
      <TitleQuestion capitalTitleQuestion={country} />

      <AnswersList
        countriesSelectedAnswersList={countriesSelected}
        countryChoosed={country}
        onNext={onNext}
      />
    </>
  );
}
