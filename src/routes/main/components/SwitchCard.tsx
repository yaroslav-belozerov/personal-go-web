import { createSignal, JSXElement, Show } from "solid-js";
import { Motion, Presence } from "solid-motionone";
import { ArrowDown, Close, Download } from "./Icons";

type SwitchCardProps = {
  title: string;
  children: JSXElement[];
};

export function SwitchCard(props: SwitchCardProps) {
  let [isExpanded, setExpanded] = createSignal(false);

  return (
    <button
      onClick={() => setExpanded(!isExpanded())}
      class={`flex w-full max-lg:border-white max-lg:text-white transition-all flex-col bg-zinc-900 max-lg:bg-black cursor-pointer border-2 z-1 border-transparent lg:hover:border-white rounded-4xl py-2`}
    >
      <div class="flex flex-row px-4 justify-center relative">
        <h4 class="text-lg pt-1">{props.title}</h4>
        <svg
          class={`size-6 z-2 text-lg text-white absolute right-4 top-1/2 -translate-y-1/2 transition-all cursor-pointer rotate-0 ${isExpanded() ? "rotate-180 hover:scale-80 " : ""} transition-all`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
      <Presence exitBeforeEnter={true}>
        <Show when={isExpanded()}>
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div class="px-4 flex flex-col mb-1">{props.children}</div>
          </Motion.div>
        </Show>
      </Presence>
    </button>
  );
}
