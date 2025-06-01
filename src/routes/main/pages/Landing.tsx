import { A } from "@solidjs/router";
import {
  ArrowDown,
  Cat,
  Download,
  Meta,
  Projects,
  Touch,
} from "../components/Icons";
import CVStar from "../components/CVStar";
import KoshkaStar from "../components/KoshkaStar";
import LandingLink from "../components/LandingLink";

export default function Landing() {
  return (
    <section class="min-h-[100svh] flex items-center flex-col">
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
      <nav class="flex flex-col w-full grow-1 justify-between">
        <div class="flex flex-row gap-4 justify-center">
          <CVStar />
          <KoshkaStar />
        </div>
        <div class="flex flex-col px-6 gap-4 justify-center flex-wrap mb-6">
          <LandingLink href="#touch" title="TOUCH" icon={<Touch />} />
          <LandingLink href="#projects" title="PROJECTS" icon={<Projects />} />
          <LandingLink href="#meta" title="META" icon={<Meta />} />
          <div class="flex flex-row gap-1 items-center justify-center">
            <p class="text-xl">Or scroll down</p>
            <marquee direction="down" class="size-fit" scrolldelay="300">
              <ArrowDown />
            </marquee>
          </div>
        </div>
      </nav>
    </section>
  );
}
