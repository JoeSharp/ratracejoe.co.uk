import React from "react";
import init, { Animator } from "@joe/rust-gaming-wasm";

function GameOfLife() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    let animator: Animator;

    init().then(() => {
      if (canvasRef.current) {
        animator = new Animator(canvasRef.current);
        animator.start();
      }
    });

    return () => {
      if (animator) {
        animator.free();
      }
    };
  }, []);

  return (
    <div>
      <h1>Game of Life</h1>
      <p>This shows how to draw to canvas from within WASM.</p>
      <p>
        I am making use of some Rust projects I wrote last year when trying to
        learn this masterful language.
      </p>
      <a href="https://github.com/JoeSharp/rust-gaming">
        Joe&apos;s Rust Gaming
      </a>
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
