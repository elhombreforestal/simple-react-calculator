const isNum = (x) => /^[\d.]$/.test(x);

const evaluate = (x, y, operator) => {
  switch (operator) {
    case "+":
      return String(parseFloat(x) + parseFloat(y));
    case "-":
      return String(parseFloat(x) - parseFloat(y));
    case "x":
      return String(parseFloat(x) * parseFloat(y));
    case "/":
      return String(parseFloat(x) / parseFloat(y));
    default:
      return y;
  }
};

const calculator = (data, key) => {
  if (!isNum(key)) {
    if (
      data.cache &&
      (!data.isResult || (data.isResult && data.operator && key === "="))
    ) {
      data.operand = evaluate(data.cache, data.operand, data.operator);
    }
    return {
      operand: data.operand,
      isResult: true,
      operator: key === "=" ? data.operator : key,
      cache: data.operand
    };
  } else if (!(key === "." && data.operand.includes(".") && !data.isResult)) {
    return {
      operand:
        (data.operand === "0" && key !== ".") || data.isResult
          ? key === "."
            ? "0."
            : key
          : data.operand + key,
      isResult: false,
      operator: data.operator,
      cache: data.cache
    };
  }

  return data;
  //return { ...data };
};
export default calculator;
