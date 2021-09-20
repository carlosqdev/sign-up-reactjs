import React from "react";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import "./Form.css";

function Form(props) {
  return (
    <>
      <form className="Form">
        <FirstNameInput />
        <LastNameInput />
        <EmailInput />
        <PasswordInput />
        <Button />
        <p className="Form-copy">
          By clicking the button, you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </form>
    </>
  );
}

export default Form;
