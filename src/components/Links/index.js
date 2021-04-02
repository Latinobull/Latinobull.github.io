import React from 'react';
import './style.css';

function Links() {
  return (
    <div
      className="uk-child-width-1-3@m uk-child-width-1-1@s"
      uk-grid="true"
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
    >
      <div className="uk-card uk-card-default cardStyle uk-card-hover">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                src="Assets/github-logo.png"
                alt="github"
              />
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">
                <a href="https://github.com/Latinobull">Github</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-card uk-card-default cardStyle">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                src="Assets/LI-In-Bug.png"
                alt="linkedin"
              />
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">
                <a href="https://www.linkedin.com/in/donnahue-george-1959431b6/">
                  LinkedIn
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-card uk-card-default cardStyle">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                src="Assets/resume-logo.jpg"
                alt="Resume"
              />
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">
                <a href="Assets/Donnahue-resume.pdf" download>
                  Resume
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
