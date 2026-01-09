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
      class="group flex max-lg:w-full aspect-square outline-transparent outline-2 lg:group-hover:outline-white"
      style="flex: 1 0 25%;"
      href={props.path}
    >
      <div class="w-full h-full flex items-center justify-center bg-zinc-transparent lg:group-hover:bg-zinc-900 rounded-full max-lg:bg-[#2B251F]  transition-all p-1">
        {props.icon}
      </div>
    </a>
  );
}
