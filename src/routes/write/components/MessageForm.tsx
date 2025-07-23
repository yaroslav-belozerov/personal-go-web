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
      class="flex font-[Overpass] py-4 bg-[#2B251F] mt-8 px-8 mb-8 md:flex-wrap md:flex-row gap-4 flex-col z-2 py-8"
    >
      <textarea
        value={text()}
        required
        maxlength="256"
        id="message"
        onChange={(e) => setText(e.target.value)}
        class="flex md:grow-1 md:text-xl justify-center rounded-xl p-3 bg-[#1A1611] transition-all outline-none"
        placeholder="Your message"
      />
      <input
        value={creator()}
        id="creator"
        maxlength="64"
        type="text"
        onChange={(e) => setCreator(e.target.value)}
        class="flex md:text-xl justify-center rounded-xl p-3 bg-[#1A1611] transition-all outline-none"
        placeholder="You (may be blank)"
      />
      {sent() ? (
        <div class="flex justify-center rounded-xl p-3 bg-[#2B251F] transition-all">
          <i class="px-2 py-1 text-lg">Thank you!</i>
        </div>
      ) : (
        <button
          type="submit"
          class="flex cursor-pointer md:px-6 md:pe-8 md:hover:scale-95 transition-all justify-center rounded-xl p-3 bg-[#1A1611] transition-all"
          onClick={sendMessage}
        >
          <div class="flex md:gap-4 flex-row items-center text-white">
            <p class="px-2 md:text-2xl py-1 text-lg">Send</p>
            <SendIcon />
          </div>
        </button>
      )}
    </form>
  );
};

export default MessageForm;
