import React, { useEffect, useState } from 'react';
import './certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Front-End Web Development',
    issuer: "University of Moratuwa's Open Learning Platform",
    date: 'Nov 2025',
    description: 'Covering HTML, CSS, JavaScript, jQuery, AJAX, and Angular',
    image: require('../../img/c1.png'),
  },
  {
    id: 2,
    title: 'Python for Beginners',
    issuer: "University of Moratuwa's Open Learning Platform",
    date: 'Nov 2025',
    description:
      'Acquired foundational skills in Python programming, focusing on coding basics and problem-solving techniques.',
    image: require('../../img/c2.png'),
  },
  {
    id: 3,
    title: 'MiniHackathon 2025 Final Round (Top 10 Finalist)',
    issuer: 'MS Club of SLIIT',
    date: 'Oct 2025',
    description:
      'Member of Team Tech Titans, contributing to innovative projects and real-world solutions.',
    image: require('../../img/c3.jpg'),
  },
  {
    id: 4,
    title: 'UI/UX for Beginners',
    issuer: 'Great Learning',
    date: 'Dec 2024',
    description: 'Learned basics of UI/UX design to create user-friendly interfaces.',
    image: require('../../img/c4.jpg'),
  },
  {
    id: 5,
    title: 'C++',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    description: 'Built strong foundations in C++ programming and problem-solving.',
    image: require('../../img/c5.jpg'),
  },
  {
    id: 6,
    title: 'Front End Development-HTML',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    description: 'Gained practical skills in HTML for structured and interactive web pages.',
    image: require('../../img/c6.jpg'),
  },
  {
    id: 7,
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: 'Nov 2024',
    description: 'Understood object-oriented concepts and developed applications using Java.',
    image: require('../../img/c7.jpg'),
  },
  {
    id: 8,
    title: 'Web Design for Beginners',
    issuer: "University of Moratuwa's Open Learning Platform",
    date: 'Nov 2024',
    description:
      'Learned the fundamentals of web design, creating visually appealing and user-friendly websites.',
    image: require('../../img/c8.png'),
  },
  {
    id: 9,
    title: 'Diploma in English',
    issuer: 'Warlton International Campus',
    date: 'March 2024',
    description:
      'Enhanced language proficiency and communication skills through an online English diploma at Warlton International Campus.',
    image: require('../../img/c9.jpg'),
  },
  {
    id: 10,
    title: 'Certificate in Graphic Design & Animation Course',
    issuer: 'Zonal Information & Communication Technology Education Centre-Haliela',
    date: 'Oct 2023',
    description:
      'Mastered visual communication fundamentals, design tools, and animation basics.',
    image: require('../../img/c10.jpg'),
  },
  {
    id: 11,
    title: 'Online Spoken English Course',
    issuer: 'English Partner',
    date: 'Sep 2023',
    description:
      'Intermediate level online spoken English course focused on communication skills and fluency.',
    image: require('../../img/c11.jpg'),
  },
  {
    id: 12,
    title: 'Certificate in Information Technology',
    issuer: 'ETS Computer Training Centre',
    date: 'Sep 2020',
    description:
      'Covered foundational IT concepts, software applications, and practical technical skills.',
    image: require('../../img/c12.jpg'),
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 960) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(certificates.length - visibleCards, 0);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, visibleCards]);

  const handlePrev = () => {
    const maxIndex = Math.max(certificates.length - visibleCards, 0);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    const maxIndex = Math.max(certificates.length - visibleCards, 0);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <section id="certificates">
      <h2 className="certificatesTitle">Certificates</h2>
      <span className="certificatesDesc">
        Professional certifications and credentials
      </span>

      <div className="certificatesCarouselContainer">
        <button
          className="carouselArrow prevArrow"
          onClick={handlePrev}
          aria-label="Previous certificates"
        >
          &#10094;
        </button>

        <div className="certificatesCarousel">
          {certificates.slice(currentIndex, currentIndex + visibleCards).map((cert) => (
            <div
              key={cert.id}
              className="certificateCarouselCard"
              onClick={() => setSelectedCert(cert)}
              style={{ cursor: 'pointer' }}
            >
              <div className="certificateCardImage">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificateCardContent">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carouselArrow nextArrow"
          onClick={handleNext}
          aria-label="Next certificates"
        >
          &#10095;
        </button>
      </div>

      {selectedCert && (
        <div className="certificateModalOverlay" onClick={() => setSelectedCert(null)}>
          <div className="certificateModal" onClick={(e) => e.stopPropagation()}>
            <button
              className="closeButton"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate modal"
            >
              &times;
            </button>
            <div className="modalContent">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="modalImage"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
