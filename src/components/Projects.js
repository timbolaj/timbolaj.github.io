import React, { useState, useEffect } from 'react';
import '../Styles/Projects.scss';
import { faCir } from "@fortawesome/free-brands-svg-icons";
import Pathfinder from './Projects/coding-projects/Pathfinder';
import Mapbook from './Projects/coding-projects/Mapbook';
import Scheduler from './Projects/coding-projects/Scheduler';

const PATHFINDER = 'pathfinder';
const MAPBOOK = 'mapbook';
const SCHEDULER = 'scheduler';
//We can make a slideshow with SetInterval!;

export default function Projects() {

  const [projectMode, setProject] = useState(PATHFINDER)

  useEffect(() => {
    clearInterval();
    setInterval(slideshow, 10000);
  })

  const slideshow = () => {
    switch (projectMode) {
      case PATHFINDER:
        setProject(MAPBOOK);
        break;
      case MAPBOOK:
        setProject(SCHEDULER);
        break;
      case SCHEDULER:
        setProject(PATHFINDER);
        break;
    }
  }

  return (
    <div className="Projects">
      <h4>Coding Projects</h4>

      <div className="websites">
        {projectMode === PATHFINDER && <Pathfinder />}
        {projectMode === MAPBOOK && <Mapbook />}
        {projectMode === SCHEDULER && <Scheduler />}
      </div>

      <div>Toggle bar</div>
      <br></br>

      <h4>Articles</h4>
      <div className="articles">
        <div>Data and Binary Search Trees</div>
      </div>
    </div>
  )
}