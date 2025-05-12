import { A } from "@solidjs/router";
import { Cat, Download } from "../components/Icons";
import CVStar from "../components/CVStar";
import KoshkaStar from "../components/KoshkaStar";
import LandingLink from "../components/LandingLink";

export default function Landing() {
  return (
    <section class="min-h-[100dvh] flex items-center flex-col">
      <img
        src="https://tarakoshka.tech/static/icons/star.svg"
        class={`absolute scale-200 top-[-1.5%] sm:scale-230`}
        style={`
      animation: rotate-animation 90s infinite linear;
      z-index: 1;
      background-size: cover;
      object-fit: fill;`}
      ></img>
      <header class="text-5xl sm:text-7xl z-2 my-8 italic">
        <a href="https://tarakoshka.tech">
          <h1 class="">tarakoshka.tech</h1>
        </a>
      </header>
      <nav class="flex flex-col grow-1 justify-between">
        <div class="flex flex-row gap-4 justify-center">
          <CVStar />
          <KoshkaStar />
        </div>
        <div class="grid grid-cols-2 mb-12 gap-2 sm:hidden">
          <LandingLink pos="tl" title="TOUCH" href="#contact" />
          <LandingLink pos="tr" title="NOW" href="#current" />
          <LandingLink pos="bl" title="DONE" href="#done" />
          <LandingLink pos="br" title="ABOUT" href="#meta" />
        </div>
        <div class="grid grid-cols-4 mb-12 gap-4 max-sm:hidden">
          <LandingLink pos="" title="TOUCH" href="#contact" />
          <LandingLink pos="" title="NOW" href="#current" />
          <LandingLink pos="" title="DONE" href="#done" />
          <LandingLink pos="" title="ABOUT" href="#meta" />
        </div>
      </nav>
    </section>
  );
}
