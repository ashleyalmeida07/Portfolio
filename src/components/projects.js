import React from 'react'

export default function Projects() {
  return (
<section className="testimonials section" id="projects">
  <div className="container">
    <div className="section-header">
      <h3 className="title" data-title="My">
        Projects
      </h3>
    </div>
    {/* backgroung design */}
    <div className="blog-wrapper">

      {/* <div className="blog-wrap">
        <img
          src="./img/shapes/points3.png"
          alt=""
          className="points points-sq"
        />

        <div className="blog-card">
          <div className="blog-image">
            <img src="./img/certificate_c_page-0001.jpg" alt="" />
          </div>
          <div className="blog-content">
            <h3 className="title-sm">Browser History Manager in C</h3>
            <p className="blog-text">
            A command-line application that simulates a browser history management system. This program allows users to navigate browser history, add new URLs, go back and forward between pages, delete specific entries, search for URLs, and view the complete history.<br/>

           <b>Tools & Techniques:</b> C
            </p>
            <a href="#" className="btn small">
              Read more
            </a>
          </div>
        </div>
      </div>


      <div className="blog-wrap">
        <div className="blog-card">
          <div className="blog-image">
            <img src="./img/certificate_c_page-0001.jpg" alt="" />
          </div>
          <div className="blog-content">
            <div className="blog-info">
            </div>
            <h3 className="title-sm">Web Scraping Tool</h3>
            <p className="blog-text">
            A web scraping tool that extracts product details from Amazon, including titles, prices, ratings, seller information, and stock availability. Utilizes BeautifulSoup for HTML parsing, handles errors gracefully, and exports scraped data to a CSV file.<br/>
            <b>Tools & Techniques:</b>Python, BeautifulSoup, Pandas, NumPy
            </p>
            <a href="#" className="btn small">
              Read more
            </a>
          </div>
        </div>
      </div> */}


      <div className="blog-wrap">
        <div className="blog-card">
        <div className="blog-content">
          <div className="blog-image">
            <img src="./img/Screenshot 2025-03-08 133800.png" alt="" />
          </div>
          
            <div className="blog-info">
            </div>
            <h3 className="title-sm">AI-Powered Assistant</h3>
            <p className="blog-text">

            A Flask web app offering an intelligent chatbot for programming assistance, powered by Google Generative AI. It specializes in debugging, optimization, algorithms, and project development, with configurable safety, multi-language support, and a user-friendly interface for seamless interaction.<br/>
            <b>Tools & Techniques:</b> Python, Flask, Google Generative AI, HTML, CSS, JavaScript.
            </p>
            <a href="https://chat-bot-th5j.onrender.com" className="btn small"  target="_blank"
  rel="noopener noreferrer">
              View Demo
            </a>
          </div>
        </div>
      </div>

      <div className="blog-wrap">
        <div className="blog-card">
        <div className="blog-content">
          <div className="blog-image">
            <img src="./img/Screenshot 2025-03-13 202214.png" alt="" />
          </div>
            <div className="blog-info">           
            </div>
            <h3 className="title-sm">File Sharing</h3>
            <p className="blog-text">
            A File Sharing Web Page is a platform that allows users to upload, download, and share files securely. It features a user-friendly interface, link generation for easy sharing, and options for password protection and file previews. Enhanced features can include encryption, expiration links, and download tracking for improved security and control.<br/>
            <b>Tools & Techniques:</b>HTML, CSS, JavaScript, Flask.
            </p>
            <a href="https://file-sharing-42v1.onrender.com/" className="btn small"  target="_blank"
  rel="noopener noreferrer">
               View Demo
            </a>
          </div>
        </div>
      </div>

      <div className="blog-wrap">
        <div className="blog-card">
        <div className="blog-content">
          <div className="blog-image">
            <img src="./img/Screenshot 2025-01-28 173743.png" alt="" />
          </div>
            <div className="blog-info">           
            </div>
            <h3 className="title-sm">SkillBuddy</h3>
            <p className="blog-text">
            SkillBuddy is an interactive skill development platform that offers live chat, a barter system for exchanging notes and courses, a feedback form, and an Electronic Learning Community (ELC), promoting collaborative learning and community engagement.<br/>
            <b>Tools & Techniques:</b> React, JavaScript, HTML, CSS,Neon DB and Flask.
            </p>
            <a href="https://skillbuddy.netlify.app/" className="btn small"  target="_blank"
  rel="noopener noreferrer">
               View Demo
            </a>
          </div>
        </div>
      </div>



    
      <div className="blog-wrap">
        <div className="blog-card">
        <div className="blog-content">
          <div className="blog-image">
            <img src="./img/Screenshot 2025-03-08 134009.png" alt="" />
          </div>
            <div className="blog-info">           
            </div>
            <h3 className="title-sm">CollegePortal</h3>
            <p className="blog-text">
            CollegePortal is a Smart Classroom Management Software that enhances learning and collaboration. It includes real-time chat,a chatbot, course sharing, automated attendance, and performance tracking, improving efficiency and engagement in classrooms.  
            <b>Tools & Techniques:</b> React, JavaScript, HTML, CSS, Flask, Django, Python, PostgreSQL.
            </p>
            <a href="https://collegeportal-0fer.onrender.com" className="btn small"  target="_blank"
  rel="noopener noreferrer">
               View Demo
            </a>
          </div>
        </div>
      </div>


    </div>

    {/* for futher projects box */}
    {/* 
      <div class="blog-card">
        <div class="blog-image">
          <img src="./img/blog1.png" alt="" />
        </div>
        <div class="blog-content">
          <div class="blog-info">
            <h5 class="blog-date">March, 19 2020</h5>
            <h5 class="blog-user"><i class="fas fa-user"></i>Admin</h5>
          </div>
          <h3 class="title-sm">This is a short title</h3>
          <p class="blog-text">
            Lorem ipsum, dolor sit amet elit. rem poimus? Tempora
            expedita eos autem! Lorem ipsum, dolor sit met.
          </p>
          <a href="#" class="btn small">Read more</a>
        </div>
      </div>
    </div> */}


  </div>
</section>
  )
}
