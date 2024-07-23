// src/CatalystPage.js
import React, { useEffect, useState } from 'react';
import './hero.css';
import Navbar from './navbar';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
//   const [activeTab, setActiveTab] = useState('home');
useEffect(()=>{
    Aos.init({duration:2000});
}

)

  return (
    <div className="container">
      <Navbar />
      <div className="landing-page flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-8">
        <p className="text-[2rem] mb-20 " data-aos = 'fade-right'>Hello Everyone <span role="img" aria-label="wave">👋</span></p>
        <h1 className="text-[3rem] font-bold mb-20" data-aos="fade-up" data-aos-delay="50">
          Catalyst<span className="text-blue-500" data-aos="fade-up" data-aos-delay="70">.</span> Invests, Incubates, and <br /><span className='text-gray-300'>Accelerates Networks That Power</span> <br /> <span className='text-gray-400'>The Future of Open Societies on Web3.</span>
        </h1>
        <div className="flex space-x-4 mt-6">
          <div className=" p-4 rounded-lg text-center gray-box">
            <p className="text-sm text-gray-400">One of our best investments</p>
            <p className="text-lg font-bold">$50mm realised | 250x MOIC</p>
          </div>
          <div className="p-4 rounded-lg text-center blue-box">
            <p className="text-sm text-gray-200">Investing since</p>
            <p className="text-lg font-bold">2017</p>
          </div>
        </div>
      </div>
    </div>
      <footer className="text-white text-center mb-20">
        <div className='flex justify-between px-10 mb-5'>
        <p>SCROLL DOWN</p>
        <p>2023</p>
        </div>
        <hr className='mx-5 mb-5' data-aos="fade-down" data-aos-delay="50"/>
      </footer>

      
    </div>
  );
}

export default Hero;
