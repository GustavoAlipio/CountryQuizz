/* eslint-disable react/prop-types */
import "./AnswersList.css";
import { useState } from "react";
const AnswersList = ({
  countriesSelectedAnswersList,
  countryChoosed,
  onNext,
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleNext = () => {
    setSelectedOptions({});
    onNext();
  };
  const checkAnswerCorrect = (optionSelected) => () => {
    let isCorrect = countryChoosed?.name?.official === optionSelected;

    setSelectedOptions((curr) => ({ ...curr, [optionSelected]: isCorrect }));
  };

  return (
    <>
      {countriesSelectedAnswersList.map(({ name }) => {
        return (
          <button
            key={name.common}
            className={
              selectedOptions[name?.official] ? "is-correct" : "no-selected"
            }
            onClick={checkAnswerCorrect(name?.official)}
          >
            {name?.common}
          </button>
        );
      })}

      <div className="action-btn">
        <button className="action-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default AnswersList;
