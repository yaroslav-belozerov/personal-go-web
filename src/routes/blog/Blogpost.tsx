import { A, useParams } from "@solidjs/router";
import { BlogpostProvider, useBlog } from "../../lib/api/blogpostHook";
import { Motion, Presence } from "solid-motionone";
import { SolidMarkdown } from "solid-markdown";
import { Marked, marked } from "marked";
import markedCodePreview from "marked-code-preview";
import markedKatex from "marked-katex-extension";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { createEffect, onMount } from "solid-js";
import ShowWhenInView from "../lesya/components/ShowWhenInView";
import PerformOnLoad from "./PerformOnLoad";
import NotFound from "../NotFound";

export default function Blogpost() {
  let slug = useParams().slug;
  return (
    <Motion.main
      initial={{ y: 700, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 700, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://tarakoshka.tech/static/blog.css"
          type="text/css"
        ></link>
      </head>
      <main class="w-full">
        <BlogpostProvider baseURL={`https://tarakoshka.tech/api/posts/${slug}`}>
          {useBlog().get() ? (
            <section class="p-8 flex flex-col">
              <div class="flex flex-row gap-1 items-center">
                <A href="/blog" class="max-lg:pl-0 p-2 max-lg:py-4">
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
                </A>
                <p class="text-xl font-[Overpass] pt-[5px] lg:pt-2">
                  {" " +
                    new Date(useBlog()?.get()?.created ?? "").toLocaleString(
                      "en-US",
                      {
                        dateStyle: "long",
                        hour12: false,
                      },
                    )}
                </p>
              </div>
              <h1 class="text-white lg:text-7xl text-6xl">
                {useBlog()?.get()?.title}
              </h1>
              <h2 class="text-4xl">{useBlog()?.get()?.description}</h2>
              <div
                ref={() => {
                  setTimeout(() => {
                    MathJax.typeset();
                  }, 1000);
                }}
                class="font-[Overpass]"
                id="article-content"
                innerHTML={useBlog()?.get()?.content}
              ></div>
            </section>
          ) : (
            <NotFound />
          )}
        </BlogpostProvider>
      </main>
    </Motion.main>
  );
}
