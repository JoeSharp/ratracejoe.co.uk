import React from "react";
import p5 from "p5";

export type SketchBridge<T> = {
  getConfig(): T;
  setConfig(updates: Partial<T>): void;
};
export type SketchFactory<T> = (bridge: SketchBridge<T>) => (p: p5) => void;

export function useSketch<T extends Record<string, any>>(
  defaultConfig: T,
  sketchFactory: SketchFactory<T>,
) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const p5Ref = React.useRef<p5 | null>(null);

  const [config, setConfig] = React.useState<T>(defaultConfig);

  const bridge = React.useMemo<SketchBridge<T>>(
    () => ({
      getConfig: () => config,
      setConfig: (updates) => setConfig((prev) => ({ ...prev, ...updates })),
    }),
    [config],
  );

  React.useEffect(() => {
    if (!containerRef.current) return;

    const sketch = sketchFactory(bridge);
    p5Ref.current = new p5(sketch, containerRef.current);

    return () => p5Ref.current?.remove();
  }, [sketchFactory, bridge]);

  const onNumericConfigChange =
    (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) =>
      bridge.setConfig({ [key]: parseFloat(e.target.value) } as Partial<T>);

  const onStringConfigChange =
    (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) =>
      bridge.setConfig({ [key]: e.target.value } as Partial<T>);

  const onBooleanConfigChange =
    (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) =>
      bridge.setConfig({ [key]: e.target.checked } as Partial<T>);

  return {
    config,
    containerRef,
    p5: p5Ref.current,
    updateConfig: bridge.setConfig,
    onNumericConfigChange,
    onStringConfigChange,
    onBooleanConfigChange,
  };
}

export default useSketch;
