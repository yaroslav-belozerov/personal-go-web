import { A, useSearchParams } from "@solidjs/router";
import { MessageProvider, useLastMessage } from "../../../lib/api/messagesHook";
import Badge from "../components/Badge";
import { createSignal, Show } from "solid-js";
import { Motion, Presence } from "solid-motionone";
import Write from "../../write/Write";
import { Portal } from "solid-js/web";
import {
  LatestBlimpProvider,
  useLatestBlimp,
} from "../../../lib/api/blimpHook";
import { blimp } from "./Blimps";

enum DetailType {
  Others = "others",
}

export default function Touch() {
  const [openDetail, setOpenDetail] = createSignal<DetailType | null>(null);
  const [q, setQ] = useSearchParams();
  const openWrite = () => q.write === "true";
  const setOpenWrite = (value: boolean) => {
    document.body.style.overflowX = value ? "hidden" : "unset";
    setQ({ write: value ? "true" : undefined });
  };

  return (
    <section id="contacts" class="flex flex-col gap-4 bg-black pb-6">
      <Portal>
        <Presence>
          <Show when={openWrite()} fallback={<div></div>}>
            <Write onClose={() => setOpenWrite(false)} />
          </Show>
        </Presence>
      </Portal>
      {openDetail() == DetailType.Others && (
        <div
          onClick={() => setOpenDetail(null)}
          class="fixed top-0 left-0 right-0 bottom-0 z-2 bg-black/50"
        ></div>
      )}
      <h2 class="text-white text-5xl mt-6 text-center">Get in touch</h2>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row">
          <A
            aria-label="See Blog"
            class="group text-white relative flex flex-col gap-2 py-4 px-8 justify-center aspect-square items-center rounded-r-full bg-[#0c12c9] transition-all"
            href="/blog"
          >
            <span class="text-6xl leading-0 p-8 italic transition-all">tt</span>
            <div class="gap-1 text-3xl transition-all rounded-full items-center flex flex-row">
              my blog
            </div>
          </A>
          <div class="grid grid-cols-2 px-8 gap-2 grow-1 relative">
            <a
              aria-label="Telegram"
              class="p-4 rounded-3xl transition-all h-fit flex items-center justify-center"
              href="https://t.me/yaabelozerov"
            >
              <svg
                class="size-12 text-white fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="m470.4354553 45.4225006-453.6081524 175.8265381c-18.253809 8.1874695-24.4278889 24.5854034-4.4127407 33.4840851l116.3710175 37.1726685 281.3674316-174.789505c15.3625488-10.9733887 31.0910339-8.0470886 17.5573425 4.023468l-241.6571311 219.9348907-7.5913849 93.0762329c7.0313721 14.3716125 19.9055786 14.4378967 28.1172485 7.2952881l66.8582916-63.5891418 114.5050659 86.1867065c26.5942688 15.8265076 41.0652466 5.6130371 46.7870789-23.3935242l75.1055603-357.4697647c7.7979126-35.7059288-5.5005798-51.437891-39.3996277-37.7579422z" />
              </svg>
            </a>
            <a
              aria-label="GitHub"
              class="p-4 rounded-3xl transition-all h-fit flex items-center justify-center"
              href="https://github.com/yaroslav-belozerov"
            >
              <svg
                class="size-12 text-white fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m0 0h24v24h-24z"
                  fill="currentColor"
                  opacity="0"
                  transform="matrix(-1 0 0 -1 24 24)"
                />
                <path
                  d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              aria-label="E-Mail"
              class="p-4 rounded-3xl transition-all h-fit flex items-center justify-center"
              href="mailto:me@tarakoshka.tech"
            >
              <svg
                class="size-12 text-white fill-white"
                viewBox="0 -2.5 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(-340.000000, -922.000000)"
                  fill="currentColor"
                >
                  <g transform="translate(56.000000, 160.000000)">
                    <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <button
              name="More contacts"
              aria-label="See more contacts"
              class="relative z-2 h-fit p-4 flex items-center justify-center text-white"
              onClick={() => {
                setOpenDetail(
                  openDetail() == DetailType.Others ? null : DetailType.Others,
                );
              }}
            >
              <svg
                class={`size-12 ${openDetail() == DetailType.Others ? "bg-[#0C12C9] scale-120" : "rotate-180"} rounded-full transition-all`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="arcs"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <Presence>
                <Show when={openDetail() == DetailType.Others}>
                  <Motion.div
                    initial={{ opacity: 0, transform: "translateY(5%)" }}
                    animate={{ opacity: 1, transform: "translateX(0)" }}
                    exit={{ opacity: 0, transform: "translateY(5%)" }}
                    class="bottom-full right-0 z-4 rounded-full absolute bg-black outline-3 outline-[#0C12C9] px-8 py-4 mb-4"
                  >
                    <div class="flex flex-col">
                      <span class="text-3xl">Other stuff</span>
                      <div class="flex flex-row">
                        <a
                          aria-label="AniList"
                          class="p-4 rounded-3xl transition-all"
                          href="https://anilist.co/user/Lemurr4ik/"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            class="size-10 text-white fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>AniList</title>
                            <path d="M6.361 2.943L0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948l1.688 5.018H7.144z" />
                          </svg>
                        </a>
                        <a
                          aria-label="Mastodon"
                          class="p-4 rounded-3xl transition-all"
                          href="https://mastodon.social/@yaabelozerov"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            class="size-10 text-white fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m20.94 14c-.28 1.41-2.44 2.96-4.97 3.26-1.31.15-2.6.3-3.97.24-2.25-.11-4-.54-4-.54v.62c.32 2.22 2.22 2.35 4.03 2.42 1.82.05 3.44-.46 3.44-.46l.08 1.65s-1.28.68-3.55.81c-1.25.07-2.81-.03-4.62-.5-3.92-1.05-4.6-5.24-4.7-9.5l-.01-3.43c0-4.34 2.83-5.61 2.83-5.61 1.45-.66 3.91-.96 6.47-.96h.06c2.56 0 5.02.3 6.47.96 0 0 2.83 1.27 2.83 5.61 0 0 .04 3.21-.39 5.43m-2.94-5.09c0-1.08-.3-1.91-.85-2.56-.56-.63-1.3-.96-2.23-.96-1.06 0-1.87.41-2.42 1.23l-.5.88-.5-.88c-.56-.82-1.36-1.23-2.43-1.23-.92 0-1.66.33-2.23.96-.55.65-.84 1.48-.84 2.56v5.26h2.1v-5.11c0-1.06.45-1.62 1.36-1.62 1 0 1.5.65 1.5 1.93v2.79h2.07v-2.79c0-1.28.5-1.93 1.51-1.93.9 0 1.35.56 1.35 1.62v5.11h2.11z" />
                          </svg>
                        </a>
                        <a
                          aria-label="Spotify"
                          class="p-4 rounded-3xl transition-all"
                          href="https://open.spotify.com/user/31ztrvjmvnvjcf4m6fhkv4gmys3i"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            class="size-10 text-white fill-white"
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
                                fill="currentColor"
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
                        </a>
                        <a
                          aria-label="Twitter (X)"
                          class="p-4 rounded-3xl transition-all"
                          href="https://x.com/yaabelozerov"
                        >
                          <svg
                            class="size-10 text-white fill-white"
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
                                fill="currentColor"
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
                        </a>
                      </div>
                    </div>
                  </Motion.div>
                </Show>
              </Presence>
            </button>
          </div>
        </div>
        <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
          {useLastMessage().get() && (
            <div class="flex flex-col gap-1 mt-8 justify-between">
              <div class="flex w-full flex-col justify-center items-center rounded-t-3xl relative transition-all">
                <div class="text-black relative max-w-xl w-full flex flex-col items-center justify-center text-2xl px-8">
                  <p class="absolute oveflow-clip text-2xl top-[19%] bottom-[22%] left-[26%] right-[27%] p-2 break-all text-ellipsis overflow-hidden text-center align-middle text-white bg-black">
                    {useLastMessage().get()?.text}
                  </p>
                  <img
                    alt="Pompous painting frame"
                    src="https://tarakoshka.tech/static/frame.jpg"
                    class="rounded-xs min-w-full"
                  ></img>
                </div>
                <div class="flex font-[Overpass] w-full mx-4 flex-row justify-between items-center p-4 gap-2">
                  <div class="text-lg overflow-clip text-white grow-1 bg-zinc-900 px-4 py-2 rounded-lg">
                    {useLastMessage().get()?.creator || "Unknown author"}
                    <br />
                    <span class="italic">
                      on
                      {" " +
                        new Date(
                          useLastMessage().get()?.time ?? "",
                        ).toLocaleString("en-US", {
                          dateStyle: "long",
                          hour12: false,
                        })}
                    </span>
                  </div>
                  <button
                    onClick={() => setOpenWrite(true)}
                    name="Messages"
                    aria-label="Open messages"
                    class="relative min-w-14 size-14 transition-all lg:hover:scale-90 lg:cursor-pointer"
                  >
                    <svg
                      class="text-[#0C12C9] transition-all size-14 min-w-14 top-0 bottom-0 scale-120 absolute"
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
                      class="text-white transition-all size-8 absolute top-[52%] left-[52%] translate-[-50%]"
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
              </div>
            </div>
          )}
        </MessageProvider>
      </div>
      <div id="badges" class="flex flex-col w-full gap-4 pt-6 px-4">
        <h2 class="text-white mb-2 text-center text-5xl">Badges</h2>
        <div class="flex flex-row flex-wrap gap-2 mb-2 justify-center">
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
        <div class="flex flex-row flex-wrap gap-2 justify-center">
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
      </div>
      <div id="blimp" class="flex flex-col items-center w-full gap-4 py-6 px-8">
        <div class="flex flex-row gap-4 items-center">
          <h2 class="text-white mb-2 text-center text-5xl">Last Blimp</h2>
          <A
            aria-label="See Blimps"
            href="/blimps"
            class="text-3xl rounded-full flex flex-col items-center justify-center aspect-square outline-white outline-2 text-white px-3"
          >
            all
          </A>
        </div>
        <LatestBlimpProvider baseURL="https://tarakoshka.tech/api/blimps/latest">
          {[useLatestBlimp().get()].map(
            (b) => b && blimp(b.id, b.content, b.likes, false),
          )}
        </LatestBlimpProvider>
      </div>
    </section>
  );
}
