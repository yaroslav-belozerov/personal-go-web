/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, useLocation } from "@solidjs/router";
import { Transition } from "solid-transition-group";
import { createEffect } from "solid-js";

import App from "./App";

const wrapper = document.getElementById("root");

if (!wrapper) {
  throw new Error("Wrapper div not found");
}

render(() => <App />, wrapper);
