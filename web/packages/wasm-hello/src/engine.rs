use crate::game_state::GameState;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Engine {
    state: GameState,
}

#[wasm_bindgen]
impl Engine {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Engine {
        Engine {
            state: GameState::new(),
        }
    }

    pub fn process(&mut self, cmd: &str) -> String {
        self.state.apply(cmd)
    }
}
