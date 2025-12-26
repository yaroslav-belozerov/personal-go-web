export default function Badge({
  label,
  src,
  link,
}: {
  label: string;
  src: string;
  link?: string;
}) {
  if (link == null) {
    return (
      <img
        loading="lazy"
        src={src}
        style="image-rendering: pixelated;"
        alt={label}
        class="w-[88px] h-[31px] lg:hover:scale-180 transition-all duration-200"
      />
    );
  } else {
    return (
      <a
        href={link}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          loading="lazy"
          style="image-rendering: pixelated;"
          src={src}
          alt={label}
          class="w-[88px] h-[31px] lg:hover:scale-180 transition-all duration-200"
        />
      </a>
    );
  }
}
