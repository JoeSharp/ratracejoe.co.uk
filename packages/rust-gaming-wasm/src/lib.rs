use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

mod adventure_engine;
mod game_of_life;
mod go;
mod simple_rect;

#[wasm_bindgen]
pub struct Dimensions {
    width: usize,
    height: usize,
}

#[wasm_bindgen]
impl Dimensions {
    #[wasm_bindgen(constructor)]
    pub fn new(width: usize, height: usize) -> Dimensions {
        Dimensions { width, height }
    }
}

pub trait GameEngine {
    fn setup(&mut self, canvas: &HtmlCanvasElement);
    fn update(&mut self, dt: f64);
    fn draw(&self, canvas: &HtmlCanvasElement, ctx: &CanvasRenderingContext2d);
}
