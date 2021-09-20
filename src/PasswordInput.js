import React, { useState, useEffect } from "react";
import './Input.css';

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [style, setStyle] = useState("Input");

  useEffect(() => {
    if (password === "") {
      setStyle("Input error");
    } else {
      setStyle("Input");
    }
  }, [password]);

  return (
    <input
      value={password}
      onChange={(event) => {
        setPassword(event.target.value);
      }}
      className={style}
      type="password"
      placeholder="Password"
    />
  );
}

export default PasswordInput;