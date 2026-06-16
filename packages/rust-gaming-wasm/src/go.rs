use go::{GoBoard, LastMove};
use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

use crate::Dimensions;

#[wasm_bindgen]
pub struct GoEngine {
    inner: GoBoard,
    canvas: HtmlCanvasElement,
    ctx: CanvasRenderingContext2d,
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
impl GoEngine {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas: HtmlCanvasElement, dimension: Dimensions) -> GoEngine {
        let ctx = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()
            .unwrap();
        GoEngine {
            inner: GoBoard::with_size(dimension.width, dimension.height),
            canvas,
            ctx,
        }
    }

    pub fn board(&self) -> String {
        self.inner.to_string()
    }

    pub fn draw(&self) {
        const ALIVE_FILL: &str = &"#00449f";
        const ALIVE_OUTLINE: &str = &"#4df3ff";
        self.ctx.set_stroke_style_str(ALIVE_OUTLINE);
        self.ctx.set_fill_style_str(ALIVE_FILL);
        self.ctx.fill_rect(
            0.0,
            0.0,
            self.canvas.width() as f64,
            self.canvas.height() as f64,
        );
    }
}
