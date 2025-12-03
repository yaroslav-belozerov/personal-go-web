import { A } from "@solidjs/router";
import { Close } from "../components/Icons";
import { Motion, Presence } from "solid-motionone";
import { AllBlimpsProvider, useAllBlimps } from "../../../lib/api/blimpHook";
import { Heart } from "../../lesya/components/Icons";
import { createSignal, on } from "solid-js";

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
                ?.map((b) => blimp(b.id, b.content, b.likes))}
          </div>
        </AllBlimpsProvider>
      </div>
    </Motion.div>
  );
}

export const blimp = (
  id: number,
  content: string,
  likes: number,
  customSize: number | undefined = undefined,
) => {
  const [liked, setLiked] = createSignal(false);

  return (
    <div
      style={`${customSize != undefined ? `max-width: ${customSize}em; width: ${customSize}em; max-height: ${customSize}em; height: ${customSize}em;` : ""}`}
      class="bg-zinc-900 relative md:w-64 rounded-3xl w-[90%] max-w-[90%] overflow-clip aspect-square"
    >
      <a class="hidden">https://tarakoshka.tech/blimps</a>
      <div class="p-4" innerHTML={content}></div>
      <button
        onClick={() => {
          setLiked(true);
          fetch("https://tarakoshka.tech/api/blimps/like?id=" + id, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
        class="hover:cursor-pointer flex flex-row items-center justify-center z-2 gap-1 font-[Overpass] bg-zinc-900 hover:outline-white outline-transparent outline-1 rounded-full px-2 py-1 transition-all absolute bottom-4 right-4"
      >
        {liked() ? (
          <svg
            class="size-6 fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
          </svg>
        ) : (
          <svg
            class="size-6 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
        )}
        {likes + (liked() ? 1 : 0)}
      </button>
    </div>
  );
};
