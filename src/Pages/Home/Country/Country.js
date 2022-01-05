import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Country = ({ countryData }) => {
    const { country, countryInfo, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, active, critical, tests } = countryData;
    return (
        <div>
            <Col>
                <Card>
                    <Row className='p-3'>
                        <Col sm={4} md={4} lg={4}>
                            <img src={countryInfo.flag} alt="" height="60px" width="100px" />
                        </Col>
                        <Col className='d-flex align-items-center justify-content-center'>
                            <Card.Title>{country}</Card.Title>
                        </Col>
                    </Row>
                    <Card.Body className='mx-auto'>
                        <Card.Text>
                            <h6>Today Cases: {todayCases}</h6>
                            <h6>Today Deaths: {todayDeaths}</h6>
                            <h6>Today Recovered: {todayRecovered}</h6>
                            <h6>Total Test: {tests}</h6>
                            <h6>Total Case: {cases}</h6>
                            <h6>Total Deaths: {deaths}</h6>
                            <h6>Total Recovered: {recovered}</h6>
                            <h6>Active: {active}</h6>
                            <h6>Critical: {critical}</h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Country;