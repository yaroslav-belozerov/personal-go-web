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
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main class="bg-black text-white min-h-dvh relative flex flex-col overflow-y-clip">
        <nav class="flex flex-row gap-4 mx-6 mt-10 items-center md:gap-8">
          <a href="/" class="md:hover:scale-90 transition-all md:ms-8">
            <BackArrow />
          </a>
          <h1 class="text-4xl md:text-5xl">Leave a message</h1>
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
                    <div class="font-[Overpass] italic text-black flex flex-col border justify-center bg-white py-6 px-8 bg-[#1A1611] transition-all">
                      <p class="text-2xl">{message.text}</p>
                      <p class="text-xl">
                        <span>{message.creator}</span> on
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
