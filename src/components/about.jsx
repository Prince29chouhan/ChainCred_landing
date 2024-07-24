import React, { useState } from "react";
import "./about.css";
import img from "../assets/about.png";
import user from "../assets/user-icon.png";
import { Toaster, toast } from 'react-hot-toast';


const About = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleApplyClick = (tab) => {
    setActiveTab(tab);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={user}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-xl font-medium text-gray-900">
                Hello user<span role="img" aria-label="wave">👋</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">
              we will reach out to you on your mail id
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ),{
      duration: 2000,
    })
  };

  return (
    <div className="apply-container" id="about">
      <section className="apply-section">
        <div className="glass-effect flex-col">
          <div>
            <h3 className="apply-heading glass text-2xl mb-4 md:mb-20 md:text-5xl mx-0" data-aos="fade-down" data-aos-delay="50">
              Our thesis driven differentiated funds provide our limited
              <span className="text-gray-400" data-aos="fade-down" data-aos-delay="50"> partners exposure to web3 assets that generate alpha.</span>
            </h3>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="apply-text">
              <div className="flex w-full flex-col">
                <h4 className="apply-subheading text-3xl font-semibold" data-aos="fade-down" data-aos-delay="150">
                  Apply Now for Investor or Founders
                </h4>
                <p className="apply-paragraph mt-0 md:mt-10" data-aos="fade-down" data-aos-delay="250">
                  ChainCred brings ideas, capital, operational resources, and
                  talent together. We partner with founders for their finance ERP and 
                  investors for their secured due-dilgence, cutting of the human bandwidth, all in real time.
                </p>
              </div>
              <div className="apply-buttons flex-row md:flex-col">
                <button
                  className={`nav-link apply-button found ${
                    activeTab === "found" ? "active" : ""
                  }`}
                  onClick={() => handleApplyClick("found")}
                >
                  <div className="flex flex-col justify-center" data-aos="fade-down" data-aos-delay="250">
                    <span className="number">01</span>
                    <span className="role font-bold">Founders</span>
                    <span className="description">
                      Apply as a founder on ChainCred. Your end to end finance ERP. PDF to graphs in one click.
                    </span>
                  </div>
                  <span className="arrow">&#10142;</span>
                </button>
                <button
                  className={`nav-link apply-button inv ${
                    activeTab === "investor" ? "active" : ""
                  }`}
                  onClick={() => handleApplyClick("investor")}
                >
                  <div className="flex flex-col justify-center" data-aos="fade-down" data-aos-delay="250">
                    <span className="number text-center">02</span>
                    <span className="role font-bold text-center">
                      Investors
                    </span>
                    <span className="description">
                      Apply as an investor on ChainCred. All your investments, verified and updated in real time at one place.
                    </span>
                  </div>
                  <span className="arrow">&#10142;</span>
                </button>
              </div>
            </div>
            <div className="apply-image" data-aos="fade-down" data-aos-delay="50">
              <img src={img} alt="Illustration" className="rounded" />
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default About;
