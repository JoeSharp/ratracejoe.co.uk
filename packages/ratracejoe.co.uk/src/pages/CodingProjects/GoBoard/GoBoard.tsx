import React, {
  useEffect,
  type MouseEventHandler,
  type SubmitEventHandler,
} from "react";
import type { WasmGo } from "@joe/rust-gaming-wasm";
import createGoBoard from "../../../wasm/createGoBoard";

function GoBoard() {
  const [rows, setRows] = React.useState<number>(5);
  const [columns, setColumns] = React.useState<number>(5);

  const onRowsChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setRows(parseInt(value, 10));
  const onColumnsChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setColumns(parseInt(value, 10));

  const wasmGoRef = React.useRef<WasmGo>(null);

  useEffect(() => {
    createGoBoard(4, 4).then((e) => (wasmGoRef.current = e));
  });

  const onCreate: SubmitEventHandler = (e) => {
    e.preventDefault();
    createGoBoard(rows, columns).then((e) => {
      wasmGoRef.current = e;
    });
  };

  const [boardStr, setBoardStr] = React.useState<string>();

  const onClick: MouseEventHandler = () => {
    setBoardStr(wasmGoRef.current?.board());
  };

  return (
    <div>
      <h2>Go Board</h2>
      <form onSubmit={onCreate}>
        <label>
          Rows <input type="number" value={rows} onChange={onRowsChange} />
        </label>
        <label>
          Columns
          <input type="number" value={columns} onChange={onColumnsChange} />
        </label>
        <input type="submit" value="Create Board" />
      </form>
      <button onClick={onClick}>See Board</button>
      <p>{boardStr}</p>
    </div>
  );
}

export default GoBoard;
