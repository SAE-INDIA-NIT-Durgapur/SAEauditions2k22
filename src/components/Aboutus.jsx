import React from 'react';
import Posts from './Subdomain/Posts';
import '../CSS/aboutus.css';

const Aboutus = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Posts title="About SAE-NITD" text="The team at SAE comprises of fervent and steadfast individuals who believe in performing efficiently in order to conduct feats of great magnitude for the club. A team which effectively innovates and puts thoughts on existing problems, SAE has always displayed a persistent strife to instill amongst the students of our institute with a passion for the automation industry, through a plethora of mediums." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Our events over the year</h1>
      {/* <p>Explore the works</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Posts title="Aarohan" text="As a member club of Team Aavishkar, we conduct Aarohan, eastern India’s second largest techno-management fest.We have organised various events like Electra,Autosharx and many more." />
      <Posts title="TEDxNITDurgapur" text="TEDx is an independently organised talk event under the parent organisation TED. With the sublime motive of spreading unique ideas, innovations and evolving thought processes, TEDx events often host great personalities from all walks of life." />
      <Posts title="F.I.S.T." text="The “Forum for Ideas on Science and Technology - F.I.S.T”, which comprises a plethora of events ranging from webinars to workshops. This initiative aims to create a more conducive environment in our institution for carrying out projects utilising the technologies discussed and hopes to promote constructive discussions about the same." />
    </div>
  </div>
);

export default Aboutus;