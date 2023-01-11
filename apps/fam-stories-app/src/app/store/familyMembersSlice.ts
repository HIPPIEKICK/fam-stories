import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateId } from "../idHelper";
import { AnyARecord } from "dns";

export enum RelationshipType { 
    Father = 'Father',
    Mother = 'Mother',
    Son = 'Son',
    Daughter = 'Daughter',
    Brother = 'Brother',
    Sister = 'Sister',
}

export const listOfRelationShipTypes = Object.values(RelationshipType);
type Relationship = { 
    relationtype: RelationshipType;
    familyMemberId: string;
}
type FamilyMemberInput = { 
    name: string;
    birthYear: string;
    locality: string;
    title: string
};

type FamilyMemberEditInput = & FamilyMemberInput & { 
    id: string;
}

export type FamilyMember = FamilyMemberInput & { 
    id: string;
    relationships: Relationship[];
};

const initialState = {
    familyMembers: [] as FamilyMember[],
    lastFamilyMemberIdAdded: '', 
}

type RelationshipInput = {
    relationtype: string;
    fromFamilyMemberId: string;
    toFamilyMemberId: string;
}

export const familyMembersSlice = createSlice({
    name: 'familyMembers',
    initialState,
    reducers: {
      addFamilyMember: (state, action: PayloadAction<FamilyMemberInput>) => {
        const newFamilyMember = { ... action.payload, id: generateId(), relationships: [] };
        state.familyMembers.push(newFamilyMember);
        localStorage.setItem('familyMembers', JSON.stringify(state.familyMembers));
        state.lastFamilyMemberIdAdded = newFamilyMember.id;
        return state;
      },
      
      editFamilyMember: (state, action: PayloadAction<FamilyMemberEditInput>) => {
        const indexOfMemberToEdit = state.familyMembers.findIndex(member => member.id === action.payload.id);
        const memberToEdit = state.familyMembers[indexOfMemberToEdit];
        state.familyMembers[indexOfMemberToEdit] = { ...action.payload, relationships: memberToEdit.relationships };
        localStorage.setItem('familyMembers', JSON.stringify(state.familyMembers));
        return state;
      },

      addRelationshipToMember: (state, action: PayloadAction<RelationshipInput>) => {
        const indexOfMemberToEdit = state.familyMembers.findIndex(member => member.id === action.payload.fromFamilyMemberId);
        const indexOfMemberSecondToEdit = state.familyMembers.findIndex(member => member.id === action.payload.toFamilyMemberId);
        const memberToEdit = state.familyMembers[indexOfMemberToEdit];
        const secondMemberToEdit = state.familyMembers[indexOfMemberSecondToEdit];

        console.log('memberToEdit', memberToEdit);
        console.log('secondMemberToEdit', action.payload.toFamilyMemberId);


        memberToEdit.relationships.push({ relationtype:(<any>RelationshipType)[action.payload.relationtype], familyMemberId: action.payload.toFamilyMemberId });
        secondMemberToEdit.relationships.push({ relationtype:(<any>RelationshipType)[action.payload.relationtype], familyMemberId: action.payload.fromFamilyMemberId });
        state.familyMembers[indexOfMemberToEdit] = { ...memberToEdit };
        state.familyMembers[indexOfMemberSecondToEdit] = { ...secondMemberToEdit };
        localStorage.setItem('familyMembers', JSON.stringify(state.familyMembers));
        return state;
      },

      hydrateFamilyMember: (state, action: PayloadAction<void>) => {
        const storedFamilyMembersString = localStorage.getItem('familyMembers');
        if (storedFamilyMembersString) {
            state.familyMembers = JSON.parse(storedFamilyMembersString);
        }
        return state;
      }
    },
  })

export const { addFamilyMember, hydrateFamilyMember, editFamilyMember, addRelationshipToMember } = familyMembersSlice.actions;