import projects from "@/utils/projects.json";
import ProjectCard from "@/components/Projects_Page/projectCard/ProjectCard";

function ProjectsList() {
  return (
    <div className="projectsCards__area">
      <div className="row g-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
