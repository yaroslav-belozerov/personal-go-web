import { createMemo, createSignal, onMount } from "solid-js";

export default function BusinessStats() {
  const [regs, setRegs] = createSignal<{ email: string; sendMail: boolean }[]>(
    [],
  );
  const [comp, setComp] = createSignal<{ complaint: string }[]>([]);
  const [allUsersOpen, setAllUsersOpen] = createSignal(false);

  const calc = (key: string) => {
    const total = comp().length;
    const part = comp().filter((it) => it.complaint === key).length;
    return [part, Math.round((part / total) * 100)];
  };

  const interest = createMemo(() => calc("no interest"), [comp]);
  const timing = createMemo(() => calc("bad time"), [comp]);
  const rules = createMemo(() => calc("bad rules"), [comp]);

  onMount(() => {
    fetch("https://tarakoshka.tech/bgapi/users")
      .then((it) => it.json())
      .then(setRegs);
    fetch("https://tarakoshka.tech/bgapi/complaints")
      .then((it) => it.json())
      .then(setComp);
  });

  return (
    <div class="flex flex-col overflow-hidden w-full bg-[#1D1E22] min-h-dvh font-[Figtree] text-white text-xl p-4 gap-2">
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
      <div class="py-2 mb-2 pt-3 px-4 bg-zinc-800 rounded-lg relative flex flex-col">
        <div class="z-2">
          <span class="text-2xl ">
            {interest()[0]} = {interest()[1]}%
          </span>
          <br />
          not interested
        </div>
        <div
          class={`absolute bg-zinc-600 top-0 h-2 left-0 rounded-lg`}
          style={`right: ${100 - interest()[1]}%;`}
        ></div>
      </div>
      <div class="py-2 mb-2 pt-3 px-4 bg-zinc-800 rounded-lg relative">
        <span class="text-2xl">
          {timing()[0]} = {timing()[1]}%
        </span>
        <br />
        think time is bad
        <div
          class={`absolute bg-zinc-600 top-0 h-2 left-0 rounded-lg`}
          style={`right: ${100 - timing()[1]}%;`}
        ></div>
      </div>
      <div class="py-2 mb-2 pt-3 px-4 bg-zinc-800 rounded-lg relative">
        <span class="text-2xl">
          {rules()[0]} = {rules()[1]}%
        </span>
        <br />
        think rules are too difficult
        <div
          class={`absolute bg-zinc-600 top-0 h-2 left-0 rounded-lg`}
          style={`right: ${100 - rules()[1]}%;`}
        ></div>
      </div>
    </div>
  );
}
