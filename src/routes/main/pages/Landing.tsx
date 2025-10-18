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
import LandingLink from "../components/LandingLink";

export default function Landing() {
  return (
    <section class="min-h-svh bg-black max-h-svh max-w-screen flex items-center flex-col">
      <header class="text-6xl z-0 px-8 w-full pt-3 pb-4 text-white outline-white -outline-offset-2">
        <a href="https://tarakoshka.tech" class="overflow-clip">
          <h1 class="text-7xl text-center text-nowrap animate-[marquee-content_10s_linear_infinite]">
            tarakoshka.tech
          </h1>
        </a>
      </header>
      <nav class="flex flex-col w-full grow-1">
        <div class="flex flex-col px-8 items-center w-full">
          <div class="flex flex-row w-full">
            <a
              class="relative z-0 transition-all outline-white -outline-offset-2 bg-[#FFE942] grow-1 py-4 animate-[round_4s_ease-in-out_infinite_2s] flex flex-col justify-center"
              href="https://tarakoshka.tech/static/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="text-black ml-6 flex flex-col gap-3 justify-center items-start pt-2">
                <div class="ml-1">
                  <Download />
                </div>
                <div class="flex flex-col text-2xl">
                  <span class="leading-4">See my</span>
                  <span>Resume</span>
                </div>
              </div>
            </a>
            <a
              href="/lesya"
              class="relative z-0 transition-all outline-white -outline-offset-2 bg-[#00FF7B] grow-1 py-4 animate-[round_4s_ease-in-out_infinite_2s] flex flex-col justify-center"
            >
              <div class="text-black ml-6 flex flex-col gap-3 justify-center items-start pt-2">
                <div class="ml-1">
                  <Cat />
                </div>
                <div class="flex flex-col text-2xl">
                  <span class="leading-4">Look at</span>
                  <span>My Cat</span>
                </div>
              </div>
            </a>
          </div>
          <A
            href="/webring"
            class={`bg-linear-to-r from-[#FF3737] to-[#FF3737]/0 w-full gap-2 text-white pl-4 py-4 flex items-center transition-all animate-[round-other_4s_ease-in-out_infinite]`}
          >
            <div class="flex flex-row gap-3 bg-black py-2 pl-4 pr-6 rounded-full">
              <svg
                class="size-8 fill-white mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z" />
              </svg>
              <h2 class="text-3xl italic">Enter the webring</h2>
            </div>
          </A>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 grow-1 mt-4 grid-rows-2 flex-col px-4">
          <A href="#contacts" class="h-fit relative w-fit">
            <img
              class="h-48 -rotate-10"
              src="https://tarakoshka.tech/static/old_phone.png"
            ></img>
            <div class="absolute rotate-5 bg-black px-3 py-1 italic outline-white outline-2 rounded-full bottom-2 left-4 text-2xl text-white">
              Contacts
            </div>
          </A>
          <A href="#projects" class="self-center h-fit relative w-fit">
            <img
              class="h-48 rotate-60"
              src="https://tarakoshka.tech/static/scraps.png"
            ></img>
            <div class="absolute -rotate-5 bg-black px-3 py-1 italic outline-white outline-2 rounded-full bottom-8 right-4 text-2xl text-white">
              Projects
            </div>
          </A>
          <A href="#badges" class="h-fit relative w-fit">
            <img
              class="w-40 rotate-30"
              src="https://tarakoshka.tech/static/badges.png"
            ></img>
            <div class="absolute text-nowrap -rotate-5 bg-black px-3 py-1 italic outline-white outline-2 rounded-full top-4 right-4 text-2xl text-white">
              Your badges
            </div>
          </A>
          <div class="flex flex-col h-full justify-between pb-8 items-center">
            <A href="#info" class="h-fit relative w-fit">
              <img
                class="-rotate-10 w-40"
                src="https://tarakoshka.tech/static/login.jpg"
              ></img>
              <div class="absolute rotate-10 bg-black px-3 py-1 italic outline-white outline-2 rounded-full -bottom-2 right-2 text-2xl text-white">
                About me
              </div>
            </A>
            <div class="overflow-hidden h-fit text-xl flex flex-row gap-1">
              <div class=" animate-[marquee-h_2s_linear_infinite]">
                <ArrowDown />
              </div>
              or scroll down...
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
