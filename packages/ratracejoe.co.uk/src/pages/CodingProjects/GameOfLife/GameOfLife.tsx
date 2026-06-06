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
