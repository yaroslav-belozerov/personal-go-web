"use client";

import type { JSX } from "solid-js";
import { A } from "@solidjs/router";
import { ArrowDown, ExternalLink } from "./Icons";

interface Pair {
  icon: JSX.Element;
  href: string;
}

interface AccordionSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  actionButtons?: Pair[];
  isExpanded: boolean;
  onToggle: () => void;
  children: JSX.Element;
}

export default function AccordionSection(props: AccordionSectionProps) {
  let contentRef: HTMLDivElement | undefined;

  const contentStyle = () => ({
    transform: props.isExpanded ? "scaleY(1)" : "scaleY(0)",
    "transform-origin": "top",
    position: "absolute",
    opacity: props.isExpanded ? 1 : 0,
    transition: "transform 300ms ease-in-out, opacity 200ms ease-in-out",
    overflow: "hidden",
  });

  return (
    <div
      class="mb-1"
      style={`flex-grow: ${props.isExpanded ? "1" : "0"}; transition: flex-grow 0.3s ease-in-out;`}
    >
      <div class="border-t border-[#f5e9c9]/30 mx-6">
        <div class="flex items-center justify-between pt-4 pb-2">
          <button
            onClick={() => props.onToggle()}
            class="cursor-pointer flex items-center justify-between w-full text-left"
            aria-expanded={props.isExpanded}
            aria-controls={`content-${props.id}`}
          >
            <div class="flex flex-row gap-2">
              <h2 class="text-4xl sm:text-4xl font-light text-[#f5e9c9] sm:text-[#ffffff]">
                {props.title}
              </h2>
              {props.subtitle && (
                <p class="ms-6 hidden sm:block text-xl sm:text-2xl italic text-[#f5e9c9] mb-2">
                  {props.subtitle}
                </p>
              )}
            </div>
            <div class="flex items-center space-x-4 sm:space-x-8 pb-2">
              {props.actionButtons &&
                props.actionButtons.map((button, index) => (
                  <A
                    class={`text-[#f5e9c9] ${props.isExpanded ? "opacity-100" : "opacity-0"} transition-all sm:hover:scale-90`}
                    href={button.href}
                    rel="noopener noreferrer"
                    style={{
                      "pointer-events": !props.isExpanded ? "none" : "auto",
                    }}
                  >
                    {button.icon}
                  </A>
                ))}
              <div
                class={`sm:hover:scale-90 text-[#f5e9c9] ${!props.isExpanded ? "rotate-180" : ""} transition-all`}
              >
                <ArrowDown />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div
        id={`content-${props.id}`}
        class="w-full"
        ref={contentRef}
        // @ts-ignore
        style={contentStyle()}
      >
        {props.children}
      </div>
    </div>
  );
}
