import { Motion } from "solid-motionone";
import { Happy, HeartPlus, Photos, BackArrow } from "./components/Icons";
import {
  GalleryPage1,
  GalleryPage2,
  HappyPane,
} from "./components/GalleryPanes";
import LikePane from "./components/LikePage";
import { CatLikesProvider } from "../../lib/api/catLikesHook";

export default function Lesya() {
  return (
    <Motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main
        id="catstart"
        class="flex flex-col min-h-screen relative w-full overflow-y-scroll"
      >
        <img
          src="https://tarakoshka.tech/static/kitty/kitty3.webp"
          style="opacity: 0;"
          alt="Cat"
          class="w-full min-h-screen max-h-screen object-cover transition-all"
          onLoad="this.style.opacity = 1;"
        />

        <div class="flex p-4 flex-col items-end absolute top-0 right-0 max-lg:gap-4 lg:justify-evenly min-h-screen max-h-screen">
          <div class="flex flex-row w-screen lg:ps-16 ps-8 max-lg:pt-2 justify-between">
            <a
              href="/"
              class="lg:hover:scale-90 transition-all lg:hover:bg-white text-green-900 bg-green-400 size-12 lg:size-16 flex justify-center items-center rounded-2xl"
            >
              <BackArrow />
            </a>
            <h1 class="text-4xl lg:text-8xl font-[Oi] text-white text-nowrap">
              Lesya{" "}
              <span class="text-green-400 text-3xl lg:text-6xl align-super">
                TM
              </span>
            </h1>
          </div>

          <div class="flex text-green-900 max-lg:ps-8 flex-row max-lg:w-full lg:flex-col max-lg:space-x-2 lg:space-y-4 justify-between">
            <a
              href="#gallery-page-1"
              class="max-lg:py-4 lg:hover:scale-90 transition-all lg:hover:bg-white bg-green-400 lg:w-20 lg:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <Photos />
            </a>
            <a
              href="#happy-page"
              class="max-lg:py-4 lg:hover:scale-90 transition-all lg:hover:bg-white bg-green-400 lg:w-20 lg:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <Happy />
            </a>
            <a
              href="#like-page"
              class="max-lg:py-4 lg:hover:scale-90 transition-all lg:hover:bg-white text-green-900 bg-green-400 lg:w-20 lg:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <HeartPlus />
            </a>
          </div>

          <div class="text-right font-[Sora] right-8 bottom-8 lg:text-8xl text-4xl font-bold text-white">
            The best kitty
            <br /> in the world!
          </div>
        </div>

        <GalleryPage1></GalleryPage1>
        <GalleryPage2></GalleryPage2>
        <HappyPane></HappyPane>

        <CatLikesProvider baseURL="https://tarakoshka.tech/api/kitty/like">
          <LikePane />
        </CatLikesProvider>
      </main>
    </Motion.main>
  );
}
