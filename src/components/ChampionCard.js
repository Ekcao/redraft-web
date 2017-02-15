import React from 'react';

import ChampionSquare from './ChampionSquare';
import './ChampionCard.css';

const ChampionCard = ({ name, imageURL }) => {
    return (
        <div className="champion-card">
            <div className="champion-square-wrapper">
                <ChampionSquare name={name} imageURL={imageURL} />
            </div>
            <h3>{name}</h3>
        </div>
    );
};

ChampionCard.propTypes = {
    name: React.PropTypes.string,
    imageURL: React.PropTypes.string
}

export default ChampionCard;