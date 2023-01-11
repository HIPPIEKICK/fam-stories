import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, AddButton, TextWrapper, Title } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';
import { AboutContainer, AboutWrapper } from './AboutAppPage';
import { FamContainer, FamWrapper } from '../components/ListFamilyMembers';

export const UserPage = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/main');
  }
  const onLogOutClick = () => {
    navigate('/user');
  }

  return (
    <OuterWrapper>
        <InnerWrapper>
          <Navbar />
          <FamContainer>
            <FamWrapper>
                <Title> <span>Users page</span></Title>
              </FamWrapper>                  
            </FamContainer>
            <TextWrapper>
            <ThirdTitle>Here is some info about the user or a logg out link/page</ThirdTitle>
            <BackButton type="button" onClick={onHomeButtonClick}>Return to Home Page</BackButton>
            <BackButton type="button" onClick={onLogOutClick}>Log out</BackButton>
            </TextWrapper>
            <Footer />
         </InnerWrapper>
    </OuterWrapper>
    );
}

