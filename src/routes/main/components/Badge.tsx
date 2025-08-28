export default function Badge({ src, link }: { src: string; link?: string }) {
  if (link == null) {
    return (
      <img
        src={src}
        alt=""
        class="w-[88px] h-[31px] md:hover:scale-140 transition-all"
      />
    );
  } else {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt=""
          class="w-[88px] h-[31px] md:hover:scale-140 transition-all"
        />
      </a>
    );
  }
}
