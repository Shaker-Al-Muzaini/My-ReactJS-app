import React, { Component, Fragment } from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../TopNavigtion/TopNavigation.css'
import Logo from '../../asset/image/logo.png'
import LogoScroll from '../../asset/image/logoScroll.png'



class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            navBarTitle:'navTitle',
            logo:[Logo],
            NavbarBack:'navBackground',
            NavbarItems :'navItem',
            variant:"dark"
        }
    }
    Scroll = () => {
        if (window.scrollY > 100) {
            this.setState({ navBarTitle: 'navTitleScroll',logo:[LogoScroll] ,NavbarBack:'navBackgroundScroll',
                NavbarItems:'navItemScroll',variant:"dark"})

        } else {
            this.setState({ navBarTitle: 'navTitle',logo:[Logo],NavbarBack:'navBackground',
                NavbarItems:'navItem',variant:"dark"})
        }
    }
   componentDidMount() {
        window.addEventListener('scroll',this.Scroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.NavbarBack} variant={this.state.variant} >
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.navBarTitle}>
                            <img src={this.state.logo}/>
                            MY Shaker
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.NavbarItems} href="#deets"> Home</Nav.Link>
                                <Nav.Link className={this.state.NavbarItems} href="#deets"> About</Nav.Link>
                                <Nav.Link className={this.state.NavbarItems} href="#deets"> Services</Nav.Link>
                                <Nav.Link className={this.state.NavbarItems} href="#deets"> Courses</Nav.Link>
                                <Nav.Link className={this.state.NavbarItems} href="#deets"> Profolio</Nav.Link>
                                <Nav.Link className={this.state.NavbarItems} href="#deets"> Contact</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}
export default TopNavigation
