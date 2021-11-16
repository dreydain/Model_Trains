import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/workorderlist">TJ Model Trains</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/workorderlist"><i className='fas fa-clipboard-list'></i> WorkOrders</Nav.Link>
                        <Nav.Link href="/productlist"><i className='fas fa-train'></i> Products</Nav.Link>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/userlist">Staff</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </header>
    )
}

export default Header
