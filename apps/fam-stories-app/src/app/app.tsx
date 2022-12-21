import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AddMemberForm } from './components/AddFamilyMember';
import { ListFamilyMembers } from './components/ListFamilyMembers';
import { AddRelationship } from './components/AddRelationship';


const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Provider store={store}>
        <ListFamilyMembers />
        <AddMemberForm />
        <AddRelationship />
      </Provider>
    </StyledApp>
  );
}

export default App;
