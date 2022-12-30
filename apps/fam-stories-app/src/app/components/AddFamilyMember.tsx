import { FormEvent, useState } from "react";
import { addFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch } from "../store/store";

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

    return <form onSubmit={onSubmit}>
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
        <input type="text" 
                id="locality" 
                value={locality} 
                onChange={e => setLocality(e.target.value)} />    
        <input type="text" 
                id="title" 
                value={title} 
                onChange={e => setTitle(e.target.value)} />            
        <button type="submit">Add</button>
    </form>

}

