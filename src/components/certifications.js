import React, { useEffect } from "react";
import Isotope from "isotope-layout";

export default function Certifications() {

  useEffect(() => {
    const grid = document.querySelector(".grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const iso = new Isotope(grid, {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
      transitionDuration: "0.6s",
    });

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");
        const filterValue = btn.getAttribute("data-filter");
        iso.arrange({ filter: filterValue === "*" ? "*" : filterValue });
      });
    });

    const items = document.querySelectorAll(".grid-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("is-visible");
      }, 100 * index);
    });

    return () => {
      filterButtons.forEach((btn) => {
        btn.removeEventListener("click", () => { });
      });
    };
  }, []);

  return (
    <section className="certificate section" id="certification">
      <div className="background-bg">
        <div className="overlay overlay-sm">
          <img src="./img/shapes/half-circle.png" className="shape half-circle1" alt="" loading="lazy" />
          <img src="./img/shapes/half-circle.png" className="shape half-circle2" alt="" loading="lazy" />
          <img src="./img/shapes/square.png" className="shape square" alt="" loading="lazy" />
          <img src="./img/shapes/wave.png" className="shape wave" alt="" loading="lazy" />
          <img src="./img/shapes/circle.png" className="shape circle" alt="" loading="lazy" />
          <img src="./img/shapes/triangle.png" className="shape triangle" alt="" loading="lazy" />
          <img src="./img/shapes/x.png" className="shape xshape" alt="" loading="lazy" />
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="My Work">Certifications</h3>
        </div>

        <div className="section-body">
          <div className="filter">
            <button className="filter-btn active" data-filter="*">All</button>
            <button className="filter-btn" data-filter=".ui">Programming-Languages</button>
            <button className="filter-btn" data-filter=".webdev">Web Dev</button>
            <button className="filter-btn" data-filter=".appdev">Hackathons</button>
            <button className="filter-btn" data-filter=".others">Others</button>
          </div>

          <div className="grid">
            {/* Grid items */}
            <div className="grid-item others">
              <div className="gallery-image">
                <img src="./img/Certification/J.P. Morgan_completion_certificate_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus"></div> */}
                  <div className="img-description">
                    <h4>Software Engineering Job Simulation</h4>
                    <h5>Credential ID <b>j3ZrSp93kbFkjgmFjCredential</b></h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item others">
              <div className="gallery-image">
                <img src="./img/Certification/Goldman Sachs_completion_certificate_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus"></div> */}
                  <div className="img-description">
                    <h4>Software Engineering Job Simulation</h4>
                    <h5>Credential ID <b>b5Ry9Sc8Pk8wDmSKA</b></h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item webdev">
              <div className="gallery-image">
                <img src="./img/Certification/React_Advanced_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  <div className="img-description">
                    <h3>Advanced React</h3>
                    <a href="https://www.coursera.org/account/accomplishments/verify/5LCLREZ91M4C" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="grid-item webdev">
              <div className="gallery-image">
                <img src="./img/Certification/intro_frontend_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>html and css</h3>
                    <a href="https://coursera.org/verify/KQXS6FCT7U40" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="grid-item webdev">
    <div className="gallery-image">
      <img src="./img/Certification/Html_css.jpg" alt="" />
      <div className="img-overlay">
        <div className="plus" />
        <div className="img-description">
          <h3>Web Development</h3>
          <a href="https://coursera.org/verify/Y84Y7DER37ZE"  target="_blank"
  rel="noopener noreferrer">
            View Credentials
          </a>
        </div>
      </div>
    </div>
  </div> */}


            <div className="grid-item  webdev">
              <div className="gallery-image">
                <img src="./img/Certification/version_control_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>Version Control</h3>
                    <a href="https://coursera.org/verify/WTPP8J1B4COQ" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>



            <div className="grid-item ui">
              <div className="gallery-image">
                <img
                  src="./img/Certification/certificate01_c++basics_page-0001.jpg "
                  alt=""
                  loading="lazy"

                />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>C++</h3>
                    <a href="https://coursera.org/verify/WREK2EFF8VPM" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item webdev">
              <div className="gallery-image">
                <img src="./img/Certification/htmlcss.png" alt="html and css" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>html and css in depth</h3>
                    <a href="https://coursera.org/verify/Y84Y7DER37ZE" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="grid-item webdev">
    <div className="gallery-image">
      <img src="./img/portfolio/port6.jpg" alt="" />
      <div className="img-overlay">
        <div className="plus" />
        <div className="img-description">
          <h3>Web react </h3>
          <h5>View Demo</h5>
        </div>
      </div>
    </div>
  </div> */}

            <div className="grid-item appdev">
              <div className="gallery-image">
                <img src="./img/Certification/bitNbulid_page-0001 (1).jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>BitNBulid</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item appdev">
              <div className="gallery-image">
                <img loading="lazy" src="./img/Certification/duhacks4-1.png" alt="" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>DUHacks 4.0</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item appdev">
              <div className="gallery-image">
                <img src="./img/Certification/SIH_certificate_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>Smart India Hackthon</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item  ui">
              <div className="gallery-image">
                <img src="./img/Certification/certificate_c_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>C</h3>
                    <a href="https://coursera.org/verify/6Q55G2SF1M7B" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item ui webdev">
              <div className="gallery-image">
                <img src="./img/Certification/javascript_page-0001.jpg" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>JavaScript</h3>
                    <a href="https://coursera.org/verify/2D3W389RHVW3" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item  webdev">
              <div className="gallery-image">
                <img src="./img/Certification/react_basics-1.png" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>React basics</h3>
                    <a href="https://coursera.org/verify/W06IFJ9LPOGZ" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="grid-item  webdev">
              <div className="gallery-image">
                <img src="./img/Certification/Flask-1.png" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3> Developing AI Applications with Python and Flask</h3>
                    <a href="https://www.coursera.org/account/accomplishments/records/MVKSNG52C96W" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item  webdev">
              <div className="gallery-image">
                <img src="./img/Certification/my_sql-1.png" alt="" loading="lazy" />
                <div className="img-overlay">
                  {/* <div className="plus" /> */}
                  <div className="img-description">
                    <h3>Learning MySQL Development</h3>
                    <a href="https://www.linkedin.com/learning/certificates/60dc16a563fe9a6f2dcbb2b91c46eac7bb36fb2e3fd87a29bfec900cc4ba7e90?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bh5B%2Bvc3MQH28DWpIT1B8HQ%3D%3D" target="_blank"
                      rel="noopener noreferrer">
                      View Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item others">
              <div className="gallery-image">
                <img src="./img/Certification/google_cloud-1.png" alt="" loading="lazy" />
                <div className="img-overlay">
                  <div className="img-description">
                    <h3>Google Cloud Career Launchpad</h3>
                    <h5>Cloud Engineer Track</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item others">
              <div className="gallery-image">
                <img src="./img/Certification/AWS_Academy_Graduate___Cloud_Architecting___Training_Badge_Badge20260510-31-tqe30t-1.png" alt="" loading="lazy" />
                <div className="img-overlay">
                  <div className="img-description">
                    <h3>AWS Academy Cloud Architecting</h3>
                    <h5>AWS Academy Graduate</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item appdev">
              <div className="gallery-image">
                <img src="./img/Certification/spit.png" alt="" loading="lazy" />
                <div className="img-overlay">
                  <div className="img-description">
                    <h3>SPIT Hackathon</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}
