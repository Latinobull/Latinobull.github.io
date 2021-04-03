import React from 'react';

function Project() {
  return (
    <div>
      <h1 class="uk-align-center">Projects</h1>
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-align-center"
        tabindex="-1"
        uk-slideshow="min-height: 300; max-height: 600; autoplay: true; animation: fade"
        id="slideshow"
      >
        <ul class="uk-slideshow-items">
          <li>
            <a href="#offcanvas-usage" uk-toggle>
              <img src="Assets/Hunger-Buster.png" alt="" uk-cover />
            </a>
          </li>
          <li>
            <a href="#offcanvas-usage1" uk-toggle>
              <img src="Assets/Password-Generator.png" alt="" uk-cover />
            </a>
          </li>
          <li>
            <a href="#offcanvas-usage2" uk-toggle>
              <img src="Assets/Day-Planner.png" alt="" uk-cover />
            </a>
          </li>
          <li>
            <a href="#offcanvas-usage3" uk-toggle>
              <img src="Assets/AudioBridge.png" alt="" uk-cover />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
