import React from 'react';
import './join.css';

const Join = () => {
  return (
    <div className="landing-page" id='join'>
      <div className="content">
        <h1 className="title text-xl md:text-5xl" data-aos="fade-down" data-aos-delay="50">VERIFYING COMPANY FINANCES ON SOROBAN</h1>
        <p className="description text-sm md:text-xl" data-aos="fade-down" data-aos-delay="100">
        Infra for Founders & Investors to exchange & fetch credible company finances on Soroban ensuring data transparency & verification. Get all real time verified updates pictorially with ChainCred.
        </p>
        <button className="cta-button" data-aos="fade-down" data-aos-delay="150">Let's Join Now</button>
      </div>
      <div className="map-container">
        <div className="map " data-aos="fade-down" data-aos-delay="150">
          <div className="location">
            <span className="label">ChainCred</span>
            <div className="pin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
