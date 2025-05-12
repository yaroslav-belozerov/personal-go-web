import { MessageProvider, useLastMessage } from "../../../lib/api/messagesHook";
import { SendMessage } from "../components/Icons";
import SocialIcon from "../components/SocialIcon";

export default function Touch() {
  return (
    <section
      id="contact"
      class="flex flex-col min-h-[100dvh] pt-6 max-sm:justify-between sm:gap-6"
    >
      <div class="flex flex-col">
        <h2 class="ms-6 text-white text-3xl italic sm:text-5xl">
          Get in touch
        </h2>
        <div
          class="w-full pe-12 grid grid-cols-3 gap-4 sm:gap-6 ms-6 mt-4 sm:grid-cols-4"
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
      </div>
      <MessageProvider baseURL="https://tarakoshka.tech/api/messages/first">
        {useLastMessage().items() && (
          <div class="flex flex-col sm:flex-row sm:gap-6 gap-2 mb-6 justify-between mx-6">
            {/* <p class="ms-6 text-xl sm:text-2xl italic text-[#ffffff] mb-2">
                  your messages
                </p> */}
            <div class="flex w-full flex-col justify-center rounded-t-2xl rounded-b-md sm:rounded-b-2xl p-3 sm:p-6 bg-[#2B251F] transition-all">
              <p class="text-white text-2xl sm:text-4xl">
                {useLastMessage().items()?.text}
              </p>
              <i class="text-xl sm:text-2xl">
                <span class="text-white">
                  {useLastMessage().items()?.creator}
                </span>{" "}
                on
                {" " +
                  new Date(useLastMessage().items()?.time ?? "").toLocaleString(
                    "en-US",
                    {
                      timeStyle: "short",
                      dateStyle: "long",
                      hour12: false,
                    },
                  )}
              </i>
            </div>
            <a
              class={`flex flex-row gap-4 justify-center sm:hover:scale-95 sm:px-12 transition-all items-center rounded-t-lg sm:rounded-t-2xl rounded-b-2xl p-3 bg-[#2B251F] transition-all`}
              href="/write-to-me"
            >
              <p class="text-xl sm:hidden">More messages</p>
              <div class="transition-all size-6">
                <SendMessage></SendMessage>
              </div>
            </a>
          </div>
        )}
      </MessageProvider>
    </section>
  );
}
