import React, { useState } from 'react';
import '../Styles/Projects.scss';
import Pathfinder from './Projects/coding-projects/Pathfinder';
import Mapbook from './Projects/coding-projects/Mapbook';
import Scheduler from './Projects/coding-projects/Scheduler';

export default function Projects() {
  return (
    <div className="Projects">
      <h4>Coding Projects</h4>

      <div className="websites">
        <Pathfinder />
        <Mapbook />
        <Scheduler />
      </div>
      <br></br>

      <h4>Articles</h4>
      <div className="articles">
        <div>Data and Binary Search Trees</div>
      </div>
    </div>
  )
}