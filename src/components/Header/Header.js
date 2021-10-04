import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div >
                <Navbar className="ps-5 navbar " bg="light" expand="lg ">
                    <Navbar.Brand href="#" className="ps-3 fs-2">ACADEMIA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2  my-lg-0"
                            style={{ maxHeight: '100px', marginLeft: '180px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className="anchor">Home</NavLink>
                            <NavLink to="/courses" className="anchor">Courses</NavLink>
                            <NavLink to="/instructor" className="anchor">Instructor</NavLink>
                            <NavLink to="/about" className="anchor">About Us</NavLink>

                        </Nav>
                        <Form className="d-flex  searchField">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button className="mx-2" variant="outline-warning ">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </div >
    );
};

export default Header;