import { createComputed, createMemo, createSignal, Show } from "solid-js";
import { Motion, Presence } from "solid-motionone";

const circle = () => (
  <svg
    class="fill-[#7875FF] size-3 md:size-12 md:mx-4 text-[#7875FF] animate-[rot-scale_5s_ease-in-out_infinite]"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="1" width="14" height="14" fill="currentColor" />
  </svg>
);

export default function BusinessGame() {
  const [email, setEmail] = createSignal<string>("");
  const [sendEmail, setSendEmail] = createSignal<boolean>(true);
  const [bad, setBad] = createSignal<string[]>([]);
  const [sentBad, setSentBad] = createSignal<boolean>(false);
  const updateBad = (name: string) => {
    bad().includes(name)
      ? setBad(bad().filter((it) => it !== name))
      : setBad([...bad(), name]);
    console.log(bad());
  };

  const [registered, setRegistered] = createSignal<boolean | null>(false);
  const [fullRules, setFullRules] = createSignal<boolean>(false);
  const [fullRulesEnglish, setFullRulesEnglish] = createSignal<boolean>(true);

  const canSubmitEmail = createMemo(
    () =>
      email().length - "@constructor.university".length > 0 &&
      email().endsWith("@constructor.university"),
  );

  return (
    <div class="flex flex-col md:flex-row md:flex-wrap md:gap-10 md:p-10 overflow-hidden w-full bg-[#1D1E22] min-h-dvh font-[Figtree] text-white">
      <section class="border-white/30 border-b md:border-none pb-4 w-full">
        <h1 class="text-[12vw] md:text-[8vw] px-4 py-3 font-bold text-[#7875FF] leading-10 md:leading-30">
          <span class="text-white font-black">MANAGEMENT</span>
          <br />
          <span class="text-[20vw] font-[JustMe]">GAME</span>
        </h1>
        <h3 class="text-xl md:text-5xl animate-[marquee_10s_linear_infinite] italic flex flex-row gap-3 items-center">
          plan {circle()} negotiate {circle()} dominate
        </h3>
      </section>
      <section class="flex flex-col p-4 gap-2 border-white/30 border-b md:border">
        <h2 class="text-3xl md:text-5xl flex flex-row justify-between w-full md:gap-10">
          Place & Time
          <a
            class="flex text-lg md:text-2xl leading-0 flex-row w-fit items-center gap-2 rounded-full bg-zinc-800 px-4 pb-[1px]"
            target="_blank"
            href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NDJwNmE5ZHNwazQwaTBlYjl2YmI2YTIzaGkgeWFyb3NsYXZuZWtpajQyQG0&amp;tmsrc=yaroslavnekij42%40gmail.com"
          >
            <svg
              class="size-5"
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <polygon
                  fill="#FFFFFF"
                  points="195.368421 60.6315789 60.6315789 60.6315789 60.6315789 195.368421 195.368421 195.368421"
                ></polygon>
                <polygon
                  fill="#EA4335"
                  points="195.368421 256 256 195.368421 225.684211 190.196005 195.368421 195.368421 189.835162 223.098002"
                ></polygon>
                <path
                  d="M1.42108547e-14,195.368421 L1.42108547e-14,235.789474 C1.42108547e-14,246.955789 9.04421053,256 20.2105263,256 L60.6315789,256 L66.8568645,225.684211 L60.6315789,195.368421 L27.5991874,190.196005 L1.42108547e-14,195.368421 Z"
                  fill="#188038"
                ></path>
                <path
                  d="M256,60.6315789 L256,20.2105263 C256,9.04421053 246.955789,1.42108547e-14 235.789474,1.42108547e-14 L195.368421,1.42108547e-14 C191.679582,15.0358547 189.835162,26.1010948 189.835162,33.1957202 C189.835162,40.2903456 191.679582,49.4356319 195.368421,60.6315789 C208.777986,64.4714866 218.883249,66.3914404 225.684211,66.3914404 C232.485172,66.3914404 242.590435,64.4714866 256,60.6315789 Z"
                  fill="#1967D2"
                ></path>
                <polygon
                  fill="#FBBC04"
                  points="256 60.6315789 195.368421 60.6315789 195.368421 195.368421 256 195.368421"
                ></polygon>
                <polygon
                  fill="#34A853"
                  points="195.368421 195.368421 60.6315789 195.368421 60.6315789 256 195.368421 256"
                ></polygon>
                <path
                  d="M195.368421,0 L20.2105263,0 C9.04421053,0 0,9.04421053 0,20.2105263 L0,195.368421 L60.6315789,195.368421 L60.6315789,60.6315789 L195.368421,60.6315789 L195.368421,0 Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M88.2694737,165.153684 C83.2336842,161.751579 79.7473684,156.783158 77.8442105,150.214737 L89.5326316,145.397895 C90.5936842,149.44 92.4463158,152.572632 95.0905263,154.795789 C97.7178947,157.018947 100.917895,158.113684 104.656842,158.113684 C108.48,158.113684 111.764211,156.951579 114.509474,154.627368 C117.254737,152.303158 118.635789,149.338947 118.635789,145.751579 C118.635789,142.08 117.187368,139.082105 114.290526,136.757895 C111.393684,134.433684 107.755789,133.271579 103.410526,133.271579 L96.6568421,133.271579 L96.6568421,121.701053 L102.72,121.701053 C106.458947,121.701053 109.608421,120.690526 112.168421,118.669474 C114.728421,116.648421 116.008421,113.886316 116.008421,110.366316 C116.008421,107.233684 114.863158,104.741053 112.572632,102.871579 C110.282105,101.002105 107.385263,100.058947 103.865263,100.058947 C100.429474,100.058947 97.7010526,100.968421 95.68,102.804211 C93.6602819,104.644885 92.1418208,106.968942 91.2673684,109.557895 L79.6968421,104.741053 C81.2294737,100.395789 84.0421053,96.5557895 88.1684211,93.2378947 C92.2947368,89.92 97.5663158,88.2526316 103.966316,88.2526316 C108.698947,88.2526316 112.96,89.1621053 116.732632,90.9978947 C120.505263,92.8336842 123.469474,95.3768421 125.608421,98.6105263 C127.747368,101.861053 128.808421,105.498947 128.808421,109.541053 C128.808421,113.667368 127.814737,117.153684 125.827368,120.016842 C123.84,122.88 121.397895,125.069474 118.501053,126.602105 L118.501053,127.292632 C122.241568,128.834789 125.490747,131.367752 127.898947,134.618947 C130.341053,137.903158 131.570526,141.827368 131.570526,146.408421 C131.570526,150.989474 130.408421,155.082105 128.084211,158.669474 C125.76,162.256842 122.543158,165.086316 118.467368,167.141053 C114.374737,169.195789 109.776842,170.240124 104.673684,170.240124 C98.7621053,170.256842 93.3052632,168.555789 88.2694737,165.153684 L88.2694737,165.153684 Z M160.067368,107.149474 L147.233684,116.429474 L140.816842,106.694737 L163.84,90.0884211 L172.665263,90.0884211 L172.665263,168.421053 L160.067368,168.421053 L160.067368,107.149474 Z"
                  fill="#4285F4"
                ></path>
              </g>
            </svg>
            Add
          </a>
        </h2>
        <div class="flex flex-col gap-2 md:my-2">
          <h3 class="text-xl md:text-3xl flex flex-row gap-2 items-center">
            <svg
              class="size-6 fill-white md:size-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z" />
            </svg>
            October 26th, 14:00
          </h3>
          <h3 class="text-xl md:text-3xl flex flex-row gap-2 items-center">
            <svg
              class="size-6 fill-white md:size-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            West Hall, WH-2
          </h3>
        </div>
      </section>
      <section class="flex flex-col px-4 gap-2 border-white/30 border-b md:min-w-xl md:border p-4 md:text-xl">
        <h2 class="text-3xl md:text-5xl flex flex-row justify-between w-full mb-2">
          Register
        </h2>
        {registered() ? (
          <div class="flex flex-row gap-2 items-center leading-5 md:p-4 md:gap-4">
            <svg
              class="size-8 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#EFEFEF"
            >
              <path d="M480-260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260ZM312-520l44-42 42 42 42-42-84-86-86 86 42 42Zm250 0 42-42 44 42 42-42-86-86-84 86 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
            </svg>
            Thank you for registering!
            <br />
            See you soon!
          </div>
        ) : registered() === null ? (
          <div>It seems like you already registered, sorry.</div>
        ) : (
          <>
            <form
              class={`flex-col flex relative ${canSubmitEmail() ? "pb-20 md:pb-22" : "pb-0"} transition-all duration-300`}
              onSubmit={async (e) => {
                e.preventDefault();
                const a = fetch("https://tarakoshka.tech/bgapi/users/reg", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    sendMail: sendEmail(),
                    email: email(),
                  }),
                })
                  .then((it) => {
                    if (it.status === 409) {
                      setRegistered(null);
                    } else {
                      setRegistered(true);
                    }
                  })
                  .catch((err) => {
                    setRegistered(null);
                  });
              }}
            >
              <input
                id="email-input"
                placeholder="Your unversity e-mail"
                class={`px-4 py-2 grow-1 block outline-white/30 rounded-full outline-1`}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <Presence>
                <Show when={canSubmitEmail()}>
                  <Motion
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div class="flex flex-col gap-2 absolute mt-2 left-0 right-0">
                      <button
                        type="button"
                        class="flex flex-row gap-2 items-center justify-center w-full"
                        onClick={() => setSendEmail(!sendEmail())}
                      >
                        <div class="size-4 relative bg-white">
                          {sendEmail() && (
                            <svg
                              class="fill-black size-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg>
                          )}
                        </div>
                        It's okay to send me a feedback form
                      </button>
                      <button
                        onClick={() => {}}
                        type="submit"
                        class={`px-4 py-2 text-nowrap cursor-pointer grow-1 bg-[#7875FF] text-white rounded-full w-full`}
                      >
                        I will go!
                      </button>
                    </div>
                  </Motion>
                </Show>
              </Presence>
            </form>
            {sentBad() ? <p>Okay, noted!</p> : <p>or say why not...</p>}
            {!sentBad() && (
              <div
                class={`flex flex-row flex-wrap text-md md:text-xl gap-1 transition-all md:w-fit`}
              >
                <button
                  type="button"
                  onClick={() => {
                    updateBad("no interest");
                  }}
                  class={`px-4 py-2 cursor-pointer text-nowrap ${bad().includes("no interest") ? "bg-[#7875FF]/80" : "bg-zinc-800"} text-white rounded-full flex flex-row items-center gap-2 transition-all`}
                >
                  <svg
                    class="size-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm20 180h240v-60H360v60ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
                  </svg>
                  Not interested
                </button>
                <button
                  type="button"
                  onClick={() => {
                    updateBad("bad time");
                  }}
                  class={`px-4 py-2 cursor-pointer text-nowrap ${bad().includes("bad time") ? "bg-[#7875FF]/80" : "bg-zinc-800"} text-white rounded-full flex flex-row items-center gap-2 transition-all`}
                >
                  <svg
                    class="size-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                  </svg>
                  Bad timing
                </button>
                <button
                  type="button"
                  onClick={() => {
                    updateBad("bad rules");
                  }}
                  class={`px-4 py-2 cursor-pointer text-nowrap ${bad().includes("bad rules") ? "bg-[#7875FF]/80" : "bg-zinc-800"} text-white rounded-full flex flex-row items-center gap-2 transition-all`}
                >
                  <svg
                    class="size-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m298-456 143-104-143-104-36 48 77 56-77 56 36 48Zm364 0 36-48-77-56 77-56-36-48-143 104 143 104ZM420-278l60-60 60 60 60-60 39 39 42-42-81-81-60 60-60-60-60 60-60-60-81 81 42 42 39-39 60 60Zm60 198q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
                  </svg>
                  Rules are confusing
                </button>
                <Presence>
                  <Show when={bad().length > 0}>
                    <Motion
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        type="button"
                        onClick={async () => {
                          setSentBad(true);
                          await Promise.all(
                            bad().map(async (it) => {
                              await fetch(
                                "https://tarakoshka.tech/bgapi/complaints",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    complaint: it,
                                  }),
                                },
                              );
                            }),
                          );
                        }}
                        class={`px-4 py-2 text-nowrap cursor-pointer -outline-offset-2 outline-[#7875FF] outline-2 text-white rounded-full flex flex-row items-center gap-2 transition-all`}
                      >
                        Send
                      </button>
                    </Motion>
                  </Show>
                </Presence>
              </div>
            )}
          </>
        )}
      </section>
      <section class="flex flex-col px-4 gap-2 border-white/30 border-b md:border p-4 md:max-w-2xl">
        <h2 class="text-3xl mb-1 md:text-5xl flex flex-row justify-between w-full">
          Rules
          {fullRules() ? (
            <div class="flex px-2 flex-row w-fit gap-2 text-lg items-center">
              <div
                onClick={() => {
                  setFullRulesEnglish(false);
                }}
                class={`${!fullRulesEnglish() && "underline decoration-2"} px-2 cursor-pointer`}
              >
                RU
              </div>
              <div
                onClick={() => {
                  setFullRulesEnglish(true);
                }}
                class={`${fullRulesEnglish() && "underline decoration-2"} px-2 cursor-pointer`}
              >
                EN
              </div>
              <button
                type="button"
                onClick={() => {
                  setFullRules(!fullRules());
                }}
                class="px-4 py-1 bg-zinc-800 text-lg rounded-full cursor-pointer"
              >
                Hide
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setFullRules(!fullRules());
              }}
              class="px-4 py-1 bg-zinc-800 text-lg rounded-full cursor-pointer"
            >
              See full
            </button>
          )}
        </h2>
        {fullRules() ? (
          <div
            class="leading-5"
            innerHTML={(fullRulesEnglish()
              ? `At the start of the game, each team receives a certain number of small sheets (“shares”) to distribute among all teams by creating an internal ranking — the higher you rank a team, the more shares they get. For example: 1st place – 6 shares, 2nd – 5, 3rd – 4, and so on. Each team does this independently, without knowing how many total shares have been issued for other teams.
              The game then proceeds in repeating cycles: <b>discussion → trading → discussion → trading</b>. The goal is to <b>absorb all other teams</b> by collecting a controlling stake (51% of all shares issued for that team). During trading, one representative from each team brings 2 shares and can exchange them <b>1 for 1</b> through the moderator. Touching the table is forbidden. Any shares left untraded are removed from the game.
              Teams are penalized for rule violations (being late, touching the table, secret talks, etc.) by losing shares. If a team runs out of shares, it is eliminated. The game continues until only <b>one team remains — the winner</b>. A short practice round is held at the beginning so everyone can understand the rules.`
              : `В начале игры каждая команда получает определённое количество листочков («акций») – их нужно распределить между всеми командами, составив внутренний рейтинг: кому вы доверяете больше, тот получает больше акций. Например, 1-е место – 6 акций, 2-е – 5, 3-е – 4 и т.д. Каждая команда делает это самостоятельно, не зная, сколько всего акций выписано на другие группы.
                Далее начинается сама игра, которая проходит циклами: <b>обсуждение → торги → обсуждение → торги</b>. Цель – <b>поглотить все остальные команды</b>, собрав контрольный пакет их акций (51 % от всех выписанных на них). На торги выходит по одному представителю от каждой команды, приносят по 2 акции и могут обменяться ими 1 к 1 через ведущего.
                Трогать стол руками запрещено. Необменянные акции выбывают из игры. За нарушения (опоздание, касание стола, тайные переговоры и т.п.) начисляются штрафы – команда теряет акции. Если команда теряет все акции – она выбывает. Игра продолжается, пока не останется <b>одна команда-победитель</b>. Перед началом проводится короткий пробный раунд, чтобы все разобрались с правилами.`
            ).replaceAll("\n", "<br class='mb-4' />")}
          ></div>
        ) : (
          <ol class="text-lg mx-6 md:text-2xl md:mx-8 list-decimal leading-6 gap-2 flex flex-col">
            <li class="py-1 px-2 bg-zinc-800 rounded-lg">
              Each team ranks all teams (including their own) and receives
              “shares” based on that ranking.
            </li>
            <li class="py-1 px-2 bg-zinc-800 rounded-lg">
              The game runs in repeating rounds:{" "}
              <b>
                discussion
                <svg
                  class="size-4 fill-white inline mx-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14v2l-4-3 4-3v2h12v2H4zm8-12V0l4 3-4 3V4H0V2h12z"
                    fill-rule="evenodd"
                  />
                </svg>
                trading
              </b>
              .
            </li>
            <li class="py-1 px-2 bg-zinc-800 rounded-lg">
              During trading, one person from team brings 2 shares and can
              exchange them <b>1-for-1</b>.
            </li>
            <li class="py-1 px-2 bg-zinc-800 rounded-lg">
              <b>Absorb other teams</b> by collecting 51% of their shares.
            </li>
            <li class="py-1 px-2 bg-zinc-800 rounded-lg">
              Penalties cost shares. Teams with no shares are eliminated. The
              game ends when <b>one team remains</b>.
            </li>
          </ol>
        )}
      </section>
      <section class="flex flex-col px-4 gap-2 border-white/30 border-b md:border p-4 md:max-w-xl">
        <h2 class="text-3xl md:text-5xl flex flex-row justify-between w-full">
          Contacts
        </h2>
        <p class="text-zinc-400 leading-4 md:text-xl md:leading-6">
          Reach out if something is confusing or you want to cancel the
          registration
        </p>
        <h3 class="text-xl md:text-3xl flex flex-row justify-between w-full">
          Alexandra Cherezova
        </h3>
        <div class="flex flex-row gap-2">
          <a
            href="https://t.me/alexoliver338"
            target="_blank"
            class="flex flex-row p-2 gap-2 text-lg justify-center items-center bg-zinc-800 rounded-full flex-1"
          >
            <svg
              class="fill-white size-6"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>telegram</title>
              <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path>
            </svg>
            Telegram
          </a>
          <a
            href="mailto:acherezova@constructor.university"
            target="_blank"
            class="flex flex-row p-2 gap-2 text-lg justify-center items-center bg-zinc-800 rounded-full flex-1"
          >
            <svg
              class="size-6 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
            </svg>
            E-Mail
          </a>
        </div>
        <h3 class="text-xl md:text-3xl flex flex-row justify-between w-full mt-2 md:mt-0">
          Iaroslav Belozerov
        </h3>
        <div class="flex flex-row gap-2">
          <a
            href="https://t.me/yaabelozerov"
            target="_blank"
            class="flex flex-row p-2 gap-2 text-lg justify-center items-center bg-zinc-800 rounded-full flex-1"
          >
            <svg
              class="fill-white size-6"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>telegram</title>
              <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path>
            </svg>
            Telegram
          </a>
          <a
            href="mailto:ibelozerov@constructor.university"
            target="_blank"
            class="flex flex-row p-2 gap-2 text-lg justify-center items-center bg-zinc-800 rounded-full flex-1"
          >
            <svg
              class="size-6 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
            </svg>
            E-Mail
          </a>
        </div>
      </section>
    </div>
  );
}
