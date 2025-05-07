import { Project } from "../../../lib/api/projectsHook";
import { Show } from "solid-js";

interface ProjectCardProps {
  onClick: () => void;
  project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, preview, url, ongoing } = props.project;
  return (
    <>
      <Show when={url.endsWith(".pdf")}>
        <button
          onClick={props.onClick}
          class={`flex cursor-pointer flex-col gap-2 sm:hover:scale-95 transition-all relative project-card-content flex flex-col bg-[#2B251F] rounded-md ${ongoing ? "sm:min-w-42 min-w-52 max-w-60" : "min-w-60 max-w-80"}`}
        >
          <div>
            <img
              src={preview}
              class="object-cover rounded-md aspect-video w-full h-full w-70 max-h-40"
              alt={title}
            />
            <Show
              when={preview === "https://tarakoshka.tech/static/github.png"}
            >
              <p class="ms-4 mb-1 text-md text-white absolute bottom-0">
                {title}
              </p>
            </Show>
          </div>
          <Show when={ongoing === false}>
            <p class="text-lg mx-4 mb-2 mt-1">{title}</p>
          </Show>
        </button>
      </Show>
      <Show when={!url.endsWith(".pdf")}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          class={`flex cursor-pointer flex-col gap-2 sm:hover:scale-95 transition-all relative project-card-content flex flex-col bg-[#2B251F] rounded-md ${ongoing ? "sm:min-w-52 min-w-52 max-w-60" : "min-w-60 max-w-80"}`}
        >
          <div>
            <img
              src={preview}
              class="object-cover rounded-md aspect-video w-full h-full w-70 max-h-40"
              alt={title}
            />
            <Show
              when={preview === "https://tarakoshka.tech/static/github.png"}
            >
              <p class="ms-4 mb-1 text-md text-white absolute bottom-0">
                {title}
              </p>
            </Show>
          </div>
          <Show when={ongoing === false}>
            <p class="text-lg mx-4 mb-2 mt-1">{title}</p>
          </Show>
        </a>
      </Show>
    </>
  );
}
