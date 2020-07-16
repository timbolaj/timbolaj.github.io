import React from 'react';
import picture from '../images/profile_pic.jpg';
import '../Styles/Summary.scss';
import 'bootstrap/dist/css/bootstrap.css';

export default function Summary() {
  return (
    <div classname="summary">

      <div className="links col-sm">
        <a href="https://github.com/timbolaj">Github </a>|<a href="https://linkedin.com/in/aaron-timbol-853383107/"> LinkedIn</a>
      </div>

      <div className="row profile">
        <div className="col">
          <div className="profile-picture">
            <img src={picture}></img>
          </div>

          <br></br>

          <div className="text">

            <div className="name">
              <p>Hi, I'm Aaron.</p>
            </div>

            <div className="description">
              <p>I'm a political science graduate turned software developer.</p>
              <p>I love languages, both human and machine.</p>
            </div>
          
          </div>
        </div>
      </div>

    </div>
  )
}