import { MessageProvider, useLastMessage } from "../../../lib/api/messagesHook";
import { MusicProvider, useMusic } from "../../../lib/api/musicHook";
import { SendMessage } from "../components/Icons";
import SocialIcon from "../components/SocialIcon";

export default function Touch() {
  return (
    <section id="touch" class="flex flex-col min-h-[100dvh] pt-6 gap-2">
      <MusicProvider baseURL="https://tarakoshka.tech/api/music">
        {useMusic().items() && (
          <div class="flex flex-col">
            <h2 class="ms-6 text-white text-4xl mb-2">Listening to</h2>
            <div class="flex font-[Overpass] flex-row justify-between me-6">
              <a
                href={useMusic()?.items()?.url}
                class="flex flex-row ms-6 items-center gap-4 md:hover:scale-90 transition-all"
              >
                <img
                  src={useMusic()?.items()?.image}
                  alt={useMusic()?.items()?.title}
                  class="size-12 rounded-md transition-all"
                />
                <div class="flex flex-col">
                  <h3 class="text-white text-xl">
                    {useMusic()?.items()?.title}
                  </h3>
                  <p class="text-md">{useMusic()?.items()?.artist}</p>
                </div>
              </a>
              <a
                href="https://www.last.fm/user/Lemurr4ik_"
                class="relative size-14 md:scale-140 md:hover:scale-120 md:me-4 transition-all"
                target="_blank"
              >
                <img
                  class="transition-all size-14 absolute"
                  src="https://tarakoshka.tech/static/icons/star2.svg"
                  alt={useMusic()?.items()?.title}
                  style="animation: rotate-animation 20s infinite linear;"
                ></img>
                <img
                  class="transition-all size-6 absolute top-[50%] left-[50%] translate-[-50%]"
                  src="https://tarakoshka.tech/static/icons/music.svg"
                  alt={useMusic()?.items()?.title}
                ></img>
              </a>
            </div>
          </div>
        )}
      </MusicProvider>
      <h2 class="ms-6 text-white text-4xl mt-2">Get in touch</h2>
      <div class="flex flex-col gap-2">
        <div
          class="w-full pe-12 grid grid-cols-3 gap-2 md:gap-6 ms-6 md:grid-cols-4"
          style="justify-items: center;"
        >
          <SocialIcon
            path="https://t.me/yaabelozerov"
            icon="telegram.svg"
          ></SocialIcon>
          <SocialIcon
            path="https://github.com/yaroslav-belozerov"
            icon="github.svg"
          ></SocialIcon>
          <SocialIcon
            path="https://anilist.co/user/Lemurr4ik/"
            icon="anilist.svg"
          ></SocialIcon>
          <SocialIcon
            path="https://mastodon.social/@yaabelozerov"
            icon="mastodon.svg"
          ></SocialIcon>
          <SocialIcon
            path="https://open.spotify.com/user/31ztrvjmvnvjcf4m6fhkv4gmys3i"
            icon="spotify.svg"
          ></SocialIcon>
          <SocialIcon
            path="https://bsky.app/profile/tarakoshka.bsky.social"
            icon="bluesky.svg"
          ></SocialIcon>
          <SocialIcon
            path="https://x.com/yaabelozerov"
            icon="twitter.svg"
          ></SocialIcon>
          <SocialIcon
            path="mailto:me@tarakoshka.tech"
            icon="mail.svg"
          ></SocialIcon>
        </div>
        <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
          {useLastMessage().items() && (
            <div class="flex flex-col font-[Overpass] md:flex-row md:gap-6 gap-2 mb-6 justify-between mx-6">
              {/* <p class="ms-6 text-xl md:text-2xl italic text-[#ffffff] mb-2">
                    your messages
                  </p> */}
              <div class="flex w-full flex-col justify-center rounded-t-2xl rounded-b-md md:rounded-b-2xl p-3 md:p-6 bg-[#2B251F] transition-all">
                <p class="text-white text-xl">
                  {useLastMessage().items()?.text}
                </p>
                <p class="text-md">
                  <span class="text-white">
                    {useLastMessage().items()?.creator}
                  </span>{" "}
                  on
                  {" " +
                    new Date(
                      useLastMessage().items()?.time ?? "",
                    ).toLocaleString("en-US", {
                      dateStyle: "long",
                      hour12: false,
                    })}
                </p>
              </div>
              <a
                class={`flex flex-row gap-2 justify-center md:hover:scale-95 md:px-12 transition-all items-center rounded-t-lg md:rounded-t-2xl rounded-b-2xl p-3 bg-[#2B251F] transition-all`}
                href="/write-to-me"
              >
                <p class="text-md">More messages</p>
                <div class="transition-all size-6">
                  <SendMessage></SendMessage>
                </div>
              </a>
            </div>
          )}
        </MessageProvider>
      </div>
    </section>
  );
}
