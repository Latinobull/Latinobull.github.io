import React from 'react';
import SelfPhoto from './self-photo.jpg';
function Profile() {
  return (
    <div>
      <div className="uk-overflow-hidden" id="box">
        <img
          src={SelfPhoto}
          alt="Donnahue George"
          className="uk-animation-reverse uk-transform-origin-top-right"
          id="selfStyle"
          uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
        />
      </div>
    </div>
  );
}

export default Profile;
