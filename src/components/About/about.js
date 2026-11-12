import React, { useState } from 'react';
import './about.css';
import ifLogo from '../../img/if.png';
import insfraLogo from '../../img/insfra.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [expandedExperience, setExpandedExperience] = useState(null);

  const technicalSkills = [
    { name: 'HTML', logo: null },
    { name: 'CSS', logo: null },
    { name: 'JavaScript', logo: null },
    { name: 'React', logo: null },
    { name: 'React Native', logo: null },
    { name: 'Tailwind CSS', logo: null },
    { name: 'Bootstrap', logo: null },
    { name: 'WordPress', logo: null },
    { name: 'Java', logo: null },
    { name: 'Python', logo: null },
    { name: 'C', logo: null },
    { name: 'C++', logo: null },
    { name: 'PHP', logo: null },
    { name: 'R', logo: null },
    { name: 'Kotlin', logo: null },
    { name: 'TypeScript', logo: null },
    { name: 'Express.js', logo: null },
    { name: 'Node.js', logo: null },
    { name: 'Spring Boot', logo: null },
    { name: 'Git', logo: null },
    { name: 'GitHub', logo: null },
    { name: 'Adobe XD', logo: null },
    { name: 'Figma', logo: null },
    { name: 'Canva', logo: null },
    { name: 'JWT', logo: null },
    { name: 'RESTful APIs', logo: null },
    { name: 'Swagger', logo: null },
    { name: 'Postman', logo: null },
    { name: 'MongoDB', logo: null },
    { name: 'MySQL', logo: null },
    { name: 'Oracle', logo: null }
  ];

  const softSkills = ['Time Management', 'Self-Motivation', 'Effective Communication', 'Self-Discipline', 'Problem-Solving', 'Critical Thinking', 'Adaptability', 'Flexibility'];

  const experience = [
    {
      id: 'if-solutions',
      title: 'Web Developer Intern',
      company: 'IF Solutions (Pvt) Ltd.',
      period: 'July 2026 - Present',
      logo: ifLogo,
      highlights: [
        'Develop responsive, user-friendly websites for global and Sri Lankan clients, with hands-on experience building four websites to client requirements.',
        'Select suitable designs, prepare frontend layouts with HTML, CSS, JavaScript, and Bootstrap, and present designs to clients for approval.',
        'Collaborate with the backend team to integrate frontend components and deliver complete websites.',
        'Integrate WordPress, customize features, manage website content, and test functionality.',
        'Create page descriptions, service details, and other website content; support digital marketing with social media posts, captions, promotional content, and SEO strategies to improve visibility and engagement.'
      ]
    },
    {
      id: 'insfra',
      title: 'Full Stack Web Development and SEO Intern',
      company: 'Insfra Technologies (Pvt) Ltd.',
      period: 'January 2026 - July 2026',
      logo: insfraLogo,
      highlights: [
        'Developed and maintained web applications using HTML, CSS, JavaScript, PHP, and React.',
        'Contributed to frontend and full-stack development by implementing website features and improving user interfaces for UK and Sri Lankan clients.',
        'Managed Google Search Console to monitor website performance, analyze search visibility, and improve online reach, particularly for UK audiences.',
        'Created and published Medium articles to support digital marketing, improve content visibility, and enhance website reach.'
      ]
    },
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
                {experience.map((exp) => {
                  const isExpanded = expandedExperience === exp.id;

                  return (
                    <article key={exp.id} className="experienceItem">
                      {exp.highlights ? (
                        <>
                          <button
                            type="button"
                            className="experienceToggle"
                            aria-expanded={isExpanded}
                            aria-controls={`experience-details-${exp.id}`}
                            onClick={() => setExpandedExperience(isExpanded ? null : exp.id)}
                          >
                            <img className="experienceLogo" src={exp.logo} alt={`${exp.company} logo`} />
                            <span className="experienceDetails">
                              <span className="experienceRole">{exp.title}</span>
                              <span className="experienceCompany">{exp.company}</span>
                              <span className="experiencePeriod">{exp.period}</span>
                            </span>
                            <span className="experienceChevron" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                          </button>
                          <div
                            id={`experience-details-${exp.id}`}
                            className="experienceExpanded"
                            hidden={!isExpanded}
                          >
                            <ul>
                              {exp.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <div className="experienceStatic">
                          <img className="experienceLogo" src={exp.logo} alt={`${exp.company} logo`} />
                          <div className="experienceDetails">
                            <h3>{exp.title}</h3>
                            <p>{exp.company}</p>
                            <p>{exp.period}</p>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
