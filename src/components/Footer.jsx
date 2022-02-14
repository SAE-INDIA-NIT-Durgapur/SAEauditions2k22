import React from 'react';
// import gpt3Logo from '../../logo.svg';
import '../CSS/footer.css';
import logo from '../assets/sae_logo.png'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" style={{width:"50%", height:"50%"}}/>
      
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="https://www.saenitd.com/"><p>Home</p></a>
        <p>About Us</p>
        {/* <p>Contact</p> */}
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <a href="Mailto:sae.nitdgp1@gmail.com"><p>sae.nitdgp1@gmail.com</p></a>
        <p>  <b>Anurag :</b>  +91 6386 849 227
        <br/><b>Sukanya :</b> +91 8250 323 647</p>
        {/* <a href="https://www.saenitd.com/"><p>www.saenitd.com</p></a> */}
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 SAEINDIA-NITD. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;