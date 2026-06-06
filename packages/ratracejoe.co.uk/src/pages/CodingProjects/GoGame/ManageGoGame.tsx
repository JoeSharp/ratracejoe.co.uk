import React from "react";
import type { WasmGo } from "@joe/rust-gaming-wasm";
import CreateGoBoardForm from "./CreateGoBoardForm";
import PlayGo from "./PlayGo";

function ManageGoGame() {
  const [board, setBoard] = React.useState<WasmGo>();

  return (
    <div>
      <h2>Go Board</h2>
      <CreateGoBoardForm onCreate={setBoard} />
      {board && <PlayGo board={board} />}
    </div>
  );
}

export default ManageGoGame;
