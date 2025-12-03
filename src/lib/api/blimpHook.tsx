import { createRESTApiHook } from "../createRESTApiHook";

export type Blimp = {
  id: number;
  content: string;
  likes: number;
};

const { Provider: LatestBlimpProvider, useRESTApi: useLatestBlimp } =
  createRESTApiHook<Blimp>();
const { Provider: AllBlimpsProvider, useRESTApi: useAllBlimps } =
  createRESTApiHook<Blimp[]>();
export { LatestBlimpProvider, useLatestBlimp, AllBlimpsProvider, useAllBlimps };
