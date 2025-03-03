import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';
import profileImg from '../../assest/img/Aboutme.jpg'; // Replace with your image path

const skills = [
  { name: "React", level: 75 },
  { name: "HTML5/CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 50 },
  { name: "SQL", level: 90 }
];

const Skills = () => {
  const [progress, setProgress] = useState(
    skills.map(() => 0) // Initialize all skills to 0% (for animation)
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Animate the progress bars on mount
    setTimeout(() => {
      setProgress(skills.map(skill => skill.level)); // Update to actual skill levels
    }, 500);
  }, []);

  return (
    <section className="skills-section">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title" data-aos="fade-up">Technical Skills</h1>
        </div>
        <div className="row align-items-center">
          {/* Skills Section */}
          <div className="col-lg-6 skills-content">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" data-aos="zoom-in">
                  <CircularProgressbar
                    value={progress[index]} // Animated Progress
                    text={`${progress[index]}%`}
                    styles={buildStyles({
                      textColor: "#ffff",
                      pathColor: "#ff6600",
                      trailColor: "#ffff",
                      transition: "stroke-dashoffset 2s ease-in-out" // Smooth animation
                    })}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="col-lg-6 text-center">
            <div className="image-container" data-aos="fade-left">
              <img src={profileImg} alt="My Profile" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
