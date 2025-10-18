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
import { SwitchCard } from "./components/SwitchCard";
import { A } from "@solidjs/router";
import Badge from "./components/Badge";

export default function App() {
  const [projectsExpanded, setProjectsExpanded] = createSignal<boolean>(false);
  const [isCurrentProjects, setIsCurrentProjects] = createSignal<boolean>(true);
  const [isWebringOpen, setWebringOpen] = createSignal<boolean>(false);

  return (
    <Motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main class="page md:hidden flex bg-[#1a1611] text-[#f5e9c9] md:pt-0 flex-col relative overflow-x-clip">
        <Landing></Landing>
        <div class="h-10 w-full bg-linear-to-b from-black to-[#1A1611]"></div>
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
                        {useProjects().get() &&
                          useProjects()
                            ?.get()
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
                        {useProjects().get() &&
                          useProjects()
                            ?.get()
                            ?.filter((it) => it.description != "")
                            ?.slice(0, projectsExpanded() ? 10 : 3)
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
          <div class="flex flex-col gap-4 w-full">
            <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col w-full h-fit gap-4">
              <h2 class="text-5xl">My socials</h2>
              <div class="flex flex-row flex-wrap gap-4">
                <A
                  class="group relative hover:bg-[#0c12c9] flex hover:scale-110 hover:rounded-[80px] max-md:w-full w-8 min-w-14 p-4 justify-center aspect-square  items-center rounded-2xl max-md:bg-[#2B251F] bg-[#1A1611] transition-all"
                  style="flex: 1 0 26%;"
                  href="/blog"
                >
                  <span class="text-7xl italic group-hover:opacity-0 transition-all">
                    tt
                  </span>
                  <div class="absolute gap-1 opacity-0 group-hover:opacity-100 transition-all rounded-full items-center flex flex-row">
                    <p class="text-white pb-[2px]">read my blog</p>
                  </div>
                </A>
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
                {useMusic().get() && (
                  <div class="flex flex-row w-full justify-between p-6 rounded-2xl bg-[#1A1611]">
                    <a
                      href={useMusic()?.get()?.url}
                      class="flex flex-row items-center gap-3 hover:scale-95 transition-all"
                    >
                      <img
                        src={useMusic()?.get()?.image}
                        alt={useMusic()?.get()?.title}
                        class="size-12 rounded-md transition-all"
                      />
                      <div class="flex flex-col font-[Overall]">
                        <h3 class="text-2xl text-white">
                          {useMusic()?.get()?.title}
                        </h3>
                        <p class="text-sm italic">
                          {useMusic()?.get()?.artist}
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://www.last.fm/user/Lemurr4ik_"
                      class="relative size-14 transition-all hover:scale-90"
                      target="_blank"
                    >
                      <img
                        class="transition-all size-14 scale-120 absolute"
                        style="animation: rotate-animation 20s infinite linear;"
                        src="https://tarakoshka.tech/static/icons/star2.svg"
                        alt={useMusic()?.get()?.title}
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
            <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col w-full h-fit gap-4">
              <h2 class="text-5xl">Buttons</h2>
              <div class="flex flex-row flex-wrap gap-2 mb-2">
                <Badge
                  link="https://tarakoshka.tech/"
                  src="https://tarakoshka.tech/static/88x31.gif"
                ></Badge>
                <Badge
                  link="https://hse.ru/"
                  src="https://tarakoshka.tech/static/buttons/hse.gif"
                ></Badge>
                <Badge
                  link="https://store.steampowered.com/app/1150690/OMORI/"
                  src="https://tarakoshka.tech/static/buttons/omori.gif"
                ></Badge>
                <Badge
                  link="https://store.steampowered.com/app/460950/Katana_ZERO/"
                  src="https://tarakoshka.tech/static/buttons/katana.gif"
                ></Badge>
              </div>
              <div class="flex flex-row flex-wrap gap-2">
                <Badge
                  link="https://ecma-international.org/publications-and-standards/standards/ecma-262/"
                  src="https://tarakoshka.tech/static/buttons/js.png"
                ></Badge>
                <Badge
                  link="https://cadence.moe/blog/2024-10-05-created-by-a-human-badges"
                  src="https://tarakoshka.tech/static/buttons/created-by-human.png"
                ></Badge>
                <Badge src="https://tarakoshka.tech/static/buttons/made-with-pride.gif"></Badge>
                <Badge
                  link="https://www.firefox.com/"
                  src="https://tarakoshka.tech/static/buttons/get-firefox.gif"
                ></Badge>
                <Badge
                  link="https://fedoraproject.org/"
                  src="https://tarakoshka.tech/static/buttons/fedora.gif"
                ></Badge>
                <Badge
                  link="https://ublockorigin.com/"
                  src="https://tarakoshka.tech/static/buttons/ublock.png"
                ></Badge>
                <Badge
                  link="https://www.gnu.org/"
                  src="https://tarakoshka.tech/static/buttons/made-on-linux.png"
                ></Badge>
                <Badge
                  link="https://otomir23.me/"
                  src="https://otomir23.me/88x31.png"
                ></Badge>
                <Badge
                  link="https://entitybtw.ru/"
                  src="https://entitybtw.ru/images/entitybtw.gif"
                ></Badge>
                <Badge
                  link="https://milkcool.ru/"
                  src="https://milkcool.ru/buttons/mybutton.gif"
                ></Badge>
                <Badge
                  link="https://asyasocute.online/"
                  src="https://asyasocute.online/badges/cowl.png"
                ></Badge>
                <Badge
                  link="https://okt.nekoweb.org"
                  src="https://okt.nekoweb.org/assets/pics/okt_button.gif"
                ></Badge>
                {/*<Badge
                  link="https://timofei302.su"
                  src="https://timofei302.su/res/88x31.png"
                ></Badge>
                <Badge
                  link="https://myslivets.com/"
                  src="https://timofei302.su/img/banners/myslivets-banner.png"
                ></Badge>*/}
                <Badge
                  link="https://edwardcode.net/"
                  src="https://edwardcode.net/www/button.gif"
                ></Badge>
                <Badge
                  link="https://c1oudy.otlegacy.com/"
                  src="https://c1oudy.otlegacy.com//_astro/c1oudy.DQjxxEhY.png"
                ></Badge>
                <Badge
                  link="https://gooslime.neocities.org/"
                  src="http://gooslime.neocities.org/gooslime_branding/gooslime.gif"
                ></Badge>
                <Badge
                  link="https://veselcraft.ru/"
                  src="https://veselcraft.ru/images/vc.gif"
                ></Badge>
                <Badge
                  link="https://jsopn.com/?glunging=true"
                  src="https://jsopn.com/images/88x31/button.gif"
                ></Badge>
                <Badge
                  link="https://senko.dev/"
                  src="https://senko.dev/banners/senko.gif"
                ></Badge>
                <Badge
                  link="https://tei.su/"
                  src="https://tei.su/88x31/teidesu.png"
                ></Badge>
                <Badge
                  link="https://about.akarpov.ru/"
                  src="https://otomir23.me/_astro/sanspie.BIFJ1uLz.gif"
                ></Badge>
              </div>
            </section>
          </div>
          <div class="flex flex-col gap-4 w-full">
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
                <nav class="items-center z-1 w-full flex gap-2 text-white font-[Overpass] flex-row gap-4">
                  <a
                    class="flex gap-1 w-full justify-start rounded-xl bg-[#1A1611] p-3 items-center hover:rounded-none outline outline-[#FF3737] outline-0 hover:outline-7 transition-all hover:scale-90"
                    href={useWebring().get()?.prev?.url}
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
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="font-[Overpass]">
                      {useWebring().get()?.prev?.name}
                    </p>
                  </a>
                  <a
                    class="flex gap-1 w-full justify-end rounded-xl bg-[#1A1611] p-3 items-center hover:rounded-none outline outline-[#FF3737] outline-0 hover:outline-7 transition-all hover:scale-90"
                    href={useWebring().get()?.next?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p class="font-[Overpass]">
                      {useWebring().get()?.next?.name}
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
            <section class="bg-[#2B251F] p-6 rounded-2xl flex flex-col w-full h-fit gap-4">
              <h2 class="text-5xl">Leave a message</h2>
              <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
                {useLastMessage().get() && (
                  <div class="font-[Overpass] flex justify-between items-center w-full gap-4 flex-row items-center rounded-t-2xl rounded-b-md md:rounded-b-2xl p-6 bg-[#1A1611] transition-all">
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
              <div class="flex flex-row justify-between items-center">
                <h2 class="text-5xl">About</h2>
                <a href="/support">
                  <svg
                    class="size-10 fill-yellow-300 animate-[landing_10s_ease-in-out_infinite]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </a>
              </div>
              <div class="flex flex-col gap-3 font-[Overpass] text-white">
                <a
                  href="https://school.hse.ru/"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="flex hover:scale-97 transition-all flex-row gap-4 border-[#FBBA00] border-2 bg-[#382a00] rounded-xl items-center px-4 py-3"
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
                  <h4 class="text-xl pt-1">HSE Lyceum Alumni</h4>
                </a>
                {/*<a
                  href="https://www.tbank.ru/"
                  class="flex hover:scale-97 transition-all flex-row gap-4 border-[#FFDD2D] border-2 bg-[#3d3402] rounded-xl items-center px-4 py-3"
                >
                  <svg
                    class="size-8 pl-1"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4H29V17.5849C29 21.3238 27.0054 24.7789 23.7676 26.6485L14.5001 32L5.23246 26.6485C1.99457 24.7789 3.32377e-06 21.3238 3.32377e-06 17.5849L0 4Z"
                      fill="#FFDD2D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 11V15.5077C8.6164 14.8116 9.73715 14.3406 11.0186 14.3406H12.4111V19.5807C12.4111 20.9748 12.0323 22.3399 11.4703 23.0111H17.5276C16.9668 22.3392 16.5889 20.9758 16.5889 19.5834V14.3406H17.9815C19.2629 14.3406 20.3836 14.8116 21 15.5077V11H8Z"
                      fill="#333333"
                    />
                  </svg>
                  <h4 class="text-xl pt-1">T-Bank Mobile Intern</h4>
                </a>*/}
                <a
                  href="https://prodcontest.ru/"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="hover:scale-97 transition-all"
                >
                  <div class="flex flex-row gap-4 border-[#03a366] border-2 bg-[#033024] rounded-xl items-center">
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
                    <h4 class="text-xl pt-4 pb-3">PROD 2025 Winner</h4>
                  </div>
                </a>
                <a
                  href="https://lp.jetbrains.com/software-data-and-technology-constructor-university/"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="hover:scale-97 transition-all"
                >
                  <div class="flex flex-row gap-4 border-[#FF801A] border-2 bg-[#452105] rounded-xl items-center">
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

                    <h4 class="text-xl pt-4 pb-3">SDT Student</h4>
                  </div>
                </a>
                <div class="flex flex-wrap flex-row">
                  <SwitchCard title="My Setup">
                    <a
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
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://fedoraproject.org/"
                      class="flex p-2 flex-row gap-2 hover:scale-95 transition-all w-fit"
                    >
                      <svg
                        class="size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 135.47752 132.93699"
                        version="1.1"
                      >
                        <g>
                          <path
                            fill="#51A2DA"
                            d="M 67.77483,0 C 30.36665,0 0.07878,29.732002 0.0126,66.438752 H 0 v 51.430478 h 0.0126 c 0.0174,8.3247 6.90194,15.06782 15.39209,15.06782 h 52.37676 c 37.41481,-0.0238 67.69606,-29.75187 67.69606,-66.438739 5e-5,-36.70675 -30.32095,-66.438755 -67.76224,-66.438755 z"
                          />
                          <path
                            fill="#FFFFFF"
                            d="m 81.54629,27.337877 c -10.56799,0 -19.90324,7.801562 -21.19561,18.038694 -0.0868,0.856948 -0.11179,1.474652 -0.11679,2.25154 l 0.0124,41.854812 c 0,8.0289 -6.12782,13.493227 -13.78418,13.493227 -7.66691,0 -13.8436,-6.008637 -13.8436,-13.506147 0.12574,-8.230728 6.84267,-13.450867 14.67766,-13.678237 h 0.0419 l 7.95404,-0.07183 V 64.668931 l -7.95404,0.05891 c -14.2605,-0.12574 -25.57978,10.82588 -25.99324,24.748872 0,13.539207 11.34236,24.576797 25.11319,24.576797 12.98996,0 23.80035,-9.95243 24.9809,-22.406387 0.1702,-4.239107 0.0873,-9.833503 0.0873,-9.833503 0.0238,-2.303511 -0.0365,-1.476328 -0.0124,-6.050278 l 9.86659,-0.07183 c 7.6344,0.05295 7.54863,-11.225802 -0.0879,-11.070643 l -9.7808,0.07131 c 0,-5.677739 0.0911,-11.320375 0,-17.006713 0.007,-4.918056 4.7563,-9.264033 10.02574,-9.264033 5.27077,0 10.84585,2.580457 10.84585,9.264033 0,0.954889 -0.0195,1.510723 -0.0734,1.864484 -0.58829,3.099594 1.57066,6.061962 4.75165,6.509166 3.18098,0.442039 6.10201,-1.811142 6.41718,-4.94647 0.18261,-1.239441 0.1757,-2.332945 0.1757,-3.426148 0,-11.785592 -10.74013,-20.32899 -22.11545,-20.32899 z"
                          />
                        </g>
                      </svg>

                      <p>Fedora</p>
                    </a>
                    <a
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
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 flex items-center justify-center px-4 rounded-full border-2"
                        href="https://www.solidjs.com/"
                      >
                        SolidJS
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 items-center justify-center flex px-4 rounded-full border-2"
                        href="https://tailwindcss.com/"
                      >
                        Tailwind
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 items-center justify-center flex px-4 rounded-full border-2"
                        href="https://go.dev/"
                      >
                        Go
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        class="text-lg pt-0.5 items-center justify-center flex px-4 rounded-full border-2"
                        href="https://echo.labstack.com/"
                      >
                        Echo
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        class="px-5 pt-0.5 text-lg items-center justify-center flex rounded-full w-fit bg-linear-to-r from-[#6335E1] to-[#FC7F42] text-white"
                        href="https://senko.digital/"
                      >
                        senko.digital
                      </a>
                    </div>
                  </SwitchCard>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">18 yo</p>
                  </div>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">ru/en</p>
                  </div>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">he/him</p>
                  </div>
                  <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all">
                    <p class="mt-[2px]">gmt+2</p>
                  </div>
                  <SocialTag text="mobile" />
                  <SocialTag text="web" />
                  <SocialTag text="designer" />
                  <div class="flex w-full mb-3 relative text-sm font-[Overpass] justify-center rounded-full grow-1 px-4 py-4 bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all">
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
