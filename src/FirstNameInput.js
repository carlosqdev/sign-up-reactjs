import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "./Form";

import "./Input.css";

function FirstNameInput(props) {
  const [style, setStyle] = useState("Input");
  const context = useContext(FormContext);

  useEffect(() => {
    if (context.firstName === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [context.firstName]);

  return (
    <input
      value={context.firstName}
      onChange={(event) => {
        context.setFirstName(event.target.value);
      }}
      className={style}
      type="text"
      placeholder="First Name"
    />
  );
}

export default FirstNameInput;
