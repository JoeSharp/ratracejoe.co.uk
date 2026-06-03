use go::{GoBoard, LastMove};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct WasmGo {
    inner: GoBoard,
}

#[wasm_bindgen]
pub enum WasmLastMove {
    Ok,
    IllegalKo,
    IllegalSuicidal,
}

impl From<go::LastMove> for WasmLastMove {
    fn from(m: go::LastMove) -> Self {
        match m {
            LastMove::Ok => WasmLastMove::Ok,
            LastMove::IllegalKo => WasmLastMove::IllegalKo,
            LastMove::IllegalSuicidal => WasmLastMove::IllegalSuicidal,
        }
    }
}

#[wasm_bindgen]
impl WasmGo {
    #[wasm_bindgen(constructor)]
    pub fn new() -> WasmGo {
        let as_str = r#"
    turn=W
last_move=ok
capturesW=16
capturesB=23
-W---
--W--
-B---
-B-b-
-----
        "#;
        WasmGo {
            inner: GoBoard::from_str(as_str).unwrap(),
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
