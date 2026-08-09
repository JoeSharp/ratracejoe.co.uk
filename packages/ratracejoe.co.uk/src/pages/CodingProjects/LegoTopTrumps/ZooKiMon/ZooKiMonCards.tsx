import React from 'react'

import './zookimon.css';

import cards from "./cards";
import ZooKiMonCard from "./ZooKiMonCard";

const ZooKiMonCards: React.FC = () => {

    return <div className='zookimon-container'>
        <h1>Zoo-Ki-Mon</h1>

        <div className="card-collection">
            {cards.map((card, i) => <ZooKiMonCard key={i} card={card} />)}
        </div>
    </div>
}

export default ZooKiMonCards;