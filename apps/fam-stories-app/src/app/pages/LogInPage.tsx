import React from 'react';
import { Footer } from '../components/Footer';
import { OuterWrapper, TextWrapper, Title, SubTitle, Devices } from '../components/GlobalStyles';
import styled from 'styled-components';
import famphotooldS from '../images/famphotooldS.jpg'
import LogIn from '../components/Login';
import { SubTitle2 } from '../components/Header';

export const LogInPage = () => {
  
  return (
    <OuterWrapper>
        <ClonedWrapper>
            <TextContainer>
                <TitleVar>Welcome to</TitleVar>
                <Title1>FamStories</Title1>
              <SubTitle3>
                <span>See</span><span>your</span><span>roots</span><span>take</span>
                <span>place</span><span>and</span><span>water</span><span>them</span>
                <span>with</span><span>history</span>
              </SubTitle3> 
            </TextContainer>
            <WelcomePicture>
                <img src={famphotooldS} alt="Family Photography" />
            </WelcomePicture>
            <LogIn />
          </ClonedWrapper>
        <Footer />
    </OuterWrapper>
 );
}

const TitleVar = styled(Title)`
    font-size: 1.65em;
    font-weight: 400;

@media ${Devices.tablet} {
    font-size: 2.25em;
    }
@media ${Devices.laptop} {
    font-size: 2.25em;
    }
`

const Title1 = styled(Title)`
  font-size: 4em;
  margin: 0.2em;
  padding-bottom: 0.25em;

  @media ${Devices.tablet} {
    font-size: 5.25em;
    }
  @media ${Devices.laptop} {
    font-size: 7.5em;
    } 
  @media ${Devices.desktop} {
    font-size: 12em;
    }
`
export const SubTitle3 = styled(SubTitle2)`
  font-size: 1.25em;
  max-width: 35ch;
  text-align: center;

@media ${Devices.laptop} {
  font-size: 1.75em; 
  } 
@media ${Devices.desktop} {
  font-size: 2.5em;
  }   
`

const TextContainer = styled(TextWrapper)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  left: 0%;
  top: 6%;
  width: 100%;
  height: 20em;
  z-index: 20;
  padding: 0em;
  margin: 0em;
  background-color: transparent;
  color: var(--color-white);
  //border: 2px solid blue;

  @media ${Devices.tablet} {
      top: 10%;
    }
  @media ${Devices.laptop} {
      top: 15%;  
      left: 8%;
      height: 20em;
      width: fit-content;
    }    
  @media ${Devices.desktop} {
      top: 20%;  
      left: 0%;
      height: 30em;
    }  
`

const ClonedWrapper = styled(TextWrapper)`
  position: relative;
  width: 80%;
  padding: 0em 0.5em;
  margin-bottom: 2em;
  background-color: var(--color-black);
  //border: 2px solid yellow;
  z-index: 5;

  @media ${Devices.laptop} {
    width: 90%;
    }
  @media ${Devices.desktop} {
    left: -10%;
    height: 85vh;
    }
`
const WelcomePicture = styled.div`
    position: relative;
    top: 5%;
    left: 5%;
    background-image: url(${famphotooldS});
    background-color: var(--color-lighterRed);
    background-size: cover;
    opacity: 0.6;
    border-radius: 50%;
    height: 35em;
    width: 35em;
    overflow: hidden; 
    z-index: 10;

    @media ${Devices.tablet} {
      height: 45em;
      width: 45em;
    }
    @media ${Devices.laptop} {
      margin-top: 2em;
      margin-left: -3em;
      height: 35em;
      width: 35em;
    }
    @media ${Devices.desktop} {
      margin-left: -70%;
      height: 70em;
      width: 70em;
    }
`