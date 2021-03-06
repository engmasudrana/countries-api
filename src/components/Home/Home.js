import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div className="d-flex container mt-3">
            <div className="">
                {/* <h1>Hello!: {countries.length}</h1> */}
                {
                    countries.map(country => <Country country={country} key={country.alpha2Code}></Country>)
                }
            </div>

        </div>
    );
};

export default Home;