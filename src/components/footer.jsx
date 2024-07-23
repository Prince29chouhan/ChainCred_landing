import React, {useState} from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Foot = () => {
    const [activeTab, setActiveTab] = useState('home');
  return (
    <footer className="footer" id='footer'>
      <div className="footer-top">
        <div className="footer-logo">
          <span>ChainCred<span className="dot">.</span></span>
        </div>
        <div className="footer-links">
          <a href="#funds" className={`nav-link ${activeTab === 'funds' ? 'active' : ''}`}
            onClick={() => setActiveTab('funds')}>Funds</a>
          <a href="#labs" className={`nav-link ${activeTab === 'labs' ? 'active' : ''}`}
            onClick={() => setActiveTab('labs')}>Labs</a>
          <a href="#coming-soon" className={`nav-link ${activeTab === 'coming-soon' ? 'active' : ''}`}
            onClick={() => setActiveTab('coming-soon')}>Coming Soon</a>
          <a href="#team" className={`nav-link ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}>Team</a>

        </div>
        <div className="footer-social">
          <a href="#email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 ChainCred. All rights reserved.
      </div>
    </footer>
  );
};

export default Foot;
