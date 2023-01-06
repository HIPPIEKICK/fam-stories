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
            {visible ? < CloseIcon /> : < AddIcon  />}
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
    border-radius: 50%;
    height: 5em;
    width: 5em;
    border: none;

    &:hover {
    color: var(--color-red);
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
    background-color: #f2a0ae;
    box-shadow: 3px 3px 3px grey;
    border-radius: 1em;
    z-index: 5;
`