import React, { type MouseEventHandler } from "react";
import type { WasmGo } from "@joe/rust-gaming-wasm";
import getWasmGo from "./getWasmGo";

function GoBoard() {
  const wasmGoRef = React.useRef<WasmGo>(null);
  React.useEffect(() => {
    getWasmGo().then((e) => {
      wasmGoRef.current = e;
    });
  });
  const [boardStr, setBoardStr] = React.useState<string>();

  const onClick: MouseEventHandler = () => {
    setBoardStr(wasmGoRef.current?.board());
  };

  return (
    <div>
      <h2>Go Board</h2>
      <button onClick={onClick}>See Board</button>
      <p>{boardStr}</p>
    </div>
  );
}

export default GoBoard;
