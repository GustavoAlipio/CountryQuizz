/* eslint-disable react/prop-types */
import "./AnswersList.css";
import { useState } from "react";
const AnswersList = ({ options, countryChoosed, onNext }) => {
  const [userSelectAnswer, setUserSelectAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  console.log(options);
  const handleNext = () => {
    setSelectedOption({});
    setUserSelectAnswer(false);
    onNext();
  };
  const checkAnswerCorrect = (optionSelected) => () => {
    let isCorrect = countryChoosed.name.official === optionSelected;
    setUserSelectAnswer(true);
    setSelectedOption((curr) => ({ ...curr, [optionSelected]: isCorrect }));
  };

  const getColorButton = (officialName) => {
    return Object.keys(selectedOption)[0] === officialName
      ? selectedOption[officialName]
        ? "is-correct"
        : "is-incorrect"
      : userSelectAnswer
      ? officialName === countryChoosed.name.official
        ? "is-correct"
        : "no-selected"
      : "no-selected";
  };

  return (
    <>
      {options.map(({ name }) => {
        return (
          <button
            key={name.common}
            className={getColorButton(name.official)}
            onClick={checkAnswerCorrect(name.official)}
            disabled={userSelectAnswer}
            style={{ cursor: userSelectAnswer ? "not-allowed" : "pointer" }}
          >
            {name.common}
          </button>
        );
      })}

      <div className="action-btn">
        <button className="action-next" onClick={handleNext}>
          Next
        </button>

        <div>{JSON.stringify(selectedOption)}</div>
      </div>
    </>
  );
};

export default AnswersList;
