import { WasmAdventureEngine } from "@joe/rust-gaming-wasm";

let engine: WasmAdventureEngine | null = null;

async function getAdventureEngineSingleton(): Promise<WasmAdventureEngine> {
  if (engine) return engine;
  engine = new WasmAdventureEngine();
  return engine;
}

export default getAdventureEngineSingleton;
