import { A } from "@solidjs/router";
import { BlogProvider, useBlog } from "../../lib/api/allBlogHook";
import { createSignal, Show } from "solid-js";
import { Motion, Presence } from "solid-motionone";
import { BackArrow } from "../write/components/Icons";

export default function Blog() {
  let [copied, setCopied] = createSignal<boolean>();

  return (
    <Motion.main
      initial={{ y: 800, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 800, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <main class="w-vw h-screen max-w-vw overflow-hidden">
        <BlogProvider baseURL="https://tarakoshka.tech/api/posts">
          <div class="max-lg:hidden block mb-8 mx-10 mt-6 w-full">
            <h1 class="flex flex-row gap-6 items-center mb-6">
              <nav class="flex flex-row items-center gap-2">
                <A
                  class="flex flex-col group pt-4 flex-col text-white text-7xl italic"
                  style="text-decoration: none; !important"
                  href="/"
                >
                  tarakoshka.tech
                  <div class="flex items-center gap-1 flex-row text-xl leading-2 transition-all opacity-0 group-hover:opacity-100">
                    <svg
                      class="rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="currentColor"
                    >
                      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                    </svg>
                    back to website
                  </div>
                </A>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://tarakoshka.tech/blog",
                    );
                    setCopied(true);
                  }}
                  class="text-4xl relative h-fit flex flex-row items-center gap-2 group relative cursor-pointer p-4 transition-all"
                >
                  <span class="absolute transition-all px-2 py-1 text-center opacity-100 lg:group-hover:opacity-0 lg:group-hover:text-[#0c12c9]">
                    blog
                  </span>
                  <span
                    class={`absolute text-nowrap transition-all text-center ${copied() ? "bg-green-700 text-white" : "text-black bg-white"} py-4 px-2 leading-8 lg:group-hover:opacity-100 opacity-0`}
                  >
                    {copied() ? "copied" : "copy link"}
                  </span>
                </div>
              </nav>
            </h1>
            <section class="flex flex-col gap-6">
              {useBlog().get() &&
                useBlog()
                  ?.get()
                  ?.map((p) => (
                    <A
                      href={`/blog/${p.slug}`}
                      class="text-white hover:text-black group font-[Overpass] w-fit transition-all flex flex-col justify-center p-6 hover:bg-white"
                    >
                      <h2 class="w-full relative font-bold transition-all bg-white w-fit px-2 pt-1 mb-2 text-[#0c12c9] hover:bg-transparent text-3xl text-center">
                        {p.title}
                        <svg
                          viewBox="0 0 24 24"
                          class="transition-all size-8 fill-black absolute right-6 group-hover:right-0 top-1 bottom-0 rotate-180 opacity-0 group-hover:opacity-100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5v14M5 12l7 7 7-7"
                            transform="rotate(90 12 12)"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </h2>
                      <p class="text-xl">
                        <span class="">{p.description}</span>
                      </p>
                      <p class="text-xl italic">
                        {" " +
                          new Date(p.created ?? "").toLocaleString("en-US", {
                            dateStyle: "long",
                            hour12: false,
                          })}
                      </p>
                    </A>
                  ))}
            </section>
          </div>
          <div class="max-lg:block hidden overflow-x-clip max-w-[100vw] h-[100vh] bg-black">
            <nav class="flex mb-4 text-white pb-4 bg-[#0c12c9] flex-col w-full items-center gap-4">
              <A
                class="flex text-center flex-col group pt-4 flex-col text-white text-5xl italic"
                style="text-decoration: none; !important"
                href="/"
              >
                tarakoshka.tech
              </A>
              <div class="flex flex-row w-full justify-between">
                <A
                  href="/"
                  class="flex pl-2 items-center gap-[2px] flex-row text-xl leading-2 transition-all opacity-100"
                >
                  <svg
                    class="rotate-90 size-8"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                  back to website
                </A>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://tarakoshka.tech/blog",
                    );
                    setCopied(true);
                  }}
                  class="text-4xl pr-4 flex flex-row flex flex-row items-center gap-2 group relative rounded-4xl cursor-pointer lg:hover:bg-white transition-all"
                >
                  <span class="text-xl">
                    {copied() ? "link copied" : "copy link"}
                  </span>
                  <svg
                    class="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
                  </svg>
                </div>
              </div>
            </nav>
            <section class="flex flex-col gap-6 mx-4">
              {useBlog().get() &&
                useBlog()
                  ?.get()
                  ?.map((p) => (
                    <A
                      href={`/blog/${p.slug}`}
                      class="text-[#0c12c9] w-full bg-white outline-0 group font-[Overpass] w-full transition-all flex flex-col outline justify-center p-4 rounded-lg"
                    >
                      <p class="transition-all font-bold text-3xl">{p.title}</p>
                      <p class="text-xl">
                        <span class="">{p.description}</span>
                      </p>
                      <p class="text-xl italic">
                        {" " +
                          new Date(p.created ?? "").toLocaleString("en-US", {
                            dateStyle: "long",
                            hour12: false,
                          })}
                      </p>
                    </A>
                  ))}
            </section>
          </div>
        </BlogProvider>
      </main>
    </Motion.main>
  );
}
