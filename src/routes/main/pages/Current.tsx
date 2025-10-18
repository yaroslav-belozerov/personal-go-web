import { ProjectsProvider, useProjects } from "../../../lib/api/projectsHook";
import NewProjectCard from "../components/NewProjectCard";

export default function Current() {
  return (
    <section
      id="projects"
      class="flex flex-col py-6 gap-4 mt-6 bg-white text-black"
    >
      <h2 class="text-black text-5xl text-center mb-2">What are you doing?</h2>
      <div class="flex flex-row">
        <div class="-rotate-90 text-nowrap text-2xl rounded-full bg-white self-center">
          github
        </div>
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
          <div class="w-0 h-0 p-2 mr-8 rounded-full bg-black self-center"></div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="-rotate-90 text-2xl rounded-full bg-white self-center">
          finished
        </div>
        <div
          class="flex flex-row gap-4 overflow-x-scroll pl-6"
          style="scrollbar-width: none;"
        >
          <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/finished">
            {useProjects().get() &&
              useProjects()
                ?.get()
                ?.toReversed()
                ?.map((project) => (
                  <NewProjectCard showPreview={true} project={project} />
                ))}
          </ProjectsProvider>
          <div class="w-0 h-0 p-2 mr-8 rounded-full bg-black self-center"></div>
        </div>
      </div>
    </section>
  );
}
