import { JSX } from "solid-js/jsx-runtime";
import { createRESTApiHook } from "../createRESTApiHook";

const { Provider, useRESTApi } = createRESTApiHook<Number>();
export { Provider as CatLikesProvider, useRESTApi as useCatLikes };
