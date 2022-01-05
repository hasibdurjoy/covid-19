import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Country = ({ countryData }) => {
    const { country, countryInfo, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, active, critical, tests } = countryData;
    return (
        <div>
            <Col>
                <Card>
                    <Row className='px-3 pt-3'>
                        <Col xs={12} sm={12} md={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <img src={countryInfo.flag} alt="" height="60px" width="100px" />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} className='d-flex align-items-center justify-content-center'>
                            <h4>{country}</h4>
                        </Col>
                    </Row>
                    <Card.Body className='mx-auto pt-2'>
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