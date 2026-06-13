use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

mod adventure_engine;
mod game_of_life;
mod go;
mod simple_rect;

pub trait GameEngine {
    fn setup(&mut self, canvas: &HtmlCanvasElement);
    fn update(&mut self, dt: f64);
    fn draw(&self, canvas: &HtmlCanvasElement, ctx: &CanvasRenderingContext2d);
}
