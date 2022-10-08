import React, { Component, Fragment } from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../TopNavigtion/TopNavigation.css'
import Logo from '../../asset/image/logo.png'
import LogoScroll from '../../asset/image/logoScroll.png'

import {NavLink} from "react-router-dom"


class TopNavigation extends Component {


    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"> Home</Nav.Link>
                                <Nav.Link href="#deets"> About</Nav.Link>
                                <Nav.Link href="#deets"> Services</Nav.Link>
                                <Nav.Link href="#deets"> Courses</Nav.Link>
                                <Nav.Link href="#deets"> Profolio</Nav.Link>
                                <Nav.Link href="#deets"> Contact</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}
export default TopNavigation
