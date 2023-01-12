import { FormEvent, useState, useEffect } from "react";
import { createMember, updateMember } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { AddButton, Input, Label, ThirdTitle } from "./GlobalStyles";
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';

export const AddMemberForm = () => {
    const { familyMemberId } = useParams();
    const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers)
    const lastFamilyMemberIdAdded = useAppSelector ((store) => store.familyMembers.lastFamilyMemberIdAdded)

    const [name, setName] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [locality, setLocality] = useState('')
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')
    const [isSaved, setIsSaved] = useState(false)
  
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => { 
        if(lastFamilyMemberIdAdded && isSaved) {
            navigate(`/editprofile/${lastFamilyMemberIdAdded}`)
        }
    }, [lastFamilyMemberIdAdded, isSaved, navigate])

    useEffect(() => {
        if (familyMemberId) {
            const familyMember = familyMembers.find(familyMember => familyMember._id === familyMemberId);
            if (familyMember) {
                setName(familyMember.name);
                setBirthYear(familyMember.birthYear);
                setLocality(familyMember.locality);
                setTitle(familyMember.title);
                setId(familyMember._id);
            }
        } 
    }, [familyMemberId, familyMembers]);
    
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(familyMemberId) { 
            dispatch(updateMember({name, birthYear, locality, title, _id: id}))
        } else {
            dispatch(createMember({name, birthYear, locality, title}))
        }
        setIsSaved(true);        
    }

    return <MemberForm onSubmit={onSubmit}>
        {familyMemberId ? <ThirdTitle>Edit Family Member ({familyMemberId})</ThirdTitle> : <ThirdTitle>Add Family Member</ThirdTitle>}
        <Label aria-label="Name" htmlFor="name">Name</Label>
        <Input type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)} />
        <Label aria-label="Birth year" htmlFor="birthYear">Birth Year</Label>
        <Input type="text"
            id="birthYear"
            value={birthYear}
            onChange={e => setBirthYear(e.target.value)} />
        <Label aria-label="Locality" htmlFor="name">Locality</Label>
        <Input type="text"
            id="locality"
            value={locality}
            onChange={e => setLocality(e.target.value)} />
        <Label aria-label="Title" htmlFor="name">Title</Label>
        <Input type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)} />
        {familyMemberId ? <AddButton disabled={name === ''} type="submit"> Save</AddButton> :
            <AddButton disabled={name === ''} type="submit"> Add person</AddButton>}
    </MemberForm>
}

export const MemberForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    width: 12em;
    background-color: var(--color-green);
    border: 1px solid var(--color-darkerGreen);
    font-family: 'Open Sans';
    font-weight: 400;
    border-radius: 0.5em;
    box-shadow: 5px 5px 5px grey;
`