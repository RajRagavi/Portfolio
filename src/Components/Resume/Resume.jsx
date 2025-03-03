import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Resume.css";

function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="resume-container">
      <h2 className="resume-title" data-aos="fade-down">
        My Resume
      </h2>
      <p className="resume-text" data-aos="fade-up">
        Download my resume to explore my skills and experience.
      </p>
      
      <a href="/assets/resume.pdf" className="download-btn" download data-aos="zoom-in">
        Download Resume
      </a>
      
      <iframe 
        src="/assets/resume.pdf" 
        className="resume-viewer" 
        title="Resume Preview"
        data-aos="fade-up"
      ></iframe>
    </div>
  );
}

export default Resume;
