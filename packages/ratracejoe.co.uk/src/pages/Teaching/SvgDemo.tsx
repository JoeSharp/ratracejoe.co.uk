import React, { useState, useCallback } from "react";

type Node = {
  id: string;
  x: number;
  y: number;
};

const initialNodes: Node[] = [
  { id: "A", x: 100, y: 100 },
  { id: "B", x: 250, y: 150 },
  { id: "C", x: 180, y: 230 },
];

export function SvgDemo() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const onMouseDown = useCallback((id: string) => {
    setDraggingId(id);
  }, []);

  const onMouseUp = useCallback(() => {
    setDraggingId(null);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (!draggingId) return;

      const svg = e.currentTarget;
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const cursor = pt.matrixTransform(svg.getScreenCTM()?.inverse());

      setNodes((nodes) =>
        nodes.map((n) =>
          n.id === draggingId ? { ...n, x: cursor.x, y: cursor.y } : n,
        ),
      );
    },
    [draggingId],
  );

  return (
    <svg
      width={500}
      height={350}
      style={{ border: "1px solid #ccc", background: "#fafafa" }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Edges (just connect in order for demo) */}
      {nodes.slice(1).map((n, i) => (
        <line
          key={`edge-${nodes[i].id}-${n.id}`}
          x1={nodes[i].x}
          y1={nodes[i].y}
          x2={n.x}
          y2={n.y}
          stroke="#999"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={18}
            fill="#4f46e5"
            stroke="#111827"
            strokeWidth={2}
            onMouseDown={() => onMouseDown(n.id)}
            style={{ cursor: "grab" }}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fill="white"
            fontSize={12}
            fontFamily="system-ui, sans-serif"
          >
            {n.id}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default SvgDemo;
