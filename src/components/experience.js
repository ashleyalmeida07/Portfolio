const Experience = () => {
  const experiences = [
      {
        id: 1,
        company: "TEDxCRCE",
        position: "Technical Lead",
        duration: "Jun 2025 – May 2026",
        location: "Hybrid",
        description: [
          "Designed and deployed scalable event infrastructure handling 1,200+ users, managing real-time ticket processing and system uptime during live events",
          "Led cross-functional tech team to deliver scalable, real-world event infrastructure from development to live execution"
        ],
        technologies: ["React", "JavaScript", "Node.js", "CSS3"]
      },
      {
    id: 2,
    company: "Virtue Crennovative Solutions",
    position: "Full Stack Developer Intern",
    duration: "Nov 2025 – Apr 2026",
    location: "Remote",
    description: [
      "Analyzed user behavior and platform data across multiple client projects, identifying performance gaps and driving improvements in system efficiency",
      "Worked with structured databases (NeonDB, PostgreSQL, Firebase) writing queries to support data integrity and reporting across platforms"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Firebase"]
  }

  ];

  return (
    <section className="career-section" id="experience">
      <div className="career-container">
         <div className="section-header">
      <h3 className="title" data-title="My">
        Experience
      </h3>
      {/* <p className="text">
        "Skills are the bridge between potential and success."
      </p> */}
    </div>
        <div className="career-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="career-item">
              <div className="career-card">
                <div className="career-header">
                  <h3 className="career-position">{exp.position}</h3>
                  <div className="career-company-info">
                    <span className="career-company">{exp.company}</span>
                    <span className="career-location">{exp.location}</span>
                  </div>
                  <span className="career-duration">{exp.duration}</span>
                </div>

                <div className="career-description">
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* <div className="career-tech">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="career-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
