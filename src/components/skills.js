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
      <img src="./img/shapes/points3.png" alt="" className="points points-sq" />
      <img
        src="./img/Screenshot 2025-01-01 180244.png"
        className="letter-skills"
        alt=""
      />
      <img
        src="./img/shapes/circle.png"
        alt=""
        className="shape shape-circle"
      />
      <img
        src="./img/shapes/square.png"
        alt=""
        className="shape shape-square"
      />
      <img src="./img/shapes/wave.png" alt="" className="shape shape-wave" />
      <div className="skills-container">
        <div className="skills-grid">
          <div className="skills-section">
            <img
              src="./img/Screenshot 2025-01-01 194153.png"
              alt=""
              className="skills-icon 1"
            />
            <h4>Programming Languages</h4>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="skills-section">
            <img
              src="./img/Screenshot 2025-01-01 194153.png"
              alt=""
              className="skills-icon 2"
              style={{ left: 167 }}
            />
            <h4> Web Development</h4>
            <ul>
            <li>React.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>UI/UX</li>
            </ul>
          </div>


          <div className="skills-section">
            <img
              src="./img/Screenshot 2025-01-01 194153.png"
              alt=""
              className="skills-icon 3"
              style={{ left: 160 }}
            />
            <h4>Tools and Platforms</h4>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
            </ul>
          </div>


          <div className="skills-section">
            <img
              src="./img/Screenshot 2025-01-01 194153.png"
              alt=""
              className="skills-icon 4"
              style={{ left: 178 }}
            />
            <h4>Additional Skills</h4>
            <ul>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
            </ul>
          </div>

{/* futher skill sections */}
          {/* <div className="skills-section">
            <img
              src="./img/Screenshot 2025-01-01 194153.png"
              alt=""
              className="skills-icon 3"
              style={{ left: 160 }}
            />
            <h4>Tools and Platforms</h4>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Visual Studio</li>
              <li>Figma</li>
              <li>VS Code</li>
            </ul>
          </div> */}




        </div>
      </div>
    </div>
  </div>
</section>

  )
}
