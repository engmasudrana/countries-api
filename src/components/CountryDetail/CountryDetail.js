import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState({});

    const { capital, area, population, numericCode, nativeName, region, timezones } = country;
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [])
    return (
        <div className="container mt-5 shadow p-5">
            <Link to="/"><Button className="btn-sm mb-2" variant="link">Home</Button></Link>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>National Flag</th>
                        <th>Capital</th>
                        <th>Area</th>
                        <th>population </th>
                        <th>Numeric Code</th>
                        <th>Native Name</th>
                        <th>Region Name</th>
                        <th>Timezone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <img src={country.flag} className="flag mb-2" alt="" /></td>
                        <td>{capital}</td>
                        <td>{area}</td>
                        <td>{population}</td>
                        <td>{numericCode}</td>
                        <td>{nativeName}</td>
                        <td>{region}</td>
                        <td>{timezones}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default CountryDetail;