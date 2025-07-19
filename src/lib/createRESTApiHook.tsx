import {
  createContext,
  createResource,
  Resource,
  JSXElement,
  useContext,
} from "solid-js";

interface ProviderProps {
  baseURL: string;
  children: JSXElement;
}

export function createRESTApiHook<T>() {
  interface ContextValue {
    get: Resource<T>;
    add: (item: T) => Promise<boolean>;
    refetch: () => void;
  }

  const context = createContext<ContextValue>();

  function Provider(props: ProviderProps) {
    const [items, { mutate, refetch }] = createResource<T>(fetchItems);

    async function fetchItems() {
      try {
        const res = await fetch(props.baseURL);
        return res.json();
      } catch (err) {
        console.error(err);
        return undefined;
      }
    }

    async function add(item: T) {
      try {
        const res = await fetch(props.baseURL, {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const addedItem = await res.json();
        mutate((prev) => addedItem);
        return true;
      } catch (err) {
        return false;
      }
    }

    const value: ContextValue = {
      get: items,
      add,
      refetch,
    };

    return <context.Provider value={value}>{props.children}</context.Provider>;
  }

  function useRESTApi() {
    const ctx = useContext(context);

    if (!ctx) {
      throw new Error("useRESTApi must be used within a RestAPIProvider");
    }

    return ctx;
  }

  return {
    Provider,
    useRESTApi,
  };
}
