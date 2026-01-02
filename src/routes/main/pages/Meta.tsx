import { createSignal } from "solid-js";
import { ArrowDown } from "../components/Icons";
import SocialTag from "../components/SocialTag";
import { SwitchCard } from "../components/SwitchCard";
import { MusicProvider, useMusic } from "../../../lib/api/musicHook";

export default function Meta() {
  return (
    <section id="info" class="flex flex-col bg-black py-8">
      <div class="flex justify-between flex-col">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col items-center">
            <h2 class="text-white text-5xl text-center">About me and site</h2>
            <a
              aria-label="Support me"
              href="/support"
              class="text-3xl italic w-fit justify-center text-yellow-300 flex flex-row items-center gap-1"
            >
              support
              <svg
                class="size-8 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
              </svg>
            </a>
          </div>
          <div class="flex flex-col mx-8 gap-3 font-[Overpass] text-white">
            <a
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
              <p class="text-xl pt-1">HSE Lyceum Alumni</p>
            </a>
            <a
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
                <p class="text-xl pt-4 pb-3">PROD 2025 Winner</p>
              </div>
            </a>
            <a
              href="https://lp.jetbrains.com/software-data-and-technology-constructor-university/"
              rel="noreferrer noopener"
              target="_blank"
              class="hover:scale-97 transition-all"
            >
              <div class="flex flex-row gap-4 border-[#FF801A] border-2 bg-[#452105] rounded-full items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="size-7 ml-4"
                  viewBox="0 0 64 64"
                >
                  <defs>
                    <linearGradient
                      id="a"
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
                    fill="url(#a)"
                    d="M20.34 3.66 3.66 20.34C1.32 22.68 0 25.86 0 29.18V59c0 2.76 2.24 5 5 5h29.82c3.32 0 6.49-1.32 8.84-3.66l16.68-16.68c2.34-2.34 3.66-5.52 3.66-8.84V5c0-2.76-2.24-5-5-5H29.18c-3.32 0-6.49 1.32-8.84 3.66Z"
                  />
                  <path fill="#000" d="M48 16H8v40h40V16Z" />
                  <path fill="#fff" d="M30 47H13v4h17v-4Z" />
                </svg>

                <p class="text-xl pt-4 pb-3">SDT Student</p>
              </div>
            </a>
            <MusicProvider baseURL="https://tarakoshka.tech/api/music">
              {useMusic().get() && (
                <div class="flex font-[Overpass] flex-row justify-between pl-3 pr-3">
                  <a
                    aria-label={useMusic()?.get()?.title}
                    href={useMusic()?.get()?.url}
                    class="flex flex-row items-center gap-4 lg:hover:scale-90 transition-all"
                  >
                    <img
                      src={useMusic()?.get()?.image}
                      alt={useMusic()?.get()?.title}
                      class="size-9 rounded-sm transition-all"
                    />
                    <div class="flex flex-col">
                      <h3 class="text-white text-xl leading-7">
                        {useMusic()?.get()?.title}
                      </h3>
                      <p class="text-md leading-3 italic">
                        {useMusic()?.get()?.artist}
                      </p>
                    </div>
                  </a>
                  <a
                    aria-label="My LastFM account"
                    href="https://www.last.fm/user/Lemurr4ik_"
                    class="relative size-14 lg:scale-140 lg:hover:scale-120 lg:me-4 transition-all"
                    target="_blank"
                  >
                    <svg
                      style="animation: rotate-animation 20s infinite linear;"
                      class="transition-all size-14 absolute text-[#0C12C9]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 409 405"
                    >
                      <path
                        fill="currentColor"
                        d="M180.993 9.267c13.508-11.646 33.506-11.646 47.014 0l26.686 23.008a36.003 36.003 0 0 0 23.989 8.73l35.232-.47c17.834-.24 33.154 12.616 36.015 30.22l5.654 34.778a36.001 36.001 0 0 0 12.764 22.109l27.292 22.285c13.815 11.28 17.288 30.975 8.164 46.3l-18.024 30.276a36.003 36.003 0 0 0-4.433 25.141l6.582 34.615c3.332 17.521-6.667 34.84-23.507 40.715l-33.268 11.607a36.004 36.004 0 0 0-19.556 16.41l-17.208 30.747c-8.71 15.564-27.502 22.404-44.179 16.08l-32.946-12.493a36.003 36.003 0 0 0-25.528 0l-32.946 12.493c-16.677 6.324-35.469-.516-44.179-16.08l-17.208-30.747a36.004 36.004 0 0 0-19.556-16.41L44.58 326.974c-16.84-5.875-26.84-23.194-23.508-40.715l6.583-34.615a36.002 36.002 0 0 0-4.433-25.141L5.197 196.227c-9.124-15.325-5.651-35.02 8.163-46.3l27.293-22.285a36 36 0 0 0 12.764-22.109l5.654-34.778c2.861-17.604 18.181-30.46 36.015-30.22l35.232.47a36.003 36.003 0 0 0 23.989-8.73l26.686-23.008Z"
                      />
                    </svg>
                    <svg
                      class="transition-all size-7 absolute top-[52%] left-[49%] translate-[-52%] text-white"
                      viewBox="0 0 24 24"
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
            <div class="flex flex-col">
              <div class="flex flex-wrap flex-row text-black">
                <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-white text-lg transition-all">
                  <p class="mt-[2px]">18 yo</p>
                </div>
                <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-white text-lg transition-all">
                  <p class="mt-[2px]">ru/en</p>
                </div>
                <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-white text-lg transition-all">
                  <p class="mt-[2px]">he/him</p>
                </div>
                <div class="flex text-lg font-[Overpass] grow-1 justify-center rounded-full px-4 py-2 bg-white text-lg transition-all">
                  <p class="mt-[2px]">gmt+2</p>
                </div>
                <SocialTag text="mobile" />
                <SocialTag text="web" />
                <SocialTag text="designer" />
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
              </div>
              <div class="w-full flex mb-6 flex-row">
                <div class="flex text-black w-full text-xs font-[Overpass] justify-center rounded-full grow-1 px-8 py-4 bg-white text-lg transition-all">
                  This website is built by a human. <br />
                  AI training on its content or source code is prohibited.
                </div>
                <button
                  aria-label="Go to top"
                  onClick={(e) => {
                    window.location.hash = "landing";
                    history.pushState(
                      "",
                      document.title,
                      window.location.pathname,
                    );
                    e.preventDefault();
                  }}
                  class="flex aspect-square flex-row gap-1 items-center justify-center bg-black outline-2 outline-white -outline-offset-2 px-4 rounded-full aspect-square items-center justify-center"
                >
                  <div class="rotate-180">
                    <ArrowDown></ArrowDown>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-row flex-wrap font-[Overpass] gap-1 pt-4 pb-4 opacity-60">
        <a href="https://tarakoshka.tech">
          <span class="underline">tarakoshka.tech</span> © 2025 by Iaroslav
          Belozerov
        </a>{" "}
        is licensed under{" "}
        <a
          class="underline"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          CC BY-NC-SA 4.0
        </a>
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          alt=""
          style="max-width: 1em;max-height:1em;margin-left: .2em;"
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          alt=""
          style="max-width: 1em;max-height:1em;margin-left: .2em;"
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
          alt=""
          style="max-width: 1em;max-height:1em;margin-left: .2em;"
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
          alt=""
          style="max-width: 1em;max-height:1em;margin-left: .2em;"
        />
      </div>
    </section>
  );
}
