import React from "react";
import type { WasmGo } from "@joe/rust-gaming-wasm";
import createGoBoard from "../../../wasm/createGoBoard";

type Props = {
  onCreate: (g: WasmGo) => void;
};

function CreateGoBoardForm({ onCreate }: Props) {
  const [rows, setRows] = React.useState<number>(5);
  const [columns, setColumns] = React.useState<number>(5);

  const onRowsChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setRows(parseInt(value, 10));
  const onColumnsChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setColumns(parseInt(value, 10));
  const onSubmit: React.SubmitEventHandler = (e) => {
    e.preventDefault();
    createGoBoard(rows, columns).then(onCreate);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Rows <input type="number" value={rows} onChange={onRowsChange} />
      </label>
      <label>
        Columns
        <input type="number" value={columns} onChange={onColumnsChange} />
      </label>
      <input type="submit" value="Create Board" />
    </form>
  );
}

export default CreateGoBoardForm;
