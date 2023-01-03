import React, { useState } from 'react'

/*import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';*/
import { AddMemberForm } from "./AddFamilyMember";
import { AddRelationship } from "./AddRelationship";
import styled from "styled-components";
import { ShowButton, OpenButton, CloseButton } from "./GlobalStyles";

const AddForm = () => {
    const [visible, setVisible] = useState(false);

const toggleClass = () => {
        setVisible(!visible)
      }
    return(
        <section>
        <ShowButton
          onClick={toggleClass}>
          {visible ? < CloseButton /> : < OpenButton />}
        </ShowButton>
        <AddFamForm>
            <AddMemberForm />
            <AddRelationship />
        </AddFamForm>
        </section>
    )
}

export default AddForm;

export const AddFamForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
    background-color:var(--color-whiter); 
    box-shadow: 3px 3px 3px 4px grey;
    border-radius: 1em;
`