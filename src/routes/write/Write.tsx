import {
  AllMessagesProvider,
  useMessages,
} from "../../lib/api/allMessagesHook";
import { BackArrow } from "./components/Icons";
import { Motion, Presence } from "solid-motionone";
import MessageForm from "./components/MessageForm";
import ShowWhenInView from "../lesya/components/ShowWhenInView";

export default function Write(props: { onClose: () => void }) {
  return (
    <Motion.aside
      class="fixed inset-0 z-100"
      initial={{ opacity: 0, x: 600 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 600 }}
      transition={{ duration: 0.4 }}
    >
      <aside class="bg-black text-white min-h-dvh h-dvh overflow-y-scroll relative flex flex-col">
        <nav class="flex flex-row mx-6 mt-10 items-center lg:gap-2">
          <button
            onClick={props.onClose}
            class="lg:hover:scale-90 transition-all p-4 rounded-full lg:hover:bg-zinc-900 lg:cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              class="size-8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                transform="rotate(90 12 12)"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <h1 class="text-4xl lg:text-5xl">Leave a message</h1>
        </nav>
        <AllMessagesProvider baseURL="https://tarakoshka.tech/api/messages">
          <MessageForm />
          <ShowWhenInView index={1}>
            <div
              class="flex lg:flex-row lg:flex-wrap flex-col max-lg:h-full gap-4 mx-6 overflow-scroll relative pb-6"
              style="scrollbar-color: #F5E9C9 transparent; scrollbar-width: none;"
            >
              {useMessages().get() &&
                useMessages()
                  ?.get()
                  ?.map((message) => (
                    <div class="font-[Overpass] text-black flex flex-col border justify-center bg-white px-4 py-3 md:py-6 md:px-8 bg-[#1A1611] transition-all">
                      <p class="text-2xl">{message.text}</p>
                      <p class="text-xl italic">
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
      </aside>
    </Motion.aside>
  );
}
