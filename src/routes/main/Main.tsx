"use client";

import { createSignal, Show } from "solid-js";
import { Cat, Close, Download, Share } from "./components/Icons";
import AccordionSection from "./components/AccordionSection";
import ProjectCard from "./components/ProjectCard";
import SocialIcon from "./components/SocialIcon";
import SocialTag from "./components/SocialTag";
import { ProjectsProvider, useProjects } from "../../lib/api/projectsHook";
import { MessageProvider, useLastMessage } from "../../lib/api/messagesHook";
import { ArrowDown, ExternalLink, SendMessage } from "./components/Icons";
import { Motion, Presence } from "solid-motionone";
import { A } from "@solidjs/router";
import PDFViewer from "./components/PDFViewer";
import Landing from "./pages/Landing";
import Current from "./pages/Current";
import Touch from "./pages/Touch";
import Meta from "./pages/Meta";
import Done from "./pages/Done";

export default function App() {
  const [expanded, setExpanded] = createSignal<string>("");

  return (
    <Motion.main
      initial={false}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main class="page bg-[#1a1611] text-[#f5e9c9] sm:pt-0 flex flex-col relative overflow-x-clip">
        <Landing></Landing>
        <Touch></Touch>
        <Current></Current>
        <Done></Done>
        <Meta></Meta>
      </main>
    </Motion.main>
  );
}
