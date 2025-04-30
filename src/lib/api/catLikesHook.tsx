import { JSX } from "solid-js/jsx-runtime";
import { createRESTApiHook } from "../createRESTApiHook";

export type Likes = {
  likes: number;
};

const { Provider, useRESTApi } = createRESTApiHook<Likes>();
export { Provider as CatLikesProvider, useRESTApi as useCatLikes };
