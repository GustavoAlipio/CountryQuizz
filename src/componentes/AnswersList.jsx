/* eslint-disable react/prop-types */
import "./AnswersList.css";
import { useState } from "react";
const AnswersList = ({
  countriesSelectedAnswersList,
  countryChoosed,
  onNext,
  correctIndex,
  countAnswers,
  isRuning,
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [visibleNext, setVisibleNext] = useState(false);
  const [buttonStates, setButtonStates] = useState(Array(4).fill(false));

  const checkAnswerCorrect = (optionSelected, index) => () => {
    if (index != correctIndex) {
      setTimeout(() => {
        isRuning();
      }, 0);
    }

    let isCorrect = countryChoosed.name.official === optionSelected;
    setSelectedOptions((curr) => ({
      ...curr,
      [optionSelected]: isCorrect,
    }));

    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(() => newButtonStates);

    ////
    setVisibleNext((prev) => !prev);
    ////
    ////Painting the button
  };

  const handleNext = () => {
    setButtonStates(() => Array(4).fill(false));

    setSelectedOptions({});
    onNext();
    setVisibleNext((prev) => !prev);
    countAnswers();
  };

  return (
    <>
      {countriesSelectedAnswersList.map(({ name }, index) => {
        return (
          <button
            key={index}
            className={
              buttonStates[index]
                ? index === correctIndex
                  ? "is-correct"
                  : "is-incorrect"
                : "no-selected"
            }
            onClick={checkAnswerCorrect(name.official, index)}
          >
            {name.common}
          </button>
        );
      })}

      <div className="action-btn">
        {
          <button
            className="action-next"
            onClick={handleNext}
            disabled={!visibleNext}
          >
            Next
          </button>
        }

        <div>{JSON.stringify(selectedOptions)}</div>
      </div>
    </>
  );
};

export default AnswersList;
