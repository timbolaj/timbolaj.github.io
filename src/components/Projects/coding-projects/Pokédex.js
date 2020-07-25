import React from 'react';
import pokedex from '../../../images/Pokedex-home.png';
import '../../../Styles/Project-styles/coding-project-styles/project.scss'

export default function Pokedex() {
  return (
    <div className="project">
      <div>
        <a href="https://github.com/timbolaj/pokedex">
          <img
            src={pokedex}
            alt="pokedex"
            className="project-img"
          />
        </a>  
      </div>

      <div className="project-description">
        <p>
          A small web app that acts as a pokédex - displaying select info on 150 Pokemon. All pokemon info was taken from the PokéApi.
        </p>
        <p>Tech stack: React, Sass, JavaScript, Axios, Bootstrap</p>
      </div>

    </div>
  )
}