import React, { useState } from 'react';
import './achievements.css';
import BlogModal from './BlogModal';

const Achievements = () => {
  const [blogOpen, setBlogOpen] = useState(false);

  const achievement = {
    id: 1,
    title: 'Mini Hackathon 2025 - Finalist',
    description:
      'Finalist as part of Team Tech Titans, developing EleSafe Rail, a smart mobile app to protect elephants and improve railway safety and efficiency. Designed the app UI using Figma and ranked in the Top 10 teams for innovation and impact.',
    image: require('../../img/c3.jpg'),
  };

  return (
    <>
      <section id="achievements">
        <h2 className="achievementsTitle">Achievements</h2>
        <span className="achievementsDesc">
          Milestones and accomplishments in my development journey
        </span>
        <div className="achievementsContainer">
          <div className="achievementCard">
            <div className="achievementContent">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <button
                type="button"
                className="readMoreLink"
                onClick={() => {
                  setBlogOpen(true);
                }}
              >
                Read More
              </button>
            </div>
            <div className="achievementImage">
              <img src={achievement.image} alt={achievement.title} />
            </div>
          </div>
        </div>
      </section>
      <BlogModal isOpen={blogOpen} onClose={() => setBlogOpen(false)} />
    </>
  );
};

export default Achievements;
