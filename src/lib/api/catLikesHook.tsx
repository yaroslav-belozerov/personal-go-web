import { JSX } from "solid-js/jsx-runtime";
import { createRESTApiHook } from "../createRESTApiHook";

const { Provider, useRESTApi } = createRESTApiHook<String>();
export { Provider as CatLikesProvider, useRESTApi as useCatLikes };
