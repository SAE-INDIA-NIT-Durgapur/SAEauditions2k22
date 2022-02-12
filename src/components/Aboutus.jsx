import React from 'react';
import Posts from './Subdomain/Posts';
import '../CSS/aboutus.css';

const Aboutus = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Posts title="About SAENITD" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Our events over the year</h1>
      <p>Explore the works</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Posts title="AAhoran" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Posts title="TEdxNITDURGAPUR" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Posts title="SAE exclusive events" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default Aboutus;