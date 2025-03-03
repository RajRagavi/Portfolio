import React, { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
import Itcoordinates from '../../assest/img/itcoordinates.jpg';
import Aaraniyam from '../../assest/img/Aaraniyam.jpg';
import SuyambuBhoomi from '../../assest/img/SuyambuBhoomi.jpg';
import BulkEmail from '../../assest/img/BulkEmail.jpg';
import UlavTech from '../../assest/img/UlavTech.jpg';
import Nextgendi from '../../assest/img/Nextgendi.jpg';
import Maxtreme from '../../assest/img/Maxtreme.jpg';

const projects = [
  { title: "Aranyam", link: "https://aaraniyam.in/", image: Aaraniyam },
  { title: "Suyambu Bhoomi Balan Trust", link: "https://srisuyambuboomibalan.com/", image: SuyambuBhoomi },
  { title: "Ulav Tech", link: "#", image: UlavTech },
  { title: "Bulk Email Tool", link: "https://bulk-email-tool-tau.vercel.app/", image: BulkEmail },
  { title: "Nextgendi Solutions", link: "https://www.nextgendi.com/", image: Nextgendi },
  { title: "Maxtreme", link: "https://www.maxtreme.in/", image: Maxtreme },
  { title: "Itcoordinates", link: "https://itcoordinates.in.net/", image: Itcoordinates },
];

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="portfolio-container">
      <h2 data-aos="fade-down" className="portfolio-title">My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index} data-aos="zoom-in">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h3>{project.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
