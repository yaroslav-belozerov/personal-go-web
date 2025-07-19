interface SocialTagText {
  text: string;
  link?: string;
}

export default function SocialTag(props: SocialTagText) {
  if (props.link != undefined) {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        class="flex md:hover:scale-95 italic text-lg font-[Overpass] justify-center rounded-xl px-4 py-2 bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all"
      >
        {props.text}
      </a>
    );
  } else {
    return (
      <div class="flex text-lg font-[Overpass] justify-center rounded-xl px-4 py-2 bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all">
        <p class="mt-[2px]">{props.text}</p>
      </div>
    );
  }
}
