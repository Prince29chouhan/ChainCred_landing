import React from 'react';
import './join.css';

const Join = () => {
  return (
    <div className="landing-page" id='join'>
      <div className="content">
        <h1 className="title" data-aos="fade-down" data-aos-delay="50">A VICTORIAN ACCELERATOR FOR GLOBALLY IMPACTFUL IDEAS.</h1>
        <p className="description" data-aos="fade-down" data-aos-delay="100">
          All of Catalyst’s core accelerator operations will be conducted out of our offices in Victoria. We are in the process of closing a studio office with space to accommodate our team and a cohort of 3 startups to ideate, test & deliver with us full-time.
        </p>
        <button className="cta-button" data-aos="fade-down" data-aos-delay="150">Let's Join Now</button>
      </div>
      <div className="map-container">
        <div className="map " data-aos="fade-down" data-aos-delay="150">
          <div className="location">
            <span className="label">Catalyst Core Accelerator</span>
            <div className="pin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
