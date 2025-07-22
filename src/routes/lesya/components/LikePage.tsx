import { Component, createSignal, DEV, Show } from "solid-js";
import { BackArrow } from "../../write/components/Icons";
import { Heart, HeartFill, HeartPlus } from "./Icons";
import { Motion } from "solid-motionone";
import { CatLikesProvider, useCatLikes } from "../../../lib/api/catLikesHook";

const LikePane: Component = () => {
  const { get, add, refetch } = useCatLikes();
  const [liked, setLiked] = createSignal(false);

  const like = async () => {
    setLiked(true);
    await add(0);
    refetch();
  };

  return (
    <div
      id="like-page"
      class="bg-white flex flex-col text-white p-8 h-screen overflow-y-hidden"
    >
      <div class="flex items-center justify-between mb-8 ms-6 gap-2 text-green-900">
        <div class="flex flex-row gap-2">
          <HeartPlus></HeartPlus>
        </div>
        <h2 class="md:block hidden font-[Oi] text-2xl md:text-4xl whitespace-nowrap">
          The Meowcounter
        </h2>
        <div class="flex flex-row gap-4">
          <a
            href="#happy-page"
            class="rotate-90 md:hover:scale-90 transition-all md:hover:bg-white text-green-900 bg-green-400 size-16 flex justify-center items-center rounded-2xl"
          >
            <BackArrow />
          </a>
        </div>
      </div>

      <div class="flex items-center grow-1 pb-16 justify-center relative text-green-900">
        {/* Main content */}
        <div class="relative flex flex-col items-center">
          <Show when={!liked()}>
            <Motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                easing: "ease-in-out",
              }}
            >
              <button onClick={like} class="aspect-square h-48 cursor-pointer">
                <Heart />
              </button>
            </Motion.button>
          </Show>
          <Show when={liked()}>
            <Motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                easing: "ease-in-out",
              }}
            >
              <div class="aspect-square h-48 text-red-500">
                <HeartFill />
              </div>
            </Motion.div>
          </Show>
          <p class="font-[Sora] text-center md:text-4xl text-2xl">
            Click to meow and send
            <br /> respect to this kitty <br /> (
            {useCatLikes().get()?.toString()} now)
          </p>
        </div>
      </div>
      <h2 class="text-green-900 block absolute bottom-8 md:hidden font-[Oi] text-2xl">
        The Meowcounter
      </h2>
    </div>
  );
};

export default LikePane;
