import init, { WasmGo } from "@joe/rust-gaming-wasm";

let wasmGo: WasmGo | null = null;

async function getWasmGo(): Promise<WasmGo> {
  if (wasmGo) return wasmGo;

  await init();
  wasmGo = new WasmGo();
  return wasmGo;
}

export default getWasmGo;
