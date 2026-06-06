use adventure_engine::AdventureState;
use go::{GoBoard, LastMove};
use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn start() {
    console_error_panic_hook::set_once();
}

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

#[wasm_bindgen]
pub struct WasmGo {
    inner: GoBoard,
}

#[wasm_bindgen]
pub enum WasmLastMove {
    FirstMove,
    Ok,
    IllegalKo,
    IllegalSuicidal,
}

impl From<go::LastMove> for WasmLastMove {
    fn from(m: go::LastMove) -> Self {
        match m {
            LastMove::FirstMove => WasmLastMove::FirstMove,
            LastMove::Ok => WasmLastMove::Ok,
            LastMove::IllegalKo => WasmLastMove::IllegalKo,
            LastMove::IllegalSuicidal => WasmLastMove::IllegalSuicidal,
        }
    }
}

#[wasm_bindgen]
impl WasmGo {
    #[wasm_bindgen(constructor)]
    pub fn new(rows: usize, columns: usize) -> WasmGo {
        WasmGo {
            inner: GoBoard::with_size(rows, columns), //inner: GoBoard::from_str(as_str).unwrap(),
        }
    }

    /*
    pub fn play(&mut self, x: usize, y: usize) -> bool {
        self.inner.play(x, y)
    }
    */

    pub fn board(&self) -> String {
        self.inner.to_string()
    }
}
