import React from 'react';
import picture from '../images/profile_pic.jpg';

export default function Summary() {
  return (
    <div>
      <div className="links">
        <a href="https://github.com/timbolaj">Github</a> | <a href="https://linkedin.com/in/aaron-timbol-853383107/">LinkedIn</a>
      </div>

      <div className="profile-picture">
        <img src={picture}></img>
      </div>

      <div className="text">
        <p>Hi, I'm Aaron.</p>
        <br></br>
        <p>I'm a political science graduate turned software developer.</p>
        <p>I love languages, both human and machine</p>
      </div>
    </div>
  )
}