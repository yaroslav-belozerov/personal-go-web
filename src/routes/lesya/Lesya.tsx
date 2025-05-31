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
          style="opacity: 0;"
          alt="Cat"
          class="w-full min-h-screen max-h-screen object-cover transition-all"
          onLoad="this.style.opacity = 1;"
        />

        <div class="flex p-4 flex-col items-end absolute top-0 right-0 max-md:gap-4 md:justify-evenly min-h-screen max-h-screen">
          <div class="flex flex-row w-screen md:ps-16 ps-8 max-md:pt-2 justify-between">
            <a
              href="/"
              class="md:hover:scale-90 transition-all md:hover:bg-white text-green-900 bg-green-400 size-12 md:size-16 flex justify-center items-center rounded-2xl"
            >
              <BackArrow />
            </a>
            <h1 class="text-4xl md:text-8xl font-[Oi] text-white text-nowrap">
              Lesya{" "}
              <span class="text-green-400 text-3xl md:text-6xl align-super">
                TM
              </span>
            </h1>
          </div>

          <div class="flex text-green-900 max-md:ps-8 flex-row max-md:w-full md:flex-col max-md:space-x-2 md:space-y-4 justify-between">
            <a
              href="#gallery-page-1"
              class="max-md:py-4 md:hover:scale-90 transition-all md:hover:bg-white bg-green-400 md:w-20 md:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <Photos />
            </a>
            <a
              href="#happy-page"
              class="max-md:py-4 md:hover:scale-90 transition-all md:hover:bg-white bg-green-400 md:w-20 md:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <Happy />
            </a>
            <a
              href="#like-page"
              class="max-md:py-4 md:hover:scale-90 transition-all md:hover:bg-white text-green-900 bg-green-400 md:w-20 md:aspect-square flex justify-center items-center rounded-2xl grow-1"
            >
              <HeartPlus />
            </a>
          </div>

          <div class="text-right font-[Sora] right-8 bottom-8 md:text-8xl text-4xl font-bold text-white">
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
