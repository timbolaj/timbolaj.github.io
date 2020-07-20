import React from 'react';
import scheduler from '../../../images/scheduler.png';
import '../../../Styles/Project-styles/coding-project-styles/project.scss';

export default function Scheduler() {
  return (
    <div className="project">
      <div>
        <a href="https://reverent-leakey-1822b1.netlify.app/">
          <img
            src={scheduler}
            className="project-img"
          />
        </a> 
      </div>

      <div className="project-description">
        <p>
          A scheduling app which allows users to create, modify and delete appointments. Using websockets,
          users can see, in real-time, changes in the schedule
        </p>
        <p>Tech stack: React, JavaScript, Express, Axios, Websockets</p>
      </div>

    </div>
  )
}