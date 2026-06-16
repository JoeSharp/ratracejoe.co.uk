import React from "react";
import init from "@joe/rust-gaming-wasm";

function useRustGamingWasmInit() {
  const [initialised, setInitialised] = React.useState<boolean>(false);

  React.useEffect(() => {
    init().then(() => setInitialised(true));
  });

  return initialised;
}

export default useRustGamingWasmInit;
