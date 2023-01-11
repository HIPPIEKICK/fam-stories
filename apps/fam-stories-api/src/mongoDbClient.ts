// Connection URL
import * as mongoDB from "mongodb";

const uri = "mongodb+srv://dev-user:ROIdzrbDGA72pmf2@cluster0.zzbmlhl.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoDB.MongoClient(uri, { serverApi: mongoDB.ServerApiVersion.v1 });

// Database Name
const dbName = 'test';

let dbConnection = null;

export async function connectToServer() {
    const db = await client.connect();
    dbConnection = db.db(dbName);

}

export function getDb() {
   return dbConnection;
}

