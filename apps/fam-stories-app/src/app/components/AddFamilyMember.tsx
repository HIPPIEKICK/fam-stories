import { FormEvent, useState, useEffect } from "react";
import { addFamilyMember, editFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
//import AddIcon from '@mui/icons-material/Add';
//import CloseIcon from '@mui/icons-material/Close';
import { EditButton, AddButton } from "./GlobalStyles";
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
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible)
      }

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
        {familyMemberId ? <h2>Edit Family Member ({familyMemberId})</h2> : <h2>Add Family Member</h2>}
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
        {familyMemberId ?  <EditButton disabled={name === ''} type="submit"> Save</EditButton> : 
                        <AddButton disabled={name === ''} type="submit"> Add person</AddButton>}
    </MemberForm>
}

export const MemberForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 1em;
    width: 16em;
    //box-shadow: 1px 1px 3px grey;
    background-color: var(--color-green);
    border: 1px solid var(--color-lighterRed);
    font-family: 'Open Sans';
    font-weight: 600;
    border-radius: 1em;
`