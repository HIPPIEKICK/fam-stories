import { useEffect } from "react";
import { editFamilyMember, FamilyMember, hydrateFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export function ListFamilyMembers() {
    const dispatch = useAppDispatch();
    useEffect(() => { 
        dispatch(hydrateFamilyMember());
    }, [dispatch]);
    const familyMembers = useAppSelector<FamilyMember[]>(state => state.familyMembers.familyMembers);
   
    const listOfFamilyMembers = familyMembers.map((familyMember) => {
        
        const familyRelationshipList = familyMember.relationships && familyMember.relationships.map((familyRelationship) => { 
            const relationshipMemberData = familyMembers.find((familyMember) => familyMember.id === familyRelationship.familyMemberId);
            return <div>{relationshipMemberData?.name} </div>;
        });

        return (
            <li key={familyMember.id}>
                {familyMember.name} - {familyMember.birthYear}
                <div>{familyRelationshipList}</div>
                <button onClick={() => dispatch(editFamilyMember(familyMember.id))}>Redact</button>
            </li>
        );
    });

    return (<ul>{listOfFamilyMembers}</ul>);
}