import React from 'react';
import '../../../Styles/Project-styles/coding-project-styles/project.scss';
import mapbook from '../../../images/mapbook.png';

export default function Mapbook() {
  return (
  
    <div className="project">

      <a href="https://mapbook.herokuapp.com/">
        <img
          src={mapbook}
          alt="link to mapbook"
          className="project-img pagination-centered"
        />          
      </a>

      <div className="project-description">
        <p>
          A web application which allows users to create and favorite maps. Each map is occupied with pointers referring to locations
          that the user has chosen. Each pointer shows a description of the given geographic spot.
        </p>
        <p>Tech stack: Google Maps API, Google Places API, jQuery, JavaScript, Express, Sass, HTML, Ajax</p>
      </div>

    </div>
  )
}