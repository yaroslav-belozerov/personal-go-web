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
      class={`bg-[#2B251F] outline-[#1A1611] outline-16 z-1 gap-1 w-full rounded-xl text-white pl-6 pr-5 py-4 flex justify-between items-center transition-all`}
    >
      <h2 class="text-3xl">{props.title}</h2>
      {props.icon}
    </a>
  );
}
