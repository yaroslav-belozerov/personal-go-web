interface SocialIconProps {
  path: string;
  icon: string;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a
      class="group flex max-md:w-full w-8 min-w-14 p-4 justify-center aspect-square md:hover:scale-95 items-center rounded-3xl max-md:bg-[#2B251F] bg-[#1A1611] transition-all"
      style="flex: 1 0 26%;"
      href={props.path}
    >
      <img
        class="transition-all min-w-[35px] aspect-square w-[60%]"
        src={`/static/icons/${props.icon}`}
        alt={props.path}
      ></img>
    </a>
  );
}
