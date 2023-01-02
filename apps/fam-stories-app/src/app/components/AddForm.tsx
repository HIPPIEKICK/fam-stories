import React, { useState } from 'react'

/*import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';*/
import { AddMemberForm } from "./AddFamilyMember";
import { AddRelationship } from "./AddRelationship";
import styled from "styled-components";
import { ExpandButton, OpenButton, CloseButton } from "./GlobalStyles";

const AddForm = () => {
    const [visible, setVisible] = useState(false)

const toggleClass = () => {
        setVisible(!visible)
      }
    return(
        <section>
        <ExpandButton
          onClick={toggleClass}>
          {visible ? < CloseButton /> : < OpenButton />}
        </ExpandButton>
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
    background-color:var(--color-whiter); 
    box-shadow: 4px 4px 4px 5px grey;
    border-radius: 1em;
`