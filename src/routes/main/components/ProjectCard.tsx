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
      class={`flex flex-col gap-2 sm:hover:scale-95 transition-all relative project-card-content flex flex-col bg-[#2B251F] rounded-md ${ongoing ? "min-w-52" : "min-w-80"}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div>
        <img
          src={preview}
          class="object-cover rounded-md aspect-video w-full h-full sm:max-w-80"
          alt={title}
        />
        <Show when={preview === "http://localhost:1333/static/github.png"}>
          <p class="ms-4 mb-1 text-md text-white absolute bottom-0">{title}</p>
        </Show>
      </div>
      <Show when={ongoing === false}>
        <p class="text-xl ms-4 mb-2 mt-1">{title}</p>
      </Show>
    </a>
  );
}
