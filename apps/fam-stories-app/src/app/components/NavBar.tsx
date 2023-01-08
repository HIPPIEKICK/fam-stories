import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = () => {
    return(
        <Nav>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/listfamilymembers">Family list</NavLink></li>
                <li><NavLink to="/user">User/Log out</NavLink></li>
                <li><NavLink to="/welcome">LogIn/Welcome</NavLink></li>
            </ul>
         </Nav>   
    )
}

export const Nav = styled.li`
    position: relative;
    top: -8em;
    left: 28%;
    align-items: center;
    color: var(--color-white);
    margin: 0.5em;
    z-index: 10;

    li {
    float: left;
  }

    a {
    display: block;
    padding: 0.6em;
    text-decoration: none;
    color: var(--color-black);
    background-color:var(--color-white);
    border-radius: 12px;
    font-family: 'Open Sans';
    opacity: 0.9;
    z-index: 3;
  }

    a:hover {
    background-color: var(--color-green);
    border-radius: 8px;
    z-index: 3;
  }
   
    .active {
    //background-color: var(--color-red);
    border-radius: 8px;
    text-decoration: underline;
    color: var(--color-black);
}
`