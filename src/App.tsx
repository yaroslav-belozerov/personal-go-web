import { Router, Route, useLocation } from "@solidjs/router";
import { Transition } from "solid-transition-group";
import { Motion, Presence } from "solid-motionone";
import Main from "./routes/main/Main";
import Write from "./routes/write/Write";
import Lesya from "./routes/lesya/Lesya";

export default function App() {
  return (
    <Presence>
      <Router>
        <Route path="/write-to-me" component={Write} />
        <Route path="/lesya" component={Lesya} />
        <Route path="/" component={Main} />
      </Router>
    </Presence>
  );
}
