import "./Display.scss";

const Display = ({ data }) => {
  return (
    <div className="display">
      <div className={`first-line ${data.operand.length > 12 && "small"}`}>
        {data.operand}
      </div>
      <div className="second-line">
        {data.cache} {data.operator}
      </div>
    </div>
  );
};

export default Display;
