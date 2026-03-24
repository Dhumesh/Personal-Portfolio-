import React, { useState, useEffect } from 'react';
import './clubs.css';

const Clubs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

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

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 960) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const maxIndex = Math.max(clubs.length - visibleCards, 0);
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [clubs.length, visibleCards]);

  useEffect(() => {
    const maxIndex = Math.max(clubs.length - visibleCards, 0);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [clubs.length, currentIndex, visibleCards]);

  return (
    <section id="clubs">
      <h2 className="clubsTitle">Clubs & Organizations</h2>
      <span className="clubsDesc">Professional memberships and community involvement</span>
      
      <div className="clubsCarouselContainer">
        {/* Carousel Cards */}
        <div className="clubsCarousel">
          {clubs.slice(currentIndex, currentIndex + visibleCards).map((club) => (
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
