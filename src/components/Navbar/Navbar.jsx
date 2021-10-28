import React from 'react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { data } from '../../data/NavbarData';
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './NavbarStyles';
import { useHistory, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);

  let history = useHistory();
  let location = useLocation();

  const handleClick = () => setShow(!show);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === '/') {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <NavIcon src='./assets/logo.png' alt='logo' />
            Delta
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLink onClick={() => closeMobileMenu(el.to, el.id)}>{el.text}</NavLink>
              </NavItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
