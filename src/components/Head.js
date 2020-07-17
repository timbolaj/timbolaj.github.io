import React from 'react';
import '../Styles/Head.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Head() {

  return (
    <div className="Head">
      <div className="links col-sm">
        <a href="https://github.com/timbolaj"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
        <a href="https://linkedin.com/in/aaron-timbol-853383107/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
      </div>

      <div className="Introduction-text">
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