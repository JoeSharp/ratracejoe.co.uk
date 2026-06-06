import React from "react";
import type { WasmGo } from "@joe/rust-gaming-wasm";
import CreateGoBoardForm from "./CreateGoBoardForm";

function ManageGoGame() {
  const wasmGoRef = React.useRef<WasmGo>(null);

  const onCreate = (b: WasmGo) => (wasmGoRef.current = b);

  const [boardStr, setBoardStr] = React.useState<string>();

  const onClick: React.MouseEventHandler = () => {
    setBoardStr(wasmGoRef.current?.board());
  };

  return (
    <div>
      <h2>Go Board</h2>
      <CreateGoBoardForm onCreate={onCreate} />
      <button onClick={onClick}>See Board</button>
      <p>{boardStr}</p>
    </div>
  );
}

export default ManageGoGame;
