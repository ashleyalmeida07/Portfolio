import React from 'react'

export default function Footer() {
  return (
<footer className="footer">
  <div className="container">
    <div className="grid-4">
      <div className="grid-4-col footer-about">
        <h3 className="title-sm">About</h3>
        <p className="text">
          Thank you for visiting my portfolio. I am always open to discussing
          new projects, ideas, or collaboration opportunities. Feel free to get
          in touch via email or connect with me on LinkedIn.
        </p>
      </div>
      <div className="grid-4-col footer-links">
        <h3 className="title-sm">Links</h3>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#certification">Certifications</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* <div className="grid-4-col footer-newstlette">
        <div className="footer-input-wrap">
          <input className="footer-input" />
          <a href="" className="input-arrow"></a>
        </div>
      </div> */}

    </div>
    <div className="bottom-footer">
      <div className="copyright">
        <p className="text">
          Copyright© All rights reserved | Made by
          <span>Ashley Almeida</span>
        </p>
      </div>
  
              <i className="fab fa-instagram" ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ashley-almeida-5576aa2a7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" ></i>
            </a>
            
            <a
              href="https://github.com/ashleyalmeida07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

          </div>
        </div>
        {/* to move up  */}
        <div className="back-btn-wrap">
          <a href="#" className="back-btn">
          <i className="fa fa-chevron-up"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}
