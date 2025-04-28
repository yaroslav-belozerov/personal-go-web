import { createRESTApiHook } from "../createRESTApiHook";

export type Message = {
  id: number;
  text: string;
  creator: string;
  time: string;
};

const { Provider, useRESTApi } = createRESTApiHook<Message>();
export { Provider as MessageProvider, useRESTApi as useLastMessage };
