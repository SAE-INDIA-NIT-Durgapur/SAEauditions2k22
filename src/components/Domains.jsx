import React from 'react';
import Posts from './Subdomain/Posts';
import '../CSS/domains.css';

const featuresData = [
  {
    title: 'Event Management',
    text: 'Well the best metaphor could be the string of a necklace without whom the beads are scattered. Management teams role includes filling gaps here and there, which may include logistics, interaction with the administration regarding permissions and stuff,we also have a bunch of content writers who take care of the textual content be it write-ups, poster content, MOUs.',
  },
  {
    title: 'Automobile',
    text: 'Automobile team in general makes automatic robots or self-driving vehicles like Tesla, Google and others have been working on. Similarly manual robotics guys conduct similar workshops where they built manual bots.',
  },
  {
    title: 'Robotics',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Web-Developement',
    text: 'The WebD team of SAE nit Durgapur has kept up the spirits of the club and has designed, developed and conducted a lot of events all the year.',
  },
  {
    title: 'Graphics Designing',
    text: 'Being in this field, it express and superimpose our artistic and cinematic minds in different aspects be it posters, trailers, crypTech videos, aftermovies, MAGAZINES merchandise designing, logo designing.',
  },
];

const Domains = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Lets have a look at the domains</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Posts title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Domains;