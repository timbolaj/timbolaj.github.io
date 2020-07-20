import React from 'react';
import tweeter from '../../../images/tweeter.png';
import '../../../Styles/Project-styles/coding-project-styles/project.scss';

export default function Tweeter() {
  return (
    <div className="project">
      <div>
        <a href="https://github.com/timbolaj/tweeter">
          <img
            src={tweeter}
            className="project-img"
          />
        </a> 
      </div>

      <div className="project-description">
        <p>
          A twitter clone built for learning jQuery, basic CSS animations and responsive design. Users can write tweets and see them rendered in real-time with a random avatar associated to the tweet.
        </p>
        <p>Tech stack: JavaScript, jQuery, Node.js, HTML, CSS </p>
      </div>

    </div>
  )
}