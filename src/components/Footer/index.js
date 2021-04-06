import React from 'react';
import './style.css';
function Footer() {
  return (
    <div>
      <h1 className="uk-align-center">Contact</h1>
      <div className="uk-card uk-card-default uk-align-center" id="cardColor">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-expand">
              <h3 className="uk-margin-remove-bottom">Donnahue George Jr</h3>
            </div>
          </div>
        </div>
        <div className="uk-card-body">
          <p>Donnahuegjr@gmail.com</p>
        </div>
        <div className="uk-card-footer">
          <p>347-631-2334</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
