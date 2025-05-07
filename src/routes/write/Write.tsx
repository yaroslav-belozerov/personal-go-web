import {
  AllMessagesProvider,
  useMessages,
} from "../../lib/api/allMessagesHook";
import { BackArrow } from "./components/Icons";
import { Motion, Presence } from "solid-motionone";
import { useContext } from "solid-js";
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
        <nav class="flex flex-row gap-4 mx-6 mt-10 items-center sm:gap-8">
          <a href="/" class="sm:hover:scale-90 transition-all sm:ms-8">
            <BackArrow />
          </a>
          <h1 class="text-2xl sm:text-5xl">Write a message</h1>
        </nav>
        <AllMessagesProvider baseURL="https://tarakoshka.tech/api/messages">
          <MessageForm />
          <ShowWhenInView index={0}>
            <div
              class="flex sm:flex-row sm:flex-wrap flex-col max-sm:h-full gap-4 mx-6 overflow-scroll relative -mt-12 pt-12 pb-6"
              style="scrollbar-color: #F5E9C9 transparent; scrollbar-width: none;"
            >
              {useMessages().items() &&
                useMessages()
                  ?.items()
                  ?.map((message) => (
                    <div class="flex group flex-col justify-center rounded-md p-3 sm:p-6 bg-[#2B251F] transition-all">
                      <p class="text-white text-xl sm:text-3xl">
                        {message.text}
                      </p>
                      <i class="sm:text-2xl">
                        <span class="text-white sm:group-hover:decoration-white decoration-transparent sm:underline transition-all">
                          {message.creator}
                        </span>{" "}
                        on
                        {" " +
                          new Date(message.time ?? "").toLocaleString("en-US", {
                            timeStyle: "short",
                            dateStyle: "long",
                            hour12: false,
                          })}
                      </i>
                    </div>
                  ))}
            </div>
          </ShowWhenInView>
        </AllMessagesProvider>
      </main>
    </Motion.main>
  );
}
