import { Download } from "./Icons";

export default function CVStar() {
  return (
    <a
      class="relative z-2 mt-8 sm:hover:scale-90 transition-all"
      href="https://tarakoshka.tech/static/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="w-32 sm:w-48"
        src="https://tarakoshka.tech/static/icons/cv_star.svg"
        style="
        animation: rotate-animation-back 20s infinite linear;
        background-size: cover;
        object-fit: fill;"
      ></img>
      <div class="text-[#1a1611] absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%] flex flex-col justify-center items-center">
        <Download />
        <p class="font-[Inter] font-bold text-2xl">CV</p>
      </div>
    </a>
  );
}
