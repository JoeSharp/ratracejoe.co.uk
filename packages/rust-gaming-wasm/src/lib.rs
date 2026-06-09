use adventure_engine::AdventureState;
use game_of_life::GameOfLife;
use game_of_life::GolCell;
use go::{GoBoard, LastMove};
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement, window};

#[wasm_bindgen]
pub fn draw_rect(canvas: HtmlCanvasElement) {
    let ctx = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into::<CanvasRenderingContext2d>()
        .unwrap();

    ctx.set_fill_style_str(&"#00f");
    ctx.fill_rect(10.0, 10.0, 100.0, 100.0);
}

pub trait GameEngine {
    fn setup(&mut self);
    fn update(&mut self, dt: f64);
    fn draw(&mut self, canvas: &HtmlCanvasElement, ctx: &CanvasRenderingContext2d);
}

pub struct GameOfLifeEngine {
    game_of_life: Option<GameOfLife>,
}

impl GameOfLifeEngine {
    fn new() -> GameOfLifeEngine {
        GameOfLifeEngine { game_of_life: None }
    }
}

impl GameEngine for GameOfLifeEngine {
    fn setup(&mut self) {
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
        }
    }

    fn update(&mut self, _dt: f64) {
        if let Some(g) = &mut self.game_of_life {
            g.iterate();
        }
    }

    fn draw(&mut self, canvas: &HtmlCanvasElement, ctx: &CanvasRenderingContext2d) {
        if let Some(g) = &mut self.game_of_life {
            let (rows, cols) = g.get_contents().get_size();
            let cell_size_row: f64 = (canvas.height() as f64) / (rows as f64);
            let cell_size_column: f64 = (canvas.width() as f64) / (cols as f64);
            let cell_size = f64::min(cell_size_column, cell_size_row);
            let all_cells = g.get_contents().all_cells();
            for cell in all_cells {
                let fill = match cell.value() {
                    GolCell::Alive => &"#0f0",
                    GolCell::Dead => &"#f00",
                };
                ctx.set_fill_style_str(fill);
                ctx.fill_rect(
                    (cell.column() as f64) * cell_size,
                    (cell.row() as f64) * cell_size,
                    cell_size,
                    cell_size,
                );
            }
        }
    }
}

#[wasm_bindgen]
pub struct Animator {
    canvas: HtmlCanvasElement,
    ctx: CanvasRenderingContext2d,
    last_frame_time: f64,
    target_frame_time: f64,
    running: bool,
    engine: Box<dyn GameEngine>,
}

#[wasm_bindgen]
pub fn create_game_of_life_engine(canvas: HtmlCanvasElement) -> Animator {
    let mut gol = GameOfLifeEngine::new();
    gol.setup();
    Animator::new(canvas, Box::new(gol))
}

impl Animator {
    pub fn new(canvas: HtmlCanvasElement, engine: Box<dyn GameEngine>) -> Animator {
        let ctx = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()
            .unwrap();
        Animator {
            canvas,
            ctx,
            engine,
            last_frame_time: 0.0,
            target_frame_time: 1000.0 / 5.0, // FPS
            running: true,
        }
    }
}

#[wasm_bindgen]
impl Animator {
    pub fn start(self) {
        let animator = Rc::new(RefCell::new(self));

        let f: Rc<RefCell<Option<Closure<dyn FnMut()>>>> = Rc::new(RefCell::new(None));
        let g = f.clone();

        *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
            let mut anim = animator.borrow_mut();
            if !anim.running {
                return;
            }

            let now = window().unwrap().performance().unwrap().now();
            let elapsed = now - anim.last_frame_time;

            if elapsed >= anim.target_frame_time {
                anim.last_frame_time = now;

                // Clear
                anim.ctx.set_fill_style_str(&"#000");
                anim.ctx.fill_rect(
                    0.0,
                    0.0,
                    anim.canvas.width() as f64,
                    anim.canvas.height() as f64,
                );

                anim.engine.update(elapsed);
                let (canvas, ctx) = { (anim.canvas.clone(), anim.ctx.clone()) };
                let engine = &mut anim.engine;
                engine.draw(&canvas, &ctx);
            }

            // Schedule next frame
            window()
                .unwrap()
                .request_animation_frame(f.borrow().as_ref().unwrap().as_ref().unchecked_ref())
                .unwrap();
        }) as Box<dyn FnMut()>));

        window()
            .unwrap()
            .request_animation_frame(g.borrow().as_ref().unwrap().as_ref().unchecked_ref())
            .unwrap();
    }

    pub fn free(&mut self) {
        self.running = false;
    }
}

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
            inner: GoBoard::with_size(rows, columns),
        }
    }

    pub fn board(&self) -> String {
        self.inner.to_string()
    }
}
