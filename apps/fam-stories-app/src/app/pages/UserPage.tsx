import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, SubTitle, BackButton } from '../components/GlobalStyles';

export const UserPage = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }

  return (
    <OuterWrapper>
      <Header />
        <InnerWrapper>
            <SubTitle>Here is some info about the user or a logg out link/page</SubTitle>
            <BackButton type="button" onClick={onHomeButtonClick}>Return to Home Page</BackButton>
            <Footer />
         </InnerWrapper>
    </OuterWrapper>
    );
}