import { FormEvent, useState } from "react";
import { addFamilyMember, addRelationshipToMember, FamilyMember, listOfRelationShipTypes } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import styled from "styled-components";
import { Button } from "./GlobalStyles";

export const AddRelationship = () => {
    const [fromFamilyMemberId, setFromFamilyMemberId] = useState('');
    const [toFamilyMemberId, setToFamilyMemberId] = useState('');
    const [relationtype, setRelationtype] = useState('');

    const familyMembers = useAppSelector<FamilyMember[]>(state => state.familyMembers.familyMembers);
    
    
    const dispatch = useAppDispatch();
    
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(addRelationshipToMember({fromFamilyMemberId, toFamilyMemberId, relationtype}))
    }

    const relationOptionlist = listOfRelationShipTypes.map((relationtype) => {return <option value={relationtype}>{relationtype}</option>});
    const familymemberOptionList = familyMembers.map((familyMember) => {return <option value={familyMember.id}>{familyMember.name}</option>});

    return <RelationForm onSubmit={onSubmit}>
        <Select id="fromFamilyMemberId" 
                value={fromFamilyMemberId} 
                onChange={e => setFromFamilyMemberId(e.target.value)}>{familymemberOptionList}</Select>
                <label htmlFor="fromFamilyMemberId"></label>
        <Label htmlFor="relationtype">is</Label>
        <Select id="relationtype" 
                value={relationtype} 
                onChange={e => setRelationtype(e.target.value)}>{relationOptionlist}</Select>       
        <Label htmlFor="toFamilyMemberId">to</Label>
        <Select id="toFamilyMemberId" 
                value={toFamilyMemberId} 
                onChange={e => setToFamilyMemberId(e.target.value)}>{familymemberOptionList}</Select>
        <Button type="submit">Add relation</Button>
    </RelationForm>
};

export const RelationForm = styled.form`
    display: flex;
    padding: 0.5em;
    margin: 1em;
    width: fit-content;
    box-shadow: 5px 5px 5px grey;
    background-color: var(--color-green);
    border: 1px solid var(--color-lighterRed);
    font-family: 'Open Sans';
    font-weight: 600;
    border-radius: 1em;
`
export const Select = styled.select`
    background-color: white;
    margin: 0.75em;
    border-radius: 0.5em;
`

export const Label = styled.label`
    display: inline-block;
    margin: 1em;
`