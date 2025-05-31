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
      class={`font-[Overpass] flex max-md:justify-between max-md:max-w-70 max-md:min-w-70 cursor-pointer flex-col max-w-[250px] md:hover:scale-95 transition-all relative flex flex-col bg-[#1A1611] max-sm:bg-[#2B251F] rounded-2xl`}
    >
      <Show when={props.showPreview}>
        <img
          src={preview}
          class="transition-all object-cover aspect-video rounded-2xl max-h-40"
          alt={title}
        />
      </Show>
      <h4 class="text-xl text-white py-3 px-5">{title}</h4>
    </a>
  );
}
