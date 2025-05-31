import { Router, Route, useLocation } from "@solidjs/router";
import { Transition } from "solid-transition-group";
import { Motion, Presence } from "solid-motionone";
import Main from "./routes/main/Main";
import Write from "./routes/write/Write";
import Lesya from "./routes/lesya/Lesya";
import PDFViewer from "./routes/main/components/PDFViewer";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Presence>
      <Router>
        <Route path="/write-to-me" component={Write} />
        <Route path="/lesya" component={Lesya} />
        <Route path="/" component={Main} />
        <Route path="*404" component={NotFound} />
      </Router>
    </Presence>
  );
}
