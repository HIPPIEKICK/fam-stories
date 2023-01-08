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
    position: relative;
    top: 4.5em;
    left: 30%;
    align-items: center;
    color: var(--color-white);
    margin: 0.5em;
    z-index: 3;

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
    opacity: 0.8;
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