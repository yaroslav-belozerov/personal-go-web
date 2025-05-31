interface LandingLinkProps {
  title: string;
  href: string;
}

export default function LandingLink(props: LandingLinkProps) {
  return (
    <a
      href={props.href}
      class={`bg-[#2B251F] w-full rounded-xl text-white px-6 py-4 flex justify-center items-center transition-all`}
    >
      <h2 class="text-3xl">{props.title}</h2>
    </a>
  );
}
