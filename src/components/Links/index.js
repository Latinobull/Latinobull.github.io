import React from 'react';
import './style.css';
import Github from './github-logo.png';
import LinkedIn from './LI-In-Bug.png';
import ResumeLogo from './resume-logo.jpg';
function Links() {
  return (
    <div
      className="row"
      uk-grid="true"
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
    >
      <div className="uk-card uk-card-default cardStyle col">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                src={Github}
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
      <div className="uk-card uk-card-default cardStyle col">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                src={LinkedIn}
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
      <div className="uk-card uk-card-default cardStyle col">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-auto">
              <img
                className="uk-border-circle"
                width="40"
                height="40"
                src={ResumeLogo}
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
