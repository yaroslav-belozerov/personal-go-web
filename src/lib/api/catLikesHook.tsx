import { JSX } from "solid-js/jsx-runtime";
import { createRESTApiHook } from "../createRESTApiHook";

export type CatLikes = {
  likes: number;
};

const { Provider, useRESTApi } = createRESTApiHook<CatLikes>();
export { Provider as CatLikesProvider, useRESTApi as useCatLikes };
