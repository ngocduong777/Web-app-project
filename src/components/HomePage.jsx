/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function HomePage() {
    return (
        <div className="sample">
            <Navbar bg="myRed" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-title" href="#home">Obstacle Crossed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#shop">Shop</Nav.Link>
                        <Nav.Link href="#ranking">Ranking</Nav.Link>
                        <Nav.Link href="#logout">Logout</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HomePage
