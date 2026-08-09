import React from 'react';

import './topTrumps.css'

import cards from "./cards";
import TopTrumpCard from "./TopTrumpCard";

const POINTS_TO_ALLOCATE: number = 25;
const PROPERTIES_TO_ALLOCATE: string[] = [
    "Power",
    "Speed",
    "Cuteness",
    "Silliness",
];

const scoredCards = cards.map((card) => {
    card.stats = {};
    PROPERTIES_TO_ALLOCATE.forEach((prop) => (card.stats![prop] = 1));

    for (let p = 0; p < POINTS_TO_ALLOCATE; p++) {
        let property =
            PROPERTIES_TO_ALLOCATE[
            Math.floor(Math.random() * PROPERTIES_TO_ALLOCATE.length)
            ];
        card.stats[property] += 1;
    }

    return { ...card };
});

const TopTrumpCards: React.FC = () => {

    return <div className="card-collection">
        {scoredCards.map((card, i) => (
            <TopTrumpCard key={i} card={card} statsOrder={PROPERTIES_TO_ALLOCATE} />
        ))}
    </div>
}

export default TopTrumpCards;