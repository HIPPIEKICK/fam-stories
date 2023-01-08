import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { OuterWrapper, TextWrapper, Title, SubTitle, AddButton } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';
import styled from 'styled-components';
import famphotooldS from '../images/famphotooldS.jpg'
import { EditFamForm } from './EditProfilePage';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const onLogInClick = () => {
    navigate('/');
  }
  return (
    
    <OuterWrapper>
      <Navbar />
          <ClonedWrapper>
            <TextContainer>
            <TitleVar>Welcome to</TitleVar>
            <Title1>FamStories</Title1>
            <SubTitle>
              <span>See</span>
              <span>your</span>
              <span>roots</span>
              <span>take</span>
              <span>place</span>
              <span>and</span>
              <span>water</span>
              <span>them</span>
              <span>with</span>
              <span>history</span>
              </SubTitle> 
              </TextContainer>
            <WelcomePicture>
                <img src={famphotooldS} alt="Family Photography" />
            </WelcomePicture>
            <ClonedFamForm>
            <AddButton>Log in</AddButton>
            <AddButton>Register</AddButton>
            </ClonedFamForm>
            </ClonedWrapper>
            <Footer />
    </OuterWrapper>
 );
}

const TitleVar = styled(Title)`
    font-size: 3em;
    font-weight: 400;
`
const Title1 = styled(Title)`
  font-size: 7.5em;
  margin: 0.25em;
`

const TextContainer = styled(TextWrapper)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  left: 20%;
  top: 20%;
  //border: 2px solid blue;
  width: 60%;
  z-index: 20;
  padding: 0em;
  margin: 0em;
  background-color: transparent;
  color: var(--color-white);
`

const ClonedWrapper = styled(TextWrapper)`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 5em;
  margin: 0em;
  background-color: var(--color-black);
  //border: 2px solid red;
  z-index: 5;
`

const ClonedFamForm = styled(EditFamForm)`
  position: absolute;
  bottom: 15%;
  right: 30%;
  width: 6em;
  padding: 1.5em;
  border-radius: 0.5em;
  box-shadow: 3px 3px 3px grey;
  z-index: 12;
  background-color: var(--color-white);
`

const WelcomePicture = styled.div`
    position: relative;
    top: 10%;
    left: 12%;
    background-image: url(${famphotooldS});
    background-color: var(--color-lighterRed);
    background-size: cover;
    opacity: 0.6;
    border-radius: 50%;
    height: 50em;
    width: 50em;
    overflow: hidden; 
    z-index: 10;
`

//const LogInBtn = styled(AddButton)`
   // background-color: var(--color-white);
    //border: 1px solid var(--color-darkerRed);
   // color: var(--color-darkerRed);

//&:hover {
 //   background-color: var(--color-darkerRed);
  //  border: 1px solid var(--color-Red);
  //  color: var(--color-white);
//}
//`