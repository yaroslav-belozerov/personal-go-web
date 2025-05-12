import { createSignal } from "solid-js";
import { ProjectsProvider, useProjects } from "../../../lib/api/projectsHook";
import ProjectCard from "../components/ProjectCard";
import { MusicProvider, useMusic } from "../../../lib/api/musicHook";

export default function Current() {
  const [preview, setPreview] = createSignal<string>("");
  const [previewPageNum, setPreviewPageNum] = createSignal<number>(1);

  return (
    <section id="current" class="flex flex-col pt-6 gap-4 min-h-[100dvh]">
      <h2 class="ms-6 text-white text-3xl italic">Current stuff</h2>
      <div
        class="flex flex-row gap-4 w-full overflow-x-scroll"
        style="scrollbar-width: none;"
      >
        <div class="w-0 px-1"></div>
        <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/ongoing">
          {useProjects().items() &&
            useProjects()
              ?.items()
              ?.map((project) => (
                <ProjectCard
                  onClick={() => setPreview(project.url)}
                  project={project}
                />
              ))}
        </ProjectsProvider>
        <div class="w-0 px-1"></div>
      </div>
      <MusicProvider baseURL="https://tarakoshka.tech/api/music">
        {useMusic().items() && (
          <div class="flex flex-col mt-2">
            <h2 class="ms-6 text-white text-3xl italic pb-4">Listening to</h2>
            {/* <p class="ms-6 text-xl sm:text-2xl italic text-[#ffffff] mb-2">
                listening to
              </p> */}
            <div class="flex flex-row justify-between me-6">
              <a href={useMusic()?.items()?.url} class="">
                <div class="flex flex-row ms-6 items-center gap-4 sm:hover:scale-90 transition-all">
                  <img
                    src={useMusic()?.items()?.image}
                    alt={useMusic()?.items()?.title}
                    class="size-12 rounded-md transition-all"
                  />
                  <div class="flex flex-col">
                    <h3 class="sm:text-lg">{useMusic()?.items()?.title}</h3>
                    <p class="italic sm:text-lg">
                      {useMusic()?.items()?.artist}
                    </p>
                  </div>
                </div>
              </a>
              <a
                class="flex justify-center sm:hover:scale-90 transition-all items-center rounded-xl p-3 sm:aspect-square bg-[#2B251F] transition-all"
                href="https://www.last.fm/user/Lemurr4ik_"
                target="_blank"
              >
                <img
                  class="transition-all size-6 sm:scale-150"
                  src="https://tarakoshka.tech/static/icons/music.svg"
                  alt={useMusic()?.items()?.title}
                ></img>
              </a>
            </div>
          </div>
        )}
      </MusicProvider>
    </section>
  );
}
