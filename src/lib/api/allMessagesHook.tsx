import { createRESTApiHook } from "../createRESTApiHook";

export type Message = {
  id: number;
  text: string;
  creator: string;
  time: Date;
};

const { Provider, useRESTApi } = createRESTApiHook<Message[]>();
export { Provider as AllMessagesProvider, useRESTApi as useMessages };
