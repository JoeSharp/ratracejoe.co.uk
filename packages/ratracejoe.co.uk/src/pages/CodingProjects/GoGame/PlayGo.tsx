import React from "react";
import { Dimensions, GoEngine } from "@joe/rust-gaming-wasm";

type Props = {
  dimensions: Dimensions;
};

function PlayGo({ dimensions }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (!canvasRef.current) return;

    let goEngine: GoEngine = new GoEngine(canvasRef.current, dimensions);

    goEngine.draw();
  }, [dimensions]);

  return (
    <div>
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}

export default PlayGo;
