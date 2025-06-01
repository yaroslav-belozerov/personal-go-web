import { ProjectsProvider, useProjects } from "../../../lib/api/projectsHook";
import NewProjectCard from "../components/NewProjectCard";

export default function Current() {
  return (
    <section id="projects" class="flex flex-col pt-6 gap-4 min-h-[100dvh]">
      <h2 class="ms-6 text-white text-4xl">Current stuff</h2>
      <div
        class="flex flex-row gap-6 w-full overflow-x-scroll"
        style="scrollbar-width: none;"
      >
        <div class="w-0 px-1"></div>
        <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/ongoing">
          {useProjects().items() &&
            useProjects()
              ?.items()
              ?.filter((it) => {
                return it.description != "";
              })
              ?.map((project) => (
                <NewProjectCard showPreview={true} project={project} />
              ))}
        </ProjectsProvider>
        <div class="w-0 px-1"></div>
      </div>
      <h2 class="ms-6 text-white text-4xl mt-2">Finished projects</h2>
      <div
        class="flex flex-row gap-6 overflow-x-scroll"
        style="scrollbar-width: none;"
      >
        <div class="w-0 px-1"></div>
        <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/finished">
          {useProjects().items() &&
            useProjects()
              ?.items()
              ?.map((project) => (
                <NewProjectCard showPreview={true} project={project} />
              ))}
        </ProjectsProvider>
        <div class="w-0 px-1"></div>
      </div>
    </section>
  );
}
