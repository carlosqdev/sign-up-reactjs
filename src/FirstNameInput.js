import React, { useState, useEffect } from "react";
import './Input.css';

function FirstNameInput() {
  const [firstName, setFirstName] = useState("");
  const [style, setStyle] = useState("Input");

  useEffect(() => {
    if (firstName === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [firstName]);

  return (
    <input
      value={firstName}
      onChange={(event) => {
        setFirstName(event.target.value);
      }}
      className={style}
      type="text"
      placeholder="First Name"
    />
  );
}

export default FirstNameInput;
