import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
