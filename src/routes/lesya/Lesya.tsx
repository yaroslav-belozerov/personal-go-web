import { Motion } from "solid-motionone";
import { Happy, HeartPlus, Photos, BackArrow } from "./components/Icons";
import {
  GalleryPage1,
  GalleryPage2,
  HappyPane,
} from "./components/GalleryPanes";
import ShowWhenInView from "./components/ShowWhenInView";
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
      <main id="catstart" class="flex flex-col page relative w-full">
        <img
          src="https://tarakoshka.tech/static/kitty/kitty3.jpg"
          alt="Cat"
          class="w-full min-h-screen max-h-screen object-cover opacity-0 transition-all"
          onLoad="this.style.opacity = 1;"
        />

        <div class="bg-green-900 flex flex-col items-center justify-center py-6 pt-8">
          <h1 class="text-5xl font-[Oi] text-white">
            Lesya <span class="text-green-400 text-xl align-super">TM</span>
          </h1>
        </div>
        <div class="flex p-4 flex-col items-end absolute top-0 right-0 max-sm:gap-4 sm:justify-evenly min-h-screen max-h-screen">
          <div class="flex flex-row w-screen sm:ps-16 ps-8 max-sm:pt-2 justify-between">
            <a
              href="/"
              class="sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 size-12 sm:size-16 flex justify-center items-center rounded-2xl"
            >
              <BackArrow />
            </a>
            <h1 class="text-5xl sm:text-8xl font-[Oi] text-white">
              Lesya{" "}
              <span class="text-green-400 text-3xl sm:text-6xl align-super">
                TM
              </span>
            </h1>
          </div>

          <div class="flex text-green-900 max-sm:ps-8 flex-row max-sm:w-full sm:flex-col max-sm:space-x-2 sm:space-y-4 justify-between">
            <a
              href="#gallery-page-1"
              class="max-sm:py-4 sm:hover:scale-90 transition-all sm:hover:bg-white bg-green-400 sm:w-20 sm:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <Photos />
            </a>
            <a
              href="#happy-page"
              class="max-sm:py-4 sm:hover:scale-90 transition-all sm:hover:bg-white bg-green-400 sm:w-20 sm:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <Happy />
            </a>
            <a
              href="#like-page"
              class="max-sm:py-4 sm:hover:scale-90 transition-all sm:hover:bg-white text-green-900 bg-green-400 sm:w-20 sm:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <HeartPlus />
            </a>
          </div>

          <div class="text-right font-[Sora] right-8 bottom-8 sm:text-8xl text-4xl font-bold text-white">
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
