/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "./TitleQuestion.css";
const TitleQuestion = ({ label, flagImg, showFlag }) => {
  return (
    <>
      {showFlag && <img src={flagImg} width={100} />}
      <p className="question">{label}</p>
    </>
  );
};
export default TitleQuestion;
