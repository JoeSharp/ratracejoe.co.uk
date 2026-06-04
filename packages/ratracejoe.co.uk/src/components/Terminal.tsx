import { useState, useRef, useEffect } from "react";
import { WasmAdventureEngine } from "@joe/rust-gaming-wasm";
import getEngine from "../wasm/getAdventureEngine";

export function Terminal() {
  const [lines, setLines] = useState<string[]>([
    "Welcome to the Adventure Terminal.",
    "Type a command and press Enter.",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WasmAdventureEngine>(null);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setInput(value);

  useEffect(() => {
    getEngine().then((e) => {
      engineRef.current = e;
    });
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const onSubmit: React.SubmitEventHandler = (e) => {
    if (!engineRef.current) return;

    e.preventDefault();

    const cmd = input.trim();
    if (!cmd) return;

    const response = engineRef.current.process(cmd);

    setLines((prev) => [...prev, `> ${cmd}`, response]);
    setInput("");
  };

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

      <form onSubmit={onSubmit}>
        <input
          className="terminal-input"
          value={input}
          onChange={onInputChange}
          autoFocus
        />
      </form>
    </div>
  );
}
