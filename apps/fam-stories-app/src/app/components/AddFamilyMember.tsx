import { FormEvent, useState } from "react";
import { addFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch } from "../store/store";
import { Button } from "./GlobalStyles";
import styled from "styled-components";

export const AddMemberForm = () => {
    const [name, setName] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [locality, setLocality] = useState('')
    const [title, setTitle] = useState('')
    
    const dispatch = useAppDispatch();
    
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(addFamilyMember({name, birthYear, locality, title}))
    }

    return <MemberForm onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" 
                id="name" 
                value={name} 
                onChange={e => setName(e.target.value)} />
        <label htmlFor="birthYear">Birth Year</label>
        <input type="text" 
                id="birthYear" 
                value={birthYear} 
                onChange={e => setBirthYear(e.target.value)} />
        <label htmlFor="name">Locality</label>        
        <input type="text" 
                id="locality" 
                value={locality} 
                onChange={e => setLocality(e.target.value)} />   
        <label htmlFor="name">Title</label>         
        <input type="text" 
                id="title" 
                value={title} 
                onChange={e => setTitle(e.target.value)} />            
        <Button type="submit">Add person</Button>
    </MemberForm>
}

export const MemberForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 1em;
    width: 20em;
    box-shadow: 5px 5px 5px grey;
    background-color: var(--color-green);
    border: 1px solid var(--color-lighterRed);
    font-family: 'Open Sans';
    font-weight: 600;
    border-radius: 1em;
`