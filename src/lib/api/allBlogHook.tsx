import { createRESTApiHook } from "../createRESTApiHook";

export type Blogpost = {
  slug: string;
  title: string;
  description: string;
  created: Date;
};

const { Provider, useRESTApi } = createRESTApiHook<Blogpost[]>();
export { Provider as BlogProvider, useRESTApi as useBlog };
