import { A } from "@solidjs/router";
import { Close } from "../components/Icons";
import { Motion } from "solid-motionone";
import { AllBlimpsProvider, useAllBlimps } from "../../../lib/api/blimpHook";

export default function Blimps() {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div class="flex flex-col w-screen h-screen">
        <div class="flex flex-col py-6 gap-4 relative bg-white text-black">
          <h2 class="text-black text-5xl text-center mb-2">Blimps</h2>
          <A
            href="/"
            class="text-black absolute right-8 top-0 bottom-0 flex flex-col items-center justify-center"
          >
            <svg
              class="size-10"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </A>
        </div>
        <p class="font-[Overpass] md:text-xl px-6 pt-6">
          Blimps are small, cute, and (mostly) self-contained HTML pieces.
          <br />I treat mine as statuses. Feel free to open the website source
          and copy any blimp you like.
        </p>
        <AllBlimpsProvider baseURL="https://tarakoshka.tech/api/blimps">
          <div class="flex md:flex-row md:flex-wrap flex-col gap-2 items-center py-6 md:px-8">
            {useAllBlimps().get() &&
              useAllBlimps()
                .get()
                ?.map((b) => blimp(b.content))}
          </div>
        </AllBlimpsProvider>
      </div>
    </Motion.div>
  );
}

export const blimp = (
  content: string,
  customSize: number | undefined = undefined,
) => (
  <div
    style={`${customSize != undefined ? `max-width: ${customSize}em; width: ${customSize}em; max-height: ${customSize}em; height: ${customSize}em;` : ""}`}
    class="bg-zinc-900 md:w-64 rounded-3xl w-[90%] max-w-[90%] overflow-clip aspect-square"
  >
    <a class="hidden">https://tarakoshka.tech/blimps</a>
    <div class="p-4" innerHTML={content}></div>
  </div>
);
