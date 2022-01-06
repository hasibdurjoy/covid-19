import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [displayCountries, setDisplayCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            .then(res => res.json())
            .then(data => {
                setDisplayCountries(data)
                setCountries(data)
                setIsLoading(false);
            })
    }, [])
    const searchCountry = (e) => {
        const countryName = e.target.value;
        const matchedCountries = countries.filter(country => country.country.toLowerCase().includes(countryName.toLowerCase()));
        setDisplayCountries(matchedCountries);
    }
    const filterContinent = (e) => {
        setIsLoading(true)
        const continentName = e.target.value;
        if (continentName === 'all') {
            setDisplayCountries(countries);
            setIsLoading(false)
            return;
        }
        const matchedCountries = countries.filter(country => country.continent.toLowerCase().includes(continentName.toLowerCase()));
        setDisplayCountries(matchedCountries);
        setIsLoading(false)
    }
    const sortItem = (e) => {
        setIsLoading(true)
        const sortValue = e.target.value;
        if (sortValue === 'a-z') {
            setDisplayCountries(displayCountries.sort((a, b) => (a.country > b.country) ? 1 : -1));
            setIsLoading(false);
        }
        if (sortValue === 'z-a') {
            const sortedCountry = displayCountries.sort((a, b) => (a.country < b.country) ? 1 : -1);
            setDisplayCountries(sortedCountry);
            setIsLoading(false);
            return 1;
        }
        if (sortValue === '1-100') {
            const sortedCountry = displayCountries.sort((a, b) => (a.cases > b.cases) ? 1 : -1);
            setDisplayCountries(sortedCountry);
            setIsLoading(false);
        }
        if (sortValue === '100-1') {
            const sortedCountry = displayCountries.sort((a, b) => (a.cases < b.cases) ? 1 : -1);
            setDisplayCountries(sortedCountry);
            setIsLoading(false);
        }
    }
    return (
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Form.Label htmlFor="inputPassword5">Search</Form.Label>
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
                        <Form.Label htmlFor="inputPassword5">Filter</Form.Label>
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
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Sort</Form.Label>
                        <Form.Select onChange={sortItem}>
                            <option value='a-z'>Country Name (A-Z)</option>
                            <option value='z-a'>Country Name (Z-A)</option>
                            <option value='1-100'>Total Case (1-100)</option>
                            <option value='100-1'>Total Case (100-1)</option>
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
                    displayCountries?.map(countryData => <Country key={countryData.country} countryData={countryData}></Country>)
                }
            </Row>
        </Container>
    );
};

export default Countries;