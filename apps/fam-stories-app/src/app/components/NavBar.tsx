import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import { Devices } from './GlobalStyles';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('accessToken')
    navigate("/welcome")
  }  
  
    return(
        <Nav>
          <HamburgerBtn>
            <Hamburger
              label="Show menu"
              rounded 
              toggled={isOpen} toggle={setOpen}
            />
          </HamburgerBtn>
            <ul>
                <li><Link to="/main">Home</Link> </li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/listfamilymembers">Family list</NavLink></li>
                <li><NavLink to="/user">User/Log out</NavLink></li>
            </ul>
         </Nav>   
    )
}

export const Nav = styled.li`
    position: relative;
    top: 0em;
    left: 30%;
    text-align: end;
    margin: 0em;
    font-size: 0.75em;
    z-index: 10;
    
    a {
    display: block;
    padding: 0.5em;
    text-decoration: none;
    color: var(--color-white);
    background-color: transparent;
    border-radius: 12px;
    font-family: 'Open Sans';
    opacity: 0.9;
    z-index: 3;

    .active
    text-decoration: underline;
    color: var(--color-white);
  }

@media ${Devices.tablet} {
    top: -7em;
    left: 28%;
    font-size: 1.2em;
}

@media ${Devices.laptop} {
    top: -9em;
    left: 28%;
    align-items: center;
    color: var(--color-white);
    margin: 0.5em;
    z-index: 10;

    li {
    float: left;
    }

    a {
    color: var(--color-black);
    background-color:var(--color-white);
  }

    a:hover {
    background-color: var(--color-green);
    border-radius: 8px;
    z-index: 3;
  }
}
    .active {
    border-radius: 8px;
}

@media ${Devices.desktop} {
    top: -7em;
    left: 32%;
}
`

export const HamburgerBtn = styled.div`
  display: none;
  color: var(--color-white); 
  margin: 10px;
`