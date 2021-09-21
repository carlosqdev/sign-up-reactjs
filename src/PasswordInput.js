import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "./Form";
import './Input.css';

function PasswordInput() {
  const context = useContext(FormContext);
  const [style, setStyle] = useState("Input");

  useEffect(() => {
    if (context.password === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [context.password]);

  return (
    <input
      value={context.password}
      onChange={(event) => {
        context.setPassword(event.target.value);
      }}
      className={style}
      type="password"
      placeholder="Password"
    />
  );
}

export default PasswordInput;