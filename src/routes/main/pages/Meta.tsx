import SocialTag from "../components/SocialTag";

export default function Meta() {
  return (
    <section id="meta" class="min-h-[100dvh] flex flex-col">
      <h2 class="ms-6 text-white text-4xl mt-6">About me and website</h2>
      <div class="flex flex-wrap gap-4 mx-6 mt-4 flex-row">
        <SocialTag text="17 y/o" />
        <SocialTag text="ru/eng" />
        <SocialTag text="moscow" />
        <SocialTag text="mobile dev" />
        <SocialTag text="designer" />
        <SocialTag text="kotlin" link="https://kotlinlang.org/" />
        <SocialTag text="neovim" link="https://neovim.io/" />
        <SocialTag text="fedora" link="https://fedoraproject.org/" />
        <SocialTag text="hyprland" link="https://hyprland.org/" />
        <SocialTag text="solidjs" link="https://www.solidjs.com/" />
        <SocialTag text="tailwind" link="https://tailwindcss.com/" />
        <SocialTag text="go" link="https://go.dev/" />
        <SocialTag text="echo" link="https://echo.labstack.com/" />
        <SocialTag text="senko.digital" link="https://senko.digital/" />
      </div>
    </section>
  );
}
