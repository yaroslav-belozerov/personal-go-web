import { ProjectsProvider, useProjects } from "../../../lib/api/projectsHook";
import ProjectCard from "../components/ProjectCard";

export default function Done() {
  return (
    <section class="flex flex-col min-h-[100dvh]" id="done">
      <h2 class="ms-6 text-white text-3xl italic mt-6">Finished projects</h2>
      <div
        class="flex flex-row gap-4 overflow-x-scroll mt-4"
        style="scrollbar-width: none;"
      >
        <div class="w-0 px-1"></div>
        <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/finished">
          {useProjects().items() &&
            useProjects()
              ?.items()
              ?.map((project) => (
                <ProjectCard
                  onClick={() => {
                    console.log(project.url);
                  }}
                  project={project}
                />
              ))}
        </ProjectsProvider>
        <div class="w-0 px-1"></div>
      </div>
    </section>
  );
}
