interface LandingLinkProps {
  title: string;
  href: string;
}

export default function LandingLink(props: LandingLinkProps) {
  return (
    <a
      href={props.href}
      class="bg-[#2B251F] text-white duration-400 aspect-square flex justify-center items-center transition-all rounded-3xl sm:hover:rounded-[5em] sm:hover:scale-90"
    >
      <h2 class="text-3xl">{props.title}</h2>
    </a>
  );
}
