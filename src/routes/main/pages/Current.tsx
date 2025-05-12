import { createSignal } from "solid-js";
import { ProjectsProvider, useProjects } from "../../../lib/api/projectsHook";
import ProjectCard from "../components/ProjectCard";
import { MusicProvider, useMusic } from "../../../lib/api/musicHook";

export default function Current() {
  const [preview, setPreview] = createSignal<string>("");
  const [previewPageNum, setPreviewPageNum] = createSignal<number>(1);

  return (
    <section id="current" class="flex flex-col pt-6 gap-4 min-h-[100dvh]">
      <h2 class="ms-6 text-white text-3xl italic sm:text-5xl">Current stuff</h2>
      <div
        class="flex flex-row gap-6 w-full overflow-x-scroll"
        style="scrollbar-width: none;"
      >
        <div class="w-0 px-1"></div>
        <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/ongoing">
          {useProjects().items() &&
            useProjects()
              ?.items()
              ?.map((project) => <ProjectCard project={project} />)}
        </ProjectsProvider>
        <div class="w-0 px-1"></div>
      </div>
      <MusicProvider baseURL="https://tarakoshka.tech/api/music">
        {useMusic().items() && (
          <div class="flex flex-col mt-2">
            <h2 class="ms-6 text-white text-3xl italic sm:mt-4 pb-4 sm:text-5xl">
              Listening to
            </h2>
            {/* <p class="ms-6 text-xl sm:text-2xl italic text-[#ffffff] mb-2">
                listening to
              </p> */}
            <div class="flex flex-row justify-between me-6">
              <a
                href={useMusic()?.items()?.url}
                class="flex flex-row ms-6 items-center gap-4 sm:hover:scale-90 transition-all"
              >
                <img
                  src={useMusic()?.items()?.image}
                  alt={useMusic()?.items()?.title}
                  class="size-12 rounded-md transition-all"
                />
                <div class="flex flex-col">
                  <h3 class="sm:text-lg">{useMusic()?.items()?.title}</h3>
                  <p class="italic sm:text-lg">{useMusic()?.items()?.artist}</p>
                </div>
              </a>
              <a
                href="https://www.last.fm/user/Lemurr4ik_"
                class="relative size-14 sm:scale-140 sm:hover:scale-120 sm:me-4 transition-all"
                target="_blank"
              >
                <img
                  class="transition-all size-14 absolute"
                  src="https://tarakoshka.tech/static/icons/star2.svg"
                  alt={useMusic()?.items()?.title}
                ></img>
                <img
                  class="transition-all size-6 absolute top-[50%] left-[50%] translate-[-50%]"
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
