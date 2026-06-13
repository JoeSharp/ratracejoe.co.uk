use crate::GameEngine;
use game_of_life::GameOfLife;
use game_of_life::GolCell;
use wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;
use web_sys::console;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

pub struct GameOfLifeEngine {
    last_update_time: f64,
    game_of_life: Option<GameOfLife>,
    cell_size: f64,
}

impl GameOfLifeEngine {
    fn new() -> GameOfLifeEngine {
        GameOfLifeEngine {
            game_of_life: None,
            last_update_time: 0.0,
            cell_size: 0.0,
        }
    }

    pub fn handle_click(&mut self, px: f64, py: f64) {
        if let Some(gol) = &mut self.game_of_life {
            let cell_size = self.cell_size as f64;

            let cell_x = (px / cell_size).floor() as usize;
            let cell_y = (py / cell_size).floor() as usize;

            gol.bring_to_life(cell_y, cell_x);
        }
    }
}

impl GameEngine for GameOfLifeEngine {
    fn setup(&mut self, canvas: &HtmlCanvasElement) {
        const GOL_GUN: &str = "---------------------------------------
-------------------------x-------------
-----------------------x-x-------------
-------------xx------xx------------xx--
------------x---x----xx------------xx--
-xx--------x-----x---xx----------------
-xx--------x---x-xx----x-x-------------
-----------x-----x-------x-------------
------------x---x----------------------
-------------xx------------------------
---------------------------------------
";
        self.game_of_life = match GameOfLife::from_str(&GOL_GUN) {
            Ok(b) => Some(b),
            Err(_) => None,
        };
        if let Some(gol) = &mut self.game_of_life {
            let (rows, columns) = gol.get_size();
            let cell_size_row: f64 = (canvas.height() as f64) / (rows as f64);
            let cell_size_column: f64 = (canvas.width() as f64) / (columns as f64);
            self.cell_size = f64::min(cell_size_column, cell_size_row);
        }
    }

    fn update(&mut self, _dt: f64) {
        self.last_update_time += _dt;
        if self.last_update_time < 1000.0 / 5.0 {
            return;
        }

        if let Some(g) = &mut self.game_of_life {
            g.iterate();
        }
        self.last_update_time = 0.0;
    }

    fn draw(&self, _canvas: &HtmlCanvasElement, ctx: &CanvasRenderingContext2d) {
        if let Some(g) = &self.game_of_life {
            let all_cells = g.get_contents().all_cells();
            for cell in all_cells {
                let fill = match cell.value() {
                    GolCell::Alive => &"#0f0",
                    GolCell::Dead => &"#f00",
                };
                ctx.set_fill_style_str(fill);
                ctx.fill_rect(
                    (cell.column() as f64) * self.cell_size,
                    (cell.row() as f64) * self.cell_size,
                    self.cell_size,
                    self.cell_size,
                );
            }
        }
    }
}

#[wasm_bindgen]
pub struct GameOfLifeHandle {
    canvas: HtmlCanvasElement,
    ctx: CanvasRenderingContext2d,
    engine: GameOfLifeEngine,
    pending_clicks: Vec<(f64, f64)>,
}

#[wasm_bindgen]
impl GameOfLifeHandle {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas: HtmlCanvasElement) -> GameOfLifeHandle {
        let ctx = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()
            .unwrap();

        let mut engine = GameOfLifeEngine::new();
        engine.setup(&canvas);

        console::log_1(&"Creating New Game of Life Handle".into());
        GameOfLifeHandle {
            canvas,
            ctx,
            engine,
            pending_clicks: vec![],
        }
    }

    pub fn update(&mut self, dt: f64) {
        for (x, y) in self.pending_clicks.drain(..) {
            self.engine.handle_click(x, y);
        }
        self.engine.update(dt);
    }

    pub fn draw(&self) {
        self.engine.draw(&self.canvas, &self.ctx);
    }

    pub fn handle_click(&mut self, x: f64, y: f64) {
        self.pending_clicks.push((x, y));
    }
}
