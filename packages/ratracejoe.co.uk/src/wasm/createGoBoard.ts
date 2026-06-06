import init, { WasmGo } from "@joe/rust-gaming-wasm";

let initialised = false;

async function createGoBoard(rows: number, columns: number): Promise<WasmGo> {
  if (!initialised) {
    await init();
    initialised = true;
  }
  return new WasmGo(rows, columns);
}

export default createGoBoard;
