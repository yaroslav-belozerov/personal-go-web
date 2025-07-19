import { A } from "@solidjs/router";
import { Motion } from "solid-motionone";
import { useWebring, WebringProvider } from "../../lib/api/webringHook";

export default function Webring() {
  return (
    <Motion.main
      initial={{ x: 1000, scale: 0, rotate: 50 }}
      animate={{ x: 0, scale: 1, rotate: 0 }}
      exit={{ x: -1000, scale: 0, rotate: -50 }}
      transition={{ duration: 0.5 }}
    >
      <main class="w-full bg-[#1A1611] h-[100vh] flex flex-col">
        <section
          class="h-full flex flex-col justify-between"
          style="background: 22% url('https://tarakoshka.tech/static/crt-1.webp');"
        >
          <h1
            style="transform: scaleY(4); transform-origin: center top;"
            class="text-white leading-13 text-6xl pb-16 text-center bg-gradient-to-b from-[#5C04D5] via-[#5C04D5]/10 to-[#5C04D5]/0"
          >
            1-800-OTORING
          </h1>
          <div class="grow flex flex-col justify-start items-end">
            <a
              class="relative mb-6 mr-4 flex align-center justify-center"
              href="https://webring.otomir23.me/"
            >
              <svg
                class="size-32"
                xmlns="http://www.w3.org/2000/svg"
                style="animation: rotate-animation-back 30s linear infinite;"
                width="240"
                height="240"
                fill="none"
                viewBox="0 0 240 240"
              >
                <path
                  fill="#FF3737"
                  d="m120 0 23.294 33.067L180 16.077l3.64 40.283L223.923 60l-16.99 36.706L240 120l-33.067 23.294L223.923 180l-40.283 3.64-3.64 40.283-36.706-16.99L120 240l-23.294-33.067L60 223.923l-3.64-40.283L16.077 180l16.99-36.706L0 120l33.067-23.294L16.077 60l40.283-3.64L60 16.077l36.706 16.99L120 0Z"
                />
              </svg>
              <p
                class="absolute text-center leading-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl italic z-1 text-white"
                style="animation: breathe 5s ease-in-out infinite;"
              >
                Call
                <br />
                Now
              </p>
            </a>
          </div>
          <nav class="flex flex-col w-full px-6 gap-2 bg-gradient-to-t from-[#000000] via-[#000000]/90 to-[#000000]/0">
            <a
              href="#"
              style="align-self: end;"
              class="text-white italic w-fit text-7xl flex flex-col"
            >
              <p>machka</p>
              <p class="text-[#FF3737] text-2xl leading-4 text-center">
                NEXT PAGE ⮊
              </p>
            </a>
            <a href="#" class="flex flex-col w-fit text-white italic text-7xl">
              <p>gooslime</p>
              <p class="text-[#FF3737] text-2xl leading-4 text-center">
                ⮈ PREVIOUS PAGE
              </p>
            </a>
          </nav>
        </section>
        <section class="bg-black flex flex-row justify-center">
          <A
            href="/"
            class="font-[Overpass] opacity-40 p-2 h-full align-middle w-full text-white text-end"
          >
            [dismiss]
          </A>
        </section>
      </main>
    </Motion.main>
  );
}
