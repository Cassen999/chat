import { createContext, useEffect, useMemo, useState } from "react";

export interface iGlobalContext {
  id: string | undefined;
  setId: (id: string) => void;
}

export const GlobalContext = createContext<iGlobalContext | null>(null);

const GlobalContextProvider = (props: any) => {
  const { children } = props;
  const [id, setId] = useState<string>('');


  const contextValues: iGlobalContext = useMemo(
    () => ({
      id,
      setId,
    }), [
      id,
      setId,
  ]);

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
