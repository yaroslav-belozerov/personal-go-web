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
      class={`font-[Overpass] flex max-lg:border-3 -border-offset-3 max-lg:border-black max-lg:justify-between max-lg:max-w-70 max-lg:min-w-70 cursor-pointer flex-col max-w-[250px] lg:hover:scale-95 transition-all relative flex flex-col bg-zinc-900 max-lg:bg-black rounded-2xl max-lg:skew-x-8`}
    >
      <Show when={props.showPreview}>
        <img
          src={preview}
          class="transition-all object-cover aspect-video rounded-2xl max-h-40"
          alt={title}
        />
      </Show>
      <div class="flex flex-col py-3 px-5 justify-between h-full">
        <h4 class="text-xl text-white">{title}</h4>
        <p class="text-sm max-lg:text-white">{description}</p>
      </div>
    </a>
  );
}
