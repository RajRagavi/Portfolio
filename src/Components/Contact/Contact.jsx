import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
    
      <div className="contact-info" data-aos="fade-up">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> Ragavi R</p>
        <p><strong>Phone:</strong> 9092687531</p>
        <p><strong>Email:</strong> <a href="mailto:ragavi5901@gmail.com">ragavi5901@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/RajRagavi/" target="_blank" rel="noopener noreferrer">github.com/RajRagavi</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ragavi-rajasekaran" target="_blank" rel="noopener noreferrer">linkedin.com/in/ragavi-rajasekaran</a></p>
        <p><strong>Location:</strong> Chennai</p>
      </div>
    </div>
  );
};

export default Contact;
