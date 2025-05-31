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
        class={`absolute scale-200 top-[-1.5%] md:scale-230`}
        style={`
      animation: rotate-animation 90s infinite linear;
      z-index: 1;
      background-size: cover;
      object-fit: fill;`}
      ></img>
      <header class="text-5xl md:text-7xl z-2 my-8 italic">
        <a href="https://tarakoshka.tech">
          <h1 class="">tarakoshka.tech</h1>
        </a>
      </header>
      <nav class="flex flex-col grow-1 justify-between">
        <div class="flex flex-row gap-4 justify-center">
          <CVStar />
          <KoshkaStar />
        </div>
        <div class="flex flex-col gap-4 justify-center flex-wrap mb-6">
          <LandingLink title="TOUCH" href="#touch" />
          <LandingLink title="PROJECTS" href="#projects" />
          <LandingLink title="META" href="#meta" />
        </div>
      </nav>
    </section>
  );
}
