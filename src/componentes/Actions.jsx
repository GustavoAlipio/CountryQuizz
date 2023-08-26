// eslint-disable-next-line react/prop-types
const Actions = ({ onVerify, onNext }) => {
  return (
    <>
      <button className="comprobar" onClick={onVerify}>
        verify
      </button>
      <button className="next" onClick={onNext}>
        Next
      </button>
    </>
  );
};
export default Actions;
