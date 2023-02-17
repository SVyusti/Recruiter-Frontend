import React,{Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const navbar=()=> {
    const guestLinks=(
        <Fragment>
            <li className="nav-item">
                <Nav.Link href="login/">login</Nav.Link>
            </li>
        </Fragment>
    );
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Recruiter</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="login/">login</Nav.Link>
            <Nav.Link href="season/">Seasons</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link> */}
            {guestLinks}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default navbar;