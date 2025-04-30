"use client";

import { createSignal, Show } from "solid-js";
import { Cat, Download } from "./components/Icons";
import AccordionSection from "./components/AccordionSection";
import ProjectCard from "./components/ProjectCard";
import SocialIcon from "./components/SocialIcon";
import SocialTag from "./components/SocialTag";
import { MusicProvider, useMusic } from "../../lib/api/musicHook";
import { ProjectsProvider, useProjects } from "../../lib/api/projectsHook";
import { MessageProvider, useLastMessage } from "../../lib/api/messagesHook";
import { ArrowDown, ExternalLink, SendMessage } from "./components/Icons";
import { Motion, Presence } from "solid-motionone";
import { A } from "@solidjs/router";

export default function App() {
  const [expanded, setExpanded] = createSignal<string>("");

  const toggleSection = (id: string) => {
    if (expanded() === id) {
      setExpanded("");
    } else {
      setExpanded(id);
    }
  };

  const isExpanded = (id: string) => expanded() === id;

  return (
    <Motion.main
      initial={false}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main class="page bg-[#1a1611] text-[#f5e9c9] py-6 sm:pt-0 flex flex-col relative z-0 overflow-x-clip">
        <img
          src="https://tarakoshka.tech/static/icons/star.svg"
          class={`w-96 absolute sm:w-128 top-[-50%] duration-300 transition-all left-[50%] translate-x-[-50%] scale-180 sm:scale-120`}
          style="
          animation: rotate-animation 90s infinite linear;
          z-index: -6;
          background-size: cover;
          object-fit: fill;"
        ></img>
        <header
          class="flex sm:items-center justify-center max-sm:mb-4 sm:py-2 text-center z-[-4]"
          style={`flex-grow: ${expanded() === "" ? "1" : "0"}; transition: flex-grow 0.3s ease-in-out;`}
        >
          <a href="https://tarakoshka.tech">
            <h1 class="text-5xl sm:text-5xl italic font-light">
              tarakoshka.tech
            </h1>
          </a>
        </header>
        <a
          class={`sm:hover:scale-125 absolute top-[20%] left-[15%] ${expanded() === "" ? "opacity-100 sm:scale-150 scale-100" : "opacity-0 scale-0"} transition-all`}
          style="z-index: -3;"
          href="https://tarakoshka.tech/static/cv.pdf"
	  target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://tarakoshka.tech/static/icons/cv_star.svg"
            class={`w-32 sm:w-28 transition-all`}
            style="
              animation: rotate-animation-back 20s infinite linear;
              background-size: cover;
              object-fit: fill;"
          ></img>
          <div class="flex sm:gap-0 gap-1 items-center justify-center flex-col sm:text-lg text-2xl font-bold text-black absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Download />
            <p class="font-[Inter] text-2xl">CV</p>
          </div>
        </a>
        <A
          class={`sm:hover:scale-125 absolute top-[25%] left-[50%] sm:left-[75%] ${expanded() === "" ? "opacity-100 sm:scale-150 scale-100" : "opacity-0 scale-0"} transition-all`}
          style="z-index: -3;"
          href="/lesya"
        >
          <img
            src="https://tarakoshka.tech/static/icons/lesya_star.svg"
            class={`w-38 sm:w-32 transition-all`}
            style="
              animation: rotate-animation 20s infinite linear;
              background-size: cover;
              object-fit: fill;"
          ></img>
          <div class="flex sm:gap-0 gap-1 items-center justify-center flex-col sm:text-lg text-2xl font-bold text-black absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Cat />
            <p class="font-[Inter] text-2xl">Cat</p>
          </div>
        </A>
        {/* <div
          style={`z-index: -100; flex-grow: ${expanded() === "" ? "1" : "0"}; transition: flex-grow 0.3s ease-in-out;`}
        ></div> */}
        <AccordionSection
          id="done"
          title="DONE"
          subtitle="finished projects"
          isExpanded={isExpanded("done")}
          onToggle={() => toggleSection("done")}
        >
          <div
            class="flex flex-row gap-4 overflow-x-scroll"
            style="scrollbar-width: none;"
          >
            <div class="w-0 px-1"></div>
            <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/finished">
              {useProjects().items() &&
                useProjects()
                  ?.items()
                  ?.map((project) => <ProjectCard project={project} />)}
            </ProjectsProvider>
            <div class="w-0 px-1"></div>
          </div>
        </AccordionSection>
        <AccordionSection
          id="now"
          title="NOW"
          subtitle="current projects"
          isExpanded={isExpanded("now")}
          onToggle={() => toggleSection("now")}
        >
          <div class="flex flex-column gap-4">
            <div
              class="flex flex-row gap-4 w-full overflow-x-scroll"
              style="scrollbar-width: none;"
            >
              <div class="w-0 px-1"></div>
              <ProjectsProvider baseURL="https://tarakoshka.tech/api/projects/ongoing">
                {useProjects().items() &&
                  useProjects()
                    ?.items()
                    ?.map((project) => <ProjectCard project={project} />)}
              </ProjectsProvider>
              <div class="w-0 px-1"></div>
            </div>
          </div>
          <MusicProvider baseURL="https://tarakoshka.tech/api/music">
            {useMusic().items() && (
              <div class="flex flex-col mt-3">
                <p class="ms-6 text-xl italic text-[#ffffff] mb-2">
                  listening to
                </p>
                <div class="flex flex-row justify-between me-6">
                  <a href={useMusic()?.items()?.url} class="group">
                    <div class="flex flex-row ms-6 items-center gap-4">
                      <img
                        src={useMusic()?.items()?.image}
                        alt={useMusic()?.items()?.title}
                        class="size-12 rounded-md sm:group-hover:scale-90 transition-all"
                      />
                      <div class="flex flex-col">
                        <h3 class="sm:text-xl">{useMusic()?.items()?.title}</h3>
                        <p class="italic sm:text-xl">
                          {useMusic()?.items()?.artist}
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    class="flex justify-center sm:hover:scale-90 transition-all items-center rounded-md p-3 sm:aspect-square bg-[#2B251F] transition-all"
                    href="https://www.last.fm/user/Lemurr4ik_"
                    target="_blank"
                  >
                    <img
                      class="transition-all size-6 sm:scale-175"
                      src="https://tarakoshka.tech/static/icons/music.svg"
                      alt={useMusic()?.items()?.title}
                    ></img>
                  </a>
                </div>
              </div>
            )}
          </MusicProvider>
        </AccordionSection>
        <AccordionSection
          id="about"
          title="ABOUT"
          subtitle="hi everyone, I'm Iaroslav ♥"
          isExpanded={isExpanded("about")}
          onToggle={() => toggleSection("about")}
        >
          <div class="pe-12 ms-6">
            <div class="flex flex-wrap gap-2 sm:gap-4 flex-row">
              <SocialTag text="17 y/o" />
              <SocialTag text="ru/eng" />
              <SocialTag text="mobile developer" />
              <SocialTag text="designer" />
              <SocialTag text="open-source advocate" />
            </div>
          </div>
        </AccordionSection>
        <AccordionSection
          id="touch"
          title="TOUCH"
          subtitle="contact information"
          isExpanded={isExpanded("touch")}
          onToggle={() => toggleSection("touch")}
          actionButtons={[
            {
              icon: <SendMessage />,
              href: "/write-to-me",
            },
          ]}
        >
          <div class="flex flex-col">
            <div class="w-full pe-12 grid grid-cols-3 gap-4 ms-6 sm:grid-cols-6">
              <SocialIcon
                path="https://t.me/yaabelozerov"
                icon="telegram.svg"
              ></SocialIcon>
              <SocialIcon
                path="https://github.com/yaroslav-belozerov"
                icon="github.svg"
              ></SocialIcon>
              <SocialIcon
                path="https://anilist.co/user/Lemurr4ik/"
                icon="anilist.svg"
              ></SocialIcon>
              <SocialIcon
                path="https://mastodon.social/@yaabelozerov"
                icon="mastodon.svg"
              ></SocialIcon>
              <SocialIcon
                path="https://open.spotify.com/user/31ztrvjmvnvjcf4m6fhkv4gmys3i"
                icon="spotify.svg"
              ></SocialIcon>
              <SocialIcon
                path="https://bsky.app/profile/tarakoshka.bsky.social"
                icon="bluesky.svg"
              ></SocialIcon>
            </div>
            <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
              {useLastMessage().items() && (
                <div class="mt-2 flex flex-col">
                  <p class="ms-6 text-xl italic text-[#ffffff] mb-2">
                    your messages
                  </p>
                  <div class="flex flex-col justify-center rounded-md p-3 bg-[#2B251F] transition-all mx-6">
                    <p class="text-white text-xl">
                      {useLastMessage().items()?.text}
                    </p>
                    <i class="">
                      <span class="text-white">
                        {useLastMessage().items()?.creator}
                      </span>{" "}
                      on
                      {" " +
                        new Date(
                          useLastMessage().items()?.time ?? "",
                        ).toLocaleString("en-US", {
                          timeStyle: "short",
                          dateStyle: "long",
                          hour12: false,
                        })}
                    </i>
                  </div>
                </div>
              )}
            </MessageProvider>
          </div>
        </AccordionSection>
      </main>
    </Motion.main>
  );
}
