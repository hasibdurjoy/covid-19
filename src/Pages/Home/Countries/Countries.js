import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    countries.map(countryData => <Country key={countryData.country} countryData={countryData}></Country>)
                }
            </Row>
        </Container>
    );
};

export default Countries;