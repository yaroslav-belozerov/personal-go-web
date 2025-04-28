"use client";

import { createSignal } from "solid-js";
import AccordionSection from "./components/AccordionSection";
import ProjectCard from "./components/ProjectCard";
import SocialIcon from "./components/SocialIcon";
import SocialTag from "./components/SocialTag";
import { MusicProvider, useMusic } from "../../lib/api/musicHook";
import { ProjectsProvider, useProjects } from "../../lib/api/projectsHook";
import { MessageProvider, useLastMessage } from "../../lib/api/messagesHook";
import { ArrowDown, ExternalLink, SendMessage } from "./components/Icons";
import { Motion, Presence } from "solid-motionone";

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
      <main class="page min-h-screen bg-[#1a1611] text-[#f5e9c9] py-6 flex flex-col relative z-0 overflow-x-clip">
        <img
          src="/static/icons/star.svg"
          class="w-full sm:hidden"
          style="
          animation: rotate-animation 90s infinite linear;
          top: -45%;
          position: absolute;
          z-index: -1;
          background-size: cover;
          object-fit: fill;
          scale: 2;"
        ></img>
        <header class="py-8 text-center z-1">
          <a href="https://tarakoshka.tech">
            <h1 class="text-4xl italic font-light">tarakoshka.tech</h1>
          </a>
        </header>
        <div
          style={`flex-grow: ${expanded() === "" ? "1" : "0"}; transition: flex-grow 0.3s ease-in-out;`}
        ></div>
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
                        class="size-12 sm:size-18 rounded-md sm:group-hover:scale-90 transition-all"
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
                      src="/static/icons/music.svg"
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
