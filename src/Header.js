import React from 'react';
import './Header.css';
import TryFree from './TryFree';

function Header(){
  return (
    <div className="Header">
      <div className="Header-wrapper">
        <h1 className="Header-title">Learn to code by watching others</h1>
        <p className="Header-copy">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </div>
      <TryFree />
    </div>
  )
}

export default Header;