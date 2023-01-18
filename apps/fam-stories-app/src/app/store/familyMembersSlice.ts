import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { 
  FamilyMember, 
  FamilyMemberInput, 
  FamilyMemberEditInput, 
  RelationshipInput, 
  RelationshipType } from "@fam-stories/common-utils";
import { RootState } from "./store";

const initialState = {
  familyMembers: [] as FamilyMember[],
  lastFamilyMemberIdAdded: '',
  isHydrating: false 
}

const fetchEveryOne = async (accessToken:string|null) => { 
  return fetch('http://localhost:3333/family/everyone', {
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': accessToken || ''
    }
  }).then(
  (data) => data.json()
)
}

export const getEveryone = createAsyncThunk(
  //action type string
  'family/everyone',
  // callback function
  async (_arg,  { getState }) => {
    const state  = getState() as RootState; 
    const res = await fetchEveryOne(state.user.accessToken);
    return res;
})



export const createMember = createAsyncThunk(
  //action type string
  'family/createMember',
  // callback function
  async (createMemberInput: FamilyMemberInput, { getState }) => {
    const state  = getState() as RootState; 

    const insertResponse = await fetch('http://localhost:3333/family/createMember', {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': state.user.accessToken || ''
        },
        body: JSON.stringify(createMemberInput)
    }).then((data) => data.json());

    const everyone = await fetchEveryOne(state.user.accessToken);

  return {everyone, insertResponse}
})

export const updateMember = createAsyncThunk(
  //action type string
  'family/updateMember',
  // callback function
  async (updateMemberInput: FamilyMemberEditInput, { getState }) => {
    const state  = getState() as RootState; 

    const updateResponse = await fetch('http://localhost:3333/family/updateMember', {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': state.user.accessToken || '' 
        },
        body: JSON.stringify(updateMemberInput)
    }).then((data) => data.json());

    const everyone = await fetchEveryOne(state.user.accessToken);

  return {everyone, updateResponse}
})

export const updateRelationship = createAsyncThunk(
  //action type string
  'family/updateRelationship',
  // callback function
  async (updateRelationshipInput: RelationshipInput, { getState }) => {
    console.log('updateRelationshipInput', updateRelationshipInput);
    const state  = getState() as RootState; 
    console.log('12344234234')
    let memberToUpdate = state.familyMembers.familyMembers.find(member => member._id === updateRelationshipInput.fromFamilyMemberId);
    console.log('memberToUpdate', memberToUpdate);
    console.log('w42342342')
    if(!memberToUpdate) {
      
      throw new Error('memberToUpdate not found');
    }

    console.log('NO RELATIONSHIPS')
    
    const dataToAdd = { 
      relationtype: RelationshipType.Daughter, 
      familyMemberId: '63bf10d1e2d6584b528a9fe5'
    }
    console.log('dataToAdd', dataToAdd);
    if(memberToUpdate.relationships) {
      memberToUpdate.relationships.push(dataToAdd)
    } else {
      memberToUpdate = { ...memberToUpdate, relationships: [dataToAdd] }
    }

    const updateResponse = await fetch('http://localhost:3333/family/updateMember', {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': state.user.accessToken || '' 
        },
        body: JSON.stringify(memberToUpdate)
    }).then((data) => data.json());

    const everyone = await fetchEveryOne(state.user.accessToken);

  return {everyone, updateResponse}
})

export const familyMembersSlice = createSlice({
    name: 'familyMembers',
    initialState,
    reducers: {
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
        })

        builder
        .addCase(updateRelationship.fulfilled, (state, action) => {
          state.familyMembers = action.payload.everyone; //familyMemberId?
        })
    }
  })

