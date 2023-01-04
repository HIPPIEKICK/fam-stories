import { FormEvent, useState } from "react";
import { addRelationshipToMember, FamilyMember, listOfRelationShipTypes } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import styled from "styled-components";
import { EditButton } from "./GlobalStyles";
import { useParams } from 'react-router-dom';

export const AddRelationship = () => {
    const [toFamilyMemberId, setToFamilyMemberId] = useState('');
    const [relationtype, setRelationtype] = useState('');

    const familyMembers = useAppSelector<FamilyMember[]>(state => state.familyMembers.familyMembers);
    const { familyMemberId } = useParams();
    const familyMember = familyMembers.find(familyMember => familyMember.id === familyMemberId);

    const dispatch = useAppDispatch();
    
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(familyMemberId) {
            dispatch(addRelationshipToMember({fromFamilyMemberId: familyMemberId, toFamilyMemberId, relationtype}))
        }
    }

    const relationOptionlist = [
        <option value="">Select a relation</option>,
        ...listOfRelationShipTypes.map((relationtype) => {return <option value={relationtype}>{relationtype}</option>})]
    const familymemberOptionList = [
        <option value="">Select a family member</option>,
        ...familyMembers.map((familyMember) => {return <option value={familyMember.id}>{familyMember.name}</option>})
    ];
    

    const relationshipList = familyMember?.relationships.map((relationship, index) => { 
        const member = familyMembers.find(familyMember => familyMember.id === relationship.familyMemberId);
        return <div key={index}>{relationship.relationtype} { member?.name }</div>
    });

    return <RelationForm onSubmit={onSubmit}>
              
        <Label htmlFor="relationtype"></Label>
        <Select id="relationtype" 
                value={relationtype} 
                onChange={e => setRelationtype(e.target.value)}>{relationOptionlist}</Select>       
        <Label htmlFor="toFamilyMemberId">to</Label>
        <Select id="toFamilyMemberId" 
                value={toFamilyMemberId} 
                onChange={e => setToFamilyMemberId(e.target.value)}>{familymemberOptionList}</Select>
        <EditButton disabled={toFamilyMemberId === '' || relationtype === ''} type="submit">Add relation</EditButton>
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