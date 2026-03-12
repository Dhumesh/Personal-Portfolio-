import React, { useState, useEffect } from 'react';
import './clubs.css';

const Clubs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clubs = [
    {
      id: 1,
      name: "MS Club of SLIIT",
      description: "Member",
      image: require('../../img/ms_club.png')
    },
    {
      id: 2,
      name: "MS Club of SLIIT",
      description: "Alpha Member",
      image: require('../../img/ms_club.png')
    },
    {
      id: 3,
      name: "SLIIT Women In FOSS Community",
      description: "Volunteer",
      image: require('../../img/foss.png')
    },
    {
      id: 4,
      name: "Leo Club of Colombo Centrum",
      description: "Assistant Secretary",
      image: require('../../img/leo.png')
    },
    {
      id: 5,
      name: "SLIIT Faculty of Computing Students Community",
      description: "Volunteer",
      image: require('../../img/fcsc.png')
    },
    {
      id: 6,
      name: "SLIIT Gavel Club",
      description: "Member",
      image: require('../../img/sliitgavel.jpg')
    },
    {
      id: 7,
      name: "Leo Club of Colombo Centrum",
      description: "Member",
      image: require('../../img/leo.png')
    },
    {
      id: 8,
      name: "Sasnaka Sansada Foundation",
      description: "Member",
      image: require('../../img/ssf.png')
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === clubs.length - 4 ? 0 : prevIndex + 1));
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [clubs.length]);

  return (
    <section id="clubs">
      <h2 className="clubsTitle">Clubs & Organizations</h2>
      <span className="clubsDesc">Professional memberships and community involvement</span>
      
      <div className="clubsCarouselContainer">
        {/* Carousel Cards */}
        <div className="clubsCarousel">
          {clubs.slice(currentIndex, currentIndex + 4).map((club) => (
            <div key={club.id} className="clubCard">
              <div className="clubImageCircle">
                <img src={club.image} alt={club.name} />
              </div>
              <h3>{club.name}</h3>
              <p className="clubDescription">{club.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;
