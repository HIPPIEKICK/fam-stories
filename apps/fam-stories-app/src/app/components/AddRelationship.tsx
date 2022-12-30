import { FormEvent, useState } from "react";
import { addRelationshipToMember, FamilyMember, listOfRelationShipTypes } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

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

    return <form onSubmit={onSubmit}>
        <label htmlFor="fromFamilyMemberId">From Family Member</label>
        <select id="fromFamilyMemberId" 
                value={fromFamilyMemberId} 
                onChange={e => setFromFamilyMemberId(e.target.value)}>{familymemberOptionList}</select>
        <label htmlFor="toFamilyMemberId">To Family Member</label>
        <select id="toFamilyMemberId" 
                value={toFamilyMemberId} 
                onChange={e => setToFamilyMemberId(e.target.value)}>{familymemberOptionList}</select>
        <label htmlFor="relationtype">Relation Type</label>
        <select id="relationtype" 
                value={relationtype} 
                onChange={e => setRelationtype(e.target.value)}>{relationOptionlist}</select>
        <button type="submit">Add</button>
    </form>
};

