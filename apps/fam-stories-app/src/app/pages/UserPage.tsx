import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, AddButton } from '../components/GlobalStyles';

export const UserPage = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  const onLogOutClick = () => {
    navigate('/userpage');
  }

  return (
    <OuterWrapper>
      <Header />
        <InnerWrapper>
            <ThirdTitle>Here is some info about the user or a logg out link/page</ThirdTitle>
            <BackButton type="button" onClick={onHomeButtonClick}>Return to Home Page</BackButton>
            <AddButton type="button" onClick={onLogOutClick}>Log out</AddButton>
            <Footer />
         </InnerWrapper>
    </OuterWrapper>
    );
}