import { A, useSearchParams } from "@solidjs/router";
import NotFound from "../../NotFound";
import JbTestingCup from "./JbTestingCup";

export const availableProjects = ["jb-testing-cup"];

export default function PreviewHolder() {
  const [q, setQ] = useSearchParams();
  console.log(q);
  if (!availableProjects.includes(q.name)) {
    return <NotFound />;
  }
  const getComponent = () => {
    switch (q.name) {
      case "jb-testing-cup":
        return <JbTestingCup />;
      default:
        return <NotFound />;
    }
  };
  return (
    <main>
      {getComponent()}
      <A
        href="/"
        class="text-center text-xl w-full flex flex-row justify-center py-2 font-[Instrument]"
      >
        &lt; back to the main page
      </A>
    </main>
  );
}
