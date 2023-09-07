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
  const [stopQuiz, setStopQuiz] = useState(null);
  const [visibleNext, setVisibleNext] = useState(false);
  let icon = null;

  const checkAnswerCorrect = (optionSelected) => () => {
    setVisibleNext((prev) => !prev);
    setStopQuiz(null);
    let isCorrect = countryChoosed.name.common === optionSelected;
    setStopQuiz(() => isCorrect);
    setSelectedOption((curr) => ({
      ...curr,
      [optionSelected]: isCorrect ? "is-correct" : "is-incorrect",
    }));
  };

  const handleNext = () => {
    setVisibleNext((prev) => !prev);
    setSelectedOption({});
    if (!stopQuiz) {
      isRuning();
    } else {
      countAnswers();
    }
    onNext();
  };
  const userHasSelectedAnOption = Object.keys(selectedOption).length > 0;

  const getColorButton = (commonName) => {
    const [optionChoosen] = Object.keys(selectedOption);

    if (optionChoosen === commonName) {
      if (selectedOption[commonName] === "is-incorrect") {
        icon = (
          <i className="check-error">
            <img src="./src/icons/error-icon.svg" alt="error-icon" />
          </i>
        );
      }
      if (selectedOption[commonName] === "is-correct") {
        icon = (
          <i className="check-error">
            <img src="./src/icons/check-icon.svg" alt="check-icon" />
          </i>
        );
      }

      return selectedOption[commonName];
    }

    if (userHasSelectedAnOption && commonName === countryChoosed.name.common) {
      icon = (
        <i className="check-error">
          <img src="./src/icons/check-icon.svg" alt="check-icon" />
        </i>
      );

      return "is-correct";
    }
    icon = <i></i>;
    return "no-selected";
  };
  const letters = ["A", "B", "C", "D"];

  return (
    <>
      <div className="answers-container">
        {options.map(({ name }, index) => {
          return (
            <button
              key={name.common}
              className={getColorButton(name.common)}
              onClick={checkAnswerCorrect(name.common)}
              disabled={userHasSelectedAnOption}
              style={{
                cursor: userHasSelectedAnOption ? "not-allowed" : "pointer",
              }}
            >
              <div className="button-inside">
                <span className="letter">{letters[index]}</span>

                <span className="text-button"> {name.common} </span>

                {icon}
              </div>
            </button>
          );
        })}

        {visibleNext && (
          <button className="action-next" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default AnswersList;
