import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "./Form";
import './Input.css';

function EmailInput() {
  const context = useContext(FormContext);
  const [style, setStyle] = useState("Input");

  useEffect(() => {
    if (context.email === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [context.email]);

  return (
    <input
      value={context.email}
      onChange={(event) => {
        context.setEmail(event.target.value);
      }}
      className={style}
      type="email"
      placeholder="Email"
    />
  );
}

export default EmailInput;