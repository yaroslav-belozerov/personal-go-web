import { createSignal, onMount, Show } from "solid-js";
import { inView } from "motion";
import { JSX } from "solid-js/jsx-runtime";
import { Motion } from "solid-motionone";

interface ShowWhenInViewProps {
  children: JSX.Element;
  index: number;
}

export default function ShowWhenInView(props: ShowWhenInViewProps) {
  const [isInView, setIsInView] = createSignal(false);
  let elRef: HTMLDivElement;

  onMount(() => {
    inView(elRef, (el, entry) => {
      setIsInView(entry.isIntersecting);
    });
  });

  return (
    <div ref={elRef}>
      <Show when={isInView()}>
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            easing: "ease-in-out",
            delay: props.index * 0.5,
          }}
        >
          <div
            class={`transition-opacity duration-300 ${isInView() ? "opacity-100" : "opacity-0"}`}
          >
            {props.children}
          </div>
        </Motion.div>
      </Show>
    </div>
  );
}
