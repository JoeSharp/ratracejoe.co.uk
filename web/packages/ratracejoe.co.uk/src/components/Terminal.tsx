import { useState, useRef, useEffect } from "react";
import { Engine } from "@joe/wasm-hello";
import getEngine from "./getEngine";

//const engine = await getEngine();

export function Terminal() {
  const [lines, setLines] = useState<string[]>([
    "Welcome to the Adventure Terminal.",
    "Type a command and press Enter.",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Engine>(null);

  useEffect(() => {
    getEngine().then((e) => {
      engineRef.current = e;
    });
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function handleSubmit(e: React.FormEvent) {
    if (!engineRef.current) return;

    e.preventDefault();

    const cmd = input.trim();
    if (!cmd) return;

    const response = engineRef.current.process(cmd);
    //const response = engine.process(cmd);

    setLines((prev) => [...prev, `> ${cmd}`, response]);
    setInput("");
  }

  return (
    <div className="terminal">
      <div className="terminal-output">
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">
            {line}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}
