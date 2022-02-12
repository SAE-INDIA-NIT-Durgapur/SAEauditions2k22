import React from 'react';
// import gpt3Logo from '../../logo.svg';
import '../CSS/footer.css';
import logo from '../assets/sae_logo.png'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>Society of Automotive Engineers NIT Durgapur Chapter Collegative, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>emaild id</p>
        <p>085-132567</p>
        <p>website link</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 SAEINDIA-NITD. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;