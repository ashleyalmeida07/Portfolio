import React from 'react'

export default function Service() {
  return (
    <section className="services section" id="services">
  <div className="container">
    <div className="section-header">
      <h3 className="title" data-title="What I Do">
        Services
      </h3>
    </div>
    {/* shapes for decoration */}
    <img
      src="./img/shapes/circle.png"
      alt=""
      className="shape shape-circle-service"
    />
    <img
      src="./img/shapes/triangle.png"
      alt=""
      className="shape shape-triangle-service"
    />
    <div className="cards">
      {/* box for a single service  */}
      <div className="card-wrap">
        <img
          src="./img/shapes/points3.png"
          className="points points1 points-sq"
          alt=""
        />
        <div className="card " data-card="UI/UX">
          <div className="card-content z-index">
            <img src="./img/design-icon.png" className="icon" alt=""/>
            <h3 className="title-sm">Web Design</h3>
            <p className="text">
            I craft clean, user-friendly designs tailored to your needs. From wireframes to high-fidelity prototypes, I bring your ideas to life with creativity and attention to detail.
            </p>
          </div>
        </div>
      </div>
      {/* box for a single service  */}
      <div className="card-wrap">
        <div className="card " data-card="CODE">
          <div className="card-content z-index">
            <img src="./img/code-icon.png" className="icon" alt="" />
            <h3 className="title-sm">Web Development</h3>
            <p className="text">
            I create responsive and efficient websites tailored to your needs. From layout to interactive elements, I bring ideas to life with creativity and attention to detail.
            </p>
          </div>
        </div>
      </div>
      {/* for futher addition of service  */}
      {/* <div class="card-wrap">
        <img
          src="./img/shapes/points3.png"
          class="points points1 points-sq"
          alt=""
        />
        <div class="card " data-card="UI/UX">
          <div class="card-content z-index">
            <img src="./img/design-icon.png" class="icon" alt="" />
            <h3 class="title-sm">Web Development</h3>
            <p class="text">
              I create responsive and efficient websites tailored to your needs. From front-end features to back-end functionalities, I bring ideas to life with creativity and attention to detail.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

  )
}
