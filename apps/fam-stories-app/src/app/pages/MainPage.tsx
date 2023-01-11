import {useEffect} from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import AddForm from '../components/AddForm';
import { OuterWrapper, InnerWrapper, StartButton, ThirdTitle, SubTitle, Devices } from '../components/GlobalStyles';
import { useAppSelector, useAppDispatch } from "../store/store";
import { hydrateFamilyMember } from '../store/familyMembersSlice';
import { TheTree } from '../components/TheTree';
import { familyMembersToGraph } from '../store/familyMembersToGraph';
import styled from 'styled-components';
import { Navbar } from '../components/NavBar';

export const RootsPage = () => {
  const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers);
  const graphData = familyMembersToGraph(familyMembers);

  const dispatch = useAppDispatch();
  useEffect(() => { 
      dispatch(hydrateFamilyMember());
  }, [dispatch]);

  return (
    <OuterWrapper>
        <InnerWrapper>
        <Navbar />
        <Header />
        <RootWrapper>
          <SubTitle>Fill in the form and let the graph make the roots </SubTitle>
              <AddForm />
              <RootContainer>
              <StartButton>ME</StartButton>
              <TheTree graphData={graphData} />
              </RootContainer>
            </RootWrapper>
          <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};

export const RootWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: fit-content;
  //border: 4px solid purple;
  margin: 4% 0em;
  padding: 3em 1em;
  background-color: var(--color-lighterRed);
  opacity: 0.9;
  border-radius: 0.3em;

@media ${Devices.tablet} {
    top:-4em;
    }

@media ${Devices.laptop} {
    top: 8em;
    margin: 4% 0em 10% 0em;
    } 
`

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 0.3em;
  margin: 2em 0em;
  background-color: var(--color-white);
`

