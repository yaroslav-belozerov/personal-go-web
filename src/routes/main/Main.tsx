"use client";

import { createSignal, Match, Show, Switch } from "solid-js";
import { Cat, Download } from "./components/Icons";
import SocialIcon from "./components/SocialIcon";
import SocialTag from "./components/SocialTag";
import { ProjectsProvider, useProjects } from "../../lib/api/projectsHook";
import { MessageProvider, useLastMessage } from "../../lib/api/messagesHook";
import { Motion, Presence } from "solid-motionone";
import Landing from "./pages/Landing";
import Current from "./pages/Current";
import Touch from "./pages/Touch";
import Meta from "./pages/Meta";
import { MusicProvider, useMusic } from "../../lib/api/musicHook";
import NewProjectCard from "./components/NewProjectCard";

export default function App() {
  const [projectsExpanded, setProjectsExpanded] = createSignal<boolean>(false);
  const [isCurrentProjects, setIsCurrentProjects] = createSignal<boolean>(true);

  return (
    <Motion.main
      initial={false}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main class="page md:hidden flex bg-[#1a1611] text-[#f5e9c9] md:pt-0 flex-col relative overflow-x-clip">
        <Landing></Landing>
        <Touch></Touch>
        <Current></Current>
        <Meta></Meta>
      </main>
      <main class="page md:flex hidden flex-col p-6">
        <nav class="flex flex-row items-center gap-4">
          <h1 class="italic text-white text-7xl me-4">
            <a href="https://tarakoshka.tech">tarakoshka.tech</a>
          </h1>
          <a
            class="relative z-2 md:hover:scale-90 transition-all"
            href="https://tarakoshka.tech/static/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="w-24"
              src="https://tarakoshka.tech/static/icons/cv_star.svg"
              style="
              animation: rotate-animation-back 20s infinite linear;
              background-size: cover;
              object-fit: fill;"
            ></img>
            <div class="text-[#1a1611] absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
              <Download />
              <p class="font-[Overpass] font-bold text-2xl">CV</p>
            </div>
          </a>
          <a
            href="/lesya"
            class="relative z-2 md:hover:scale-90 transition-all"
          >
            <img
              src="https://tarakoshka.tech/static/icons/lesya_star.svg"
              class="w-24"
              style="
              animation: rotate-animation 20s infinite linear;
              background-size: cover;
              object-fit: fill;"
            ></img>
            <div class="text-[#1a1611] absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
              <Cat />
              <p class="font-[Overpass] font-bold text-2xl">Cat</p>
            </div>
          </a>
        </nav>
        <div class="flex flex-row gap-4 mt-4">
          <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col h-fit w-fit gap-4">
            <div class="flex flex-col gap-4">
              <h2 class="text-5xl">Doing stuff</h2>
              <div class="flex flex-row font-[Overpass] gap-2">
                <button
                  class="cursor-pointer outline transition-all outline-transparent md:hover:outline-[#F5E9C9] grow-1 py-1 bg-[#1A1611] rounded-full"
                  style={
                    isCurrentProjects()
                      ? "outline: #F5E9C900;"
                      : "background: transparent;"
                  }
                  onClick={() => {
                    setIsCurrentProjects(true);
                  }}
                >
                  Current
                </button>
                <button
                  class="cursor-pointer outline transition-all outline-transparent md:hover:outline-[#F5E9C9] grow-1 py-1 bg-[#1A1611] rounded-full"
                  style={
                    isCurrentProjects()
                      ? "background: transparent;"
                      : "outline: #F5E9C900;"
                  }
                  onClick={() => {
                    setIsCurrentProjects(false);
                  }}
                >
                  Past
                </button>
              </div>
            </div>
            <Presence exitBeforeEnter>
              <Switch>
                <Match when={isCurrentProjects()}>
                  <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      class="flex flex-col gap-4 min-w-[250px]"
                      style="scrollbar-width: none;"
                    >
                      <ProjectsProvider
                        baseURL={"https://tarakoshka.tech/api/projects/ongoing"}
                      >
                        {useProjects().items() &&
                          useProjects()
                            ?.items()
                            ?.filter((it) => it.description != "")
                            ?.slice(0, projectsExpanded() ? 7 : 3)
                            ?.map((project) => (
                              <NewProjectCard
                                showPreview={!projectsExpanded()}
                                project={project}
                              />
                            ))}
                      </ProjectsProvider>
                      <button
                        onClick={() => setProjectsExpanded(!projectsExpanded())}
                        class="cursor-pointer px-8"
                        style="align-self: center;"
                      >
                        <svg
                          class="scale-120 transition-all"
                          style={
                            "transform: rotate(" +
                            (projectsExpanded() ? "180" : "0") +
                            "deg);"
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                          fill="currentColor"
                        >
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      </button>
                    </div>
                  </Motion.div>
                </Match>
                <Match when={!isCurrentProjects()}>
                  <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      class="flex flex-col gap-4 min-w-[250px]"
                      style="scrollbar-width: none;"
                    >
                      <ProjectsProvider
                        baseURL={
                          "https://tarakoshka.tech/api/projects/finished"
                        }
                      >
                        {useProjects().items() &&
                          useProjects()
                            ?.items()
                            ?.filter((it) => it.description != "")
                            ?.slice(0, projectsExpanded() ? 10 : 3)
                            ?.map((project) => (
                              <NewProjectCard
                                showPreview={
                                  !projectsExpanded() ||
                                  useProjects().items.length <= 3
                                }
                                project={project}
                              />
                            ))}

                        {useProjects().items() && (
                          <Show when={useProjects().items.length > 3}>
                            <button
                              onClick={() =>
                                setProjectsExpanded(!projectsExpanded())
                              }
                              class="cursor-pointer px-8"
                              style="align-self: center;"
                            >
                              <svg
                                class="scale-120 transition-all"
                                style={
                                  "transform: rotate(" +
                                  (projectsExpanded() ? "180" : "0") +
                                  "deg);"
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                                fill="currentColor"
                              >
                                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                              </svg>
                            </button>
                          </Show>
                        )}
                      </ProjectsProvider>
                    </div>
                  </Motion.div>
                </Match>
              </Switch>
            </Presence>
          </section>
          <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col w-fit h-fit gap-4">
            <h2 class="text-5xl">My socials</h2>
            <div class="flex flex-row flex-wrap gap-4">
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
              <SocialIcon
                path="https://x.com/yaabelozerov"
                icon="twitter.svg"
              ></SocialIcon>
              <SocialIcon
                path="mailto:me@tarakoshka.tech"
                icon="mail.svg"
              ></SocialIcon>
              <SocialIcon
                path="https://t.me/yaabelozerov"
                icon="telegram.svg"
              ></SocialIcon>
              <SocialIcon
                path="https://github.com/yaroslav-belozerov"
                icon="github.svg"
              ></SocialIcon>
            </div>
            <MusicProvider baseURL="https://tarakoshka.tech/api/music">
              {useMusic().items() && (
                <div class="flex flex-row flex-wrap justify-between gap-6 p-6 rounded-2xl bg-[#1A1611]">
                  <div class="flex flex-row flex-wrap items-center gap-3">
                    <img
                      src={useMusic()?.items()?.image}
                      alt={useMusic()?.items()?.title}
                      class="size-12 rounded-md transition-all"
                    />
                    <div class="flex flex-col font-[Overall]">
                      <h3 class="text-2xl text-white">
                        {useMusic()?.items()?.title}
                      </h3>
                      <p class="text-sm italic">
                        {useMusic()?.items()?.artist}
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.last.fm/user/Lemurr4ik_"
                    class="relative size-14 transition-all hover:scale-90"
                    target="_blank"
                  >
                    <img
                      class="transition-all size-14 scale-120 absolute"
                      style="animation: rotate-animation 20s infinite linear;"
                      src="https://tarakoshka.tech/static/icons/star2.svg"
                      alt={useMusic()?.items()?.title}
                    ></img>
                    <img
                      class="transition-all size-8 absolute top-[50%] left-[50%] translate-[-50%]"
                      src="https://tarakoshka.tech/static/icons/music.svg"
                      alt="Visit Last.fm"
                    ></img>
                  </a>
                </div>
              )}
            </MusicProvider>
          </section>
          <div class="flex flex-col gap-4 w-fit">
            <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col w-full h-fit gap-4">
              <h2 class="text-5xl">Leave a message</h2>
              <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
                {useLastMessage().items() && (
                  <div class="font-[Overpass] flex w-full flex-row justify-between items-center rounded-t-2xl rounded-b-md md:rounded-b-2xl p-6 bg-[#1A1611] transition-all">
                    <div class="flex flex-col">
                      <p class="text-white text-2xl">
                        {useLastMessage().items()?.text}
                      </p>
                      <p class="text-xl">
                        <span class="text-white">
                          {useLastMessage().items()?.creator}
                        </span>{" "}
                        on
                        {" " +
                          new Date(
                            useLastMessage().items()?.time ?? "",
                          ).toLocaleString("en-US", {
                            dateStyle: "long",
                            hour12: false,
                          })}
                      </p>
                    </div>
                    <a
                      href="/write-to-me"
                      style="align-self: end;"
                      class="relative size-14 transition-all hover:scale-90"
                    >
                      <img
                        class="transition-all size-14 scale-120 absolute"
                        style="animation: rotate-animation 20s infinite linear;"
                        src="https://tarakoshka.tech/static/icons/star2.svg"
                      ></img>

                      <svg
                        class="transition-all size-8 absolute top-[50%] left-[50%] translate-[-50%]"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        fill="currentColor"
                      >
                        <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                      </svg>
                    </a>
                  </div>
                )}
              </MessageProvider>
            </section>
            <section class="bg-[#2B251F] p-6 max-w-[800px] rounded-2xl flex flex-col w-fit h-fit gap-4">
              <h2 class="text-5xl">About</h2>
              <div class="flex flex-wrap gap-2 flex-row">
                <SocialTag text="17 y/o" />
                <SocialTag text="ru/eng" />
                <SocialTag text="moscow" />
                <SocialTag text="mobile dev" />
                <SocialTag text="designer" />
                <SocialTag text="kotlin" link="https://kotlinlang.org/" />
                <SocialTag text="neovim" link="https://neovim.io/" />
                <SocialTag text="fedora" link="https://fedoraproject.org/" />
                <SocialTag text="hyprland" link="https://hyprland.org/" />
                <SocialTag text="solidjs" link="https://www.solidjs.com/" />
                <SocialTag text="tailwind" link="https://tailwindcss.com/" />
                <SocialTag text="go" link="https://go.dev/" />
                <SocialTag text="echo" link="https://echo.labstack.com/" />
                <SocialTag text="senko.digital" link="https://senko.digital/" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </Motion.main>
  );
}
