import {useEffect} from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddFamForm } from '../components/AddForm';
import { OuterWrapper, InnerWrapper, ThirdTitle, BodyText, StartButton } from '../components/GlobalStyles';
import { useAppSelector, useAppDispatch } from "../store/store";
import { hydrateFamilyMember } from '../store/familyMembersSlice';
import { TheTree } from '../components/TheTree';
import { familyMembersToGraph } from '../store/familyMembersToGraph';

export const RootsPage = () => {
  const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers);
  const graphData = familyMembersToGraph(familyMembers);

  const dispatch = useAppDispatch();
  useEffect(() => { 
      dispatch(hydrateFamilyMember());
  }, [dispatch]);

  return (
    <OuterWrapper>
      <Header />
        <InnerWrapper>
            <ThirdTitle> Here will the d3 graph make some kind of root system</ThirdTitle>
            <StartButton>Start</StartButton>
            <BodyText> An add and close button to show the form</BodyText>
            <TheTree graphData={graphData} />
            <AddFamForm>
              <AddMemberForm />
            </AddFamForm>
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};