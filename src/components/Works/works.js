import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './works.css';
import Portfolio1 from '../../img/portfolio-1.png';
import Portfolio2 from '../../img/portfolio-2.png';
import Portfolio3 from '../../img/portfolio-3.png';
import Portfolio4 from '../../img/portfolio-4.png';
import Portfolio5 from '../../img/portfolio-5.png';
import Portfolio6 from '../../img/portfolio-6.png';
import Portfolio7 from '../../img/portfolio-7.png';

const Works = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      id: 1,
      image: Portfolio1,
      title: "Online Auction System",
      description: "A web platform where users can bid on items, make secure payments, and track auction history.",
      link: "https://github.com/Dhumesh/Online-Auction-System"
    },
    {
      id: 2,
      image: Portfolio2,
      title: "Online Gaming Site",
      description: "An interactive website that allows users to play games, invite friends, and provide feedback, with admin management.",
      link: "https://github.com/Dhumesh/Online-Gaming-Site"
    },
    {
      id: 3,
      image: Portfolio3,
      title: "Car & Bike Rental System",
      description: "A rental system for foreigners to book cars and bikes with secure USD payments and admin control.",
      link: "https://github.com/Dhumesh/AutoRentHub.git"
    },
    {
      id: 4,
      image: Portfolio4,
      title: "Recycling Mobile App",
      description: "A user-friendly recycling app that lets users add recyclable items, earn money, and schedule pickups.",
      link: "https://www.figma.com/design/1DQcOAXdYWJsLgENErd9G1/Projects?node-id=0-1&t=Mcbu6XrxegD7E3aL-1"
    },
    {
      id: 5,
      image: Portfolio5,
      title: "Coffee Shop Mobile App",
      description: "A mobile app that allows users to browse the menu, customize coffee orders, add to cart, and place orders easily.",
      link: "https://github.com/Dhumesh/BrewMaster.git"
    },
    {
      id: 6,
      image: Portfolio6,
      title: "Universal Site Updater",
      description: "A lightweight PHP tool for syncing and updating website files without a database, compatible with shared hosting.",
      link: "https://github.com/Dhumesh/Universal-Site-Updater.git"
    },
    {
      id: 7,
      image: Portfolio7,
      title: "Collaborative Note-Taking App",
      description: "A MERN note-taking app with JWT auth, search, collaborators, and a rich text editor.",
      link: null
    }
  ];

  const displayedProjects = showMore ? projects : projects.slice(0, 4);

  return (
    <section id='works'>
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">Here are some of my projects. I have worked on web development, mobile apps, and UI/UX design.</span>
      <div className="worksImgs">
        {displayedProjects.map((project) => (
          project.id === 1 ? (
            <Link
              to="/universal-site-updater"
              key={project.id}
              className="worksImgContainer"
            >
              <img src={project.image} alt={project.title} className="worksImg" />
              <div className="worksLayer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ) : project.link ? (
            <a
              key={project.id}
              href={project.link}
              className="worksImgContainer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.title} className="worksImg" />
              <div className="worksLayer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ) : (
            <div key={project.id} className="worksImgContainer">
              <img src={project.image} alt={project.title} className="worksImg" />
              <div className="worksLayer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          )
        ))}
      </div>
      <button className="workBtn" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'See More'}
      </button>
    </section>
  );
}

export default Works;
