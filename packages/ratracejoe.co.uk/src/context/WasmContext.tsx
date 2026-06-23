import React from "react";
import init from "@joe/rust-gaming-wasm";

const WasmContext = React.createContext(false);

export function WasmProvider({ children }: React.PropsWithChildren) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    init().then(() => setReady(true));
  }, []);

  return <WasmContext.Provider value={ready}>{children}</WasmContext.Provider>;
}

export const useWasmInitialised = () => React.useContext(WasmContext);
