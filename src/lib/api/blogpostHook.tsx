import { createRESTApiHook } from "../createRESTApiHook";

export type Blogpost = {
  slug: string;
  title: string;
  description: string;
  content: string;
  created: Date;
};

const { Provider, useRESTApi } = createRESTApiHook<Blogpost>();
export { Provider as BlogpostProvider, useRESTApi as useBlog };
