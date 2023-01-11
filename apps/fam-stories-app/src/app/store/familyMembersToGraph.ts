import { FamilyMember } from "@fam-stories/common-utils";


export type Node = { 
    id: string;
    name: string;
    group: number;
}

export type Link = { 
    source: string;
    target: string;
    value: number;
    linkType: string;
}
export type Graph = {
    nodes: Node[];
    links: Link[];
}

export const familyMembersToGraph = (familyMembers: FamilyMember[]): Graph => {

    const nodes = familyMembers.map((familyMember) => { 
        return { 
            id: familyMember._id,
            name: familyMember.name,
            group: 1    
        }
    });

    const links = familyMembers.reduce((acc, familyMember) => {
        const linkRelations = familyMember.relationships ? familyMember.relationships.map((relationship) => { 
            return { 
                source: familyMember._id,
                target: relationship.familyMemberId,
                value: 1,
                linkType: relationship.relationtype
            }
        }) : [];

        acc = [...acc, ...linkRelations]

        return acc; 
    }, [] as Link[]);

    return {nodes, links}
};