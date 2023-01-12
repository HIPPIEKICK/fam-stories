import * as express from 'express';
import { FamilyMember } from "@fam-stories/common-utils";
import { getDb } from '../mongoDbClient';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/everyone', async (req, res) => {
    const dbConnection = getDb();
    const collection = dbConnection.collection('familyMembers');

    const everyOne = await collection.find({}).toArray();
    return res.json(everyOne);
    
});

router.get('/member/:id', async (req, res) => {
    const id = req.params.id;

    const dbConnection = getDb();
    const collection = dbConnection.collection('familyMembers');

    const theMember = await collection.findOne({_id: new ObjectId(id)});
    return res.json(theMember);
    
});

router.get('/member/byName/:name', async (req, res) => {
    const name = req.params.name;

    const dbConnection = getDb();
    const collection = dbConnection.collection('familyMembers');

    const theMember = await collection.findOne({name:name});
    return res.json(theMember);
    
});

router.post('/createMember', async (req, res) => {
    const dbConnection = getDb();
    const collection = dbConnection.collection('familyMembers');

    const newFamilyMember = req.body;

    const insertResponse = await collection.insertOne(newFamilyMember)
    res.json(insertResponse);
});

router.post('/updateMember', async (req, res) => {
    const dbConnection = getDb();
    const collection = dbConnection.collection('familyMembers');

    const memberToUpdate = req.body;
    const id = memberToUpdate._id;
    delete memberToUpdate._id;

    const updateResponse = await collection.replaceOne({_id: new ObjectId(id)}, memberToUpdate)
    res.json(updateResponse);
});


export default router;