"use client";

import { createSignal, Match, Show, Switch } from "solid-js";
import { Cat, Download } from "./components/Icons";
import SocialIcon from "./components/SocialIcon";
import SocialTag from "./components/SocialTag";
import { ProjectsProvider, useProjects } from "../../lib/api/projectsHook";
import { MessageProvider, useLastMessage } from "../../lib/api/messagesHook";
import { Motion, Presence } from "solid-motionone";
import Landing, { star } from "./pages/Landing";
import Current from "./pages/Current";
import Touch from "./pages/Touch";
import Meta from "./pages/Meta";
import { MusicProvider, useMusic } from "../../lib/api/musicHook";
import NewProjectCard from "./components/NewProjectCard";
import { Portal } from "solid-js/web";
import { useWebring, WebringProvider } from "../../lib/api/webringHook";
import { SwitchCard } from "./components/SwitchCard";
import { A, useSearchParams } from "@solidjs/router";
import Badge from "./components/Badge";
import Write from "../write/Write";
import { LatestBlimpProvider, useLatestBlimp } from "../../lib/api/blimpHook";
import { blimp } from "./pages/Blimps";

export default function App() {
  const [projectsExpanded, setProjectsExpanded] = createSignal<boolean>(false);
  const [isCurrentProjects, setIsCurrentProjects] = createSignal<boolean>(true);
  const [q, setQ] = useSearchParams();
  const openWrite = () => q.write === "true";
  const setOpenWrite = (value: boolean) => {
    document.body.style.overflowX = value ? "hidden" : "unset";
    setQ({ write: value ? "true" : undefined });
  };

  return (
    <Motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main
        class={`page ${openWrite() ? "overflow-y-hidden" : "overflow-y-scroll"} overflow-x-hidden lg:hidden flex bg-zinc-900 text-white lg:pt-0 flex-col relative`}
      >
        <Landing></Landing>
        <Touch></Touch>
        <Current></Current>
        <Meta></Meta>
      </main>
      <main
        class={`page lg:flex hidden flex-col p-6 ${openWrite() ? "overflow-y-hidden" : "overflow-y-scroll"}`}
      >
        <Portal>
          <Presence>
            <Show when={openWrite()} fallback={<div></div>}>
              <Write onClose={() => setOpenWrite(false)} />
            </Show>
          </Presence>
        </Portal>
        <nav class="flex flex-row items-center gap-4">
          <h1 class="italic text-white text-7xl me-4">
            <a
              aria-label="Main website - tarakoshka.tech"
              href="https://tarakoshka.tech"
            >
              tarakoshka.tech
            </a>
          </h1>
          <a
            aria-label="PDF of my CV"
            class="relative z-2 lg:hover:scale-90 transition-all"
            href="https://tarakoshka.tech/static/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="w-24"
              style="
              animation: rotate-animation-back 20s infinite linear;
              background-size: cover;
              object-fit: fill;"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 240 240"
            >
              <path
                fill="#FFE942"
                d="m120 0 23.294 33.067L180 16.077l3.64 40.283L223.923 60l-16.99 36.706L240 120l-33.067 23.294L223.923 180l-40.283 3.64-3.64 40.283-36.706-16.99L120 240l-23.294-33.067L60 223.923l-3.64-40.283L16.077 180l16.99-36.706L0 120l33.067-23.294L16.077 60l40.283-3.64L60 16.077l36.706 16.99L120 0Z"
              />
            </svg>
            <div class="text-zinc-900 absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
              <Download />
              <p class="font-[Overpass] font-bold text-xl">CV</p>
            </div>
          </a>
          <a
            aria-label="My cat"
            href="/lesya"
            class="relative z-2 lg:hover:scale-90 transition-all"
          >
            <svg
              class="w-24"
              style="
              animation: rotate-animation 20s infinite linear;
              background-size: cover;
              object-fit: fill;"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 240 240"
            >
              <path
                fill="#00FF7B"
                d="m120 0 23.294 33.067L180 16.077l3.64 40.283L223.923 60l-16.99 36.706L240 120l-33.067 23.294L223.923 180l-40.283 3.64-3.64 40.283-36.706-16.99L120 240l-23.294-33.067L60 223.923l-3.64-40.283L16.077 180l16.99-36.706L0 120l33.067-23.294L16.077 60l40.283-3.64L60 16.077l36.706 16.99L120 0Z"
              />
            </svg>
            <div class="text-zinc-900 absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
              <Cat />
              <p class="font-[Overpass] font-bold text-xl">Cat</p>
            </div>
          </a>
        </nav>
        <div class="flex flex-row mt-4">
          <div
            class={`flex flex-col border-l-2 border-y-2 border-white rounded-l-2xl h-fit ${!isCurrentProjects() || projectsExpanded() ? "rounded-b-3xl" : ""} border-r-2 `}
          >
            <section
              class={`border-b-2 border-white p-6 flex flex-col h-fit w-fit gap-4`}
            >
              <div class="flex flex-col gap-4">
                <h2 class="text-5xl">Doing stuff</h2>
                <div class="flex flex-row font-[Overpass]">
                  <button
                    class={`cursor-pointer border-2 w-full transition-all border-transparent py-2 rounded-4xl ${isCurrentProjects() ? "bg-zinc-900 rounded-r-none" : "lg:hover:border-white"}`}
                    onClick={() => {
                      setIsCurrentProjects(true);
                    }}
                  >
                    Current
                  </button>
                  <button
                    class={`cursor-pointer border-2 w-full transition-all border-transparent py-2 rounded-4xl ${!isCurrentProjects() ? "bg-zinc-900 rounded-l-none" : "lg:hover:border-white"}`}
                    style={
                      isCurrentProjects()
                        ? "background: transparent;"
                        : "outline: transparent;"
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
                          baseURL={
                            "https://tarakoshka.tech/api/projects/ongoing"
                          }
                        >
                          {useProjects().get() &&
                            useProjects()
                              ?.get()
                              ?.filter((it) => it.description != "")
                              ?.slice(0, projectsExpanded() ? 7 : 3)
                              ?.map((project) => (
                                <NewProjectCard
                                  showPreview={false}
                                  project={project}
                                />
                              ))}
                        </ProjectsProvider>
                        <button
                          onClick={() =>
                            setProjectsExpanded(!projectsExpanded())
                          }
                          name="see more/less projects"
                          aria-label="see more/less projects"
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
                          {useProjects().get() &&
                            useProjects()
                              ?.get()
                              ?.filter((it) => it.description != "")
                              ?.slice(0, projectsExpanded() ? 10 : 3)
                              ?.reverse()
                              ?.map((project) => (
                                <NewProjectCard
                                  showPreview={
                                    !projectsExpanded() ||
                                    useProjects().get.length <= 3
                                  }
                                  project={project}
                                />
                              ))}

                          {useProjects().get() && (
                            <Show when={useProjects().get.length > 3}>
                              <button
                                onClick={() =>
                                  setProjectsExpanded(!projectsExpanded())
                                }
                                name="see more/less projects"
                                aria-label="see more/less projects"
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
            <section id="blimp" class={`p-4 flex flex-col h-fit w-fit gap-4`}>
              <div class="flex flex-row gap-2 items-center">
                <h2 class="text-white my-2 text-center text-5xl px-2">
                  Last Blimp
                </h2>
                <A
                  aria-label="See Blimps"
                  href="/blimps"
                  class="text-3xl hover:bg-white hover:text-black transition-all rounded-full flex flex-col items-center justify-center aspect-square outline-white outline-2 text-white px-3"
                >
                  all
                </A>
              </div>
              <LatestBlimpProvider baseURL="https://tarakoshka.tech/api/blimps/latest">
                {[useLatestBlimp().get()].map(
                  (b) => b && blimp(b.id, b.content, b.likes, false),
                )}
              </LatestBlimpProvider>
            </section>
          </div>
          <div class="flex flex-col w-full border-t-2 h-fit border-white">
            <section class="p-4 flex flex-col w-full h-fit gap-4">
              <h2 class="text-5xl pt-2 px-2">My socials</h2>
              <div class="flex flex-row flex-wrap">
                <A
                  aria-label="Go to Blog"
                  class="group flex max-lg:w-full w-8 min-w-14 p-2 aspect-square"
                  style="flex: 1 0 26%;"
                  href="/blog"
                >
                  <div class="relative w-full h-full flex items-center justify-center lg:group-hover:scale-90 lg:group-hover:bg-[#0C12C9] rounded-3xl max-lg:bg-[#2B251F] bg-zinc-900 transition-all">
                    <span class="text-7xl italic group-hover:opacity-0 transition-all">
                      tt
                    </span>
                    <div class="absolute gap-1 opacity-0 group-hover:opacity-100 group-hover:scale-135 transition-all rounded-full items-center flex flex-row">
                      <p class="text-white pb-[2px]">read my blog</p>
                    </div>
                  </div>
                </A>
                <SocialIcon
                  label="AniList"
                  path="https://anilist.co/user/Lemurr4ik/"
                  icon={
                    <svg
                      class="transition-all lg:group-hover:scale-135 min-w-[35px] aspect-square w-[60%]"
                      role="img"
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>AniList</title>
                      <path d="M6.361 2.943L0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948l1.688 5.018H7.144z" />
                    </svg>
                  }
                ></SocialIcon>
                <SocialIcon
                  label="Mastodon"
                  path="https://mastodon.social/@yaabelozerov"
                  icon={
                    <svg
                      class="transition-all lg:group-hover:scale-135 min-w-[35px] aspect-square w-[60%]"
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20.94 14c-.28 1.41-2.44 2.96-4.97 3.26-1.31.15-2.6.3-3.97.24-2.25-.11-4-.54-4-.54v.62c.32 2.22 2.22 2.35 4.03 2.42 1.82.05 3.44-.46 3.44-.46l.08 1.65s-1.28.68-3.55.81c-1.25.07-2.81-.03-4.62-.5-3.92-1.05-4.6-5.24-4.7-9.5l-.01-3.43c0-4.34 2.83-5.61 2.83-5.61 1.45-.66 3.91-.96 6.47-.96h.06c2.56 0 5.02.3 6.47.96 0 0 2.83 1.27 2.83 5.61 0 0 .04 3.21-.39 5.43m-2.94-5.09c0-1.08-.3-1.91-.85-2.56-.56-.63-1.3-.96-2.23-.96-1.06 0-1.87.41-2.42 1.23l-.5.88-.5-.88c-.56-.82-1.36-1.23-2.43-1.23-.92 0-1.66.33-2.23.96-.55.65-.84 1.48-.84 2.56v5.26h2.1v-5.11c0-1.06.45-1.62 1.36-1.62 1 0 1.5.65 1.5 1.93v2.79h2.07v-2.79c0-1.28.5-1.93 1.51-1.93.9 0 1.35.56 1.35 1.62v5.11h2.11z" />
                    </svg>
                  }
                ></SocialIcon>
                <SocialIcon
                  label="Spotify"
                  path="https://open.spotify.com/user/31ztrvjmvnvjcf4m6fhkv4gmys3i"
                  icon={
                    <svg
                      class="transition-all lg:group-hover:scale-135 min-w-[35px] aspect-square w-[60%]"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-140.000000, -7479.000000)"
                          fill="white"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z"
                              id="spotify-[#162]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  }
                ></SocialIcon>
                <SocialIcon
                  label="Twitter (X)"
                  path="https://x.com/yaabelozerov"
                  icon={
                    <svg
                      class="transition-all lg:group-hover:scale-135 min-w-[35px] aspect-square w-[60%]"
                      viewBox="0 -2 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-60.000000, -7521.000000)"
                          fill="white"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                              id="twitter-[#154]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  }
                ></SocialIcon>
                <SocialIcon
                  label="E-Mail"
                  path="mailto:me@tarakoshka.tech"
                  icon={
                    <svg
                      class="transition-all lg:group-hover:scale-135 min-w-[35px] aspect-square w-[60%]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
                        fill="white"
                      />
                    </svg>
                  }
                ></SocialIcon>
                <SocialIcon
                  label="Telegram"
                  path="https://t.me/yaabelozerov"
                  icon={
                    <svg
                      viewBox="0 0 512 512"
                      class="transition-all lg:group-hover:scale-135 min-w-[35px] aspect-square w-[60%]"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m470.4354553 45.4225006-453.6081524 175.8265381c-18.253809 8.1874695-24.4278889 24.5854034-4.4127407 33.4840851l116.3710175 37.1726685 281.3674316-174.789505c15.3625488-10.9733887 31.0910339-8.0470886 17.5573425 4.023468l-241.6571311 219.9348907-7.5913849 93.0762329c7.0313721 14.3716125 19.9055786 14.4378967 28.1172485 7.2952881l66.8582916-63.5891418 114.5050659 86.1867065c26.5942688 15.8265076 41.0652466 5.6130371 46.7870789-23.3935242l75.1055603-357.4697647c7.7979126-35.7059288-5.5005798-51.437891-39.3996277-37.7579422z" />
                    </svg>
                  }
                ></SocialIcon>
                <SocialIcon
                  label="GitHub"
                  path="https://github.com/yaroslav-belozerov"
                  icon={
                    <svg
                      class="transition-all lg:group-hover:scale-135 min-w-[35px] aspect-square w-[60%]"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m0 0h24v24h-24z"
                        fill="#F5E9C9"
                        opacity="0"
                        transform="matrix(-1 0 0 -1 24 24)"
                      />
                      <path
                        d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"
                        fill="white"
                      />
                    </svg>
                  }
                ></SocialIcon>
              </div>
              <MusicProvider baseURL="https://tarakoshka.tech/api/music">
                {useMusic().get() && (
                  <div class="flex flex-row w-full justify-between p-6 rounded-2xl bg-zinc-900">
                    <a
                      aria-label={useMusic()?.get()?.title}
                      href={useMusic()?.get()?.url}
                      class="flex flex-row items-center gap-3 hover:scale-95 transition-all"
                    >
                      <img
                        src={useMusic()?.get()?.image}
                        alt={useMusic()?.get()?.title}
                        class="size-12 rounded-md transition-all"
                      />
                      <div class="flex flex-col font-[Overpass]">
                        <h3 class="text-2xl text-white">
                          {useMusic()?.get()?.title}
                        </h3>
                        <p class="text-sm italic">
                          {useMusic()?.get()?.artist}
                        </p>
                      </div>
                    </a>
                    <a
                      aria-label="My LastFM account"
                      href="https://www.last.fm/user/Lemurr4ik_"
                      class="relative size-14 transition-all hover:scale-90"
                      target="_blank"
                    >
                      <svg
                        class="transition-all size-14 scale-120 absolute"
                        style="animation: rotate-animation 20s infinite linear;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="409"
                        height="405"
                        fill="none"
                        viewBox="0 0 409 405"
                      >
                        <path
                          fill="currentColor"
                          d="M180.993 9.267c13.508-11.646 33.506-11.646 47.014 0l26.686 23.008a36.003 36.003 0 0 0 23.989 8.73l35.232-.47c17.834-.24 33.154 12.616 36.015 30.22l5.654 34.778a36.001 36.001 0 0 0 12.764 22.109l27.292 22.285c13.815 11.28 17.288 30.975 8.164 46.3l-18.024 30.276a36.003 36.003 0 0 0-4.433 25.141l6.582 34.615c3.332 17.521-6.667 34.84-23.507 40.715l-33.268 11.607a36.004 36.004 0 0 0-19.556 16.41l-17.208 30.747c-8.71 15.564-27.502 22.404-44.179 16.08l-32.946-12.493a36.003 36.003 0 0 0-25.528 0l-32.946 12.493c-16.677 6.324-35.469-.516-44.179-16.08l-17.208-30.747a36.004 36.004 0 0 0-19.556-16.41L44.58 326.974c-16.84-5.875-26.84-23.194-23.508-40.715l6.583-34.615a36.002 36.002 0 0 0-4.433-25.141L5.197 196.227c-9.124-15.325-5.651-35.02 8.163-46.3l27.293-22.285a36 36 0 0 0 12.764-22.109l5.654-34.778c2.861-17.604 18.181-30.46 36.015-30.22l35.232.47a36.003 36.003 0 0 0 23.989-8.73l26.686-23.008Z"
                        />
                      </svg>
                      <svg
                        class="transition-all text-black pr-[3px] size-10 absolute top-[50%] left-[50%] translate-[-50%]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8894 5.1786V16.4786C20.8894 18.4586 19.2794 20.0686 17.2994 20.0686C15.3294 20.0686 13.7094 18.4586 13.7094 16.4786C13.7094 14.5086 15.3294 12.8986 17.2994 12.8986C18.1394 12.8986 18.8894 13.1886 19.4994 13.6686V7.7186L10.2894 10.3386V18.4086C10.2894 20.3886 8.66937 21.9986 6.69937 21.9986C4.71937 21.9986 3.10938 20.3886 3.10938 18.4086C3.10938 16.4386 4.71937 14.8286 6.69937 14.8286C7.52938 14.8286 8.27938 15.1186 8.88938 15.5886V6.7486C8.88938 5.2786 9.77938 4.1386 11.1894 3.7586L16.9694 2.1786C18.1394 1.8586 19.1294 1.9686 19.8294 2.5086C20.5394 3.0386 20.8894 3.9386 20.8894 5.1786Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </MusicProvider>
            </section>
            <section
              class={`outline-white outline-2 p-6 rounded-b-2xl flex flex-col w-full h-fit gap-4 ${!isCurrentProjects() || projectsExpanded() ? "border-l-0" : ""}`}
            >
              <h2 class="text-5xl">Buttons</h2>
              <div class="flex flex-row flex-wrap gap-2 mb-2">
                <Badge
                  label="My 88x31 button"
                  link="https://tarakoshka.tech/"
                  src="https://tarakoshka.tech/static/88x31.gif"
                ></Badge>
                <Badge
                  label="HSE button"
                  link="https://hse.ru/"
                  src="https://tarakoshka.tech/static/buttons/hse.gif"
                ></Badge>
                <Badge
                  label="OMORI button"
                  link="https://store.steampowered.com/app/1150690/OMORI/"
                  src="https://tarakoshka.tech/static/buttons/omori.gif"
                ></Badge>
                <Badge
                  label="Katana ZERO button"
                  link="https://store.steampowered.com/app/460950/Katana_ZERO/"
                  src="https://tarakoshka.tech/static/buttons/katana.gif"
                ></Badge>
              </div>
              <div class="flex flex-row flex-wrap gap-2">
                <Badge
                  label="This page uses JavaScript button"
                  link="https://ecma-international.org/publications-and-standards/standards/ecma-262/"
                  src="https://tarakoshka.tech/static/buttons/js.png"
                ></Badge>
                <Badge
                  label="Made by a human button"
                  link="https://cadence.moe/blog/2024-10-05-created-by-a-human-badges"
                  src="https://tarakoshka.tech/static/buttons/created-by-human.webp"
                ></Badge>
                <Badge
                  label="Get Firefox button"
                  link="https://www.firefox.com/"
                  src="https://tarakoshka.tech/static/buttons/get-firefox.gif"
                ></Badge>
                <Badge
                  label="uBlock Origin NOW button"
                  link="https://ublockorigin.com/"
                  src="https://tarakoshka.tech/static/buttons/ublock.webp"
                ></Badge>
                <Badge
                  label="Made on GNU/Linux button"
                  link="https://www.gnu.org/"
                  src="https://tarakoshka.tech/static/buttons/made-on-linux.png"
                ></Badge>
                <Badge
                  label="otomir23 button"
                  link="https://otomir23.me/"
                  src="https://otomir23.me/88x31.png"
                ></Badge>
                <Badge
                  label="entitybtw button"
                  link="https://entitybtw.ru/"
                  src="https://entitybtw.ru/images/entitybtw.gif"
                ></Badge>
                <Badge
                  label="milkcool button"
                  link="https://milkcool.ru/"
                  src="https://milkcool.ru/buttons/mybutton.gif"
                ></Badge>
                <Badge
                  label="asyasocute button"
                  link="https://asyasocute.online/"
                  src="https://asyasocute.online/badges/cowl.png"
                ></Badge>
                <Badge
                  label="okt button"
                  link="https://okt.nekoweb.org"
                  src="https://okt.nekoweb.org/assets/pics/okt_button.gif"
                ></Badge>
                <Badge
                  label="timofei302 button"
                  link="https://timofei302.su"
                  src="https://timofei302.su/res/88x31.png"
                ></Badge>
                <Badge
                  label="myslivets button"
                  link="https://myslivets.com/"
                  src="https://timofei302.su/img/banners/myslivets-banner.png"
                ></Badge>
                <Badge
                  label="edwardcode button"
                  link="https://edwardcode.net/"
                  src="https://edwardcode.net/www/button.gif"
                ></Badge>
                <Badge
                  label="c1oudy button"
                  link="https://c1oudy.otlegacy.com/"
                  src="https://c1oudy.otlegacy.com//_astro/c1oudy.DQjxxEhY.png"
                ></Badge>
                <Badge
                  label="gooslime button"
                  link="https://gooslime.neocities.org/"
                  src="https://gooslime.neocities.org/gooslime_branding/gooslime.gif"
                ></Badge>
                <Badge
                  label="veselcraft button"
                  link="https://veselcraft.ru/"
                  src="https://veselcraft.ru/images/vc.gif"
                ></Badge>
                <Badge
                  label="jsopn button"
                  link="https://jsopn.com/?glunging=true"
                  src="https://jsopn.com/images/88x31/button.gif"
                ></Badge>
                <Badge
                  label="senkodev button"
                  link="https://senko.dev/"
                  src="https://senko.dev/banners/senko.gif"
                ></Badge>
                <Badge
                  label="teidesu button"
                  link="https://tei.su/"
                  src="https://tei.su/88x31/teidesu.png"
                ></Badge>
                <Badge
                  label="sanspie button"
                  link="https://about.akarpov.ru/"
                  src="https://otomir23.me/_astro/sanspie.BIFJ1uLz.gif"
                ></Badge>
                <Badge
                  label="monomere button"
                  link="https://monomere.cc/"
                  src="https://monomere.cc/buttons/button.gif"
                ></Badge>
              </div>
            </section>
          </div>
          <div class="flex flex-col w-full border-2 border-white overflow-clip h-fit rounded-r-2xl rounded-b-2xl ">
            <section class="bg-[#ff3737] text-black p-6 flex flex-col w-full h-fit gap-4 border-white border-b-2">
              <a
                aria-label="otomir23 webring"
                class="flex flex-row gap-4 items-center group"
                href="https://webring.otomir23.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 class="text-5xl">Webring</h2>
                <svg
                  class="z-1 size-14 group-hover:scale-90 transition-all"
                  style="animation: rotate-animation 30s infinite linear;"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                </svg>
              </a>
              <WebringProvider baseURL="https://webring.otomir23.me/tarakoshka/data">
                <nav class="items-center z-1 w-full flex text-white font-[Overpass] flex-row gap-2">
                  <a
                    aria-label="Previous webring listing"
                    class="flex gap-1 group text-[#FF3737] w-full justify-start rounded-[30px] bg-black p-3 hover:gap-2 items-center hover:rounded-r-[0px] transition-all duration-400"
                    href={useWebring().get()?.prev?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="size-8 group-hover:scale-90 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    <p class="font-[Overpass] text-xl pt-[2px] group-hover:tracking-[0.2em] transition-all">
                      {useWebring().get()?.prev?.name}
                    </p>
                  </a>
                  <a
                    aria-label="Next webring listing"
                    class="flex gap-1 group text-[#FF3737] w-full justify-end rounded-[30px] bg-black p-3 hover:gap-2 items-center hover:rounded-l-[0px] transition-all duration-400"
                    href={useWebring().get()?.next?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p class="font-[Overpass] text-xl pt-[2px] group-hover:tracking-[0.2em] transition-all">
                      {useWebring().get()?.next?.name}
                    </p>
                    <svg
                      viewBox="0 0 24 24"
                      class="size-8 group-hover:scale-90 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M12 5v14M5 12l7 7 7-7"
                        transform="rotate(-90 12 12)"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </nav>
              </WebringProvider>
            </section>
            <section class="p-6 flex flex-col w-full h-fit gap-4 border-white border-b-2">
              <h2 class="text-5xl">Leave a message</h2>
              <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
                {useLastMessage().get() && (
                  <div class="font-[Overpass] flex overflow-clip justify-between items-center w-full gap-4 flex-row items-center rounded-t-2xl rounded-b-md lg:rounded-b-2xl p-6 bg-zinc-900 transition-all">
                    <div class="flex flex-col shrink">
                      <p class="text-white text-2xl">
                        {useLastMessage().get()?.text}
                      </p>
                      <p class="text-xl">
                        <span class="text-white">
                          {useLastMessage().get()?.creator}
                        </span>{" "}
                        on
                        {" " +
                          new Date(
                            useLastMessage().get()?.time ?? "",
                          ).toLocaleString("en-US", {
                            dateStyle: "long",
                            hour12: false,
                          })}
                      </p>
                    </div>
                    <button
                      onClick={() => setOpenWrite(true)}
                      name="open messages dialog"
                      aria-label="open messages dialog"
                      class="relative min-w-14 size-14 transition-all hover:scale-90 lg:cursor-pointer"
                    >
                      <svg
                        class="transition-all size-14 min-w-14 top-0 bottom-0 scale-120 absolute"
                        style="animation: rotate-animation 20s infinite linear;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="409"
                        height="405"
                        fill="none"
                        viewBox="0 0 409 405"
                      >
                        <path
                          fill="currentColor"
                          d="M180.993 9.267c13.508-11.646 33.506-11.646 47.014 0l26.686 23.008a36.003 36.003 0 0 0 23.989 8.73l35.232-.47c17.834-.24 33.154 12.616 36.015 30.22l5.654 34.778a36.001 36.001 0 0 0 12.764 22.109l27.292 22.285c13.815 11.28 17.288 30.975 8.164 46.3l-18.024 30.276a36.003 36.003 0 0 0-4.433 25.141l6.582 34.615c3.332 17.521-6.667 34.84-23.507 40.715l-33.268 11.607a36.004 36.004 0 0 0-19.556 16.41l-17.208 30.747c-8.71 15.564-27.502 22.404-44.179 16.08l-32.946-12.493a36.003 36.003 0 0 0-25.528 0l-32.946 12.493c-16.677 6.324-35.469-.516-44.179-16.08l-17.208-30.747a36.004 36.004 0 0 0-19.556-16.41L44.58 326.974c-16.84-5.875-26.84-23.194-23.508-40.715l6.583-34.615a36.002 36.002 0 0 0-4.433-25.141L5.197 196.227c-9.124-15.325-5.651-35.02 8.163-46.3l27.293-22.285a36 36 0 0 0 12.764-22.109l5.654-34.778c2.861-17.604 18.181-30.46 36.015-30.22l35.232.47a36.003 36.003 0 0 0 23.989-8.73l26.686-23.008Z"
                        />
                      </svg>
                      <svg
                        class="transition-all text-black size-8 absolute top-[50%] left-[50%] translate-[-50%]"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm160-320h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Z" />
                      </svg>
                    </button>
                  </div>
                )}
              </MessageProvider>
            </section>
            <section class="p-6 max-w-[800px] flex flex-col w-fit h-fit gap-4">
              <div class="flex flex-row justify-between items-center">
                <h2 class="text-5xl">About</h2>
                <a aria-label="Support me" href="/support">
                  {star(0)}
                </a>
              </div>
              <div class="flex flex-col gap-3 font-[Overpass] text-white">
                <a
                  aria-label="HSE Lyceum"
                  href="https://school.hse.ru/"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="flex hover:scale-97 transition-all flex-row gap-4 border-[#FBBA00] border-2 bg-[#382a00] rounded-full items-center px-4 py-3"
                >
                  <svg
                    class="size-8 pt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 105.37 105.48"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          fill="#FBBA00"
                          class="cls-1"
                          d="M105.33,74.77A15.17,15.17,0,0,1,90.41,90.15H70.26C62,90.15,54.11,97,54.11,105.48h-2.6c0-8.47-8.13-15.37-16.36-15.37H14.93A15.14,15.14,0,0,1,0,74.77V0H105.37Z"
                        />
                        <path
                          fill="#1D1D1B"
                          class="cls-2"
                          d="M69.5,70h6.66c-.64,2.44-2.75,3.41-5,3.41a6.23,6.23,0,0,1-3.91-1.37l-1.61,3.2A8.91,8.91,0,0,0,71.28,77c5.43,0,8.86-3.25,8.86-8.58,0-5.17-3.56-8.58-8.37-8.58a9.12,9.12,0,0,0-6,1.92l1.45,2.84a6.09,6.09,0,0,1,3.6-1.21c2.51,0,4.43,1.07,5.17,3.08H69.5ZM43.17,76.71H62.61V60.11H58.81v13h-4v-13H51v13H47v-13H43.17ZM33,63.57c.92,0,1.83.5,1.83,1.49,0,1.21-.78,1.61-1.75,1.61H31.86v-3A9.34,9.34,0,0,1,33,63.57M33.33,70c1.23,0,2,.45,2,1.49s-.73,1.75-2.2,1.75a4.31,4.31,0,0,1-1.28-.14V70Zm-5.26,6.66c1,.09,3.18.14,4.76.14,3.6,0,6.3-1.63,6.3-5.12a3.79,3.79,0,0,0-2.37-3.79v0a4.07,4.07,0,0,0,1.9-3.7c0-2.3-1.61-4.12-5.57-4.12-1.8,0-4.1.09-5,.14Z"
                        />
                        <path
                          fill="#1D1D1B"
                          class="cls-2"
                          d="M80.37,37.89H76.55L73.19,46l-4.67-8.11H64.23l7.13,11.87-.21.5a1.18,1.18,0,0,1-1.23.66,1.74,1.74,0,0,1-1.16-.4l-1.33,3.22a4.71,4.71,0,0,0,2.51.74c2.3,0,3.72-1.4,4.86-3.94ZM50.25,54.48l7.35-10.31V54.48h3.79V37.89H58.07L50.72,48.2V37.89H46.93V54.48Zm-11.85,0h3.79V37.89H38.39v6.35h-6V37.89H28.56V54.48h3.79V47.8h6Z"
                        />
                        <path
                          fill="#1D1D1B"
                          class="cls-2"
                          d="M83.77,11.4c0,2.28,1.82,3.79,5,3.79,3,0,5-1.49,4.93-3.79H90.17c0,1-.47,1.18-1.37,1.18s-1.47-.28-1.47-1.18Zm.71,20.86,7.35-10.31V32.25h3.79V15.66H92.3L85,26V15.66H81.16V32.25Zm-17.42,0H77.14V28.7H70.85v-3h5.33V22.13H70.85V19.22h6V15.66H67.06Zm-18.61,0h12V35.1H64V28.7H61.73v-13H57.94v13H52.25v-13H48.46Zm-15.88,0,7.35-10.31V32.25h3.79V15.66H40.4L33,26V15.66H29.26V32.25Zm-11.85,0h3.79V15.66h-11L13.28,19c-.66,9.2-2.09,9.72-3.46,9.48l-.07,3.79c3.89.64,6-1.16,7-9.91l.36-3.13h3.65Z"
                        />
                      </g>
                    </g>
                  </svg>
                  <h5 class="text-xl pt-1">HSE Lyceum Alumni</h5>
                </a>
                <a
                  aria-label="PROD programming contest"
                  href="https://prodcontest.ru/"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="hover:scale-97 transition-all"
                >
                  <div class="flex flex-row gap-4 border-[#03a366] border-2 bg-[#033024] rounded-full items-center">
                    <svg
                      class="size-8 ml-4"
                      viewBox="0 0 122 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_107_666)">
                        <path
                          d="M83.1991 3H69.7677C65.3871 3 61.8361 6.5154 61.8361 10.8521V24.1487C61.8361 28.4854 65.3871 32.0008 69.7677 32.0008H83.1991C87.5797 32.0008 91.1307 28.4854 91.1307 24.1487V10.8521C91.1307 6.5154 87.5797 3 83.1991 3ZM88.0084 28.9323H64.9585V6.11361H88.0084V28.9323ZM114.068 3H92.7054V32H114.068C118.449 32 122 28.4846 122 24.1479V10.8521C122 6.5154 118.449 3 114.068 3ZM118.878 28.9323H95.8277V6.11361H118.878V28.9323ZM21.363 3H7.93163C3.55101 3 0 6.5154 0 10.8521V32.0008H3.12239V21.7638H21.363C25.7436 21.7638 29.2946 18.2484 29.2946 13.9117V10.8521C29.2946 6.5154 25.7436 3 21.363 3ZM26.1723 18.6727H3.12239V6.13696H26.1723V18.6727ZM60.2127 17.0833V10.8521C60.2127 6.5154 56.6617 3 52.2811 3H38.8497C34.4691 3 30.9181 6.5154 30.9181 10.8521V32.0008H34.0404V21.7413H57.0903V32.0008H60.2127V23.2864C60.2127 21.5794 58.8146 20.213 57.0903 20.213V20.1591C58.826 20.1591 60.2127 18.8032 60.2127 17.0841V17.0833ZM57.0903 18.6494H34.0404V6.11361H57.0903V18.6494Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_107_666">
                          <rect
                            width="122"
                            height="29"
                            fill="white"
                            transform="translate(0 3)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <h5 class="text-xl pt-4 pb-3">PROD 2025 Winner</h5>
                  </div>
                </a>
                <a
                  aria-label="JetBrains SDT Program"
                  href="https://lp.jetbrains.com/software-data-and-technology-constructor-university/"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="hover:scale-97 transition-all"
                >
                  <div class="flex flex-row pl-2 gap-4 border-[#FF801A] border-2 bg-[#452105] rounded-full items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      class="size-7 ml-4"
                      viewBox="0 0 64 64"
                    >
                      <defs>
                        <linearGradient
                          id="supergrad"
                          x1=".850001"
                          x2="62.62"
                          y1="62.72"
                          y2="1.81"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF9419" />
                          <stop offset=".43" stop-color="#FF021D" />
                          <stop offset=".99" stop-color="#E600FF" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#supergrad)"
                        d="M20.34 3.66 3.66 20.34C1.32 22.68 0 25.86 0 29.18V59c0 2.76 2.24 5 5 5h29.82c3.32 0 6.49-1.32 8.84-3.66l16.68-16.68c2.34-2.34 3.66-5.52 3.66-8.84V5c0-2.76-2.24-5-5-5H29.18c-3.32 0-6.49 1.32-8.84 3.66Z"
                      />
                      <path fill="#000" d="M48 16H8v40h40V16Z" />
                      <path fill="#fff" d="M30 47H13v4h17v-4Z" />
                    </svg>

                    <h5 class="text-xl pt-4 pb-3">SDT Student</h5>
                  </div>
                </a>
                <div class="flex flex-wrap flex-row gap-y-2 gap-x-1">
                  <SwitchCard title="My Setup">
                    <a
                      aria-label="NeoVim"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://neovim.io/"
                      class="flex p-2 flex-row gap-2 hover:scale-95 transition-all w-fit"
                    >
                      <svg
                        class="size-6"
                        viewBox="0 0 602 734"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="linearGradient-1"
                          >
                            <stop
                              stop-color="#16B0ED"
                              stop-opacity="0.800235524"
                              offset="0%"
                            ></stop>
                            <stop
                              stop-color="#0F59B2"
                              stop-opacity="0.83700023"
                              offset="100%"
                            ></stop>
                          </linearGradient>
                          <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="linearGradient-2"
                          >
                            <stop stop-color="#7DB643" offset="0%"></stop>
                            <stop stop-color="#367533" offset="100%"></stop>
                          </linearGradient>
                          <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="linearGradient-3"
                          >
                            <stop
                              stop-color="#88C649"
                              stop-opacity="0.8"
                              offset="0%"
                            ></stop>
                            <stop
                              stop-color="#439240"
                              stop-opacity="0.84"
                              offset="100%"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="mark-copy"
                            transform="translate(2.000000, 3.000000)"
                          >
                            <path
                              d="M0,155.5704 L155,-1 L154.999997,727 L0,572.237919 L0,155.5704 Z"
                              id="Left---green"
                              fill="url(#linearGradient-1)"
                            ></path>
                            <path
                              d="M443.060403,156.982405 L600,-1 L596.818792,727 L442,572.219941 L443.060403,156.982405 Z"
                              id="Right---blue"
                              fill="url(#linearGradient-2)"
                              transform="translate(521.000000, 363.500000) scale(-1, 1) translate(-521.000000, -363.500000) "
                            ></path>
                            <path
                              d="M154.986294,0 L558,615.189696 L445.224605,728 L42,114.172017 L154.986294,0 Z"
                              id="Cross---blue"
                              fill="url(#linearGradient-3)"
                            ></path>
                            <path
                              d="M155,283.83232 L154.786754,308 L31,124.710606 L42.4619486,113 L155,283.83232 Z"
                              id="Shadow"
                              fill-opacity="0.13"
                              fill="#000000"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Neovim</p>
                    </a>
                    <a
                      aria-label="CachyOS"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://cachyos.org/"
                      class="flex p-2 flex-row gap-2 hover:scale-95 transition-all w-fit"
                    >
                      <svg
                        class="size-6"
                        version="1.1"
                        viewBox="0 0 17.921 17.921"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <linearGradient
                            id="linearGradient939"
                            x1="237.19"
                            x2="237.07"
                            y1="296.2"
                            y2="304.08"
                            gradientTransform="matrix(.04476 0 0 .044679 -8.5923 -4.6302)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient937"
                          />
                          <linearGradient id="linearGradient937">
                            <stop stop-color="#001313" offset="0" />
                            <stop
                              stop-color="#001313"
                              stop-opacity="0"
                              offset="1"
                            />
                          </linearGradient>
                          <linearGradient
                            id="linearGradient5185"
                            x1="994.81"
                            x2="982.34"
                            y1="1533.3"
                            y2="1556.8"
                            gradientTransform="matrix(.084141 0 0 .083989 -76.331 -126.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient id="linearGradient4353">
                            <stop stop-color="#020202" offset="0" />
                            <stop
                              stop-color="#020202"
                              stop-opacity="0"
                              offset="1"
                            />
                          </linearGradient>
                          <linearGradient
                            id="linearGradient9102"
                            x1="1022.5"
                            x2="1018.6"
                            y1="1582.4"
                            y2="1575.6"
                            gradientTransform="matrix(.086381 0 0 .081808 -79.192 -124.97)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient
                            id="linearGradient11890"
                            x1="940.43"
                            x2="930.59"
                            y1="1612.5"
                            y2="1594.5"
                            gradientTransform="matrix(.084141 0 0 .083989 -76.331 -126.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient
                            id="linearGradient11670"
                            x1="965.6"
                            x2="951.66"
                            y1="1571.4"
                            y2="1571.3"
                            gradientTransform="matrix(.084141 0 0 .083989 -76.331 -126.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient
                            id="linearGradient13770"
                            x1="946.23"
                            x2="961.37"
                            y1="1655.9"
                            y2="1655.8"
                            gradientTransform="matrix(.084141 0 0 .083989 -76.331 -126.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient
                            id="linearGradient2816"
                            x1="366.15"
                            x2="350.92"
                            y1="427.32"
                            y2="419.64"
                            gradientTransform="matrix(.04476 0 0 .044679 -10.921 -4.4349)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient937"
                          />
                          <linearGradient
                            id="linearGradient12421"
                            x1="936.34"
                            x2="933.38"
                            y1="1628.8"
                            y2="1623"
                            gradientTransform="matrix(.084141 0 0 .083989 -76.331 -126.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient
                            id="linearGradient13391"
                            x1="950.33"
                            x2="941.97"
                            y1="1618.6"
                            y2="1645.8"
                            gradientTransform="matrix(.084141 0 0 .083989 -76.331 -126.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient
                            id="linearGradient13599"
                            x1="1008.2"
                            x2="1015.7"
                            y1="1681.3"
                            y2="1668.4"
                            gradientTransform="matrix(.084141 0 0 .083989 -76.331 -126.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient4353"
                          />
                          <linearGradient
                            id="linearGradient18175"
                            x1="1148.3"
                            x2="1145.4"
                            y1="1585.5"
                            y2="1630"
                            gradientTransform="matrix(.34992 0 0 .34992 -282.87 -491.67)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient18299"
                          />
                          <linearGradient id="linearGradient18299">
                            <stop
                              stop-color="#008066"
                              stop-opacity="0"
                              offset="0"
                            />
                            <stop stop-color="#0fc" offset="1" />
                          </linearGradient>
                          <linearGradient
                            id="linearGradient18632"
                            x1="1148.3"
                            x2="1145.4"
                            y1="1585.5"
                            y2="1630"
                            gradientTransform="matrix(.26565 0 0 .26565 -211.15 -375.49)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient18299"
                          />
                          <linearGradient
                            id="linearGradient18659"
                            x1="1148.3"
                            x2="1145.4"
                            y1="1585.5"
                            y2="1630"
                            gradientTransform="matrix(.13679 0 0 .13679 -53.624 -195.03)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient18299"
                          />
                          <linearGradient
                            id="linearGradient3254"
                            x1="348.05"
                            x2="361.21"
                            y1="194.78"
                            y2="187.24"
                            gradientTransform="matrix(.04476 0 0 .044679 -10.921 -4.4349)"
                            gradientUnits="userSpaceOnUse"
                            xlink:href="#linearGradient937"
                          />
                        </defs>
                        <circle
                          cx="64.51"
                          cy="62.02"
                          r="87.45"
                          opacity="0"
                          stroke-width=".27971"
                        />
                        <path
                          d="m4.3286 1.9244h8.3458l-2.1127 3.6528h-4.526l-1.8859 3.2605 1.9121 3.306h8.8286l-2.1664 3.7456h-8.5747l-4.1369-7.1525 3.9605-6.8475z"
                          fill="#fff"
                        />
                        <path
                          d="m3.973 1.8893 6.5887 3.6879 2.1127-3.6528z"
                          fill="#0a8"
                        />
                        <path
                          d="m6.0619 12.144-1.9125 3.7456h8.5747l2.1664-3.7456z"
                          fill="#0a8"
                        />
                        <path
                          d="m3.973 1.8893 6.5887 3.6879h-4.526l-1.8859 3.2605 1.9121 3.306-1.9125 3.7456-4.1369-7.1525 3.9605-6.8475"
                          fill="#0cf"
                        />
                        <path
                          d="m0.0125 8.7368 4.1373 0.10091 0.11568 0.19788-4.123-0.082887z"
                          fill="url(#linearGradient939)"
                        />
                        <path
                          d="m10.562 5.5772-6.5887-3.6879-0.50106 0.9021 4.9947 2.7648z"
                          fill="url(#linearGradient5185)"
                        />
                        <path
                          d="m6.0029 5.5427 6.7111-3.7832-2.169 3.5579z"
                          fill="url(#linearGradient9102)"
                        />
                        <path
                          d="m6.0356 5.5772 6.6388-3.6528-2.1127 3.6528z"
                          fill="#0a8"
                        />
                        <path
                          d="m0.0125 8.7368 6.0231-3.1596-1.8859 3.2605z"
                          fill="#0a8"
                        />
                        <path
                          d="m0.0125 8.7368 6.0231-3.1596-0.4069-0.6354-5.1908 3.0036z"
                          fill="url(#linearGradient11890)"
                        />
                        <path
                          d="m6.0356 5.5772-2.0626-3.6879 0.17673 6.9484z"
                          fill="#0a8"
                        />
                        <path
                          d="m6.0619 12.144 6.6622 3.7456 2.1664-3.7456z"
                          fill="#0cf"
                        />
                        <path
                          d="m3.973 1.8893-0.50106 0.9021 0.048066 6.0168 0.62973 0.029556z"
                          fill="url(#linearGradient11670)"
                        />
                        <path
                          d="m4.1498 8.8377-3.1586 1.5811 3.1583 5.4705z"
                          fill="#0a8"
                        />
                        <path
                          d="m4.1498 8.8377v7.0516l0.77392-1.5077 0.059767-4.1337z"
                          fill="url(#linearGradient13770)"
                        />
                        <path
                          d="m4.1494 15.889-0.29801-0.53544 1.9191-3.6995 0.29137 0.48935z"
                          fill="url(#linearGradient2816)"
                        />
                        <path
                          d="m0.99115 10.419 3.1586-1.5811-0.62972-0.029556-2.7405 1.307z"
                          fill="url(#linearGradient12421)"
                        />
                        <path
                          d="m0.99115 10.419 5.0708 1.7248-1.9121-3.306z"
                          fill="#0a8"
                        />
                        <path
                          d="m6.0619 12.144-5.0708-1.7248 0.55061 0.94903 4.1672 1.5109z"
                          fill="url(#linearGradient13391)"
                        />
                        <path
                          d="m6.0619 12.144 6.6622 3.7456 0.79849-1.4187-4.2878-2.3635z"
                          fill="url(#linearGradient13599)"
                        />
                        <g transform="matrix(.14699 0 0 .14672 -.84757 -.42617)">
                          <circle
                            cx="117.95"
                            cy="75.441"
                            r="9.6894"
                            fill="#0cf"
                          />
                          <circle
                            cx="118.08"
                            cy="75.341"
                            r="9.6894"
                            fill="url(#linearGradient18175)"
                          />
                        </g>
                        <g transform="matrix(.14699 0 0 .14672 -.20056 -.74963)">
                          <circle
                            cx="93.138"
                            cy="55.045"
                            r="7.3559"
                            fill="#0cf"
                          />
                          <circle
                            cx="93.239"
                            cy="54.969"
                            r="7.3559"
                            fill="url(#linearGradient18632)"
                          />
                        </g>
                        <g transform="matrix(.14699 0 0 .14672 -.17051 -.32616)">
                          <circle
                            cx="103.06"
                            cy="26.657"
                            r="3.7877"
                            fill="#0cf"
                          />
                          <circle
                            cx="103.11"
                            cy="26.618"
                            r="3.7877"
                            fill="url(#linearGradient18659)"
                          />
                        </g>
                        <path
                          d="m6.0356 5.5772-2.0626-3.6879 0.52544-0.0074221 1.9387 3.4465z"
                          fill="url(#linearGradient3254)"
                        />
                      </svg>
                      <p>CachyOS</p>
                    </a>
                    <a
                      aria-label="Hyprland"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://hyprland.org/"
                      class="flex p-2 flex-row gap-2 hover:scale-95 transition-all w-fit"
                    >
                      <img
                        class="size-6 rounded-full scale-110"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Hyprland_logo.png"
                      ></img>
                      <p>Hyprland</p>
                    </a>
                    <div class="flex flex-row flex-wrap gap-2 text-[#50E2FF] text-sm my-2">
                      <a
                        aria-label="SolidJS"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 flex items-center justify-center px-4 rounded-full border-2"
                        href="https://www.solidjs.com/"
                      >
                        SolidJS
                      </a>
                      <a
                        aria-label="TailwindCSS"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 items-center justify-center flex px-4 rounded-full border-2"
                        href="https://tailwindcss.com/"
                      >
                        Tailwind
                      </a>
                      <a
                        aria-label="Go language"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 items-center justify-center flex px-4 rounded-full border-2"
                        href="https://go.dev/"
                      >
                        Go
                      </a>
                      <a
                        aria-label="Echo HTTP framework"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 items-center justify-center flex px-4 rounded-full border-2"
                        href="https://echo.labstack.com/"
                      >
                        Echo
                      </a>
                      <a
                        aria-label="senko.digital hosting provider"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="px-5 pt-0.5 text-lg items-center justify-center flex rounded-full w-fit bg-linear-to-r from-[#6335E1] to-[#FC7F42] text-white"
                        href="https://senko.digital/"
                      >
                        senko.digital
                      </a>
                    </div>
                  </SwitchCard>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-zinc-900 max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">18 yo</p>
                  </div>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-zinc-900 max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">ru/en</p>
                  </div>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-zinc-900 max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">he/him</p>
                  </div>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-zinc-900 max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">gmt+2</p>
                  </div>
                  <SocialTag text="mobile" />
                  <SocialTag text="web" />
                  <SocialTag text="designer" />
                  <div class="flex w-full mb-3 relative text-sm font-[Overpass] justify-center rounded-full grow-1 px-4 py-4 bg-zinc-900 max-sm:bg-[#2B251F] text-lg transition-all">
                    This website is built by a human. <br />
                    AI training on its content or source code is prohibited.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Motion.main>
  );
}
