import { Component, createSignal } from "solid-js";
import { Message, useMessages } from "../../../lib/api/allMessagesHook";
import { SendIcon } from "./Icons";

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
    const success = await add(msg);
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
      class="flex py-4 bg-[#2B251F] mt-8 px-8 mb-8 sm:flex-wrap sm:flex-row gap-4 flex-col z-2 py-8"
    >
      <textarea
        value={text()}
        required
        maxlength="256"
        id="message"
        onChange={(e) => setText(e.target.value)}
        class="flex sm:grow-1 sm:text-xl justify-center rounded-md p-3 bg-[#1A1611] transition-all outline-none"
        placeholder="Your message"
      />
      <input
        value={creator()}
        id="creator"
        maxlength="64"
        type="text"
        onChange={(e) => setCreator(e.target.value)}
        class="flex sm:text-xl justify-center rounded-md p-3 bg-[#1A1611] transition-all outline-none"
        placeholder="You (may be blank)"
      />
      {sent() ? (
        <div class="flex justify-center rounded-md p-3 bg-[#2B251F] transition-all">
          <i class="px-2 py-1 text-lg">Thank you!</i>
        </div>
      ) : (
        <button
          type="submit"
          class="flex cursor-pointer sm:px-6 sm:pe-8 sm:hover:scale-95 transition-all justify-center rounded-md p-3 bg-[#1A1611] transition-all"
          onClick={sendMessage}
        >
          <div class="flex sm:gap-4 flex-row items-center text-white">
            <b class="px-2 sm:text-2xl py-1 text-lg">Send</b>
            <SendIcon />
          </div>
        </button>
      )}
    </form>
  );
};

export default MessageForm;
