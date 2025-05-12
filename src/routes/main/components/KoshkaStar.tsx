import { A } from "@solidjs/router";
import { Cat } from "./Icons";

export default function KoshkaStar() {
  return (
    <a href="/lesya" class="relative z-2 mb-8 sm:hover:scale-90 transition-all">
      <img
        src="https://tarakoshka.tech/static/icons/lesya_star.svg"
        class="w-32 sm:w-48"
        style="
        animation: rotate-animation 20s infinite linear;
        background-size: cover;
        object-fit: fill;"
      ></img>
      <div class="text-[#1a1611] absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
        <Cat />
        <p class="font-[Inter] font-bold text-2xl">Cat</p>
      </div>
    </a>
  );
}
