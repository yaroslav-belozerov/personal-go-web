import { createRESTApiHook } from "../createRESTApiHook";

export type WebringMember = {
  id: number;
  slug: string;
  name: string;
  url: string;
  favicon: string;
};

export type Webring = {
  prev: WebringMember;
  curr: WebringMember;
  next: WebringMember;
};

const { Provider, useRESTApi } = createRESTApiHook<Webring>();
export { Provider as WebringProvider, useRESTApi as useWebring };
