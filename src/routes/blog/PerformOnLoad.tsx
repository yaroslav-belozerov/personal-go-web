import { createEffect, createSignal, onMount, Show } from "solid-js";
import { inView } from "motion";
import { JSX } from "solid-js/jsx-runtime";
import { Motion } from "solid-motionone";

interface PerformOnLoadProps {
  children: JSX.Element;
  onLoad: () => void;
}

export default function PerformOnLoad(props: PerformOnLoadProps) {
  const [isInView, setIsInView] = createSignal(false);
  let elRef: HTMLDivElement;

  onMount(() => {
    inView(elRef, (el, entry) => {
      setIsInView(entry.isIntersecting);
    });
  });
  createEffect(() => {
    if (isInView()) {
      props.onLoad();
    }
  });

  return props.children;
}
