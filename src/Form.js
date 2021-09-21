import React, { useState, useEffect } from "react";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import "./Form.css";

export const FormContext = React.createContext();

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (firstName.length > 0 && lastName.length > 0)
      if (email.length > 0 && password.length > 0)
        setShowButton(true);
      else setShowButton(false);
    else setShowButton(false);
  },[firstName,lastName,email,password]);

  const subscribe = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setShowButton(false);
  };

  return (
    <form
      onSubmit={(event) => {
        subscribe(event);
      }}
      className="Form"
    >
      <FormContext.Provider
        value={{
          firstName,
          lastName,
          email,
          password,
          setFirstName,
          setLastName,
          setEmail,
          setPassword,
        }}
      >
        <FirstNameInput />
        <LastNameInput />
        <EmailInput />
        <PasswordInput />
      </FormContext.Provider>
      {showButton ? <Button /> : <p className="Form-copy">Complete all fields to continue</p>}
      <p className="Form-copy">
        By clicking the button, you are agreeing to our
        <span> Terms and Services</span>
      </p>
    </form>
  );
}

export default Form;
