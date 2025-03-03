import React from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaUser,
  FaBriefcase,
  FaPenFancy,
  FaEnvelope,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h3>{isOpen ? "R Ragavi" : "R"}</h3>
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome /> <span>{isOpen && "Home"}</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle /> <span>{isOpen && "About"}</span>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FaInfoCircle /> <span>{isOpen && "Skills"}</span>
            </Link>
          </li>
          <li>
            <Link to="/resume">
              <FaUser /> <span>{isOpen && "Resume"}</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <FaBriefcase /> <span>{isOpen && "Portfolio"}</span>
            </Link>
          </li>
         
          <li>
            <Link to="/contact">
              <FaEnvelope /> <span>{isOpen && "Contact"}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
