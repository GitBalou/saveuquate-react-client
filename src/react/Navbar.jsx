import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavbarBs extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect className="ct-navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/home">
                            <a href="#">SAVEUQUATE - React</a>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/home">
                            <NavItem eventKey={1}>Accueil</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/kittens">
                            <NavItem eventKey={2}>Chatons</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarBs;