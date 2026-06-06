import React from 'react'

export default function Skills() {
  return (
    <section className="about section" id="skills">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="My">
            Skills
          </h3>
          <p className="text">
            "Skills are the bridge between potential and success."
          </p>
        </div>
        <div className="container-skills">
          <img src="./img/shapes/points3.png" alt="" className="points points-sq" loading="lazy" />
          <img
            src="./img/Screenshot 2025-01-01 180244.png"
            className="letter-skills"
            alt=""
            loading="lazy"
          />
          <img
            src="./img/shapes/circle.png"
            alt=""
            className="shape shape-circle"
            loading="lazy"
          />
          <img
            src="./img/shapes/square.png"
            alt=""
            className="shape shape-square"
            loading="lazy"
          />
          <img src="./img/shapes/wave.png" alt="" className="shape shape-wave" loading="lazy" />
          
          <div className="skills-container">
            <div className="skills-grid">
              
              <div className="skills-section">
                <h4>
                  <img
                    src="./img/Screenshot 2025-01-01 194153.png"
                    alt=""
                    className="skills-icon 1"
                  />
                  Programming Languages
                </h4>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
                  <li>C</li>
                  <li>C++</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Solidity</li>
                </ul>
              </div>

              <div className="skills-section">
                <h4>
                  <img
                    src="./img/Screenshot 2025-01-01 194153.png"
                    alt=""
                    className="skills-icon 2"
                  />
                  Web Development
                </h4>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Flask</li>
                  <li>Spring Boot</li>
                </ul>
              </div>

              <div className="skills-section">
                <h4>
                  <img
                    src="./img/Screenshot 2025-01-01 194153.png"
                    alt=""
                    className="skills-icon 3"
                  />
                  Databases
                </h4>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                </ul>
              </div>

              <div className="skills-section">
                <h4>
                  <img
                    src="./img/Screenshot 2025-01-01 194153.png"
                    alt=""
                    className="skills-icon 4"
                  />
                  Tools and Platforms
                </h4>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>MS Excel</li>
                </ul>
              </div>

              <div className="skills-section">
                <h4>
                  <img
                    src="./img/Screenshot 2025-01-01 194153.png"
                    alt=""
                    className="skills-icon 5"
                  />
                  Core
                </h4>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
                  <li>Data Structures &amp; Algorithms</li>
                  <li>OOP</li>
                  <li>REST APIs</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
