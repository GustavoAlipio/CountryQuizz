/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TitleQuestion = ({ capitalTitleQuestion }) => {
  return (
    <p>
      <b>{capitalTitleQuestion?.capital[0] + "      "}</b>
      is the capital of:
    </p>
  );
};
export default TitleQuestion;
