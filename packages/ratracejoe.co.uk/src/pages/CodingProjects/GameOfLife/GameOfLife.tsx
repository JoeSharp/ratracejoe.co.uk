import React from "react";
import init, { GameOfLifeHandle } from "@joe/rust-gaming-wasm";

function GameOfLife() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    init().then(() => {
      if (canvasRef.current) {
        const gameRef = new GameOfLifeHandle(canvasRef.current);
        let last = performance.now();
        let running = true;

        function onClickCanvas(e: MouseEvent) {
          if (!canvasRef.current) return;
          if (!gameRef) return;

          const rect = canvasRef.current.getBoundingClientRect();

          // Convert from client coords → canvas pixel coords
          const x =
            (e.clientX - rect.left) * (canvasRef.current.width / rect.width);
          const y =
            (e.clientY - rect.top) * (canvasRef.current.height / rect.height);

          gameRef.handle_click(x, y);
        }

        function loop(now: number) {
          if (!running) return;
          const dt = now - last;
          last = now;
          gameRef.update(dt);
          gameRef.draw();
          requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
        canvasRef.current.addEventListener("click", onClickCanvas);

        return () => {
          running = false;
          if (canvasRef.current) {
            canvasRef.current.removeEventListener("click", onClickCanvas);
          }
        };
      }
    });
  }, []);

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
        //onClick={onClickCanvas}
      />
    </div>
  );
}

export default GameOfLife;
