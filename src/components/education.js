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
                  <p>
                    Fr. Conceicao Rodrigues College of Engineering, Bandra (West), Mumbai.
                    CGPA: 8.79 | Expected Graduation: May 2027.
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
