import React from "react";
import init, { GameOfLifeHandle } from "@joe/rust-gaming-wasm";

function GameOfLife() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    init().then(() => {
      if (canvasRef.current) {
        const handle = new GameOfLifeHandle(canvasRef.current);
        let running = true;
        let last = performance.now();

        function loop(now: number) {
          if (!running) return;
          const dt = now - last;
          last = now;
          handle.update(dt);
          handle.draw();
          requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);

        return () => {
          running = false; // stops the loop
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
      />
    </div>
  );
}

export default GameOfLife;
