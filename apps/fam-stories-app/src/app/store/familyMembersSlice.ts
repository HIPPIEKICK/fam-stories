import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";

import { 
  FamilyMember, 
  FamilyMemberInput, 
  FamilyMemberEditInput, 
  RelationshipInput, 
  RelationshipType } from "@fam-stories/common-utils";

const initialState = {
  familyMembers: [] as FamilyMember[],
  lastFamilyMemberIdAdded: '',
  isHydrating: false 
}

export const getEveryone = createAsyncThunk(
  //action type string
  'family/everyone',
  // callback function
  async () => {
    const res = await fetch('http://localhost:3333/family/everyone').then(
    (data) => data.json()
  )
  return res
})

export const createMember = createAsyncThunk(
  //action type string
  'family/createMember',
  // callback function
  async (createMemberInput: FamilyMemberInput) => {
    const insertResponse = await fetch('http://localhost:3333/family/createMember', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createMemberInput)
    }).then((data) => data.json());

    const everyone = await fetch('http://localhost:3333/family/everyone').then(
      (data) => data.json())

  return {everyone, insertResponse}
})

export const updateMember = createAsyncThunk(
  //action type string
  'family/updateMember',
  // callback function
  async (updateMemberInput: FamilyMemberEditInput) => {
    const updateResponse = await fetch('http://localhost:3333/family/updateMember', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateMemberInput)
    }).then((data) => data.json());

    const everyone = await fetch('http://localhost:3333/family/everyone').then(
      (data) => data.json())

  return {everyone, updateResponse}
})

export const updateRelationship = createAsyncThunk(
  //action type string
  'family/updateRelationship',
  // callback function
  async (updateRelationshipInput: RelationshipInput) => {
    const updateResponse = await fetch('http://localhost:3333/family/updateRelationship', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateRelationshipInput)
    }).then((data) => data.json());

    const everyone = await fetch('http://localhost:3333/family/everyone').then(
      (data) => data.json())

  return {everyone, updateResponse}
})

export const familyMembersSlice = createSlice({
    name: 'familyMembers',
    initialState,
    reducers: {
      // addFamilyMember: (state, action: PayloadAction<FamilyMemberInput>) => {
      //   const newFamilyMember = { ... action.payload, id: generateId(), relationships: [] };
      //   state.familyMembers.push(newFamilyMember);
      //   localStorage.setItem('familyMembers', JSON.stringify(state.familyMembers));
      //   state.lastFamilyMemberIdAdded = newFamilyMember._id;
      //   return state;
      // },
      
      editFamilyMember: (state, action: PayloadAction<FamilyMemberEditInput>) => {
        const indexOfMemberToEdit = state.familyMembers.findIndex(member => member._id === action.payload._id);
       const memberToEdit = state.familyMembers[indexOfMemberToEdit];
        state.familyMembers[indexOfMemberToEdit] = { ...action.payload, relationships: memberToEdit.relationships };
        localStorage.setItem('familyMembers', JSON.stringify(state.familyMembers));
        return state;
      },

      addRelationshipToMember: (state, action: PayloadAction<RelationshipInput>) => {
        const indexOfMemberToEdit = state.familyMembers.findIndex(member => member._id === action.payload.fromFamilyMemberId);
        const indexOfMemberSecondToEdit = state.familyMembers.findIndex(member => member._id === action.payload.toFamilyMemberId);
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

      // hydrateFamilyMember: (state, action: PayloadAction<void>) => {
      //   const storedFamilyMembersString = localStorage.getItem('familyMembers');
      //   if (storedFamilyMembersString) {
      //       state.familyMembers = JSON.parse(storedFamilyMembersString);
      //   }
      //   return state;
      // }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getEveryone.fulfilled, (state, action) => {
          state.familyMembers = action.payload;
          state.isHydrating = false;
        })
        builder
        .addCase(getEveryone.pending, (state, action) => {
          state.isHydrating = true;
        })

        builder
        .addCase(createMember.fulfilled, (state, action) => {
          state.familyMembers = action.payload.everyone;
          state.lastFamilyMemberIdAdded = action.payload.insertResponse.insertedId;
        })

        builder
        .addCase(updateMember.fulfilled, (state, action) => {
          state.familyMembers = action.payload.everyone; //familyMembers?
          state.lastFamilyMemberIdAdded = action.payload.updateResponse.insertedId;
        })

        builder
        .addCase(updateRelationship.fulfilled, (state, action) => {
          state.familyMembers = action.payload.everyone; //familyMemberId?
          state.lastFamilyMemberIdAdded = action.payload.updateResponse.insertedId;
        })
    }
  })

export const { addRelationshipToMember } = familyMembersSlice.actions;