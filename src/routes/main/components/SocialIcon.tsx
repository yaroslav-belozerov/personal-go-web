interface SocialIconProps {
  path: string;
  icon: string;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a
      class="group flex justify-center sm:h-24 sm:hover:bg-[#2B251F]/0 items-center rounded-md p-3 bg-[#2B251F] transition-all"
      href={props.path}
    >
      <img
        class="sm:group-hover:scale-170 sm:scale-140 scale-90 transition-all size-9"
        src={`/static/icons/${props.icon}`}
        alt={props.path}
      ></img>
    </a>
  );
}
