import React from 'react';
import DayPlanner from './Day-Planner.png';
import Password from './Password-Generator.png';
import AudioBridge from './AudioBridge.png';
import HungerBuster from './Hunger-Buster.png';
import './style.css';
function Project() {
  return (
    <div>
      <h1 className="uk-align-center">Projects</h1>
      <div
        className="uk-position-relative uk-visible-toggle uk-light uk-align-center"
        tabindex="-1"
        uk-slideshow="min-height: 300; max-height: 600; autoplay: true; animation: fade"
        id="slideshow"
      >
        <ul className="uk-slideshow-items">
          <li>
            <a
              href="https://carolineablynch.github.io/Hunger-Buster/"
              target="_blank"
              rel="noopener noreferrer"
              uk-toggle
            >
              <img src={HungerBuster} alt="Hunger Buster" uk-cover />
            </a>
          </li>
          <li>
            <a
              href="https://latinobull.github.io/Password-Generator/"
              target="_blank"
              rel="noopener noreferrer"
              uk-toggle
            >
              <img src={Password} alt="Password Generator" uk-cover />
            </a>
          </li>
          <li>
            <a
              href="https://latinobull.github.io/Day-Planner/"
              target="_blank"
              rel="noopener noreferrer"
              uk-toggle
            >
              <img src={DayPlanner} alt="DayPlanner" uk-cover />
            </a>
          </li>
          <li>
            <a
              href="https://hidden-castle-67810.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              uk-toggle
            >
              <img src={AudioBridge} alt="AudioBridge" uk-cover />
            </a>
          </li>
        </ul>
      </div>
      <h4>Click on the photo to go to the Project!</h4>
    </div>
  );
}

export default Project;
