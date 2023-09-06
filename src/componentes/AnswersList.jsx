/* eslint-disable react/prop-types */
import "./AnswersList.css";
import { useState } from "react";
const AnswersList = ({
  options,
  countryChoosed,
  onNext,
  countAnswers,
  isRuning,
}) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [aux, setAux] = useState(null);
  const checkAnswerCorrect = (optionSelected) => () => {
    setAux(null);
    let isCorrect = countryChoosed.name.official === optionSelected;
    setAux(() => isCorrect);
    setSelectedOption((curr) => ({
      ...curr,
      [optionSelected]: isCorrect ? "is-correct" : "is-incorrect",
    }));
  };

  const handleNext = () => {
    setSelectedOption({});
    if (!aux) {
      isRuning();
    } else {
      countAnswers();
    }
    onNext();
  };
  const userHasSelectedAnOption = Object.keys(selectedOption).length > 0;

  const getColorButton = (officialName) => {
    const [optionChoosen] = Object.keys(selectedOption);

    if (optionChoosen === officialName) {
      return selectedOption[officialName];
    }

    // Check if the user has selected an option and the official name matches
    if (
      userHasSelectedAnOption &&
      officialName === countryChoosed.name.official
    ) {
      return "is-correct";
    }
    // If none of the above conditions are met, return "no-selected"
    return "no-selected";
  };

  return (
    <>
      <div className="answers-container">
        {options.map(({ name }) => {
          return (
            <button
              key={name.common}
              className={getColorButton(name.official)}
              onClick={checkAnswerCorrect(name.official)}
              disabled={userHasSelectedAnOption}
              style={{
                cursor: userHasSelectedAnOption ? "not-allowed" : "pointer",
              }}
            >
              {name.common}
            </button>
          );
        })}

        <button className="action-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default AnswersList;
