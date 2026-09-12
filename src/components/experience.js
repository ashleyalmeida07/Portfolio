const Experience = () => {
  const experiences = [
      {
        id: 1,
        company: "CS Infocomm Private Limited",
        position: "Software Engineer Intern",
        duration: "Jul 2026 – Present",
        location: "On-site",
        description: [
          "Developing a workflow automation platform using FastAPI, PostgreSQL, React, React Flow & LangGraph, with DAG-based workflow creation and execution",
          "Building agentic workflow nodes with LangGraph & ChromaDB, integrating retrieval and FastAPI-based serving for multi-step automation"
        ],
        technologies: ["FastAPI", "PostgreSQL", "React", "React Flow", "LangGraph", "ChromaDB"]
      },
      {
        id: 2,
        company: "Virtue Crennovative Solutions",
        position: "Full Stack Developer Intern",
        duration: "Nov 2025 – Apr 2026",
        location: "Remote",
        description: [
          "Developed end-to-end frontend and backend features for an e-commerce platform using Next.js, TypeScript & Node.js, owning features from implementation to delivery",
          "Designed SQL queries and data workflows for listings, orders and reporting, improving operational efficiency and data accuracy"
        ],
        technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"]
      },
      {
        id: 3,
        company: "TEDxCRCE",
        position: "Technical Lead",
        duration: "Jun 2025 – May 2026",
        location: "Hybrid",
        description: [
          "Designed and deployed scalable event infrastructure handling 1,200+ users, managing real-time ticket processing and system uptime during live events",
          "Led cross-functional tech team to deliver scalable, real-world event infrastructure from development to live execution"
        ],
        technologies: ["React", "JavaScript", "Node.js", "CSS3"]
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
