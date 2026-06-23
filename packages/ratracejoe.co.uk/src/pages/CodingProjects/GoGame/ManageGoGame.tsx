import React from "react";
import { type Dimensions } from "@joe/rust-gaming-wasm";
import CreateGoBoardForm from "./CreateGoBoardForm";
import PlayGo from "./PlayGo";
import { useWasmInitialised } from "../../../context/WasmContext";

function ManageGoGame() {
  const [dimensions, setDimensions] = React.useState<Dimensions>();
  const wasmInitialised = useWasmInitialised();

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
