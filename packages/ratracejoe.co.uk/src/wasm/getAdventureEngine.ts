import init, { WasmAdventureEngine } from "@joe/rust-gaming-wasm";

let engine: WasmAdventureEngine | null = null;

async function getEngine(): Promise<WasmAdventureEngine> {
  if (engine) return engine;

  await init();
  engine = new WasmAdventureEngine();
  return engine;
}

export default getEngine;
