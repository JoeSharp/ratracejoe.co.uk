import React from "react";
import { type Dimensions } from "@joe/rust-gaming-wasm";
import CreateGoBoardForm from "./CreateGoBoardForm";
import PlayGo from "./PlayGo";
import useRustGamingWasmInit from "../../../hooks/useRustGamingWasmInit";

function ManageGoGame() {
  const [dimensions, setDimensions] = React.useState<Dimensions>();
  const wasmInitialised = useRustGamingWasmInit();

  if (!wasmInitialised) return null;

  return (
    <div>
      <h2>Go Board</h2>
      <CreateGoBoardForm onCreate={setDimensions} />
      {dimensions && <PlayGo dimensions={dimensions} />}
    </div>
  );
}

export default ManageGoGame;
