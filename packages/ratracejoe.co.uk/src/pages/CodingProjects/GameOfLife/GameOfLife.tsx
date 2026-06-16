import React from "react";
import { GameOfLifeHandle } from "@joe/rust-gaming-wasm";
import useRustGamingWasmInit from "../../../hooks/useRustGamingWasmInit";

function GameOfLife() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const wasmInitialised = useRustGamingWasmInit();

  React.useEffect(() => {
    console.log("Use effect", wasmInitialised);
    if (!wasmInitialised) return;
    if (!canvasRef.current) return;

    let running = true;
    let dragging = false;
    let gameRef: GameOfLifeHandle = new GameOfLifeHandle(canvasRef.current);
    let last = performance.now();

    function onMouseDown() {
      dragging = true;
    }
    function onMouseUp() {
      dragging = false;
    }
    function onMouseLeave() {
      dragging = false;
    }

    function onClickCanvas(e: MouseEvent) {
      if (!canvasRef.current || !gameRef) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x =
        (e.clientX - rect.left) * (canvasRef.current.width / rect.width);
      const y =
        (e.clientY - rect.top) * (canvasRef.current.height / rect.height);

      gameRef.handle_click(x, y);
    }

    function onDrag(e: MouseEvent) {
      if (dragging) onClickCanvas(e);
    }

    function loop(now: number) {
      if (!running || !gameRef) return;
      const dt = now - last;
      last = now;
      gameRef.update(dt);
      gameRef.draw();
      requestAnimationFrame(loop);
    }

    // async init
    canvasRef.current.addEventListener("click", onClickCanvas);
    canvasRef.current.addEventListener("mousedown", onMouseDown);
    canvasRef.current.addEventListener("mouseup", onMouseUp);
    canvasRef.current.addEventListener("mouseleave", onMouseLeave);
    canvasRef.current.addEventListener("mousemove", onDrag);

    requestAnimationFrame(loop);

    // CLEANUP — returned synchronously
    return () => {
      running = false;

      if (canvasRef.current) {
        canvasRef.current.removeEventListener("click", onClickCanvas);
        canvasRef.current.removeEventListener("mousedown", onMouseDown);
        canvasRef.current.removeEventListener("mouseup", onMouseUp);
        canvasRef.current.removeEventListener("mouseleave", onMouseLeave);
        canvasRef.current.removeEventListener("mousemove", onDrag);
      }
    };
  }, [wasmInitialised]);

  return (
    <div>
      <h1>Game of Life</h1>
      <p>This shows how to draw to canvas from within WASM.</p>
      <p>
        I am making use of some Rust projects I wrote last year when trying to
        learn this masterful language.
      </p>
      <p>
        <a href="https://github.com/JoeSharp/rust-gaming">
          Joe&apos;s Rust Gaming
        </a>
      </p>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}

export default GameOfLife;
