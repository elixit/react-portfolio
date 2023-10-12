import React from 'react';

import portfolioImg from '../../images/portfolio.png';
import quizImg from '../../images/quiz.png';
import calendarImg from '../../images/calender.png';  // Fix typo: Change 'calender' to 'calendar'
import noteTakerImg from '../../images/note-taker.png';  // Fix typo: Change 'nonte-taker' to 'note-taker'
import nodeHWImg from '../../images/node-hw.png';
import logoImg from '../../images/logo.png';

const projects = [
  {
    title: 'portfolio-hw',
    repoLink: 'https://github.com/elixit/Portfolio-hw',
    image: portfolioImg,
  }, 
  {
    title: 'quiz-hw',
    repoLink: 'https://github.com/elixit/quiz-hw',
    image: quizImg,
  },
  {
    title: 'calendar',
    repoLink: 'https://github.com/elixit/calendar-hw',
    image: calendarImg,
  },
  {
    title: 'note-taker',
    repoLink: 'https://github.com/elexit/note-taker',
    image: noteTakerImg,
  },
  {
    title: 'node-hw',
    repoLink: 'https://github.com/elixit/node-hw',
    image: nodeHWImg,
  },
  {
    title: 'logo-hw',
    repoLink: 'https://github.com/elixit/logo-hw',
    image: logoImg,
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img className="img-thumbnail" src={project.image} alt={project.title} />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-links">
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              Repository link
            </a>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed app
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
