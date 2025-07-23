import { Router, Route, useLocation } from "@solidjs/router";
import { Transition } from "solid-transition-group";
import { Motion, Presence } from "solid-motionone";
import Main from "./routes/main/Main";
import Write from "./routes/write/Write";
import Lesya from "./routes/lesya/Lesya";
import NotFound from "./routes/NotFound";
import Webring from "./routes/webring/Webring";
import Blog from "./routes/blog/Blog";
import Blogpost from "./routes/blog/Blogpost";

export default function App() {
  return (
    <Presence>
      <Router>
        <Route path="/write-to-me" component={Write} />
        <Route path="/webring" component={Webring} />
        <Route path="/lesya" component={Lesya} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={Blogpost} />
        <Route path="/" component={Main} />
        <Route path="*404" component={NotFound} />
      </Router>
    </Presence>
  );
}
