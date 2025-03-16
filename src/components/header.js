import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("stop-scrolling", !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("stop-scrolling");
  };
  return (
    <header id="header">
      <div className="overlay overlay-lg">
        <img src="./img/shapes/square.png" className="shape square" alt="" />
        <img src="./img/shapes/circle.png" className="shape circle" alt="" />
        <img
          src="./img/shapes/half-circle.png"
          className="shape half-circle1"
          alt=""
        />
        <img
          src="./img/shapes/half-circle.png"
          className="shape half-circle2"
          alt=""
        />
        <img
          src="./img/shapes/Screenshot 2024-12-30 203825.png"
          className="letters"
          alt=""
        />
        <img src="./img/shapes/x.png" className="shape xshape" alt="" />
        <img src="./img/shapes/wave.png" className="shape wave wave1" alt="" />
        <img src="./img/shapes/wave.png" className="shape wave wave2" alt="" />
        <img src="./img/shapes/triangle.png" className="shape triangle" alt="" />
        <img src="./img/shapes/points1.png" className="points points1" alt="" />
      </div>
      <nav>
        <div className="container">
          <div className="logo">
            <img src="./img/Screenshot 2024-12-30 202322.png" alt="" />
          </div>
          <div className={`links ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#header" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#certification" onClick={closeMenu}>
                  Certifications
                </a>
              </li>
              <li>
                <a href="#skills" onClick={closeMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar" />
          </div>
        </div>
      </nav>
      <div className="header-content">
        <div className="container grid-2">
          <div className="column-1">
            <h1 className="header-title">Ashley Almeida</h1>
            <p className="text">
              Hello, I'm Ashley Almeida, a motivated student and aspiring
              developer with a passion for coding and innovative problem-solving.
              I enjoy building projects, exploring new technologies, and
              continuously enhancing my skills to contribute effectively to the
              tech community.
            </p>
            <a
              href="https://drive.google.com/file/d/1mNLaH-NQdnHb7veiGaN01A7hmLA3LXcg/view?usp=sharing"
              className="btn"
               target="_blank"
  rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="column-2 image">
            <img
              src="./img/shapes/points2.png"
              className="points points2"
              alt=""
              fill="#191970"
            />
            <img src="./img/blog1.jpg" className="img-element z-index" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
