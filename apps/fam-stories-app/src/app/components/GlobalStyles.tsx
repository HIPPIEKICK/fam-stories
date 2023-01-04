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
    background-color: var(--color-white);
    //border: 2px solid blue;
`

export const BackButton = styled.button`
    position: absolute;
    top: 5%;
    left: 0%;
    font-size: 1em;
    margin: 1em 0em;
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
    border: 1px solid var(--color-darkerBrown);
    box-shadow: 3px 3px 3px grey;
    background-color: var(--color-brown);
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
    margin: 1em 0em;
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

export const ShowButton = styled.button`
color: var(--color-white);
background-color: var(--color-darkerRed);
border-radius: 30%;
height: 45px;
width: 45px;
border: none;

&:hover {
  color: var(--color-darkerRed);
  background-color: var(--color-white);
}
`
export const StartButton = styled.button`
color: white;
background-color: var(--color-green);
border-radius: 50%;
height: 75px;
width: 75px;
border: none;
&:hover{
  color: var(--color-white);
  background-color: var(--color-brown);
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
    font-size: 1.5em;
`

export const BodyText =styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.6;
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