export default function Badge({ src, link }: { src: string; link?: string }) {
  if (link == null) {
    return (
      <img
        src={src}
        style="image-rendering: pixelated;"
        alt=""
        class="w-[88px] h-[31px] md:hover:scale-180 transition-all duration-200"
      />
    );
  } else {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          style="image-rendering: pixelated;"
          src={src}
          alt=""
          class="w-[88px] h-[31px] md:hover:scale-180 transition-all duration-200"
        />
      </a>
    );
  }
}
