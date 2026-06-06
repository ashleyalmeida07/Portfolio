import React from 'react';

export default function Education() {
  return (
    <section className="achievements section" id="education">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="My">
            Education
          </h3>
        </div>

        <div className="section-body">
          <div className="achievements-wrapper">
            <div className="achievements-grid">
              
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="achievement-content">
                  <h4>Bachelor of Engineering (B.E.) in Computer Engineering</h4>
                  <h5 style={{ color: 'var(--main-color)', margin: '5px 0 10px', fontSize: '0.9rem' }}>
                    May 2027
                  </h5>
                  <p>
                    Fr. Conceicao Rodrigues College of Engineering, Bandra (West), Mumbai.
                    <br />
                    CGPA: 8.79
                  </p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-university"></i>
                </div>
                <div className="achievement-content">
                  <h4>Thomas Baptista Junior College</h4>
                  <h5 style={{ color: 'var(--main-color)', margin: '5px 0 10px', fontSize: '0.9rem' }}>
                    Jun 2021 &ndash; Mar 2023
                  </h5>
                  <p>
                    Higher Secondary School Certificate (HSC)
                  </p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-school"></i>
                </div>
                <div className="achievement-content">
                  <h4>Holy Cross High School</h4>
                  <h5 style={{ color: 'var(--main-color)', margin: '5px 0 10px', fontSize: '0.9rem' }}>
                    Jun 2011 &ndash; Jun 2021
                  </h5>
                  <p>
                    Secondary School Certificate (SSC)
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
