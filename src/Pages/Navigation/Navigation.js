import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#" className='d-flex justify-content-center align-items-center'><i className="fas fa-virus text-success fs-2"></i><img src="https://i.ibb.co/d7xxxzx/covid-logo-removebg-preview.png" alt="" height="50px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;