import { ArrowDown } from "../components/Icons";
import SocialTag from "../components/SocialTag";

export default function Meta() {
  return (
    <section id="meta" class="min-h-[100mvh] flex flex-col">
      <div class="min-h-[100svh] flex justify-between flex-col">
        <div class="flex flex-col">
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
          <p class="text-xs pt-6 font-[Overpass] opacity-50 text-center">
            This website is built by a human. <br />
            AI training on its content or source code is prohibited.
          </p>
        </div>
        <button
          onClick={(e) => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            window.location.hash = "";
            history.pushState("", document.title, window.location.pathname);
            e.preventDefault();
          }}
          class="flex flex-row mb-6 gap-1 items-center justify-center"
        >
          <p class="text-xl">Back to top</p>
          <div class="rotate-180">
            <ArrowDown></ArrowDown>
          </div>
        </button>
      </div>
    </section>
  );
}
