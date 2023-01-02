import styled from "styled-components/macro";

export const OuterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--color-white);
`
export const InnerWrapper = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    height :100vh;
    background-color: var(--color-white);
    border: 2px solid blue;
`

export const Button = styled.button`
    font-size: 1em;
    margin: 1em 0em;
    padding: 0.25em 0.5em;
    border-radius: 10px;
    border: 1px solid var(--color-black);
    box-shadow: 5px 5px 5px grey;
    background-color: var(--color-brown);
    color: var(--color-white);
    width: fit-content;

&:hover {
    background-color: var(--color-white);
    color: var(--color-brown);
    transition: 0.7s;
}
`
export const ExpandButton = styled.button`
color: white;
background-color: #FFB800;
border-radius: 50%;
height: 55px;
width: 55px;
border: none;
&:hover{
  color: #FFB800;
  background-color: white;
  transition: ease-out 300ms;
}
`
export const OpenButton = styled.button`
color: white;
background-color: var(--color-red);
border-radius: 50%;
height: 55px;
width: 55px;
border: none;
&:hover{
  color: var(--color-red);
  background-color: white;
  transition: ease-out 300ms;
}
`
export const CloseButton = styled.button`
color: white;
background-color: var(--color-green);
border-radius: 50%;
height: 55px;
width: 55px;
border: none;
&:hover{
  color: var(--color-green);
  background-color: white;
  transition: ease-out 300ms;
}
`
export const StartButton = styled.button`
color: white;
background-color: #603b1cbd;
border-radius: 50%;
height: 75px;
width: 75px;
border: none;
&:hover{
  color: var(--color-white);
  background-color: var(--color-green);
  transition: 0.7s;
}
`
export const Title = styled.h1`
    font-family: 'Cinzel Decorative', cursive;
    font-weight: 600;
    font-size: 4em;
`

export const SubTitle = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 2em;
`

export const ThirdTitle = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.7em;
`

export const BodyText =styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1em;
`

const sizes = {
    tablet: '668px',
    laptop: '1024px',
    desktop: '2560px'
  };
  
  export const Devices = {
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`
  };