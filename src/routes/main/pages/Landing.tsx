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
import { createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { Motion, Presence } from "solid-motionone";

type LandingProps = {
  isWebringOpen: () => boolean;
  setWebringOpen: (value: boolean) => void;
};

export default function Landing(props: LandingProps) {
  let { isWebringOpen, setWebringOpen } = props;

  return (
    <section class="min-h-[100svh] flex items-center flex-col">
      <img
        src="https://tarakoshka.tech/static/icons/star.svg"
        class={`absolute scale-200 top-[1.5em] md:scale-230`}
        style={`
        animation: rotate-animation 90s infinite linear;
        z-index: 0;
        background-size: cover;
        object-fit: fill;`}
      ></img>
      <header class="text-5xl md:text-7xl z-1 my-8 italic">
        <a href="https://tarakoshka.tech">
          <h1 class="">tarakoshka.tech</h1>
        </a>
      </header>
      <nav class="flex flex-col w-full grow-1 justify-between">
        <div class="flex flex-col items-center">
          <div class="flex flex-row gap-4 justify-center">
            <CVStar />
            <KoshkaStar />
          </div>
          <button
            style="
            animation: breathe 5s infinite ease-in-out;
            "
            onClick={() => {
              setWebringOpen(true);
            }}
            class="relative z-2 ml-16 cursor-pointer"
          >
            <svg
              class="size-24"
              xmlns="http://www.w3.org/2000/svg"
              width="311"
              height="311"
              fill="none"
              viewBox="0 0 311 311"
            >
              <circle cx="155.5" cy="155.5" r="155.5" fill="#FF3737" />
            </svg>
            <svg
              class="scale-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1A1611"
            >
              <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q-3-20-4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
            </svg>
          </button>
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
