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
        btn.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section className="certificate section" id="certification">
  

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

          

            <div className="grid-item others">
              <div className="gallery-image">
                <img src="./img/Certification/Goldman Sachs_completion_certificate_page-0001.jpg" alt="" />
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
      <img src="./img/Certification/intro_frontend_page-0001.jpg" alt="" />
      <div className="img-overlay">
        {/* <div className="plus" /> */}
        <div className="img-description">
          <h3>html and css</h3>
          <a href="https://coursera.org/verify/KQXS6FCT7U40"  target="_blank"
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
      <img src="./img/Certification/version_control_page-0001.jpg" alt="" />
      <div className="img-overlay">
        {/* <div className="plus" /> */}
        <div className="img-description">
          <h3>Version Control</h3>
          <a href="https://coursera.org/verify/WTPP8J1B4COQ"  target="_blank"
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
      />
      <div className="img-overlay">
        {/* <div className="plus" /> */}
        <div className="img-description">
          <h3>C++</h3>
          <a href="https://coursera.org/verify/WREK2EFF8VPM"  target="_blank"
  rel="noopener noreferrer">
            View Credentials
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="grid-item webdev">
    <div className="gallery-image">
      <img src="./img/Certification/htmlcss.png" alt="html and css" />
      <div className="img-overlay">
        {/* <div className="plus" /> */}
        <div className="img-description">
        <h3>html and css in depth</h3>
          <a href="https://coursera.org/verify/Y84Y7DER37ZE"  target="_blank"
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
      <img src="./img/Certification/bitNbulid_page-0001 (1).jpg" alt="" />
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
      <img src="./img/Certification/SIH_certificate_page-0001.jpg" alt="" />
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
      <img src="./img/Certification/certificate_c_page-0001.jpg" alt="" />
      <div className="img-overlay">
        {/* <div className="plus" /> */}
        <div className="img-description">
          <h3>C</h3>
          <a href="https://coursera.org/verify/6Q55G2SF1M7B"  target="_blank"
  rel="noopener noreferrer">
            View Credentials
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div className="grid-item ui webdev">
    <div className="gallery-image">
      <img src="./img/Certification/javascript_page-0001.jpg" alt="" />
      <div className="img-overlay">
        {/* <div className="plus" /> */}
        <div className="img-description">
          <h3>JavaScript</h3>
          <a href="https://coursera.org/verify/2D3W389RHVW3"  target="_blank"
  rel="noopener noreferrer">
            View Credentials
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="grid-item  webdev">
    <div className="gallery-image">
      <img src="./img/Certification/react_basics-1.png" alt="" />
      <div className="img-overlay">
        {/* <div className="plus" /> */}
        <div className="img-description">
          <h3>React basics</h3>
          <a href="https://coursera.org/verify/W06IFJ9LPOGZ"  target="_blank"
  rel="noopener noreferrer">
            View Credentials
          </a>
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
