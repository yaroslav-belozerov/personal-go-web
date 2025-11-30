import { Component, createSignal } from "solid-js";
import { SendIcon } from "./Icons";
import { useMessages } from "../../../lib/api/allMessagesHook";

const MessageForm: Component = () => {
  const { add } = useMessages();

  const [text, setText] = createSignal("");
  const [creator, setCreator] = createSignal("");
  const [sent, setSent] = createSignal(false);

  const sendMessage = async () => {
    const msg = {
      text: text().trim(),
      creator: creator().trim(),
    };
    // @ts-ignore
    const _ = await add(msg);
    setText("");
    setCreator("");
    setSent(true);
  };

  return (
    <form
      id="form"
      onsubmit={async (e) => {
        e.preventDefault();
      }}
      class="flex font-[Overpass] px-6 lg:flex-wrap lg:flex-row gap-4 flex-col z-2 py-4"
    >
      <textarea
        value={text()}
        required
        maxlength="256"
        id="message"
        onChange={(e) => setText(e.target.value)}
        class="flex lg:grow-1 lg:text-xl justify-center p-3 bg-zinc-900 transition-all outline-none"
        placeholder="Message"
      />
      <input
        value={creator()}
        id="creator"
        maxlength="64"
        type="text"
        onChange={(e) => setCreator(e.target.value)}
        class="flex lg:text-xl justify-center p-3 bg-zinc-900 transition-all outline-none"
        placeholder="Author (may be blank)"
      />
      {sent() ? (
        <div class="flex justify-center rounded-xl p-3 bg-zinc-900 transition-all">
          <i class="px-2 py-1 text-lg">Thank you!</i>
        </div>
      ) : (
        <button
          type="submit"
          class="flex cursor-pointer lg:px-6 group lg:pe-8 lg:hover:bg-white lg:hover:text-black transition-all justify-center p-3 bg-[#0C12C9] transition-all"
          onClick={sendMessage}
        >
          <div class="flex flex-row items-center">
            <p class="px-2 text-2xl pt-1">Send</p>
            <svg
              class="size-8 lg:group-hover:scale-125 transition-all lg:group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
          </div>
        </button>
      )}
    </form>
  );
};

export default MessageForm;
