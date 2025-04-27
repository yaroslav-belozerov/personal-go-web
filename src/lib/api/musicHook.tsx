import { createRESTApiHook } from "../createRESTApiHook";

export type Music = {
  title: string;
  artist: string;
  image: string;
  url: string;
};

const { Provider, useRESTApi } = createRESTApiHook<Music>();
export { Provider as MusicProvider, useRESTApi as useMusic };
