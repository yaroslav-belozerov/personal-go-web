import { createSignal } from "solid-js";
import { blimp } from "./Blimps";

export default function BlimpTester() {
  const [curr, setCurr] = createSignal("");
  const [render, setRender] = createSignal("");

  return (
    <div class="flex flex-col gap-4 items-center p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setRender(curr());
        }}
        class="w-full"
      >
        <textarea
          value={curr()}
          onChange={(e) => setCurr(e.target.value)}
          placeholder="Blimp content"
          class="text-2xl w-full p-4 outline-white outline-1 -outline-offset-2 rounded-xl"
        />
        <button
          class="w-full p-2 text-xl bg-zinc-900 mt-4 rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
      {blimp(0, render(), 999)}
    </div>
  );
}
