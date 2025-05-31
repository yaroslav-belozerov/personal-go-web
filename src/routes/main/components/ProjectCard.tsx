import { Project } from "../../../lib/api/projectsHook";
import { Show } from "solid-js";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, preview, url, ongoing } = props.project;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      class={`flex cursor-pointer flex-col gap-2 aspect-video md:hover:scale-95 transition-all relative project-card-content flex flex-col bg-[#2B251F] rounded-2xl ${ongoing ? "md:min-w-80 min-w-52 max-w-60" : "md:min-w-100 min-w-60 max-w-80"}`}
    >
      <div>
        <img
          src={preview}
          class="object-cover rounded-2xl w-full h-full w-70 max-h-40 max-md:min-w-100"
          alt={title}
        />
        <Show when={preview === "https://tarakoshka.tech/static/github.png"}>
          <p class="ms-4 mb-2 text-md md:text-xl text-white absolute bottom-0">
            {title}
          </p>
        </Show>
      </div>
      <Show when={ongoing === false}>
        <p class="text-lg mx-4 max-md:mb-2 mt-1 md:text-2xl">{title}</p>
      </Show>
    </a>
  );
}
