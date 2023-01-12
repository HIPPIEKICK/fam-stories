export enum RelationshipType { 
  Father = 'Father',
  Mother = 'Mother',
  Son = 'Son',
  Daughter = 'Daughter',
  Brother = 'Brother',
  Sister = 'Sister',
}

export const listOfRelationShipTypes = Object.values(RelationshipType);

export type Relationship = { 
  relationtype: RelationshipType;
  familyMemberId: string;
}

export type FamilyMemberInput = { 
  name: string;
  birthYear: string;
  locality: string;
  title: string
};

export type FamilyMemberEditInput = & FamilyMemberInput & { 
  _id: string;
}

export type FamilyMember = FamilyMemberInput & { 
  _id: string;
  relationships?: Relationship[];
};

export type RelationshipInput = {
  relationtype: string;
  fromFamilyMemberId: string;
  toFamilyMemberId: string;
}
