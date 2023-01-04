import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { AddMemberForm } from "./AddFamilyMember";
import { AddRelationship } from "./AddRelationship";
import styled from "styled-components";
import { ShowButton} from "./GlobalStyles";

const AddForm = () => {
    const [visible, setVisible] = useState(false);

const toggle = () => {
        setVisible(!visible)
      }

    return(
        <div>
        <AddFamForm>
            <AddMemberForm />
            <ShowButton
            onClick={toggle}>
            {visible ? < CloseIcon /> : < AddIcon  />}
            </ShowButton>
            <AddRelationship />
        </AddFamForm>
        </div>
    )
}

export default AddForm;

export const AddFamForm = styled.div`
    position: absolute;
    top: 10%;
    left: 0%;
    display: flex;
    flex-direction: column;
    background-color: var(--color-whiter); 
    box-shadow: 3px 3px 3px grey;
    border-radius: 1em;
`