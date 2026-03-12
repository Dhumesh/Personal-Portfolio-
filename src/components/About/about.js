import React, { useState } from 'react';
import './about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'HTML', logo: null },
    { name: 'CSS', logo: null },
    { name: 'JavaScript', logo: null },
    { name: 'React', logo: null },
    { name: 'Java', logo: null },
    { name: 'Python', logo: null },
    { name: 'C', logo: null },
    { name: 'C++', logo: null },
    { name: 'PHP', logo: null },
    { name: 'R', logo: null },
    { name: 'Kotlin', logo: null },
    { name: 'SQL', logo: null },
    { name: 'Express.js', logo: null },
    { name: 'Adobe XD', logo: null },
    { name: 'Android Studio', logo: null },
    { name: 'Git', logo: null },
    { name: 'Jira', logo: null },
    { name: 'Node.js', logo: null },
    { name: 'MongoDB', logo: null },
    { name: 'MySQL', logo: null }
  ];

  const softSkills = ['Time Management', 'Self-Motivation', 'Effective Communication', 'Self-Discipline', 'Problem-Solving', 'Critical Thinking', 'Adaptability', 'Flexibility'];

  const experience = [
    {
      title: 'Software Engineering Intern',
      description: 'Insfra Technologies (Pvt) Ltd. | Jan 2026 - Present'
    },
    {
      title: 'Entrepreneurship Trainee',
      description: 'Insfra Technologies (Pvt) Ltd. | Dec 2025 - Jan 2026'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="aboutContainer">
        <div className="aboutContent">
          <h2 className="aboutTitle">About Me</h2>

          <p className="aboutDescription">
            A motivated SE undergraduate with strong communication, teamwork, and leadership skills. Skilled in managing tasks efficiently and adapting to changing situations. Focused on achieving high-quality results with great attention to detail. Eager to learn, grow, and contribute to meaningful projects within a collaborative team environment.
          </p>

          <div className="aboutTabs">
            <button
              className={`tabBtn ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Skills
            </button>
            <button
              className={`tabBtn ${activeTab === 'soft' ? 'active' : ''}`}
              onClick={() => setActiveTab('soft')}
            >
              Soft Skills
            </button>
            <button
              className={`tabBtn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
          </div>

          <div className="skillsContainer">
            {activeTab === 'technical' && (
              <div className="skillsList">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skillTagWithLogo">
                    <span className="skillTag">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'soft' && (
              <div className="skillsList">
                {softSkills.map((skill, index) => (
                  <span key={index} className="skillTag">{skill}</span>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="experienceList">
                {experience.map((exp, index) => (
                  <div key={index} className="experienceItem">
                    <h3>{exp.title}</h3>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
