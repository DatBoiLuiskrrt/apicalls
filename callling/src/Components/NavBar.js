import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from "styled-components";

const NabVar = styled.div`
    background-color:#348AC7;
    border-bottom: 1px solid lightgrey;
    
    
`

const Nb = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <NabVar>
      <Navbar color="faded" light>
        <NavbarBrand style={ {color: 'white'} }>Recipe Book</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/datboiluiskrrt/">Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NabVar>
  );
}

export default Nb;