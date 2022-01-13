
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/navbar'

const NaviBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Nyte</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href='/food'>Food</Nav.Link>
            <Nav.Link href='/movies' >Movies</Nav.Link>
            <Nav.Link href='#'>Places</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
        
    )
}

export default NaviBar
