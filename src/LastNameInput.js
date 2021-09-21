import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "./Form";
import './Input.css';

function LastNameInput() {
  const context = useContext(FormContext);
  const [style, setStyle] = useState("Input");

  useEffect(() => {
    if (context.lastName === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [context.lastName]);

  return (
    <input
      value={context.lastName}
      onChange={(event) => {
        context.setLastName(event.target.value);
      }}
      className={style}
      type="text"
      placeholder="Last Name"
    />
  );
}

export default LastNameInput;