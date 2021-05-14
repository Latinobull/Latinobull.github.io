import { Grid } from '@material-ui/core';
import React from 'react';
import SelfPhoto from './self-photo.jpg';
import './style.css';
function Profile() {
  return (
    <Grid>
      <div className="uk-overflow-hidden" id="box">
        <img
          src={SelfPhoto}
          alt="Donnahue George"
          className="uk-animation-reverse uk-transform-origin-top-right"
          id="selfStyle"
          data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
        />
      </div>
      <br />
      <Grid container>
        <h4>
          I am a Full Stack Developer leveraging a background in music to build
          a more intuitive and efficient user experience on the web. Known as an
          innovative problem-solver passionate about developing apps, with a
          focus on backend, user interface, and authentication. Strengths in
          meeting deadlines, understanding documentations and teamwork.
        </h4>
        <hr />
        <h5>
          HTML, CSS, Javascript, jQuery, Responsive Design, Bootstrap, Firebase,
          Cookies, Local Storage,React.js, Heroku, Git, Python, MySQL, MongoDB,
          Server-Side Development, Express, Security and Session Storage, User
          Authentication, MERN Stack (MongoDB, Express.js, React.js, Node.js),
          and Writing Tests
        </h5>
      </Grid>
    </Grid>
  );
}

export default Profile;
