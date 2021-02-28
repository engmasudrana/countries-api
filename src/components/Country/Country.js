import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, region, area, capital, flag} = props.country;
    const addCountry = props.addCountry;
    return (
        <div className="card-box">
            <img style={{height: '80px'}} src={flag} alt=""/>
            <h6>Country Name: {name}</h6>
            <h6>Population: {population}</h6>
            <h6>Region: {region}</h6>
            <h6>Area: {area}</h6>
            <h6>Capital: {capital}</h6>
            <button onClick={() => addCountry(props.country)} className="addBtn">Add Country</button>
        </div>
    );
};

export default Country;