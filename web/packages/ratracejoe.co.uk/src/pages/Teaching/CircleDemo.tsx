import p5 from "p5";
import useSketch, { type SketchBridge } from "../../components/useSketch";

export interface CircleConfig {
  radius: number;
  colour: string;
}

export const createCircleSketch =
  (bridge: SketchBridge<CircleConfig>) => (p: p5) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      p.background(240);

      const { radius, colour } = bridge.getConfig();

      p.fill(colour);
      p.circle(p.width / 2, p.height / 2, radius);
    };
  };
const circleConfig = { radius: 50, colour: "#ff0000" };
// CircleDemo.tsx
export function CircleDemo() {
  const {
    config,
    containerRef,
    updateConfig,
    onNumericConfigChange,
    onStringConfigChange,
  } = useSketch<CircleConfig>(circleConfig, createCircleSketch);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div ref={containerRef} />

      <div>
        <label>
          Radius:
          <input
            type="number"
            value={config.radius}
            onChange={onNumericConfigChange("radius")}
          />
        </label>

        <label>
          Colour:
          <input
            type="text"
            value={config.colour}
            onChange={onStringConfigChange("colour")}
          />
        </label>

        <button onClick={() => updateConfig({ radius: config.radius + 10 })}>
          Bigger
        </button>
      </div>
    </div>
  );
}
