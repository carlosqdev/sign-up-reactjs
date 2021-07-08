import React from 'react';
import './Input.css';

function Input({inputType, inputPlaceholder}) {
  return (
    <input className="Input" type={inputType} placeholder={inputPlaceholder} />
  )
}

export default Input;