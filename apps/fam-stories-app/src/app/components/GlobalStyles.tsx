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
    padding-top: 12em;
    background-color: var(--color-lighterGreen);
    background-image: url(${brightrootsL});
    background-size: cover;
    background-attachment: scroll;
    border: 2px solid blue;
    z-index: 2;
`
export const HeaderWrapper = styled.div`
    position: absolute;
    left: -8em;
    top: 4.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: fit-content;
    width: 250%;
    //border: solid yellow 2px;
    z-index: 5;
`

export const HeaderContainer = styled.div`
    position: absolute;
    top: 2em;
    left: 7em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 26em;
    height: 16em;
    color: var(--color-white);
    background-color: var(--color-lighterRed);
    opacity: 0.9;
    border-radius: 50%;
    border: 2px dotted var(--color-white);
    box-shadow: 3px 3px 10px grey;
    z-index: 10;
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
export const RelList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    margin:0.25em;
    width: fit-content;
    background-color: var(--color-lighterRed);
    border: 1px solid var(--color-darkerRed);
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1em;
    line-height: 1.6;
    color: var(--color-white);
    border-radius: 0.25em;
    box-shadow: 2px 2px 2px grey;
`

export const BackButton = styled.button`
    position: relative;
    top: 1%;
    left: 0%;
    font-size: 1em;
    margin: 1em 1em 1em 0em;
    padding: 0.5em 0.65em;
    border-radius: 14px;
    border: 1px solid var(--color-darkerRed);
    box-shadow: 3px 3px 3px grey;
    background-color: var(--color-lighterRed);
    color: var(--color-white);
    width: fit-content;

&:hover {
    background-color: var(--color-white);
    border: 1px solid var(--color-darkerRed);
    color: var(--color-darkerRed);
    transition: 0.7s;
}
`
export const AddButton = styled.button`
    font-size: 1em;
    margin: 0.75em;
    padding: 0.5em 0.65em;
    border-radius: 14px;
    box-shadow: 3px 3px 3px grey;
    background-color: var(--color-lighterRed);
    border: 1px solid var(--color-darkerRed);
    color: var(--color-white);
    width: fit-content;

&:hover {
    background-color: var(--color-white);
    border: 1px solid var(--color-darkerRed);
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
    color: var(--color-whiter);
    width: fit-content;

&:hover {
    background-color: var(--color-white);
    color: var(--color-brown);
    transition: 0.7s;
}
`

export const StartButton = styled.button`
position: absolute;
top: 30%;
left: 50%;
color: white;
background-color: var(--color-green);
border: 2px solid var(--color-darkerGreen);
border-radius: 40%;
height: 95px;
width: 95px;
&:hover{
  color: var(--color-white);
  background-color: var(--color-green);
  transition: 0.7s;
}
`
export const Title = styled.h1`
    font-family: 'Cinzel Decorative', cursive;
    font-weight: 600;
    font-size: 5.5em;
    max-width: 40ch;
    text-align: center;
    margin: 0em;
    transform: scale(0.64);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

@keyframes scale {
  100% {
    transform: scale(2);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(10px);
}

span:nth-child(1) {
  animation: fade-in 1.5s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
`

export const SubTitle = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 2em;
    font-style: italic;
    margin: 0.1em;
    padding-left:2em;
   // max-width: 40ch;
    text-align: center;
    transform: scale(0.64);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  margin: 4px;
}

span:nth-child(1) {
  animation: fade-in 2s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
span:nth-child(2) {
  animation: fade-in 2s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 2s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 2s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 2s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 2s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 2s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 2s 2.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 2s 3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 2s 3.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 2s 3.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
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