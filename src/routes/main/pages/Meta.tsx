import SocialTag from "../components/SocialTag";

export default function Meta() {
  return (
    <section id="meta" class="min-h-[100dvh] flex flex-col">
      <h2 class="ms-6 text-white text-3xl italic mt-6 sm:text-5xl">About me</h2>
      <div class="flex flex-wrap gap-2 sm:gap-4 flex-row px-6 mt-4">
        <SocialTag text="17 y/o" />
        <SocialTag text="RU/ENG" />
        <SocialTag text="DMs open" />
        <SocialTag text="Mobile Developer" />
        <SocialTag text="Kotlin" />
        <SocialTag text="Designer" />
        <SocialTag text="Neovim" />
        <SocialTag text="Fedora" />
        <SocialTag text="Hyprland" />
      </div>
      <h2 class="ms-6 text-white text-3xl italic mt-6 sm:mt-10 sm:text-5xl">
        Made with
      </h2>
      <div class="flex flex-wrap gap-2 sm:gap-4 flex-row px-6 mt-4">
        <SocialTag text="Go (Echo)" />
        <SocialTag text="SolidJS" />
        <SocialTag text="Tailwind" />
        <SocialTag text="senko.digital" />
        <SocialTag text="Love" />
      </div>
    </section>
  );
}
