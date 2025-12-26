import { JSXElement } from "solid-js";

interface SocialIconProps {
  label: string;
  path: string;
  icon: JSXElement;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a
      aria-label={props.label}
      class="group flex max-lg:w-full w-8 min-w-14 p-2 aspect-square"
      style="flex: 1 0 26%;"
      href={props.path}
    >
      <div class="w-full h-full flex items-center justify-center lg:group-hover:scale-90 lg:group-hover:bg-transparent rounded-3xl max-lg:bg-[#2B251F] bg-zinc-900 transition-all">
        {props.icon}
      </div>
    </a>
  );
}
