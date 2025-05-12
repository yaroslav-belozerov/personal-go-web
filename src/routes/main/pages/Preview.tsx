import { Show } from "solid-js";
import { Motion, Presence } from "solid-motionone";
import { ArrowDown, Close, Share } from "../components/Icons";
import PDFViewer from "../components/PDFViewer";

export default function Preview() {
  return (
    <Presence>
      <Show when={false}>
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            class="bg-black/75 fixed top-0 left-0 w-screen h-screen z-10 p-4"
            style="align-content: center;"
          >
            <div
              class="absolute z-[-10] top-0 left-0 w-screen h-screen"
              onClick={() => {}}
            ></div>
            <div class="rounded-xl overflow-hidden flex flex-col bg-[#1a1611]">
              <div class="flex flex-row">
                <button class="p-4 bg-[#2B251F]" onClick={() => {}}>
                  <Close></Close>
                </button>
                <div class="grow-1"></div>
                <a
                  class="p-4 bg-[#2B251F]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Share></Share>
                </a>
                <button class="p-4 bg-[#2B251F] text-3xl">
                  <div class=" rotate-90">
                    <ArrowDown></ArrowDown>
                  </div>
                </button>
                <button class="p-4 bg-[#2B251F] text-3xl">
                  <div class=" rotate-270">
                    <ArrowDown></ArrowDown>
                  </div>
                </button>
              </div>
              <PDFViewer url="" pageNum={() => 0}></PDFViewer>
            </div>
          </div>
        </Motion.div>
      </Show>
    </Presence>
  );
}
