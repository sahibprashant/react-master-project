import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Image, Container, NavDropdown } from 'react-bootstrap'
import bslogo from '../../assets/bslogo.png'

const Header = () => {

  const navigate = useNavigate();

  return (
    <Navbar className="sticky-top navbar-dark bg-success shadow px-3" expand="md">
      <Container fluid>
        <Navbar.Brand>
          <Image fluid src={bslogo} className="me-3" style={{ maxWidth: '50px' }} />
          <Navbar.Text className="fw-medium text-white">Master React</Navbar.Text>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-auto">
          <Nav className="me-3">
            <Nav.Link onClick={() => { navigate('/tab1') }}>Tab1</Nav.Link>
            <Nav.Link onClick={() => { navigate('/tab2') }}>Tab2</Nav.Link>
            <Nav.Link onClick={() => { navigate('/tab3') }}>Tab3</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown" align='end'>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {navigate('/')}}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
