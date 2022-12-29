import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OuterWrapper, InnerWrapper, SubTitle, Button } from './GlobalStyles';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <OuterWrapper>
        <InnerWrapper>
            <Header />
            <SubTitle>Sorry there is no such page</SubTitle>
            <Button type="button" onClick={onHomeButtonClick}>Return to Home Page</Button>
            <Footer />
      </InnerWrapper>
    </OuterWrapper>
 );
}
export default NotFound;