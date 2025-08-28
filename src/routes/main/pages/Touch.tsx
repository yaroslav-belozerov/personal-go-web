import { A } from "@solidjs/router";
import { MessageProvider, useLastMessage } from "../../../lib/api/messagesHook";
import { MusicProvider, useMusic } from "../../../lib/api/musicHook";
import { SendMessage } from "../components/Icons";
import SocialIcon from "../components/SocialIcon";
import Badge from "../components/Badge";

export default function Touch() {
  return (
    <section id="contacts" class="flex flex-col pt-6 gap-4">
      <h2 class="ms-6 text-white text-4xl mt-2">Get in touch</h2>
      <div class="flex flex-col gap-2">
        <div
          class="w-full pe-12 grid grid-cols-3 gap-2 md:gap-6 ms-6 md:grid-cols-4"
          style="justify-items: center;"
        >
          <A
            class="group text-white relative flex max-md:w-full w-8 min-w-14 p-4 justify-center aspect-square items-center rounded-2xl bg-[#0c12c9] transition-all"
            style="flex: 1 0 26%;"
            href="/blog"
          >
            <span class="text-6xl mb-4 leading-0 italic transition-all">
              tt
            </span>
            <div class="absolute bottom-1 gap-1 transition-all rounded-full items-center flex flex-row">
              <p class="pb-[2px]">read my blog</p>
            </div>
          </A>
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
          {useLastMessage().get() && (
            <div class="flex flex-col font-[Overpass] md:flex-row md:gap-6 gap-2 mb-4 justify-between mx-6">
              {/* <p class="ms-6 text-xl md:text-2xl italic text-[#ffffff] mb-2">
                    your messages
                  </p> */}
              <div class="flex w-full flex-col justify-center rounded-t-2xl rounded-b-md md:rounded-b-2xl p-3 md:p-6 bg-[#2B251F] transition-all">
                <p class="text-white max-h-22 overflow-hidden fade text-xl">
                  {useLastMessage().get()?.text}
                </p>
                <p class="text-md">
                  <span class="text-white">
                    {useLastMessage().get()?.creator}
                  </span>{" "}
                  on
                  {" " +
                    new Date(useLastMessage().get()?.time ?? "").toLocaleString(
                      "en-US",
                      {
                        dateStyle: "long",
                        hour12: false,
                      },
                    )}
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
      <MusicProvider baseURL="https://tarakoshka.tech/api/music">
        {useMusic().get() && (
          <div class="flex flex-col gap-3">
            <h2 class="ms-6 text-white text-4xl">Listening to</h2>
            <div class="flex font-[Overpass] flex-row justify-between me-6">
              <a
                href={useMusic()?.get()?.url}
                class="flex flex-row ms-6 items-center gap-4 md:hover:scale-90 transition-all"
              >
                <img
                  src={useMusic()?.get()?.image}
                  alt={useMusic()?.get()?.title}
                  class="size-12 rounded-md transition-all"
                />
                <div class="flex flex-col">
                  <h3 class="text-white text-xl leading-7">
                    {useMusic()?.get()?.title}
                  </h3>
                  <p class="text-md leading-3">{useMusic()?.get()?.artist}</p>
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
                  alt={useMusic()?.get()?.title}
                  style="animation: rotate-animation 20s infinite linear;"
                ></img>
                <img
                  class="transition-all size-6 absolute top-[50%] left-[50%] translate-[-51%]"
                  src="https://tarakoshka.tech/static/icons/music.svg"
                  alt={useMusic()?.get()?.title}
                ></img>
              </a>
            </div>
          </div>
        )}
      </MusicProvider>
      <div class="flex flex-col w-full gap-4 mt-6">
        <h2 class="ms-6 text-white text-4xl">Buttons</h2>
        <div class="flex flex-row flex-wrap gap-2 mb-2 justify-center">
          <Badge
            link="https://tarakoshka.tech/"
            src="https://tarakoshka.tech/static/88x31.gif"
          ></Badge>
          <Badge
            link="https://hse.ru/"
            src="https://tarakoshka.tech/static/buttons/hse.gif"
          ></Badge>
          <Badge
            link="https://store.steampowered.com/app/1150690/OMORI/"
            src="https://tarakoshka.tech/static/buttons/omori.gif"
          ></Badge>
          <Badge
            link="https://store.steampowered.com/app/460950/Katana_ZERO/"
            src="https://tarakoshka.tech/static/buttons/katana.gif"
          ></Badge>
        </div>
        <div class="flex flex-row flex-wrap gap-2 justify-center">
          <Badge
            link="https://ecma-international.org/publications-and-standards/standards/ecma-262/"
            src="https://tarakoshka.tech/static/buttons/js.png"
          ></Badge>
          <Badge
            link="https://cadence.moe/blog/2024-10-05-created-by-a-human-badges"
            src="https://tarakoshka.tech/static/buttons/created-by-human.png"
          ></Badge>
          <Badge src="https://tarakoshka.tech/static/buttons/made-with-pride.gif"></Badge>
          <Badge
            link="https://www.firefox.com/"
            src="https://tarakoshka.tech/static/buttons/get-firefox.gif"
          ></Badge>
          <Badge
            link="https://fedoraproject.org/"
            src="https://tarakoshka.tech/static/buttons/fedora.gif"
          ></Badge>
          <Badge
            link="https://ublockorigin.com/"
            src="https://tarakoshka.tech/static/buttons/ublock.png"
          ></Badge>
          <Badge
            link="https://www.gnu.org/"
            src="https://tarakoshka.tech/static/buttons/made-on-linux.png"
          ></Badge>
          <Badge
            link="https://otomir23.me/"
            src="https://otomir23.me/88x31.png"
          ></Badge>
          <Badge
            link="https://entitybtw.ru/"
            src="https://entitybtw.ru/images/entitybtw.gif"
          ></Badge>
          <Badge
            link="https://milkcool.ru/"
            src="https://milkcool.ru/buttons/mybutton.gif"
          ></Badge>
          <Badge
            link="https://asyasocute.online/"
            src="https://asyasocute.online/badges/cowl.png"
          ></Badge>
          {/*<Badge
            link="https://timofei302.su"
            src="https://timofei302.su/res/88x31.png"
          ></Badge>
          <Badge
            link="https://myslivets.com/"
            src="https://timofei302.su/img/banners/myslivets-banner.png"
          ></Badge>*/}
          <Badge
            link="https://edwardcode.net/"
            src="https://edwardcode.net/www/button.gif"
          ></Badge>
          <Badge
            link="https://c1oudy.otlegacy.com/"
            src="https://c1oudy.otlegacy.com//_astro/c1oudy.DQjxxEhY.png"
          ></Badge>
          <Badge
            link="https://gooslime.neocities.org/"
            src="http://gooslime.neocities.org/gooslime_branding/gooslime.gif"
          ></Badge>
          <Badge
            link="https://veselcraft.ru/"
            src="https://veselcraft.ru/images/vc.gif"
          ></Badge>
          <Badge
            link="https://jsopn.com/?glunging=true"
            src="https://jsopn.com/images/88x31/button.gif"
          ></Badge>
          <Badge
            link="https://senko.dev/"
            src="https://senko.dev/banners/senko.gif"
          ></Badge>
          <Badge
            link="https://tei.su/"
            src="https://tei.su/88x31/teidesu.png"
          ></Badge>
          <Badge
            link="https://about.akarpov.ru/"
            src="https://otomir23.me/_astro/sanspie.BIFJ1uLz.gif"
          ></Badge>
        </div>
      </div>
    </section>
  );
}
