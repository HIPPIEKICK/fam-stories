import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = () => {
    return(
        <Nav>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><NavLink to="/aboutpage">About</NavLink></li>
                <li><NavLink to="/listfamilymembers">Family list</NavLink></li>
                <li><NavLink to="/userpage">User/Log out</NavLink></li>
            </ul>
         </Nav>   
    )
}

export const Nav = styled.li`
    position: absolute;
    top: 1em;
    right: 1em;
    align-items: center;
    color: var(--color-white);
    
    li {
    float: left;
  }

    a {
    display: block;
    padding: 0.7em;
    text-decoration: none;
    color: var(--color-white);
    font-family: 'Open Sans';
  }

    a:hover {
    background-color: var(--color-green);
  }
   
    .active {
    background-color: var(--color-darkerRed);
    text-decoration: underline;
}
  
`