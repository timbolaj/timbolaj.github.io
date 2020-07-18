import React from 'react';
import '../../../Styles/Project-styles/coding-project-styles/project.scss'

export default function Scheduler() {
  return (
    <div className="project">
      <div>
        Gif        
      </div>

      <div className="project-description">
        <p>
          A scheduling app which allows users to create, modify and delete appointments. Using websockets,
          users can see, in real-time, changes in the schedule
        </p>
      </div>

      <div className="tech-stack">
        <p>Technologies: React, JavaScript, Express</p>
      </div>

    </div>
  )
}