import { ArrowDown } from "../components/Icons";
import SocialTag from "../components/SocialTag";
import { SwitchCard } from "../components/SwitchCard";

export default function Meta() {
  return (
    <section id="info" class="min-h-[100dvh] flex flex-col">
      <div class="min-h-[100svh] flex justify-between flex-col">
        <div class="flex flex-col">
          <h2 class="ms-6 text-white text-4xl mt-6">About me and website</h2>
          <div class="flex flex-col mx-4 mt-4 gap-4 font-[Overpass] text-white">
            <a
              href="https://school.hse.ru/"
              class="flex hover:scale-97 transition-all flex-row gap-4 outline-[#FBBA00] outline-2 bg-[#382a00] rounded-xl items-center px-4 py-3"
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
            <a
              href="https://www.tbank.ru/"
              class="flex hover:scale-97 transition-all flex-row gap-4 outline-[#FFDD2D] outline-2 bg-[#3d3402] rounded-xl items-center px-4 py-3"
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
            </a>
            <a
              href="https://prodcontest.ru/"
              rel="noreferrer noopener"
              target="_blank"
              class="hover:scale-97 transition-all"
            >
              <div class="flex flex-row gap-4 outline-[#03a366] outline-2 bg-[#033024] rounded-xl items-center">
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
            <div class="flex flex-wrap gap-2 flex-row">
              <SocialTag text="17 y/o" />
              <SocialTag text="RU/ENG" />
              <SocialTag text="GMT+3" />
              <SocialTag text="Mobile Dev & Designer" />
              <a
                href="https://kotlinlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-linear-to-r items-center from-[#824DFD] to-[#E04169] flex md:hover:scale-95 text-lg font-[Overpass] justify-center rounded-xl px-4 py-2 text-lg transition-all"
              >
                <div class="flex flex-row gap-1 mt-[3px]">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M2 2H22L12 12L22 22H2Z" fill="white" />
                  </svg>
                  Kotlin
                </div>
              </a>
            </div>
            <SwitchCard title="This Website's Stack">
              <a
                rel="noopener noreferrer"
                target="_blank"
                class="bold p-1 px-4 rounded-full w-fit mb-3 mt-1 bg-linear-to-r from-[#6335E1] to-[#FC7F42] text-white"
                style="align-self: center;"
                href="https://senko.digital/"
              >
                senko.digital
              </a>
              <div class="flex flex-row">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  class="w-full rounded-tl-lg text-[#86BBE3] hover:bg-[#86BBE3] p-2 hover:text-[#1A1611] transition-all"
                  href="https://www.solidjs.com/"
                >
                  SolidJS
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  class="w-full rounded-tr-lg text-[#00BCFF] hover:bg-[#00BCFF] p-2 hover:text-[#1A1611] transition-all"
                  href="https://tailwindcss.com/"
                >
                  Tailwind
                </a>
              </div>
              <div class="flex flex-row">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  class="w-full rounded-bl-lg text-[#08AFD8] hover:bg-[#08AFD8] p-2 hover:text-[#1A1611] transition-all"
                  href="https://go.dev/"
                >
                  Go
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  class="w-full rounded-br-lg text-[#50E2FF] hover:bg-[#50E2FF] p-2 hover:text-[#1A1611] transition-all"
                  href="https://echo.labstack.com/"
                >
                  Echo
                </a>
              </div>
            </SwitchCard>
            <SwitchCard title="My Setup">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://neovim.io/"
                class="flex p-2 flex-row gap-2 hover:scale-95 transition-all w-fit"
              >
                <img
                  class="size-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1200px-Neovim-mark.svg.png"
                ></img>
                <p>Neovim</p>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://fedoraproject.org/"
                class="flex p-2 flex-row gap-2 hover:scale-95 transition-all w-fit"
              >
                <img
                  class="size-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fedora_logo.svg/1024px-Fedora_logo.svg.png"
                ></img>
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
            </SwitchCard>
          </div>
          <p class="text-xs pt-6 mb-4 font-[Overpass] opacity-50 text-center">
            This website is built by a human. <br />
            AI training on its content or source code is prohibited.
          </p>
        </div>
        <button
          onClick={(e) => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            window.location.hash = "";
            history.pushState("", document.title, window.location.pathname);
            e.preventDefault();
          }}
          class="flex flex-row mb-6 gap-1 items-center justify-center"
        >
          <p class="text-xl">Back to top</p>
          <div class="rotate-180">
            <ArrowDown></ArrowDown>
          </div>
        </button>
      </div>
    </section>
  );
}
