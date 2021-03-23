import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Constants from '../constants.js'; 
import api from '../services/api';

class NavigationBar extends React.Component {

  constructor(props) { 
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async handleButtonClick() { 
    const email = localStorage.getItem('@fronent/email')
    const response = await api.post('/client', { email });
    console.log(response);
    localStorage.clear()
    localStorage.setItem('@frontend/logged', false)
    this.props.history.push('/')
  }

  render() { 
    return(
      <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand href="/dashboard">Legolas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title={Constants.CLIENTS} id="basic-nav-dropdown">
            <NavDropdown.Item href="/clients/new">{Constants.CLIENTS_NEW}</NavDropdown.Item>
            <NavDropdown.Item href="/clients">{Constants.CLIENTS_VIEW_ALL}</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title={Constants.PRODUCTS_AND_SUPPLIES} id="basic-nav-dropdown">
            <NavDropdown.Item href="/products_and_supplies/new_product">{Constants.PRODUCTS_AND_SUPPLIES_NEW_PRODUCT}</NavDropdown.Item>
            <NavDropdown.Item href="/products_and_supplies/products">{Constants.PRODUCTS_AND_SUPPLIES_VIEW_ALL_PRODUCTS}</NavDropdown.Item>
            <NavDropdown.Item href="/products_and_supplies/add_supply">{Constants.PRODUCTS_AND_SUPPLIES_NEW_SUPPLY}</NavDropdown.Item>
            <NavDropdown.Item href="/products_and_supplies/supplies">{Constants.PRODUCTS_AND_SUPPLIES_VIEW_ALL_SUPPLIES}</NavDropdown.Item>
            <NavDropdown.Item href="/products_and_supplies/add_supplier">{Constants.PRODUCTS_AND_SUPPLIES_NEW_SUPPLIER}</NavDropdown.Item>
            <NavDropdown.Item href="/products_and_supplies/suppliers">{Constants.PRODUCTS_AND_SUPPLIES_VIEW_ALL_SUPPLIERS}</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title={Constants.ORDERS} id="basic-nav-dropdown">
            <NavDropdown.Item href="/pedidos/novo">Novo pedido</NavDropdown.Item>
            <NavDropdown.Item href="/pedidos">Visualizar pedidos</NavDropdown.Item>
        </NavDropdown>
          <Nav.Link href="/relatorios">{Constants.REPORTS}</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-primary" onClick={this.handleButtonClick}>{Constants.LOGOUT_BUTTON_TEXT}</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
    );

  }

}

export default NavigationBar;