import styled from "styled-components/macro";
import brightrootsL from '../images/brightrootsL.jpg'

export const OuterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--color-black);
`
export const InnerWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: var(--color-lighterGreen);
    background-image: url(${brightrootsL});
    background-size: cover;
    //border: 2px solid blue;
`

export const TextWrapper = styled.div`
    display: block;
    width: 60%;
    height: fit-content;
    padding: 3%;
    margin: 4%;
    border-radius: 0.3em;
    background-color: var(--color-white);
    opacity: 0.9;
`

export const BackButton = styled.button`
    position: relative;
    top: 1%;
    left: 0%;
    font-size: 1em;
    margin: 1em 1em 1em 0em;
    padding: 0.5em 0.65em;
    border-radius: 14px;
    border: 1px solid var(--color-darkerBrown);
    box-shadow: 3px 3px 3px grey;
    background-color: var(--color-lighterRed);
    color: var(--color-white);
    width: fit-content;

&:hover {
    background-color: var(--color-white);
    color: var(--color-darkerRed);
    transition: 0.7s;
}
`
export const EditButton = styled.button`
    font-size: 1em;
    margin: 1em 0em;
    padding: 0.5em 0.65em;
    border-radius: 14px;
    border: 1px solid var(--color-darkerGreen);
    box-shadow: 3px 3px 3px grey;
    background-color: var(--color-green);
    color: var(--color-white);
    width: fit-content;

&:hover {
    background-color: var(--color-white);
    color: var(--color-brown);
    transition: 0.7s;
}
`
export const AddButton = styled.button`
    font-size: 1em;
    margin: 0.75em;
    padding: 0.5em 0.65em;
    border-radius: 14px;
    border: 1px solid var(--color-darkerRed);
    box-shadow: 3px 3px 3px grey;
    background-color: var(--color-lighterRed);
    color: var(--color-white);
    width: fit-content;

&:hover {
    background-color: var(--color-white);
    color: var(--color-darkerRed);
    transition: 0.7s;
}
`

export const StartButton = styled.button`
position: absolute;
top: 30%;
left: 50%;
color: white;
background-color: var(--color-green);
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
    font-weight: 400;
    font-size: 4.5em;
`

export const SubTitle = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 2em;
    font-style: italic;
`
export const ThirdTitle = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
`
export const ForthTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1.2em;
`
export const BodyText =styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.6;
    font-variant-numeric: oldstyle-nums;
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