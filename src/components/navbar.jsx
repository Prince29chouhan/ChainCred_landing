import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <header className="flex justify-between items-center py-4 px-8 sticky top-0 bg-black z-50">
        <div className="text-white text-2xl font-bold">ChainCred<span className="text-blue-600">.</span></div>
        <nav className="hidden md:flex space-x-6 text-white">
          <Link
            to="/" 
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <a 
            href="#funds" 
            className={`nav-link ${activeTab === 'funds' ? 'active' : ''}`}
            onClick={() => handleLinkClick('funds')}
          >
            Features
          </a>
          <a 
            href="#labs" 
            className={`nav-link ${activeTab === 'labs' ? 'active' : ''}`}
            onClick={() => handleLinkClick('labs')}
          >
            Pricing
          </a>
          <a 
            href="#team" 
            className={`nav-link ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => handleLinkClick('team')}
          >
            Team
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            AboutUs
          </a>
        </nav>
        <a href='#join' className="hidden md:inline-block bg-blue-600 text-white py-2 px-4 rounded">Join Now</a>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </header>
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4">
          <Link
            to="/" 
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <a 
            href="#funds" 
            className={`nav-link ${activeTab === 'funds' ? 'active' : ''}`}
            onClick={() => handleLinkClick('funds')}
          >
            Features
          </a>
          <a 
            href="#labs" 
            className={`nav-link ${activeTab === 'labs' ? 'active' : ''}`}
            onClick={() => handleLinkClick('labs')}
          >
            Pricing
          </a>
          <a 
            href="#team" 
            className={`nav-link ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => handleLinkClick('team')}
          >
            Team
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            AboutUs
          </a>
          <a href='#join' className="bg-blue-600 text-white py-2 px-4 rounded">Join Now</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
