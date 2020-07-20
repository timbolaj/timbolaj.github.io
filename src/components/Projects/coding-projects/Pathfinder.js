import React from 'react';
import pathfinder from '../../../images/pathfinder.png';
import '../../../Styles/Project-styles/coding-project-styles/project.scss'

export default function Pathfinder() {
  return (
    <div className="project">
      <div>
        <a href="https://react-pathfinder.herokuapp.com/">
          <img
            src={pathfinder}
            alt="pathfinder"
            className="project-img"
          />
        </a>  
      </div>

      <div className="project-description">
        <p>
          A path-finding algorithm visualisation tool. Users can choose an algorithm and visualise the algorithm's search for the end node from the start node - traversing through obstacles of the user's choosing. 
        </p>
      </div>

      <p>Tech stack: React, Material-UI, CSS, Rails, JavaScript, Axios</p>

    </div>
  )
}