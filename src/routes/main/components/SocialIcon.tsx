interface SocialIconProps {
  path: string;
  icon: string;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a
      class="group flex justify-center sm:h-20 sm:hover:scale-95 items-center rounded-md p-3 bg-[#2B251F] transition-all"
      href={props.path}
    >
      <img
        class="sm:scale-130 scale-90 transition-all size-9"
        src={`/static/icons/${props.icon}`}
        alt={props.path}
      ></img>
    </a>
  );
}
