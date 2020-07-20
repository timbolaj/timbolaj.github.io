import React, { useState, useEffect } from 'react';
import '../Styles/Projects.scss';
import Pathfinder from './Projects/coding-projects/Pathfinder';
import Mapbook from './Projects/coding-projects/Mapbook';
import Scheduler from './Projects/coding-projects/Scheduler';
import ToggleMode from './Projects/ToggleMode';

export const PATHFINDER = 'pathfinder';
export const MAPBOOK = 'mapbook';
export const SCHEDULER = 'scheduler';
export const ORDER = [PATHFINDER, MAPBOOK, SCHEDULER]


//We can make a slideshow with SetInterval!;

export default function Projects() {

  const [projectMode, setProject] = useState(PATHFINDER)

  // useEffect(() => {
  //   setInterval(slideshow, 10000);
  // })

  const slideshow = () => {
    clearInterval();
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

  const forward = () => {

  }

  return (
    <div className="Projects">
      <h4>Coding Projects</h4>

      <div className="websites">
        {projectMode === PATHFINDER && <Pathfinder />}
        {projectMode === MAPBOOK && <Mapbook />}
        {projectMode === SCHEDULER && <Scheduler />}
      </div>

      <ToggleMode
        mapbook={MAPBOOK}
        pathfinder={PATHFINDER}
        scheduler={SCHEDULER}
        projectMode={projectMode}
      />

      <br></br>

      <h4>Articles</h4>
      <div className="articles">
        <div>Data and Binary Search Trees</div>
      </div>
    </div>
  )
}