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
      <Posts title="F.I.S.T." text="College events shape the social and intellectual fabric of our college's campus. College students, especially freshmen, want new and authentic ways to connect.We conduct various events all the year round to stand out and improve student engagement with our event ideas." />
    </div>
  </div>
);

export default Aboutus;