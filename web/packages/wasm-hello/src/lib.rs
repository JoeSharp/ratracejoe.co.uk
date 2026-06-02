use wasm_bindgen::prelude::*;

mod engine;
mod game_state;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello this has been updated, {}!", name)
}
