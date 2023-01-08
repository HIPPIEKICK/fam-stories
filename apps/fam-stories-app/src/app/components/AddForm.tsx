import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { AddMemberForm } from "./AddFamilyMember";
import { AddRelationship } from "./AddRelationship";
import styled from "styled-components";

const AddForm = () => {
    const [visible, setVisible] = useState(false);

const toggle = () => {
        setVisible(!visible)
      }

    return(
        <FormWrapper>
             <ShowButton
            onClick={toggle}>
            {visible ? < CloseIcon aria-label="Close" /> : < AddIcon aria-label="Add" />}
            </ShowButton>   
        { 
        visible? <AddFamForm>
            <AddMemberForm />
            <AddRelationship />
            </AddFamForm>: null
        }
        </FormWrapper>
    )
}

export default AddForm;

export const FormWrapper = styled.div`
    position: absolute;
    top: 5%;
    right: 15%;
    z-index: 5;
`

export const ShowButton = styled.button`
    color: var(--color-black);
    background-color: var(--color-green);
    border: 2px solid var(--color-darkerGreen);
    border-radius: 50%;
    height: 6em;
    width: 6em;

    &:hover {
    color: var(--color-black);
    background-color: var(--color-white);
    border: 2px solid var(--color-green);
    z-index: 5;
    }
`
export const AddFamForm = styled.div`
    position: absolute;
    top: -50%;
    left: 200%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.75em;
    background-color: var(--color-white);
    box-shadow: 5px 5px 5px #5a5a5a;
    border-radius: 0.5em;
    z-index: 5;
`