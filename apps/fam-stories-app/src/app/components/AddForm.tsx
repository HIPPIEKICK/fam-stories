import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { AddMemberForm } from "./AddFamilyMember";
import { AddRelationship } from "./AddRelationship";
import styled from "styled-components";
import { Devices } from './GlobalStyles';

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
    top: 11%;
    left: 5%;
    z-index: 5;

@media ${Devices.laptop} {
    top: 5%;
    left: 3%;
    }
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

@media ${Devices.laptop} {
    height: 5em;
    width: 5em;
    }
@media ${Devices.desktop} {
    height: 7em;
    width: 7em;
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