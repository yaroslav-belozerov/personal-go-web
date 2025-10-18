import { A } from "@solidjs/router";

export default function JbTestingCup() {
  return (
    <div class="text-xl min-h-screen font-[Inter] text-white bg-zinc-950">
      <div class="flex flex-row gap-5 pt-6 pb-8 bg-zinc-900 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="size-10 mt-2"
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
        <div class="flex flex-col">
          <span class="text-xl font-[Sora]">JetBrains</span>
          <span class="text-4xl font-[Sora]">Testing Cup</span>
        </div>
      </div>
      <p class="text-lg px-6 py-6">
        In a team we created{" "}
        <b>a platform for a completely new competition format.</b>
        <br />A 5-hour testing challenge was held in two cities in Romania using
        this platform.
      </p>
      <div class="px-4 py-4 bg-zinc-900">
        <h3 class="text-3xl font-[Sora] mb-4">Platform Features</h3>
        <ul class="text-lg flex flex-col gap-4">
          <li class="bg-zinc-800 p-4 rounded-xl md:flex md:flex-row flex-wrap max-md:gap-4 gap-2 md:text-xl">
            <img
              src="/static/jb-romania/hints.png"
              class="rounded-lg max-md:mb-4 outline-1 outline-white md:max-w-lg h-full"
            ></img>
            <img
              src="/static/jb-romania/hints-admin.png"
              class="rounded-lg max-md:mb-4 outline-1 outline-white md:max-w-lg h-full"
            ></img>
            <div class="basis-full"></div>
            Viewing the problem statement and revealing hints during the
            competition from the dedicated admin panel
          </li>
          <li class="bg-zinc-800 p-4 rounded-xl md:flex md:flex-row flex-wrap max-md:gap-4 gap-2 md:text-xl">
            <img
              src="/static/jb-romania/test-editor.png"
              class="rounded-lg max-md:mb-4 outline-1 outline-white md:max-w-lg h-full"
            ></img>
            <div class="basis-full"></div>
            Running tests (with or without saving the result), renaming and
            rerunning them
          </li>
          <li class="bg-zinc-800 p-4 rounded-xl md:flex md:flex-row flex-wrap max-md:gap-4 gap-2 md:text-xl">
            <img
              src="/static/jb-romania/test-table.png"
              class="rounded-lg max-md:mb-4 outline-1 outline-white md:max-w-lg h-full"
            ></img>
            <img
              src="/static/jb-romania/test-table-2.png"
              class="rounded-lg max-md:mb-4 outline-1 outline-white md:max-w-lg h-full"
            ></img>
            <div class="basis-full"></div>
            Seeing all the tests you submitted, editing them, and seeing the
            results (for example, score for each test case)
          </li>
          <li class="bg-zinc-800 p-4 rounded-xl md:flex md:flex-row flex-wrap max-md:gap-4 gap-2 md:text-xl">
            <img
              src="/static/jb-romania/leaderboard.png"
              class="rounded-lg max-md:mb-4 outline-1 outline-white md:max-w-xl h-full"
            ></img>
            <div class="basis-full"></div>
            Dynamic leaderboard with sorting by time of last score change
          </li>
        </ul>
      </div>
      <div class="p-4 bg-zinc-950">
        <h3 class="text-3xl font-[Sora] mt-3 mb-4">Challenge Outcome</h3>
        <ul class="text-lg flex flex-col gap-4">
          <li class="bg-zinc-800 p-4 rounded-xl flex flex-row gap-4 items-center">
            <svg
              class="size-16 fill-[#6F57F7]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
            </svg>
            <div>8.7 average likeliness to recommend challenge</div>
          </li>
          <li class="bg-zinc-800 p-4 rounded-xl flex flex-row gap-4 items-center">
            <svg
              class="size-16 fill-[#6F57F7] md:size-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
            </svg>
            <div>Overwhelmingly positive feedback and student's enthusiasm</div>
          </li>
          <li class="bg-zinc-800 p-4 rounded-xl flex flex-row gap-4 items-center">
            <svg
              class="size-10 md:size-16 fill-[#6F57F7]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
            </svg>
            <div>
              Publicity in the local community
              <br />
              <a
                href="https://www.facebook.com/infogimiasi/posts/pfbid06RxS4nN4qvt7RUdjvnozXVvT8iSN31H3LNF5yXWKkp4y16cE56NFze2jsyFDMki7l"
                target="_blank"
                class="underline"
              >
                See Facebook post
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
