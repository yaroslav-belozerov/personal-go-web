import { JSXElement } from "solid-js";

interface LandingLinkProps {
  title: string;
  href: string;
  icon: JSXElement;
}

export default function LandingLink(props: LandingLinkProps) {
  return (
    <a
      href={props.href}
      class={`w-full relative z-1 gap-1 text-white pl-8 min-h-20 flex justify-left items-center transition-all gap-4`}
    >
      {props.icon}
      <h2 class="text-4xl">{props.title}</h2>
      <div class="absolute bg-linear-to-l from-[#FFFFFF]/0 to-[#FFFFFF] w-4 top-0 bottom-0 left-0"></div>
    </a>
  );
}
