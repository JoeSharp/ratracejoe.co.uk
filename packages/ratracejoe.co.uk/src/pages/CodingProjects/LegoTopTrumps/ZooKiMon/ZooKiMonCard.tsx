import React from "react";
import { type ZookimonType } from "./types";

interface Props {
  card: ZookimonType;
}

const ZooKiMonCard: React.FC<Props> = ({
  card: { name, foregroundImage, backgroundImage, attacks = [] },
}) => {
  return (
    <div className="zookimon">
      <div className="zookimon__name">{name}</div>

      <div className="image-stack">
        <div className="image-stack__item image-stack__item--top">
          <img src={backgroundImage} alt={`a ${name}`} />
        </div>
        <div className="image-stack__item image-stack__item--bottom">
          <img src={foregroundImage} alt={`a ${name}`} />
        </div>
      </div>

      <table className="zookimon__stat">
        <tbody>
          {attacks.map((attack) => (
            <tr key={attack.name}>
              <td>{attack.name}: </td>
              <td>{attack.power}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ZooKiMonCard;
