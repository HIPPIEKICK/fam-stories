import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, TextWrapper, Title, SubTitle, AddButton, EditButton } from '../components/GlobalStyles';

const Welcome = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <OuterWrapper>
        <InnerWrapper>
          <Header />
          <TextWrapper>
            <Title>Welcome to FamStories</Title>
            <SubTitle>See your roots take place and water them with history</SubTitle>
            <AddButton>Log in</AddButton>
            <EditButton>Register</EditButton>
            </TextWrapper>
            <Footer />
      </InnerWrapper>
    </OuterWrapper>
 );
}
export default Welcome;
