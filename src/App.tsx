import { Router, Route, useLocation } from "@solidjs/router";
import { Presence } from "solid-motionone";
import { lazy } from "solid-js";

const Main = lazy(() => import("./routes/main/Main"));
const Banking = lazy(() => import("./routes/main/pages/Banking"));
const Lesya = lazy(() => import("./routes/lesya/Lesya"));
const Webring = lazy(() => import("./routes/webring/Webring"));
const PreviewHolder = lazy(
  () => import("./routes/main/project_previews/PreviewHolder"),
);
const Blog = lazy(() => import("./routes/blog/Blog"));
const Blogpost = lazy(() => import("./routes/blog/Blogpost"));
const BusinessGame = lazy(() => import("./routes/business-game/BusinessGame"));
const BusinessStats = lazy(
  () => import("./routes/business-game/BusinessStats"),
);

import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Presence>
      <Router>
        <Route path="/webring" component={Webring} />
        <Route path="/support" component={Banking} />
        <Route path="/business-game" component={BusinessGame} />
        <Route path="/business-game/stats" component={BusinessStats} />
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
