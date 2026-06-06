import React from 'react';

export default function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="Success">
            Achievements
          </h3>
        </div>

        <div className="section-body">
          <div className="achievements-wrapper">
            <div className="achievements-grid">
              {/* Achievement 1 - Blue Star Scholarship */}
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="achievement-content">
                  <h4>Blue Star Scholarship Recipient</h4>
                  <p>
                    Awarded the prestigious Blue Star Scholarship in recognition of consistent academic excellence, innovation, and all-round performance in engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
