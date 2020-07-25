import React, { useState } from 'react';
import '../Styles/Projects.scss';
import Pathfinder from './Projects/coding-projects/Pathfinder';
import Mapbook from './Projects/coding-projects/Mapbook';
import Scheduler from './Projects/coding-projects/Scheduler';
import Tweeter from './Projects/coding-projects/Tweeter';
import Pokedex from './Projects/coding-projects/Pokédex';
import ToggleMode from './Projects/ToggleMode';

export const PATHFINDER = 'pathfinder';
export const MAPBOOK = 'mapbook';
export const SCHEDULER = 'scheduler';
export const TWEETER = 'tweeter';
export const POKEDEX = 'pokedex';
export const ORDER = [PATHFINDER, MAPBOOK, SCHEDULER]

export default function Projects() {

  const [projectMode, setProject] = useState(PATHFINDER)

  return (
    <div className="Projects">
      <div className="projects-text">
        <h4>Projects:</h4>
        &nbsp;
        &nbsp;      
        {projectMode === PATHFINDER && <h4>Pathfinder</h4>}
        {projectMode === MAPBOOK && <h4>Mapbook</h4>}
        {projectMode === SCHEDULER && <h4>Scheduler</h4>}
        {projectMode === TWEETER && <h4>Tweeter</h4>}
        {projectMode === POKEDEX && <h4>Pokédex</h4>}
      </div>

      <div className="websites">
        {projectMode === PATHFINDER && <Pathfinder />}
        {projectMode === MAPBOOK && <Mapbook />}
        {projectMode === SCHEDULER && <Scheduler />}
        {projectMode === TWEETER && <Tweeter />}
        {projectMode === POKEDEX && <Pokedex />}
      </div>

      <ToggleMode
        projectMode={projectMode}
        setProject={setProject}
      />

    </div>
  )
}