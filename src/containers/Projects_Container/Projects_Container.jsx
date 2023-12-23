import "./style.css";
import SecHeading from "@/components/Global/secHeading/SecHeading";
import ProjectsList from "../../components/Projects_Page/projects_list/ProjectsList";
import CategoryProjects from "@/components/Projects_Page/categoryProjects/CategoryProjects";

function ProjectsContainer() {
  return (
    <section className="projectsPage">
      <div className="container">
        <SecHeading
          title="Projects"
          para="Dive into the Projects Playground—where ideas come to life."
        />
        <CategoryProjects />
        <ProjectsList />
      </div>
    </section>
  );
}

export default ProjectsContainer;
