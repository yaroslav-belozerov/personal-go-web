import { createMemo, createSignal, onMount } from "solid-js";

export default function BusinessStats() {
  const [regs, setRegs] = createSignal<{ email: string; sendMail: boolean }[]>(
    [],
  );
  const [comp, setComp] = createSignal<{ complaint: string }[]>([]);
  const [allUsersOpen, setAllUsersOpen] = createSignal(false);

  const interest = createMemo(() => {
    const total = comp().length;
    const part = comp().filter((it) => it.complaint === "no interest").length;
    return `${part}x = ${Math.round((part / total) * 100)}%`;
  }, [comp]);

  const timing = createMemo(() => {
    const total = comp().length;
    const part = comp().filter((it) => it.complaint === "bad time").length;
    return `${part}x = ${Math.round((part / total) * 100)}%`;
  }, [comp]);

  const rules = createMemo(() => {
    const total = comp().length;
    const part = comp().filter((it) => it.complaint === "bad rules").length;
    return `${part}x = ${Math.round((part / total) * 100)}%`;
  }, [comp]);

  onMount(() => {
    fetch("https://tarakoshka.tech/bgapi/users")
      .then((it) => it.json())
      .then(setRegs);
    fetch("https://tarakoshka.tech/bgapi/complaints")
      .then((it) => it.json())
      .then(setComp);
  });

  return (
    <div class="flex flex-col overflow-hidden w-full bg-[#1D1E22] min-h-dvh font-[Figtree] text-white text-xl p-4">
      <div class="flex flex-col mb-4">
        <div class="text-3xl flex flex-row justify-between items-center">
          {regs().length} users registered
          <button
            class={`text-xl p-2 rounded-full bg-zinc-800 aspect-square size-12 ${allUsersOpen() && "rotate-180"}`}
            onClick={() => setAllUsersOpen(!allUsersOpen())}
          >
            V
          </button>
        </div>
        {allUsersOpen() &&
          regs().map((it) => (
            <div class="flex flex-row gap-2 items-center">
              {it.sendMail && (
                <svg
                  class="size-4 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                </svg>
              )}
              {it.email}
            </div>
          ))}
      </div>
      <span class="text-3xl mb-2">{comp().length} Complaints</span>
      <div class="py-2 mb-2 px-4 bg-zinc-800 rounded-lg">
        <span class="text-2xl">{interest()}</span>
        <br />
        not interested
      </div>
      <div class="py-2 mb-2 px-4 bg-zinc-800 rounded-lg">
        <span class="text-2xl">{timing()}</span>
        <br />
        think time is bad
      </div>
      <div class="py-2 mb-2 px-4 bg-zinc-800 rounded-lg">
        <span class="text-2xl">{rules()}</span>
        <br />
        think rules are too difficult
      </div>
    </div>
  );
}
