use adventure_engine::AdventureState;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct WasmAdventureEngine {
    state: AdventureState,
}

#[wasm_bindgen]
impl WasmAdventureEngine {
    #[wasm_bindgen(constructor)]
    pub fn new() -> WasmAdventureEngine {
        WasmAdventureEngine {
            state: AdventureState::new(),
        }
    }

    pub fn process(&mut self, cmd: &str) -> String {
        self.state.apply(cmd)
    }
}
