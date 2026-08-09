import React from "react";
import TopTrumpCards from "./TopTrumps/TopTrumpCards";
import ZooKiMonCards from "./ZooKiMon/ZooKiMonCards";
import Select, { type SingleValue } from "react-select";

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: "zookimon", label: "Zoo-Ki-Mon" },
  { value: "legoTopTrumps", label: "Lego Top Trumps" },
];

function LegoTopTrumps() {
  const [collection, setCollection] = React.useState(options[0]);

  const onChange = React.useCallback(
    (value: SingleValue<Option>) => {
      if (null == value) return;
      setCollection(value);
    },
    [setCollection],
  );

  return (
    <div>
      <h1>Lego Top Trumps</h1>
      <h4>Pick a Collection</h4>
      <Select<Option>
        options={options}
        value={collection}
        onChange={onChange}
      />

      {collection.value === "legoTopTrumps" && <TopTrumpCards />}
      {collection.value === "zookimon" && <ZooKiMonCards />}
    </div>
  );
}

export default LegoTopTrumps;
