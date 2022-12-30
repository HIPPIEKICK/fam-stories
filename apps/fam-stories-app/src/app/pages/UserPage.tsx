import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, SubTitle, Button } from '../components/GlobalStyles';

export const UserPage = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }

  return (
    <OuterWrapper>
        <InnerWrapper>
            <Header />
            <SubTitle>Here is some info about the user or a logg out link/page</SubTitle>
            <Button type="button" onClick={onHomeButtonClick}>Return to Home Page</Button>
            <Footer />
         </InnerWrapper>
    </OuterWrapper>
    );
}