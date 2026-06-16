import React from "react";
import { Dimensions } from "@joe/rust-gaming-wasm";

type Props = {
  onCreate: (dimensions: Dimensions) => void;
};

function CreateGoBoardForm({ onCreate }: Props) {
  const [width, setWidth] = React.useState<number>(5);
  const [height, setHeight] = React.useState<number>(5);

  const onWidthChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setWidth(parseInt(value, 10));
  const onHeightChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setHeight(parseInt(value, 10));
  const onSubmit: React.SubmitEventHandler = (e) => {
    e.preventDefault();
    onCreate(new Dimensions(width, height));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Rows <input type="number" value={width} onChange={onWidthChange} />
      </label>
      <label>
        Columns
        <input type="number" value={height} onChange={onHeightChange} />
      </label>
      <input type="submit" value="Create Board" />
    </form>
  );
}

export default CreateGoBoardForm;
