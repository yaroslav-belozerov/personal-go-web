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
import { Portal } from "solid-js/web";
import { BackArrow } from "../lesya/components/Icons";
import { useWebring, WebringProvider } from "../../lib/api/webringHook";

export default function App() {
  const [projectsExpanded, setProjectsExpanded] = createSignal<boolean>(false);
  const [isCurrentProjects, setIsCurrentProjects] = createSignal<boolean>(true);
  const [isWebringOpen, setWebringOpen] = createSignal<boolean>(false);

  return (
    <Motion.main
      initial={false}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main class="page md:hidden flex bg-[#1a1611] text-[#f5e9c9] md:pt-0 flex-col relative overflow-x-clip">
        <WebringProvider baseURL="https://webring.otomir23.me/tarakoshka/data">
          {
            <Portal>
              <Presence>
                <Show when={isWebringOpen()}>
                  <Motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
                    <div
                      onClick={() => {
                        setWebringOpen(false);
                      }}
                      class="absolute flex flex-col items-center justify-center z-5 top-0 left-0 right-0 bottom-0"
                    >
                      <Motion.div
                        initial={{ scale: 0, y: "100vh" }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0, y: "100vh" }}
                      >
                        <button
                          class="relative"
                          onClick={() => {
                            setWebringOpen(false);
                          }}
                        >
                          <Motion.p
                            transition={{ delay: 0.1, duration: 0.3 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <p class="text-white z-[-1] w-full absolute font-black top-[-7rem] text-center text-[9rem]">
                              RUTG
                            </p>
                          </Motion.p>
                          <div class="relative z-0">
                            <nav class="absolute items-center z-1 w-full px-6 flex gap-4 text-white font-[Overpass] flex-row justify-between left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                              <a
                                class="flex flex-col gap-4"
                                href={useWebring().items()?.prev?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div class="p-3 h-fit aspect-square flex w-16 items-center justify-center text-center outline-10 outline-white rounded-full bg-[#FF3737]">
                                  <svg
                                    viewBox="0 0 24 24"
                                    class="size-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                  >
                                    <path
                                      d="M12 5v14M5 12l7 7 7-7"
                                      transform="rotate(90 12 12)"
                                      stroke="currentColor"
                                      stroke-width="6"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </div>
                                <p class="font-[Overpass]">
                                  {useWebring().items()?.prev?.name}
                                </p>
                              </a>
                              <a
                                href="https://webring.otomir23.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  class="z-1 size-40 w-full"
                                  style="animation: rotate-animation 30s infinite linear;"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 -960 960 960"
                                  width="24px"
                                  fill="#EFEFEF"
                                >
                                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                                </svg>
                              </a>
                              <a
                                class="flex flex-col gap-4"
                                href={useWebring().items()?.next?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <p class="font-[Overpass]">
                                  {useWebring().items()?.next?.name}
                                </p>
                                <div class="p-3 h-fit flex items-center justify-center w-16 aspect-square text-center outline-10 outline-white rounded-full bg-[#FF3737]">
                                  <svg
                                    viewBox="0 0 24 24"
                                    class="size-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                  >
                                    <path
                                      d="M12 5v14M5 12l7 7 7-7"
                                      transform="rotate(-90 12 12)"
                                      stroke="currentColor"
                                      stroke-width="6"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </div>
                              </a>
                            </nav>
                            <div class="relative">
                              <svg
                                style="
                                animation: breathe-down 10s infinite ease-in-out;
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                width="311"
                                height="311"
                                fill="none"
                                viewBox="0 0 311 311"
                              >
                                <circle
                                  cx="155.5"
                                  cy="155.5"
                                  r="155.5"
                                  fill="#FF3737"
                                />
                              </svg>
                            </div>
                          </div>
                          <Motion.p
                            transition={{ delay: 0.3, duration: 0.3 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <p class="text-white z-1 absolute font-black bottom-[-4rem] text-center left-1/2 translate-x-[-50%] text-[6rem]">
                              WEBRING
                            </p>
                          </Motion.p>
                        </button>
                      </Motion.div>
                    </div>
                  </Motion.div>
                </Show>
              </Presence>
            </Portal>
          }
        </WebringProvider>
        <Landing
          isWebringOpen={isWebringOpen}
          setWebringOpen={setWebringOpen}
        ></Landing>
        <Show when={!isWebringOpen()}>
          <Touch></Touch>
          <Current></Current>
          <Meta></Meta>
        </Show>
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
            <div class="text-[#1a1611] absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
              <Download />
              <p class="font-[Overpass] font-bold text-xl">CV</p>
            </div>
          </a>
          <a
            href="/lesya"
            class="relative z-2 md:hover:scale-90 transition-all"
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
            <div class="text-[#1a1611] absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
              <Cat />
              <p class="font-[Overpass] font-bold text-xl">Cat</p>
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
          <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col w-full h-fit gap-4">
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
                <div class="flex flex-row w-full justify-between p-6 rounded-2xl bg-[#1A1611]">
                  <div class="flex flex-row items-center gap-3">
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
              <a
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
                  fill="#EFEFEF"
                >
                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                </svg>
              </a>
              <WebringProvider baseURL="https://webring.otomir23.me/tarakoshka/data">
                <nav class="items-center z-1 w-full flex gap-4 text-white font-[Overpass] flex-row gap-4">
                  <a
                    class="flex gap-2 w-full rounded-xl bg-[#1A1611] hover:scale-95 transition-all p-3 items-center"
                    href={useWebring().items()?.prev?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="size-8"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M12 5v14M5 12l7 7 7-7"
                        transform="rotate(90 12 12)"
                        stroke="currentColor"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="font-[Overpass]">
                      {useWebring().items()?.prev?.name}
                    </p>
                  </a>
                  <a
                    class="flex gap-2 w-full justify-end rounded-xl bg-[#1A1611] hover:scale-95 transition-all p-3 items-center"
                    href={useWebring().items()?.next?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p class="font-[Overpass]">
                      {useWebring().items()?.next?.name}
                    </p>
                    <svg
                      viewBox="0 0 24 24"
                      class="size-8"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M12 5v14M5 12l7 7 7-7"
                        transform="rotate(-90 12 12)"
                        stroke="currentColor"
                        stroke-width="3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </nav>
              </WebringProvider>
            </section>
            <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col w-full h-fit gap-4">
              <h2 class="text-5xl">Leave a message</h2>
              <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
                {useLastMessage().items() && (
                  <div class="font-[Overpass] flex justify-end items-center w-full gap-4 flex-row items-center rounded-t-2xl rounded-b-md md:rounded-b-2xl p-6 bg-[#1A1611] transition-all">
                    <div class="flex flex-col shrink">
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
                      class="relative min-w-14 size-14 transition-all hover:scale-90"
                    >
                      <img
                        class="transition-all size-14 min-w-14 scale-120 absolute"
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
              <p class="text-xs font-[Overpass] opacity-50 text-center">
                This website is built by a human. <br />
                AI training on its content or source code is prohibited.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Motion.main>
  );
}
