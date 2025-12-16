import { JSXElement } from "solid-js";

interface SocialIconProps {
  path: string;
  icon: JSXElement;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a
      class="group flex max-lg:w-full w-8 min-w-14 p-4 justify-center aspect-square lg:hover:scale-95 items-center rounded-3xl max-lg:bg-[#2B251F] bg-zinc-900 transition-all"
      style="flex: 1 0 26%;"
      href={props.path}
    >
      {props.icon}
    </a>
  );
}
