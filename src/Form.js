import React from 'react';
import './Form.css';
import Input from './Input';
import Button from './Button';

function Form(props) {
  return(
    <>
    <form className="Form">
      <Input inputType="text" inputPlaceholder="First Name" />
      <Input inputType="text" inputPlaceholder="Last Name" />
      <Input inputType="email" inputPlaceholder="Email" />
      <Input inputType="password" />
      <Button />
    </form>
    </>
  )
}

export default Form;