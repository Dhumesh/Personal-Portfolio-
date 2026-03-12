import React, { useState } from 'react';
import './certificates.css';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 3 ? 0 : prevIndex + 1));
  };

  const handleCardClick = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const certificates = [
    {
      id: 1,
      title: "Front-End Web Development",
      issuer: "University of Moratuwa’s Open Learning Platform",
      date: "Nov 2025",
      description: "Covering HTML, CSS, JavaScript, jQuery, AJAX, and Angular",
      image: require('../../img/c1.png')
    },
    {
      id: 2,
      title: "Python for Beginners",
      issuer: "University of Moratuwa’s Open Learning Platform",
      date: "Nov 2025",
      description: "Acquired foundational skills in Python programming, focusing on coding basics and problem-solving techniques.",
      image: require('../../img/c2.png')
    },
    {
      id: 3,
      title: "MiniHackathon 2025 Final Round (Top 10 Finalist)",
      issuer: "MS Club of SLIIT",
      date: " Oct 2025",
      description: "Member of Team Tech Titans, contributing to innovative projects and real-world solutions.",
      image: require('../../img/c3.jpg')
    },
    {
      id: 4,
      title: "UI/UX for Beginners ",
      issuer: "Great Learning",
      date: "Dec 2024",
      description: "Learned basics of UI/UX design to create user-friendly interfaces.",
      image: require('../../img/c4.jpg')
    },
    {
      id: 5,
      title: "C++ ",
      issuer: "Great Learning",
      date: "Nov 2024",
      description: "Built strong foundations in C++ programming and problem-solving.",
      image: require('../../img/c5.jpg')
    },
    {
      id: 6,
      title: "Front End Development-HTML",
      issuer: "Great Learning",
      date: "Nov 2024",
      description: "Gained practical skills in HTML for structured and interactive web pages.",
      image: require('../../img/c6.jpg')
    },
    {
      id: 7,
      title: "Java Programming",
      issuer: "Great Learning",
      date: "Nov 2024",
      description: "Understood object-oriented concepts and developed applications using Java.",
      image: require('../../img/c7.jpg')
    },
    {
      id: 8,
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa’s Open Learning Platform",
      date: "Nov 2024",
      description: "DLearned the fundamentals of web design, creating visually appealing and user-friendly websites.",
      image: require('../../img/c8.png')
    },
    {
      id: 9,
      title: "Diploma in English",
      issuer: "Warlton International Campus ",
      date: "March 2024",
      description: "Enhanced language proficiency and communication skills through an online English diploma at Warlton International Campus.",
      image: require('../../img/c9.jpg')
    },
    {
      id: 10,
      title: "Certificate in Graphic Design & Animation Course",
      issuer: "Zonal Information & Communication Technology Education Centre-Haliela",
      date: "Oct 2023",
      description: "Master CI/CD pipelines, Docker, Kubernetes, and infrastructure automation.",
      image: require('../../img/c10.jpg')
    },
    {
      id: 11,
      title: "Online Spoken English Course",
      issuer: "English Partner",
      date: "Sep 2023",
      description: "Intermediate Level Online Spoken English course at English Partner, enhancing communication skills and fluency.",
      image: require('../../img/c11.jpg')
    },
    {
      id: 12,
      title: "Certificate in Information Technology",
      issuer: "ETS Computer Training Centre",
      date: "Sep 2020",
      description: "In-person attendance, covering foundational IT concepts, software applications, and technical skills.",
      image: require('../../img/c12.jpg')
    }
  ];

  return (
    <section id='certificates'>
      <h2 className="certificatesTitle">Certificates</h2>
      <span className="certificatesDesc">Professional certifications and credentials</span>
      
      <div className="certificatesCarouselContainer">
        {/* Left Arrow */}
        <button className="carouselArrow prevArrow" onClick={handlePrev}>❮</button>
        
        {/* Carousel Cards */}
        <div className="certificatesCarousel">
          {certificates.slice(currentIndex, currentIndex + 3).map((cert, index) => (
            <div 
              key={cert.id} 
              className="certificateCarouselCard"
              onClick={() => handleCardClick(cert)}
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
        
        {/* Right Arrow */}
        <button className="carouselArrow nextArrow" onClick={handleNext}>❯</button>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="certificateModalOverlay" onClick={closeModal}>
          <div className="certificateModal" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closeModal}>✕</button>
            <div className="modalContent">
              <img src={selectedCert.image} alt={selectedCert.title} className="modalImage" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;

