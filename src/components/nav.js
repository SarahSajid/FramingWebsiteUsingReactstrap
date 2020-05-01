import React, { useState } from 'react';
import '../css/app.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import cartIcon from '../assets/cart-icon.svg';
import userAccountIcon from '../assets/user-account-icon.svg';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="nav-bar">
        <NavbarBrand className="navbar-brand" href="/">FRAMEBOSS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar className="nav-item">
              <DropdownToggle nav caret>
                SERVICES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="nav-item">
              <DropdownToggle nav caret>
                FRAMES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="nav-item">
              <NavLink href="/">BLOG</NavLink>
            </NavItem>
            <NavItem className="nav-item mr-0">
              <NavLink href="/">CONTACT US</NavLink>
            </NavItem>
            <NavItem className="nav-item mr-0">
              <NavLink href="/" style={{marginLeft: '30px'}}>
                <img src={userAccountIcon} style={{width: '22px'}}></img>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item mr-0">
              <NavLink href="/">
                <img src={cartIcon} style={{width: '24px'}}></img>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;