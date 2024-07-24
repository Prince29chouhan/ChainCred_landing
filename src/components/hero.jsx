import React, { useEffect } from 'react';
import './hero.css';
import Navbar from './navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Toaster, toast } from 'react-hot-toast';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

 
  return (
    <div className="container">
      <Navbar />
      <div className="landing-page flex items-center justify-center min-h-screen">
        <div className="container mx-auto p-4 md:p-8">
          <p className="text-3xl md:text-4xl mb-10" data-aos='fade-right'>
            Hello Everyone <span role="img" aria-label="wave">👋</span>
          </p>
          <h1 className="text-[1.3rem] md:text-5xl font-bold mb-5 md:mb-20" data-aos="fade-up" data-aos-delay="50">
            ChainCred<span className="text-blue-500" data-aos="fade-up" data-aos-delay="70">.</span> Invests, Incubates, and <br />
            <span className='text-gray-300'>Accelerates Networks Securely</span> <br /> 
            <span className='text-gray-400'>The Future of Open Source Due-Diligence on Stellar.</span>
          </h1>
          <div className="flex space-x-4 mt-6">
            <div className="p-4 rounded-lg text-center gray-box" >
              <p className="text-sm text-gray-400">Building future of Due Diligence</p>
              <p className="text-lg font-bold">Founders | Investors</p>
            </div>
            <div className="p-4 rounded-lg text-center blue-box">
              <p className="text-sm text-gray-200">Helping Investments since</p>
              <p className="text-lg font-bold">2024</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white text-center">
        <div className='flex justify-between px-10 mb-2'>
          <p className='mx-5 text-sm '>SCROLL DOWN</p>
          <p className='mx-5 text-sm'>2024</p>
        </div>
        <hr className='mx-5 mb-5' data-aos="fade-down" data-aos-delay="50" />
      </footer>
      <Toaster />
    </div>
  );
};

export default Hero;
