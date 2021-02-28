import React from 'react';

const Card = (props) => {
    const card = props.card;
    const totalPopulation = card.reduce((sum, country) => sum + country.population, 0)
    // let totalPopulation = 0;
    // for (let i = 0; i< card.length; i++) {
    //   const country = card[i];
    //   totalPopulation = totalPopulation + country.population;
    // }
    return (
        <div>
            <h4>Country Added: {card.length}</h4>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Card;