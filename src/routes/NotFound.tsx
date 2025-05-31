export default function NotFound() {
  return (
    <main class="text-4xl w-[100vw] h-[100vh] flex items-center flex-col justify-center">
      <video
        src="/static/get-back-to-work.mp4"
        muted
        autoplay
        loop
        class="mb-4"
      ></video>
      <h1 class="text-8xl">404</h1>
      <p class="text-center">
        This page does not exist
        <br />
        on{" "}
        <a href="/" class="underline text-white">
          tarakoshka.tech
        </a>
      </p>
    </main>
  );
}
