/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TitleQuestion = ({ label, flagImg, showFlag }) => {
  return (
    <>
      {showFlag && <img src={flagImg} width={100} />}
      <p>{label}</p>
    </>
  );
};
export default TitleQuestion;
