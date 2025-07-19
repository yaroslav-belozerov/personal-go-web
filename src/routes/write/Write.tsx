import {
  AllMessagesProvider,
  useMessages,
} from "../../lib/api/allMessagesHook";
import { BackArrow } from "./components/Icons";
import { Motion, Presence } from "solid-motionone";
import MessageForm from "./components/MessageForm";
import ShowWhenInView from "../lesya/components/ShowWhenInView";

export default function Write() {
  return (
    <Motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main class="bg-[#1a1611] min-h-dvh relative flex flex-col overflow-y-clip">
        <nav class="flex flex-row gap-4 mx-6 mt-10 items-center md:gap-8">
          <a href="/" class="md:hover:scale-90 transition-all md:ms-8">
            <BackArrow />
          </a>
          <h1 class="text-2xl md:text-5xl">Leave a message</h1>
        </nav>
        <AllMessagesProvider baseURL="https://tarakoshka.tech/api/messages">
          <MessageForm />
          <ShowWhenInView index={1}>
            <div
              class="flex md:flex-row md:flex-wrap flex-col max-md:h-full gap-4 mx-6 overflow-scroll relative -mt-12 pt-12 pb-6"
              style="scrollbar-color: #F5E9C9 transparent; scrollbar-width: none;"
            >
              {useMessages().get() &&
                useMessages()
                  ?.get()
                  ?.map((message) => (
                    <div class="font-[Overpass] flex flex-col border justify-center rounded-xl p-6 bg-[#1A1611] transition-all">
                      <p class="text-white text-2xl">{message.text}</p>
                      <p class="text-xl">
                        <span class="text-white">{message.creator}</span> on
                        {" " +
                          new Date(message.time ?? "").toLocaleString("en-US", {
                            dateStyle: "long",
                            hour12: false,
                          })}
                      </p>
                    </div>
                  ))}
            </div>
          </ShowWhenInView>
        </AllMessagesProvider>
      </main>
    </Motion.main>
  );
}
