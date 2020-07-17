import React, { useState } from 'react';
import '../Styles/Projects.scss';

const PATHFINDER = 'pathfinder';
const MAPBOOK = 'mapbook';
const SCHEDULER = 'scheduler';
const TWEETER = 'tweeter';
const JUNGLE = 'jungle';
const TINYAPP = 'tinyapp';

export default function Projects() {
  return (
    <div className="Projects">
      <h4>Coding Projects</h4>

      <div className="websites">
        <div>Pathfinder</div>
        <div>Mapbook</div>
        <div>Scheduler</div>
        <div>Tweeter</div>
      </div>
      <br></br>

      <h4>Articles</h4>
      <div className="articles">
        <div>Data and Binary Search Trees</div>
      </div>
    </div>
  )
}