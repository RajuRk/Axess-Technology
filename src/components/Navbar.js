import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../img/axess-logo.png'
import './Navbar.css'

const NavbarMenu = () => {
  return (
    <div className="header" id="header">
       <header>
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links ms-auto">
                    <Nav.Link href="#"><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</Nav.Link>
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Services</Nav.Link>
                    <Nav.Link href="#">Student Zone</Nav.Link>
                    <Nav.Link href="#">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </header>
    </div>
  )
}

export default NavbarMenu
