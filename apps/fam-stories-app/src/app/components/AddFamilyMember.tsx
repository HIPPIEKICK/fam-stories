import { FormEvent, useState, useEffect } from "react";
import { addFamilyMember, editFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { EditButton, AddButton, ThirdTitle } from "./GlobalStyles";
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
            const familyMember = familyMembers.find(familyMember => familyMember.id === familyMemberId);
            if (familyMember) {
                setName(familyMember.name);
                setBirthYear(familyMember.birthYear);
                setLocality(familyMember.locality);
                setTitle(familyMember.title);
                setId(familyMember.id);
            }
        }
        
    }, [familyMemberId, familyMembers]);
    
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(familyMemberId) { 
            dispatch(editFamilyMember({name, birthYear, locality, title, id}))
        } else {
            dispatch(addFamilyMember({name, birthYear, locality, title}))
        }
        setIsSaved(true);        
    }

    return <MemberForm onSubmit={onSubmit}>
        {familyMemberId ? <ThirdTitle>Edit Family Member ({familyMemberId})</ThirdTitle> : <ThirdTitle>Add Family Member</ThirdTitle>}
        <label aria-label="Name" htmlFor="name">Name</label>
        <input type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)} />
        <label aria-label="Birth year" htmlFor="birthYear">Birth Year</label>
        <input type="text"
            id="birthYear"
            value={birthYear}
            onChange={e => setBirthYear(e.target.value)} />
        <label aria-label="Locality" htmlFor="name">Locality</label>
        <input type="text"
            id="locality"
            value={locality}
            onChange={e => setLocality(e.target.value)} />
        <label aria-label="Title" htmlFor="name">Title</label>
        <input type="text"
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