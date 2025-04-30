import { BackArrow } from "../../write/components/Icons";
import { Motion, Presence } from "solid-motionone";
import { Happy, Heart, HeartPlus, Photos, RoundCheck } from "./Icons";
import { onMount } from "solid-js";
import ShowWhenInView from "./ShowWhenInView";

// Component for Photo Gallery Page 1
export function GalleryPage1() {
  // Replace these URLs with your own cat images
  const images = [
    "https://tarakoshka.tech/static/kitty/kitty6.jpg",
    "https://tarakoshka.tech/static/kitty/kitty2.jpg",
    "https://tarakoshka.tech/static/kitty/kitty4.jpg",
  ];

  return (
    <div
      id="gallery-page-1"
      class="bg-green-900 flex flex-col text-white p-8 h-screen overflow-y-hidden"
    >
      <div class="flex items-center justify-between mb-8 ms-6 gap-2">
        <div class="flex flex-row gap-2">
          <Photos />
          <span class="text-xl font-[Sora]">1</span>
        </div>
        <div class="flex flex-row gap-4">
          <a
            href="#catstart"
            class="rotate-90 sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 size-16 flex justify-center items-center rounded-2xl"
          >
            <BackArrow />
          </a>
          <a
            href="#gallery-page-2"
            class="rotate-270 sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 size-16 flex justify-center items-center rounded-2xl"
          >
            <BackArrow />
          </a>
        </div>
      </div>

      <div class="flex flex-row gap-4">
        <div class="w-[40%] flex flex-col gap-4">
          <div class="overflow-hidden rounded-lg">
            <img
              draggable="false"
              src={images[0]}
              alt="Cat 1"
              class="h-36 w-full -cover rounded-xl opacity-0 transition-all object-cover"
              onLoad="this.style.opacity = 1;"
            />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img
              draggable="false"
              src={images[1]}
              alt="Cat 2"
              class="h-48 w-full -cover rounded-xl opacity-0 transition-all object-cover"
              onLoad="this.style.opacity = 1;"
            />
          </div>
          <div class="flex flex-row pt-6 w-full justify-evenly">
            <p class="font-[Sora] text-center text-3xl">ᓚᘏᗢ</p>
            <p class="font-[Sora] text-center text-3xl">ᓚᘏᗢ</p>
            <p class="font-[Sora] text-center text-3xl">ᓚᘏᗢ</p>
            <p class="font-[Sora] text-center text-3xl">ᓚᘏᗢ</p>
          </div>
        </div>

        {/* Right two columns spanned by the large image */}
        <div class="w-[60%] max-sm:max-h-90 overflow-hidden rounded-xl">
          <img
            draggable="false"
            src={images[2]}
            alt="Cat 3"
            class="h-full -cover rounded-lg opacity-0 transition-all object-cover"
            onLoad="this.style.opacity = 1;"
          />
        </div>
      </div>
    </div>
  );
}

// Component for Photo Gallery Page 2
export function GalleryPage2() {
  // Replace these URLs with your own cat images
  const images = [
    "https://tarakoshka.tech/static/kitty/kitty1.jpg",
    "https://tarakoshka.tech/static/kitty/kitty7.jpg",
    "https://tarakoshka.tech/static/kitty/kitty5.jpg",
  ];

  return (
    <div
      id="gallery-page-2"
      class="bg-white flex flex-col text-green-900 p-8 h-screen overflow-y-hidden"
    >
      <div class="flex items-center justify-between mb-8 ms-6 gap-2">
        <div class="flex flex-row gap-2">
          <Photos />
          <span class="text-xl font-[Sora]">2</span>
        </div>
        <div class="flex flex-row gap-4">
          <a
            href="#gallery-page-1"
            class="rotate-90 sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 size-16 flex justify-center items-center rounded-2xl"
          >
            <BackArrow />
          </a>
          <a
            href="#happy-page"
            class="rotate-270 sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 size-16 flex justify-center items-center rounded-2xl"
          >
            <BackArrow />
          </a>
        </div>
      </div>

      <div class="sm:flex hidden flex-row items-center gap-4 grow-1">
        <div class="overflow-hidden rounded-xl flex-1">
          <img
            draggable="false"
            src={images[1]}
            alt="Cat 5"
            class="w-full h-64 rounded-xl opacity-0 transition-all object-cover"
            onLoad="this.style.opacity = 1;"
          />
        </div>
        <div class="overflow-hidden rounded-xl flex-1">
          <img
            draggable="false"
            src={images[2]}
            alt="Cat 6"
            class="w-full h-64 rounded-xl opacity-0 transition-all object-cover"
            onLoad="this.style.opacity = 1;"
          />
        </div>
        <div class="overflow-hidden rounded-xl flex-1">
          <img
            draggable="false"
            src={images[0]}
            alt="Cat 4"
            class="w-full h-96 rounded-xl opacity-0 transition-all object-cover"
            onLoad="this.style.opacity = 1;"
          />
        </div>
      </div>

      <div
        class="sm:hidden relative block min-w-full rounded-4xl flex flex-row overflow-scroll"
        style="scrollbar-width: none;"
      >
        <img
          class="absolute bottom-0 scale-30"
          src="https://tarakoshka.tech/static/arrow-lr.svg"
        ></img>
        <img
          draggable="false"
          src={images[1]}
          alt="Cat 5"
          class="w-screen rounded-4xl opacity-0 transition-all object-cover"
          onLoad="this.style.opacity = 1;"
        />
        <img
          draggable="false"
          src={images[2]}
          alt="Cat 6"
          class="w-screen rounded-4xl opacity-0 transition-all object-cover"
          onLoad="this.style.opacity = 1;"
        />
        <img
          draggable="false"
          src={images[0]}
          alt="Cat 4"
          class="w-screen rounded-4xl opacity-0 transition-all object-cover"
          onLoad="this.style.opacity = 1;"
        />
      </div>
    </div>
  );
}

export function HappyPane() {
  return (
    <div
      id="happy-page"
      class="bg-green-900 flex flex-col text-white p-8 h-screen overflow-y-hidden"
    >
      <div class="flex items-center justify-between mb-8 ms-6 gap-2">
        <div class="flex flex-row gap-2">
          <Happy></Happy>
        </div>
        <div class="flex flex-row gap-4">
          <a
            href="#gallery-page-2"
            class="rotate-90 sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 size-16 flex justify-center items-center rounded-2xl"
          >
            <BackArrow />
          </a>
          <a
            href="#like-page"
            class="rotate-270 sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 size-16 flex justify-center items-center rounded-2xl"
          >
            <BackArrow />
          </a>
        </div>
      </div>

      <div class="sm:hidden mb-8 flex flex-col gap-4">
        <div class="relative w-full mb-4">
          <img
            draggable="false"
            src="https://tarakoshka.tech/static/kitty/kitty8.jpg"
            alt="Cat"
            class="w-full h-full rounded-full aspect-[5/4] object-cover"
          />
        </div>
        <ShowWhenInView index={1}>
          <div class="flex flex-row gap-4 items-center">
            <RoundCheck />
            <h2 class="text-lg md:text-4xl font-[Sora]">
              Eating six times a day
            </h2>
          </div>
        </ShowWhenInView>
        <ShowWhenInView index={2}>
          <div class="flex flex-row gap-4 items-center">
            <RoundCheck />
            <h2 class="text-lg md:text-4xl font-[Sora]">
              Chewing on wires and clothes
            </h2>
          </div>
        </ShowWhenInView>
        <ShowWhenInView index={3}>
          <div class="flex flex-row gap-4 items-center">
            <RoundCheck />
            <h2 class="text-lg md:text-4xl font-[Sora]">
              Laying between shoes
            </h2>
          </div>
        </ShowWhenInView>
        <ShowWhenInView index={4}>
          <div class="flex flex-row gap-4 items-center">
            <RoundCheck />
            <h2 class="text-lg md:text-4xl font-[Sora]">
              Screaming at night for no reason
            </h2>
          </div>
        </ShowWhenInView>
        <ShowWhenInView index={5}>
          <div class="flex flex-row gap-4 items-center">
            <RoundCheck />
            <h2 class="text-lg md:text-4xl font-[Sora]">
              Sneezing in your face
            </h2>
          </div>
        </ShowWhenInView>
      </div>

      <div class="sm:flex hidden items-center grow-1 pb-16 justify-center relative bg-green-900">
        {/* Main content */}
        <div class="relative flex flex-col items-center me-8 mb-8">
          {/* Cat image in center */}
          <div class="relative max-w-60">
            <img
              draggable="false"
              src="https://tarakoshka.tech/static/kitty/kitty8.jpg"
              alt="Cat"
              class="w-full h-full -cover rounded-full"
            />
          </div>

          {/* Behavior labels with arrows */}
          {/* Eating six times a day */}
          <ShowWhenInView index={0}>
            <div class="absolute top-[15%] text-white text-center left-[-110%]">
              <h2 class="text-2xl md:text-4xl font-[Sora] whitespace-nowrap">
                Eating six
                <br /> times a day
              </h2>
              <img
                draggable="false"
                class="absolute left-[60%] top-[-10%] scale-130"
                src="https://tarakoshka.tech/static/kitty/arrows/arrow1.svg"
              ></img>
            </div>
          </ShowWhenInView>

          {/* Chewing on wires and clothes */}
          <ShowWhenInView index={1}>
            <div class="absolute text-white text-center absolute top-[-10%] right-[-130%]">
              <h2 class="text-2xl md:text-4xl font-[Sora] whitespace-nowrap">
                Chewing on
                <br /> wires and clothes
              </h2>
              <img
                draggable="false"
                width="210"
                class="absolute bottom-[-70%] left-[-20%]"
                src="https://tarakoshka.tech/static/kitty/arrows/arrow2.svg"
              ></img>
            </div>
          </ShowWhenInView>

          {/* Laying between shoes */}
          <ShowWhenInView index={2}>
            <div class="absolute overflow-visible top-[40%] right-[-135%] text-white text-center">
              <h2 class="text-2xl md:text-4xl font-[Sora] whitespace-nowrap">
                Laying between <br />
                shoes
              </h2>
              <img
                draggable="false"
                class="absolute bottom-[-75%] right-[50%] scale-85"
                src="https://tarakoshka.tech/static/kitty/arrows/arrow3.svg"
              ></img>
            </div>
          </ShowWhenInView>

          {/* Screaming at night for no reason */}
          <ShowWhenInView index={3}>
            <div class="absolute right-[-140%] top-[110%] text-white text-center">
              <h2 class="text-2xl md:text-4xl font-[Sora] whitespace-nowrap">
                Screaming at night <br /> for no reason
              </h2>
              <img
                draggable="false"
                class="absolute scale-90 left-[-50%] top-[-80%] rotate-10"
                src="https://tarakoshka.tech/static/kitty/arrows/arrow5.svg"
              ></img>
            </div>
          </ShowWhenInView>

          {/* Sneezing in your face */}
          <ShowWhenInView index={4}>
            <div class="absolute bottom-[-30%] right-[120%] text-white text-center">
              <h2 class="text-2xl md:text-4xl font-[Sora] whitespace-nowrap">
                Sneezing
                <br /> in your face
              </h2>
              <img
                draggable="false"
                class="absolute scale-100 left-[50%] top-[-190%] opacity-0 transition-all"
                src="https://tarakoshka.tech/static/kitty/arrows/arrow4.svg"
                onLoad="this.style.opacity = 1;"
                alt="Cat"
              ></img>
            </div>
          </ShowWhenInView>
        </div>
      </div>
    </div>
  );
}
