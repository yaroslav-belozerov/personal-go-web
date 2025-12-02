import { Router, Route, useLocation } from "@solidjs/router";
import { Presence } from "solid-motionone";
import { lazy } from "solid-js";

const Main = lazy(() => import("./routes/main/Main"));
const Blimps = lazy(() => import("./routes/main/pages/Blimps"));
const BlimpTester = lazy(() => import("./routes/main/pages/BlimpTester"));
const Banking = lazy(() => import("./routes/main/pages/Banking"));
const Lesya = lazy(() => import("./routes/lesya/Lesya"));
const Webring = lazy(() => import("./routes/webring/Webring"));
const PreviewHolder = lazy(
  () => import("./routes/main/project_previews/PreviewHolder"),
);
const Blog = lazy(() => import("./routes/blog/Blog"));
const Blogpost = lazy(() => import("./routes/blog/Blogpost"));

import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Presence>
      <Router>
        <Route path="/webring" component={Webring} />
        <Route path="/blimps" component={Blimps} />
        <Route path="/blimps/test" component={BlimpTester} />
        <Route path="/support" component={Banking} />
        <Route path="/lesya" component={Lesya} />
        <Route path="/preview" component={PreviewHolder} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={Blogpost} />
        <Route path="/" component={Main} />
        <Route path="*404" component={NotFound} />
      </Router>
    </Presence>
  );
}
