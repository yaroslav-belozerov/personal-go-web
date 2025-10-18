import { A } from "@solidjs/router";
import { MessageProvider, useLastMessage } from "../../../lib/api/messagesHook";
import Badge from "../components/Badge";
import { createSignal, Show } from "solid-js";
import { Motion, Presence } from "solid-motionone";

enum DetailType {
  Others = "others",
}

export default function Touch() {
  const [openDetail, setOpenDetail] = createSignal<DetailType | null>(null);

  return (
    <section id="contacts" class="flex flex-col gap-4 bg-black pb-6">
      {openDetail() == DetailType.Others && (
        <div
          onClick={() => setOpenDetail(null)}
          class="fixed top-0 left-0 right-0 bottom-0 z-1 bg-black/50"
        ></div>
      )}
      <h2 class="text-white text-5xl mt-6 text-center">Get in touch</h2>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row">
          <A
            class="group text-white relative flex flex-col gap-2 p-4 pl-0 justify-center aspect-square items-center rounded-r-full bg-[#0c12c9] transition-all"
            href="/blog"
          >
            <span class="text-6xl leading-0 p-8 italic transition-all">tt</span>
            <div class="gap-1 text-3xl transition-all rounded-full items-center flex flex-row">
              my blog
            </div>
          </A>
          <div class="grid grid-cols-2 px-8 gap-2 grow-1 relative">
            <a
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
              class="p-4 rounded-3xl transition-all h-fit flex items-center justify-center"
              href="mailto:me@tarakoshka.tech"
            >
              <svg
                class="size-12 text-white fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <button
              class="relative z-2 h-fit p-4 flex items-center justify-center text-white"
              onClick={() => {
                setOpenDetail(
                  openDetail() == DetailType.Others ? null : DetailType.Others,
                );
              }}
            >
              <svg
                class={`size-12 ${openDetail() == DetailType.Others ? "text-[#0C12C9]" : "rotate-180"} transition-all`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <Presence>
                <Show when={openDetail() == DetailType.Others}>
                  <Motion.div
                    initial={{ opacity: 0, transform: "translateY(5%)" }}
                    animate={{ opacity: 1, transform: "translateX(0)" }}
                    exit={{ opacity: 0, transform: "translateY(5%)" }}
                    class="bottom-full right-0 absolute bg-linear-[180deg,black,black_90%,#0C12C9] outline-3 outline-[#0C12C9] rounded-xl px-2 py-4 mb-2"
                  >
                    <div class="flex flex-col">
                      <span class="text-3xl">Other stuff</span>
                      <div class="flex flex-row">
                        <a
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
              <div class="flex w-full flex-col justify-center rounded-t-3xl relative transition-all">
                <p class="text-black text-2xl mx-8 w-fit">
                  <span class="absolute left-28 right-29 bottom-43 p-2 top-20 break-all text-ellipsis overflow-hidden text-center text-white bg-black">
                    {useLastMessage().get()?.text}
                  </span>
                  <img
                    src="https://tarakoshka.tech/static/frame.jpg"
                    class="rounded-xs"
                  ></img>
                </p>
                <div class="flex font-[Overpass] mx-4 flex-row justify-between items-center p-4 gap-2">
                  <div class="text-lg text-white grow-1 bg-zinc-900 px-4 py-2 rounded-lg">
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
                  <a
                    class={`flex flex-row gap-2 text-white bg-[#0C12C9] p-4 rounded-full justify-center transition-all items-center transition-all`}
                    href="/write-to-me"
                  >
                    <svg
                      class="size-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </MessageProvider>
      </div>
      <div id="badges" class="flex flex-col w-full gap-4 mt-6">
        <h2 class="text-white mb-2 text-center text-5xl">Buttons</h2>
        <div class="flex flex-row flex-wrap gap-2 mb-2 justify-center">
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
        <div class="flex flex-row flex-wrap gap-2 justify-center">
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
          <Badge
            link="https://monomere.cc/"
            src="https://monomere.cc/buttons/button.gif"
          ></Badge>
        </div>
      </div>
    </section>
  );
}
