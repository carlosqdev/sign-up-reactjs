import React, { useState, useEffect } from "react";
import './Input.css';

function LastNameInput() {
  const [lastName, setLastName] = useState("");
  const [style, setStyle] = useState("Input");

  useEffect(() => {
    if (lastName === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [lastName]);

  return (
    <input
      value={lastName}
      onChange={(event) => {
        setLastName(event.target.value);
      }}
      className={style}
      type="text"
      placeholder="Last Name"
    />
  );
}

export default LastNameInput;