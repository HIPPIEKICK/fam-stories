import styled from "styled-components/macro";

export const OuterWrapper = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-green);
`
export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    background-color: var(--color-white);
`

export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 3px solid var(--color-green);
    border-radius: 5px;
    background-color: white;
    color: var(--color-red);

&:hover {
    background-color: var(--color-green);
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