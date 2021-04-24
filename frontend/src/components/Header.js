import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <span id='proshopHead'><i class="far fa-plus-square" >  </i>  ProShop</span>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <LinkContainer to='/cart'>
                <Nav.Link size="lg"><i className="fas fa-shopping-cart" ></i> Cart</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to={'/profile'}>
                    <NavDropdown.Item><i class="fas fa-user-circle">  Profile</i></NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}><i class="fas fa-sign-out-alt">  Loggout</i></NavDropdown.Item>
                </NavDropdown>
              ) : <LinkContainer to="login">
                <Nav.Link ><i className="fas fa-user"></i> Sign In</Nav.Link>
              </LinkContainer>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </header >
  )
}

export default Header
