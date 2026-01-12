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
        onClick={(e) => {
          navigator.clipboard.writeText(e.target.outerHTML);
        }}
        loading="lazy"
        src={src}
        style="image-rendering: pixelated; width: 88px; height: 31px;"
        alt={label}
        class="hover:scale-180 transition-transform"
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
