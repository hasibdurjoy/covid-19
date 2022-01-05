import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [displayCountries, setDisplayCountries] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    useEffect(() => {
        setIsloading(true)
        fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            .then(res => res.json())
            .then(data => {
                setDisplayCountries(data)
                setCountries(data)
                setIsloading(false);
            })
    }, [])
    const searchCountry = (e) => {
        const countryName = e.target.value;
        const matchedCountries = countries.filter(country => country.country.toLowerCase().includes(countryName.toLowerCase()));
        setDisplayCountries(matchedCountries);
    }
    const filterContinent = (e) => {
        const continentName = e.target.value;
        if (continentName === 'all') {
            setDisplayCountries(countries);
            return;
        }
        const matchedCountries = countries.filter(country => country.continent.toLowerCase().includes(continentName.toLowerCase()));
        setDisplayCountries(matchedCountries);
    }
    return (
        <Container className='mt-3'>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
                        <FormControl
                            placeholder="Country Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={searchCountry}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select onChange={filterContinent}>
                            <option value='all'>All Countries</option>
                            <option value='asia'>Asia</option>
                            <option value='europe'>Europe</option>
                            <option value='africa'>Africa</option>
                            <option value='south america'>South America</option>
                            <option value='north america'>North America</option>
                            <option value='oceania'>Oceania</option>
                            <option value='antarctica'>Antarctica</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {
                isLoading && <div className='text-center my-4'>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </div>
            }
            <Row xs={1} md={3} className="g-4">
                {
                    displayCountries.map(countryData => <Country key={countryData.country} countryData={countryData}></Country>)
                }
            </Row>
        </Container>
    );
};

export default Countries;