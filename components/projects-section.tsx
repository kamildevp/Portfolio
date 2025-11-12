import ProjectsCard from "./project-card";
import projects from "../data/projects.json";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="text-center">
        <span className="text-xl md:text-2xl font-bold animate-fadeIn opacity-0"
          style={{animationDelay: "1.2s"}}
        >
          My Projects
        </span>
      </div>
      <div className="lg:max-w-200 flex flex-col items-center w-full">
        {projects.map((project, index) => (
          <div 
            className="w-full animate-slideInUp opacity-0" 
            style={{ animationDelay: `${1.5+index * 0.2}s` }}
            key={project.name}
          >
            <ProjectsCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}