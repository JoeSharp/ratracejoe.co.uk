import type { WasmGo } from "@joe/rust-gaming-wasm";

type Props = {
  board: WasmGo;
};

function PlayGo({ board }: Props) {
  return <div>{board.board()}</div>;
}

export default PlayGo;
