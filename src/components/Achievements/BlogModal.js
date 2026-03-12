import React from 'react';
import './blogModal.css';
import mini1 from '../../img/min1.jpg';
import hac from '../../img/hac.jpg';

const BlogModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={onClose}>✕</button>
        
        <article className="blogPost">
          <div className="blogHeader">
            <img src={hac} alt="Mini Hackathon" className="blogHeaderImage" />
            <h1>Mini Hackathon 2025 – Finalist Experience</h1>
            <p className="blogMeta">Organized by MS Club, SLIIT</p>
          </div>

          <section>
            <h2>Introduction</h2>
            <p>Mini Hackathon 2025, organized by the MS Club of SLIIT, was an exciting and challenging event that brought together innovative student teams. I participated as a member of Team Tech Titans, a group of four students passionate about solving real-world problems using technology.</p>
          </section>

          <section>
            <h2>Our Idea – EleSafe Rail</h2>
            <p>Sri Lanka's railway lines pass through areas where elephants live. Sadly, train–elephant collisions have become a serious issue, causing harm to elephants, passengers, and railway services.</p>
            <p>To address this problem, our team developed EleSafe Rail, a smart, low-cost, and scalable mobile application.</p>
            
            <h3>The main goals of EleSafe Rail:</h3>
            <ul>
              <li>🐘 Protect endangered elephants</li>
              <li>🚆 Improve passenger safety</li>
              <li>⏱️ Increase railway efficiency</li>
            </ul>
            <p>The app focuses on early warnings and smart solutions to reduce accidents and improve coordination.</p>
          </section>

          <section>
            <h2>Our Journey to the Final Round</h2>
            <p>Out of many teams, EleSafe Rail was selected among the Top 10 finalists based on its innovation, practicality, and social impact. Reaching the final round itself was a proud moment for our entire team.</p>
            <p>During the final stage, we worked hard to clearly explain our idea and show how our solution could make a real difference.</p>
            <img src={mini1} alt="Mini Hackathon Event" className="blogImage" />
          </section>

          <section>
            <h2>Design & Presentation</h2>
            <p>For the final presentation, we used Figma to:</p>
            <ul>
              <li>Design the mobile app interface</li>
              <li>Improve the overall look and user experience</li>
              <li>Present our idea more clearly and professionally</li>
            </ul>
            <p>Using Figma helped us communicate our solution better to the judges.</p>
          </section>

          <section>
            <h2>Challenges We Faced</h2>
            <p>The final round was not only about technical skills. We also faced challenges related to:</p>
            <ul>
              <li>Mental pressure</li>
              <li>Stage fear</li>
              <li>Social interaction and communication</li>
            </ul>
            <p>Despite these challenges, we supported each other as a team and gained valuable experience in handling pressure and presenting confidently.</p>
          </section>

          <section>
            <h2>What I Learned</h2>
            <p>This hackathon taught me:</p>
            <ul>
              <li>How to work effectively in a team</li>
              <li>How to manage stress in competitive environments</li>
              <li>The importance of clear communication and design</li>
              <li>How technology can be used to solve real social and environmental problems</li>
            </ul>
          </section>

          <section>
            <h2>Conclusion</h2>
            <p>Being a Finalist at Mini Hackathon 2025 was a memorable and motivating experience. It strengthened my confidence, improved my teamwork skills, and encouraged me to keep building meaningful solutions using technology.</p>
            <p>I am proud to have been part of Team Tech Titans and grateful to the MS Club of SLIIT for organizing such an inspiring event.</p>
          </section>
        </article>
      </div>
    </div>
  );
}

export default BlogModal;
