import { createRESTApiHook } from "../createRESTApiHook";

export type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  preview: string;
  ongoing: boolean;
};

const { Provider, useRESTApi } = createRESTApiHook<Project[]>();
export { Provider as ProjectsProvider, useRESTApi as useProjects };
