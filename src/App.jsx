import "./styles.scss";
import { Button, Calc, Display } from "./components";
import calculator from "./calculator";
import React, { useState } from "react";

const buttonList = "+-x/7894561230.C=";

export default function App() {
  const defaultState = {
    operand: "0",
    cache: "",
    isResult: false,
    operator: ""
  };

  const [calc, setCalc] = useState(defaultState);

  const clickHandler = (key) => {
    if (key === "C") {
      setCalc(defaultState);
    } else {
      setCalc(calculator(calc, key));
    }
  };

  return (
    <Calc>
      <Display data={calc} />
      {[...buttonList].map((char, idx) => {
        return (
          <Button
            key={`btn${idx}`}
            value={char}
            onClick={() => clickHandler(char)}
          />
        );
      })}
    </Calc>
  );
}
