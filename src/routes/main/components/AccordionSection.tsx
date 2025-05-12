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
  onClick: () => void;
}

export default function AccordionSection(props: AccordionSectionProps) {
  return (
    <button onClick={props.onClick} class="">
      <h2>{props.title}</h2>
    </button>
  );
}
