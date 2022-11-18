import { memo } from "react";
import "./Button.scss";
export default memo(function Button({ value, onClick }) {
  const isNumeric = /^[\d.]$/.test(value);
  return (
    <button
      {...(!isNumeric &&
        (value === "=" ? { className: "equal" } : { className: "operator" }))}
      onClick={onClick}
    >
      {value}
    </button>
  );
});
