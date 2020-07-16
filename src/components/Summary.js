import React from 'react';
import picture from '../images/profile_pic.jpg';
import '../Styles/Summary.scss';
import 'bootstrap/dist/css/bootstrap.css';

export default function Summary() {
  return (
    <div className="summary d-flex justify-content-center vertical-center">
      <div className="profile-picture">
        <img src={picture} alt="picture"></img>
      </div>

      <br></br>

      <div className="text align-top">

        <div className="name">
          <p>Hi, I'm Aaron.</p>
        </div>

        <div className="description">
          <p>I'm a political science graduate turned software developer.</p>
          <p>I love languages, both human and machine.</p>
        </div>
      </div>
    </div>
  )
}