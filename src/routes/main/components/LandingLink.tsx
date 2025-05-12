interface LandingLinkProps {
  title: string;
  href: string;
  pos: string;
}

export default function LandingLink(props: LandingLinkProps) {
  return (
    <a
      href={props.href}
      class={`bg-[#2B251F] sm:aspect-square sm:rounded-2xl sm:p-4 rounded-lg ${props.pos == "tl" ? "rounded-tl-3xl" : ""}  ${props.pos == "tr" ? "rounded-tr-3xl" : ""} ${props.pos == "bl" ? "rounded-bl-3xl" : ""}  ${props.pos == "br" ? "rounded-br-3xl" : ""} text-white p-6 flex justify-center items-center transition-all sm:hover:scale-92`}
    >
      <h2 class="text-3xl sm:text-3xl">{props.title}</h2>
    </a>
  );
}
