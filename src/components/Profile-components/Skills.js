import React from 'react';
import '../../Styles/Profile-styles/Skills.scss';

export default function Skills() {

  return (
    <div className="skills">
      <div className='upper-half'>
        <div className="front-end">
          <h5>Front-End</h5>
          <p>React</p>
          <p>jQuery</p>
          <p>HTML</p>
          <p>CSS/Sass</p>
          <p>Bootstrap</p>
          <p>Material-UI</p>
        </div>

        <div className="back-end">
          <h5>Back-End</h5>
          <p>Rails</p>
          <p>Node.js</p>
          <p>Express</p>
        </div>

        <div className="testing">
          <h5>Testing</h5>
          <p>Jest</p>
          <p>Cypress</p>
          <p>Mocha</p>
          <p>Chai</p>
          <p>Rspec</p>
          <p>Capybara</p>
        </div>
      </div>

      <div className="bottom-half">
        <div className="programming-languages">
          <h5>Languages</h5>
          <p>JavaScript</p>
          <p>Ruby</p>
        </div>

        <div className="soft-skills">
          <h5>Soft-Skills</h5>
          <p>Pair programming</p>
          <p>Team-player</p>
          <p>Bilingual</p>
        </div>  
      </div>
    
    </div>
  )
}