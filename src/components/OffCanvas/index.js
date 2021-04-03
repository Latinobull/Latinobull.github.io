import React from 'react';

function Offcanvas() {
  return (
    <div>
      <div id="offcanvas-usage" uk-offcanvas>
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close></button>

          <h3>Hunger Busters</h3>

          <p>
            This application was created to help those who never knows what they
            want to eat. With Hunger Busters, we help you decide everything with
            a click of a button. When you click the random food button, you are
            presented with a random food photo. After the photo has appeared on
            the page, three restaurants in your location would appear on the
            page. The restaurants change depending on which cuisine is showed in
            the image. When you are satisifed with your random food selection,
            you are then able to send a copy of the restaurants to your email.
          </p>
          <hr />
          <a href="https://github.com/carolineablynch/Hunger-Buster">
            Link to Repo
          </a>
          <hr />
          <a href="https://carolineablynch.github.io/Hunger-Buster">
            Link to Application
          </a>
        </div>
      </div>
      <div id="offcanvas-usage1" uk-offcanvas>
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close></button>

          <h3>Password-Generator</h3>

          <p>
            This a password generator made with Javascript. This website helps
            you create a secure password by adding factors that are decided by
            the user. The factors include character length, upper and lower case
            letters, numbers, and special characters.
          </p>
          <hr />
          <a href="https://github.com/Latinobull/Password-Generator">
            Link to Repo
          </a>
          <hr />
          <a href="https://latinobull.github.io/Password-Generator/">
            Link to Application
          </a>
        </div>
      </div>
      <div id="offcanvas-usage2" uk-offcanvas>
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close></button>

          <h3>Day Planner</h3>

          <p>
            Here is a day planner to help organize your daily life by business
            hour. When an event is in progress, it will be highlighted red. When
            an event has passed, it will be highlighted grey and when a even is
            upcoming it will be highlighted red. You can save your events so
            even if you remove the browser and reopen it, everything you saved
            will still be there. Start organizing your day with this app today.
          </p>
          <hr />
          <a href="https://github.com/Latinobull/Day-Planner">Link to Repo</a>
          <hr />
          <a href="https://latinobull.github.io/Day-Planner/">
            Link to Application
          </a>
        </div>
      </div>
      <div id="offcanvas-usage3" uk-offcanvas>
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close></button>

          <h3>AudioBridge</h3>

          <p>
            This is a social media where users that are passionate about music
            can interact with other users. They can makew a profile and also
            join a live chat server where they can speak to others users about
            music.
          </p>
          <hr />
          <a href="https://github.com/ericfreyer/Project_2">Link to Repo</a>
          <hr />
          <a href="https://hidden-castle-67810.herokuapp.com/">
            Link to Application
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offcanvas;
