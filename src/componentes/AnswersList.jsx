/* eslint-disable react/prop-types */
import "./AnswersList.css";
import { useState } from "react";
const AnswersList = ({ options, countryChoosed, onNext }) => {
  const [selectedOption, setSelectedOption] = useState({});
  console.log(options);
  const handleNext = () => {
    setSelectedOption({});

    onNext();
  };
  const checkAnswerCorrect = (optionSelected) => () => {
    let isCorrect = countryChoosed.name.official === optionSelected;

    setSelectedOption((curr) => ({
      ...curr,
      [optionSelected]: isCorrect ? "is-correct" : "is-incorrect",
    }));
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
