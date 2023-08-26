import { Fragment } from "react";
// eslint-disable-next-line react/prop-types
const QuestionList = ({ randomCountries, onClickOption }) => {
  const labels = ["A", "B", "C", "D"];
  return randomCountries.map((question, index) => {
    return (
      <Fragment key={index}>
        <button className="question-btn" onClick={onClickOption(labels[index])}>
          Option {labels[index]}: {question?.name?.common}
        </button>
      </Fragment>
    );
  });
};

export default QuestionList;
