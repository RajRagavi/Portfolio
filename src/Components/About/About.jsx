import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import AboutMe from '../../assest/img/Aboutme.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section">
      
      <div className="container">
      <div className="text-center">
  <h1 className="section-title" data-aos="fade-up">About</h1>
</div>
        <div className="row align-items-center">
          
       
          <div className="col-lg-6 text-center" data-aos="fade-right">
            <div className="image-container">
              <img src={AboutMe} alt="Developer" className="about-image" data-aos="zoom-in" />
              
              <span className="tech-icon react" data-aos="bounce"><FaReact /></span>
              <span className="tech-icon html" data-aos="zoom-in"><FaHtml5 /></span>
              <span className="tech-icon css" data-aos="zoom-in"><FaCss3Alt /></span>
              <span className="tech-icon node" data-aos="fade-up"><FaNodeJs /></span>
              <span className="tech-icon mysql" data-aos="flip-left"><SiMysql /></span>
              <span className="tech-icon mongodb" data-aos="flip-right"><SiMongodb /></span>
            </div>
          </div>

      
          <div className="col-lg-6 about-text">
           
            <h2  className='sub-title' data-aos="fade-left">Who Am I</h2>
            <p data-aos="fade-up">
              Passionate front-end developer specializing in React.js, Next.js, and JavaScript (ES6+), crafting modern and responsive web applications.
            </p>
            <h4 className='sub-title' data-aos="fade-right">Versatile Developer</h4>
            <p data-aos="fade-up">
              With 7+ years of experience, I have built scalable e-commerce platforms, bulk email tools, and dynamic websites, leveraging SQL, MongoDB, and RESTful APIs.
            </p>
            <h4 className='sub-title' data-aos="fade-right">Tech Enthusiast</h4>
            <p data-aos="fade-up">
              I stay updated with the latest trends, integrating Tailwind CSS, AOS animations, and cloud services (AWS, Azure) to deliver top-notch digital solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
