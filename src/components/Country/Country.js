import React from 'react';
import './Country.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, flag} = props.country;
    return (
        <div className="card-box">
           <img className="flag mb-3" src={flag} alt=""/>
            <h6>Name: {name}</h6>
            <h6>Capital: {capital}</h6>

           <Link to={`/country/${name}`}><Button className="btn-sm mt-2" variant="success">Details</Button></Link> 
        </div>
    );
};

export default Country;