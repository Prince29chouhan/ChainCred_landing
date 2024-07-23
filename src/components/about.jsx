// src/ApplyPage.js
import React, { useState } from "react";
import "./about.css";
import img from "../assets/about.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="apply-container" id="about">
      <section className="apply-section">
        <div className="glass-effect flex-col">
          <div>
            <h3 className="apply-heading glass text-6xl mb-20" data-aos="fade-down" data-aos-delay="50">
              Our thesis driven differentiated funds provide our limited
              <span className="text-gray-400" data-aos="fade-down" data-aos-delay="50"> partners exposure to web3 assets that generate alpha.</span>
            </h3>
        
          </div>
          <div className="flex">
            <div className="apply-text">
              <div className="flex w-full flex-col">
                <h4 className="apply-subheading text-3xl font-semibold" data-aos="fade-down" data-aos-delay="150">
                  Apply Now for Investor or Founders
                </h4>
                <p className="apply-paragraph" data-aos="fade-down" data-aos-delay="250">
                  ChainCred brings ideas, capital, operational resources, and
                  talent together. We partner with founders to transform the
                  best ideas into groundbreaking protocols.
                </p>
              </div>
              <div className="apply-buttons">
                <button
                  href="#found"
                  className={`nav-link apply-button found ${
                    activeTab === "found" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("found")}
                >
                  <div className="flex flex-col justify-center" data-aos="fade-down" data-aos-delay="250">
                    <span className="number">01</span>
                    <span className="role font-bold">Founders</span>
                    <span className="description">
                      Apply to co-founder with ChaiCred
                    </span>
                  </div>
                  <span className="arrow">&#10142;</span>
                </button>
                <a
                  href="#investor"
                  className={`nav-link apply-button inv ${
                    activeTab === "investor" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("investor")}
                >
                  <div className="flex flex-col justify-center" data-aos="fade-down" data-aos-delay="250">
                    <span className="number text-center">02</span>
                    <span className="role font-bold text-center">
                      Investors
                    </span>
                    <span className="description">
                      Apply to co-invest with ChainCred
                    </span>
                  </div>
                  <span className="arrow">&#10142;</span>
                </a>
              </div>
            </div>
            <div className="apply-image" data-aos="fade-down" data-aos-delay="50">
              <img src={img} alt="Illustration" className="rounded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
