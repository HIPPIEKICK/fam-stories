import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, TextWrapper, Title } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';
import { FamContainer, FamWrapper } from '../components/ListFamilyMembers';
import { useAppDispatch } from '../store/store';
import { getEveryone } from '../store/familyMembersSlice';

export const UserPage = () => {

  const dispatch = useAppDispatch();
  useEffect(() => { 
      dispatch(getEveryone());
  }, [dispatch]);
  
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

