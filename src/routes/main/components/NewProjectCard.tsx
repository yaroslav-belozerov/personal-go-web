import { Project } from "../../../lib/api/projectsHook";
import { Show } from "solid-js";

interface ProjectCardProps {
  project: Project;
  showPreview: boolean;
}

export default function NewProjectCard(props: ProjectCardProps) {
  const { title, description, preview, url, ongoing } = props.project;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      class={`font-[Overpass] flex max-md:outline-3 -outline-offset-3 max-md:outline-black max-md:justify-between max-md:max-w-70 max-md:min-w-70 cursor-pointer flex-col max-w-[250px] md:hover:scale-95 transition-all relative flex flex-col bg-[#1A1611] max-md:bg-black rounded-2xl max-md:skew-x-10`}
    >
      <Show when={props.showPreview}>
        <img
          src={preview}
          class="transition-all object-cover aspect-video rounded-2xl max-h-40"
          alt={title}
        />
      </Show>
      <div class="flex flex-col py-3 px-5">
        <h4 class="text-xl text-white">{title}</h4>
        <p class="text-sm max-md:text-white">{description}</p>
      </div>
    </a>
  );
}
