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
          para="This some of my latest and high quality projects i`ve worked on."
        />
        <CategoryProjects />
        <ProjectsList />
      </div>
    </section>
  );
}

export default ProjectsContainer;
