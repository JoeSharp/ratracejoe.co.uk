import init, { Engine } from "@joe/wasm-hello";

let engine: Engine | null = null;

async function getEngine(): Promise<Engine> {
  if (engine) return engine;

  await init();
  engine = new Engine();
  return engine;
}

export default getEngine;
