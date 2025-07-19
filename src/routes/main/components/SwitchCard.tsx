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
      class={`flex relative flex-col py-3 text-lg font-[Overpass] justify-center rounded-xl bg-[#1A1611] max-sm:bg-[#2B251F] text-lg transition-all ${!isExpanded() ? "cursor-pointer hover:scale-95" : ""}`}
    >
      <svg
        class={`size-8 z-2 absolute top-4 right-4 text-xl text-white transition-all cursor-pointer rotate-0 ${isExpanded() ? "rotate-180 hover:scale-80 " : ""} transition-all`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
      <Presence exitBeforeEnter={true}>
        <Show when={isExpanded()}>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div class="px-3 flex flex-col">{props.children}</div>
          </Motion.div>
        </Show>
        <Show when={!isExpanded()}>
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <p class="px-4 pb-1 text-start font-[Instrument] text-3xl italic">
              {props.title}
            </p>
          </Motion.p>
        </Show>
      </Presence>
    </button>
  );
}
