import React, { useState, useEffect } from "react";
import './Input.css';

function EmailInput() {
  const [email, setEmail] = useState("");
  const [style, setStyle] = useState("Input");

  useEffect(() => {
    if (email === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [email]);

  return (
    <input
      value={email}
      onChange={(event) => {
        setEmail(event.target.value);
      }}
      className={style}
      type="email"
      placeholder="Email"
    />
  );
}

export default EmailInput;