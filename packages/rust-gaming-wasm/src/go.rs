use go::{GoBoard, LastMove};
use wasm_bindgen::prelude::*;

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
            inner: GoBoard::with_size(rows, columns),
        }
    }

    pub fn board(&self) -> String {
        self.inner.to_string()
    }
}
