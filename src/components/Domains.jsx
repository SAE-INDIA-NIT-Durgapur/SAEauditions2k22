import React from 'react';
import Posts from './Subdomain/Posts';
import '../CSS/domains.css';

const featuresData = [
  {
    title: 'Event Management',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Autonomus',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Robotics',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Web-Developement',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Graphics Designing',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
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