import React from "react";
import { type TopTrumpType } from "./types";

interface Props {
  card: TopTrumpType;
  statsOrder: string[];
}

const TopTrumpCard: React.FC<Props> = ({
  statsOrder,
  card: { name, description, image, stats = {} },
}) => {
  return (
    <div className="top-trump">
      <img className="top-trump__image" src={image} alt={`a ${name}`} />
      <div className="top-trump__details">
        <div className="top-trump__name">{name}</div>
        <div className="top-trump__description">{description}</div>
        <table className="top-trump__stat">
          <tbody>
            {statsOrder.map((stat) => (
              <tr key={stat}>
                <td>{stat}: </td>
                <td>{stats[stat]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopTrumpCard;
