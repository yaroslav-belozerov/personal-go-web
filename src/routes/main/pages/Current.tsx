import { ProjectsProvider, useProjects } from "../../../lib/api/projectsHook";
import NewProjectCard from "../components/NewProjectCard";

export default function Current() {
  return (
    <section id="projects" class="flex flex-col pt-6 gap-4 mt-6">
      <h2 class="ms-6 text-white text-4xl">Active Github Repos</h2>
      <div
        class="flex flex-row gap-4 w-full overflow-x-scroll"
        style="scrollbar-width: none;"
      >
        <div class="w-0 px-1"></div>
        <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/ongoing">
          {useProjects().get() &&
            useProjects()
              ?.get()
              ?.filter((it) => {
                return it.description != "";
              })
              ?.map((project) => (
                <NewProjectCard showPreview={false} project={project} />
              ))}
        </ProjectsProvider>
        <div class="w-0 px-1"></div>
      </div>
      <h2 class="ms-6 text-white text-4xl mt-6">Finished projects</h2>
      <div
        class="flex flex-row gap-4 overflow-x-scroll"
        style="scrollbar-width: none;"
      >
        <div class="w-0 px-1"></div>
        <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/finished">
          {useProjects().get() &&
            useProjects()
              ?.get()
              ?.map((project) => (
                <NewProjectCard showPreview={true} project={project} />
              ))}
        </ProjectsProvider>
        <div class="w-0 px-1"></div>
      </div>
    </section>
  );
}
